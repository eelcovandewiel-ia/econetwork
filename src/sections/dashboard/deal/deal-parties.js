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
import { useCountries } from 'src/hooks/use-countries';

const statusOptions = ['Canceled', 'Complete', 'Rejected'];

export const DealParties = (props) => {
  const { item, ...other } = props;
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [status, setStatus] = useState(statusOptions[0]);

  const handleChange = useCallback((event) => {
    setStatus(event.target.value);
  }, []);

  const countries=useCountries();
  const align = mdUp ? 'horizontal' : 'vertical';
  const createdAt = format(item.createdAt, 'dd/MM/yyyy HH:mm');

  return (
    <Card {...other}>
      <CardHeader title="Parties" />
      <Divider />
      <Grid container>
        <Grid item
xs={12}
md={6}>
          <PropertyList>
            <PropertyListItem
              align={align}
              label="Seller"
            >
              <Typography variant="subtitle2">{item.seller.company}</Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {item.seller.address1}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {item.seller.city}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {countries.all[item.seller.country]}
              </Typography>
            </PropertyListItem>
              
          
          </PropertyList>

          <PropertyList>
            <PropertyListItem
              align={align}
              label="Contact person"
            >
              <Typography variant="subtitle2">{item.seller.name}</Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {item.seller.email}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {item.seller.phonenumber}
              </Typography>
            </PropertyListItem>
          </PropertyList>

          <PropertyList>
            <PropertyListItem
              align={align}
              label="Registry"
            >
              <Typography variant="subtitle2">{item.seller.registryAccountNr}</Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {item.seller.registryDatabase}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {item.seller.registryOperator}
              </Typography>
            </PropertyListItem>
          </PropertyList>

        </Grid>
        <Grid item
xs={12}
md={6}>
          <PropertyList>
            <PropertyListItem
              align={align}
              label="Buyer"
            >
              <Typography variant="subtitle2">{item.buyer.company}</Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {item.buyer.address1}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {item.buyer.city}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {countries.all[item.buyer.country]}
              </Typography>
            </PropertyListItem>
            
          </PropertyList>
          <PropertyList>
            <PropertyListItem
              align={align}
              label="Contact person"
            >
              <Typography variant="subtitle2">{item.seller.name}</Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {item.seller.email}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {item.buyer.phonenumber}
              </Typography>
              
            </PropertyListItem>
          </PropertyList>
          
          <PropertyList>
            <PropertyListItem
              align={align}
              label="Registry"
            >
              <Typography variant="subtitle2">{item.buyer.registryAccountNr}</Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {item.buyer.registryDatabase}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                {item.buyer.registryOperator}
              </Typography>
            </PropertyListItem>
          </PropertyList>

        </Grid>
        </Grid>
    </Card>
  );
};

DealParties.propTypes = {
  item: PropTypes.object.isRequired,
};
