import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
import { useCountries } from 'src/hooks/use-countries';

const statusMap = {
  confirmed: 'success',
  on_hold: 'warning',
  failed: 'error',
};


export const OverviewTransactions = (props) => {
  const { transactions } = props;
  const router = useRouter()
  const countries=useCountries();

  const openDeal=(id)=>{
    console.log('open deal');
    router.push('/dashboard/deals/'+id)
  }

  return (
    <Card>
      <CardHeader
        title="Latest Transactions"
        sx={{ pb: 0 }}
      />
      <Tabs
        value="all"
        sx={{ px: 3 }}
      >
        <Tab
          label="All"
          value="all"
        />
        <Tab
          label="Closed"
          value="closed"
        />
        <Tab
          label="Pending"
          value="pending"
        />
      </Tabs>
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 600 }}>
          <TableBody>
            {transactions.map((transaction) => {
              const createdAtMonth = format(transaction.createdAt, 'LLL').toUpperCase();
              const createdAtDay = format(transaction.createdAt, 'd');
              const statusColor = statusMap[transaction.status];
              const mwh=transaction.mwh;
              const type = transaction.type === 'receive' ? 'Sell' : 'Buy';
              const amount =
                (transaction.type === 'receive' ? '+' : '-') +
                ' ' +
                numeral(transaction.price).format('$0,0.00');
              const amountColor = transaction.type === 'receive' ? 'success.main' : 'error.main';

              return (
                <TableRow
                  key={transaction.id}
                  hover
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  onClick={(E) => { openDeal(transaction.id) }}
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
                      <Typography variant="subtitle2">{transaction.sender}</Typography>
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
                      {countries.getCountry(transaction.countryOrigin)} - {countries.getCountry(transaction.countryDestination)}
                    </Typography>

                  </TableCell>
                  <TableCell>
                    <SeverityPill color={statusColor}>{transaction.status}</SeverityPill>
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
                        {transaction.energyType}
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
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
};

OverviewTransactions.propTypes = {
  transactions: PropTypes.array.isRequired,
};
