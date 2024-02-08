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
import { Grid } from '@mui/material';
import { SeverityPill } from 'src/components/severity-pill';

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
              label="Date"
              value={createdAt}
            />
            <Divider />
            <PropertyListItem
              align={align}
              label="Deal nr"
              value={item.nr}
            />
            <Divider />
            <PropertyListItem
              align={align}
              label="Total Amount"
              value={`${item.currency}${item.totalAmount}`}
            />
          <PropertyListItem
              align={align}
              label="Total MWh"
              value={`${item.mwh} MWh`}
            />
             <PropertyListItem
              align={align}
              label="Energy type"
              value={`${item.energyType}`}
            />

            <PropertyListItem
              align={align}
              label="Production device"
              value={`${item.productionDevice}`}
            />
           <PropertyListItem
              align={align}
              label="GSRN "
              value={`${item.productionDeviceNr}`}
            />

            <PropertyListItem
              align={align}
              label="Status"
              value={ <SeverityPill>{item.status}</SeverityPill>}
            />

          </PropertyList>
       
    </Card>
  );
};

DealSummary.propTypes = {
  item: PropTypes.object.isRequired,
};
