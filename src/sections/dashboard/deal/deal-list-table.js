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
import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';

const statusColorsMap = {
  canceled: 'error',
  paid: 'success',
  pending: 'warning',
};

const ItemRow = (props) => {
  const { item, ...other } = props;
  const countries = useCountries();
  const totalAmount = numeral(item.totalAmount).format('0,0.00');
  const issueDate = item.issueDate && format(item.issueDate, 'dd/MM/yyyy');
  const dueDate = item.dueDate && format(item.dueDate, 'dd/MM/yyyy');

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      {...other}
    >
      <TableCell width="25%">
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
          component={RouterLink}
          href={paths.dashboard.portfolio+'/'+item.id}
          sx={{
            display: 'inline-flex',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
         
          <div>
            <Typography
              color="text.primary"
              variant="subtitle2"
            >
              {item.number}
            </Typography>
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {item.count} contracts - {item.energyType}
            </Typography>
          </div>
        </Stack>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle2">
          {item.currency}
          {totalAmount}
        </Typography>
        <Typography
              color="text.secondary"
              variant="body2"
            >
             {item.mwh} MWh
            </Typography>

      </TableCell>
      <TableCell>
        <Typography variant="subtitle2">Issued</Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {issueDate}
        </Typography>
      </TableCell>
      <TableCell>

        </TableCell>
      <TableCell>
        <Typography variant="subtitle2">Expiry</Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {dueDate}
        </Typography>
      </TableCell>

      <TableCell>
        <Typography variant="subtitle2">Country</Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
        {countries.getCountry(item.country)}
        </Typography>
      </TableCell>
      
      <TableCell align="right">
        <IconButton
          component={RouterLink}
          href={paths.dashboard.portfolio+'/'+item.id}
        >
          <SvgIcon>
            <ArrowRightIcon />
          </SvgIcon>
        </IconButton>
      </TableCell>
    </TableRow>
  );
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

  let content;

    content = (
      <Card>
        <Table>
          <TableBody>
            {items.map((item) => (
              <ItemRow
                key={item.id}
                item={item}
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
