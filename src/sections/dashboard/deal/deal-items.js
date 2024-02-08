import PropTypes from 'prop-types';
import numeral from 'numeral';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Scrollbar } from 'src/components/scrollbar';

export const DealItems = (props) => {
  const { items, ...other } = props;

  return (
    <Card {...other}>
      <CardHeader title="Order items" />
      <Scrollbar>
        <Box sx={{ minWidth: 700 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Production Period</TableCell>
                <TableCell>Technology</TableCell>
                <TableCell>Delivery date</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Certificate Price</TableCell>
                <TableCell>Contract price</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => {
                const title = `${item.name} x ${item.quantity}`;
                const unitAmount = numeral(item.unitAmount).format(`${item.currency}0,0.00`);

                return (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Typography variant="subtitle2">{item.productionPeriod}</Typography>
                    </TableCell>
                    <TableCell>{item.technology}</TableCell>
                    <TableCell>{item.deliveryDate}</TableCell>
                    <TableCell>{item.quantity} mwh</TableCell>
                    <TableCell>€{item.certificatePrice}</TableCell>
                    <TableCell>€{item.contractPrice}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={items.length}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

DealItems.propTypes = {
  items: PropTypes.array.isRequired,
};
