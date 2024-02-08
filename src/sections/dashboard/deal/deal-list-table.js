import { format } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useCountries } from 'src/hooks/use-countries';

import { paths } from 'src/paths';
import { SeverityPill } from 'src/components/severity-pill';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

const statusMap = {
  confirmed: 'success',
  on_hold: 'warning',
  failed: 'error',
};

const statusColorsMap = {
  canceled: 'error',
  paid: 'success',
  pending: 'warning',
};


const ItemRow = (props) => {
  const {item,countries}=props;
  const router = useRouter();

  const createdAtMonth = format(item.createdAt, 'LLL').toUpperCase();
  const createdAtDay = format(item.createdAt, 'd');
  const statusColor = statusMap[item.status];
  const mwh=item.mwh;
  const type = item.type === 'receive' ? 'Sell' : 'Buy';
  const amount =
    (item.type === 'receive' ? '+' : '-') +
    ' ' +
    numeral(item.price).format('$0,0.00');
  const amountColor = item.type === 'receive' ? 'success.main' : 'error.main';
  const openDeal=(id)=>{
    router.push('/dashboard/deals/'+id)
  }

  return (
    <TableRow
      key={item.id}
      hover
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      onClick={(E) => { openDeal(item.id) }}
    >
      <TableCell width={100}>
        <Box
          sx={{
            p: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
            borderRadius: 2,
            maxWidth: 'fit-content',
          }}
        >
          <Typography
            align="center"
            color="text.primary"
            variant="caption"
          >
            {createdAtMonth}
          </Typography>
          <Typography
            align="center"
            color="text.primary"
            variant="h6"
          >
            {createdAtDay}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <div>
          <Typography variant="subtitle2">{item.sender}</Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {type}
          </Typography>
        </div>
      </TableCell>
      <TableCell width={250}>
        <Typography
       
          variant="subtitle2"
        >
          {countries.getCountry(item.countryOrigin)} - {countries.getCountry(item.countryDestination)}
        </Typography>

      </TableCell>
      <TableCell>
        <SeverityPill color={statusColor}>{item.status}</SeverityPill>
      </TableCell>
      <TableCell width={180}>
        <Typography
       
          variant="subtitle2"
        >
          {mwh} MWH
        </Typography>
        <Typography
            color="text.secondary"
            variant="body2"
          >
            {item.energyType}
          </Typography>
      </TableCell>
      <TableCell width={180}>
        <Typography
          color={amountColor}
          variant="subtitle2"
        >
          {amount}
        </Typography>
      </TableCell>
    </TableRow>
  )
};

ItemRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export const DealListTable = (props) => {
  const {
    group = false,
    items = [],
    count = 0,
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;
  const countries=useCountries();
  let content;

    content = (
      <Card>
        <Table>
          <TableBody>
            {items.map((item) => (
              <ItemRow
                key={item.id}
                item={item}
                countries={countries}
              />
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  
  return (
    <Stack spacing={4}>
      {content}
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Stack>
  );
};

DealListTable.propTypes = {
  count: PropTypes.number,
  group: PropTypes.bool,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
};
