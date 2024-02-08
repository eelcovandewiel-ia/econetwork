import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PropertyList } from 'src/components/property-list';
import { PropertyListItem } from 'src/components/property-list-item';

const statusOptions = ['Canceled', 'Complete', 'Rejected'];

export const DealSummary = (props) => {
  const { item, ...other } = props;
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [status, setStatus] = useState(statusOptions[0]);

  const handleChange = useCallback((event) => {
    setStatus(event.target.value);
  }, []);

  const align = mdUp ? 'horizontal' : 'vertical';
  const createdAt = format(item.createdAt, 'dd/MM/yyyy HH:mm');

  return (
    <Card {...other}>
      <CardHeader title="Basic info" />
      <Divider />
      <PropertyList>
        <PropertyListItem
          align={align}
          label="Customer"
        >
          <Typography variant="subtitle2">{item.customer.name}</Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {item.customer.address1}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {item.customer.city}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {item.customer.country}
          </Typography>
        </PropertyListItem>
        <Divider />
        <PropertyListItem
          align={align}
          label="ID"
          value={item.id}
        />
        <Divider />
        <PropertyListItem
          align={align}
          label="Invoice"
          value={item.number}
        />
        <Divider />
        <PropertyListItem
          align={align}
          label="Date"
          value={createdAt}
        />
        <Divider />
        <PropertyListItem
          align={align}
          label="Promotion Code"
          value={item.promotionCode}
        />
        <Divider />
        <PropertyListItem
          align={align}
          label="Total Amount"
          value={`${item.currency}${item.totalAmount}`}
        />
        <Divider />
        <PropertyListItem
          align={align}
          label="Status"
        >
          <Stack
            alignItems={{
              xs: 'stretch',
              sm: 'center',
            }}
            direction={{
              xs: 'column',
              sm: 'row',
            }}
            spacing={1}
          >
            <TextField
              label="Status"
              margin="normal"
              name="status"
              onChange={handleChange}
              select
              SelectProps={{ native: true }}
              sx={{
                flexGrow: 1,
                minWidth: 150,
              }}
              value={status}
            >
              {statusOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </TextField>
            <Button variant="contained">Save</Button>
          </Stack>
        </PropertyListItem>
      </PropertyList>
    </Card>
  );
};

DealSummary.propTypes = {
  item: PropTypes.object.isRequired,
};
