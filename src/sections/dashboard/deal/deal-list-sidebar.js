import { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Drawer from '@mui/material/Drawer';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useCountries } from 'src/hooks/use-countries';

const customers = {
  1:'Blind Spots Inc.',
  2:'Dispatcher Inc.',
  3:'ACME SRL',
  4:'Novelty I.S',
  5: 'Beauty Clinic SRL',
  6: 'Division Inc.',
}



export const DealListSidebar = (props) => {
  const {
    container,
    filters = {},
    group,
    onClose,
    onFiltersChange,
    onGroupChange,
    open,
    ...other
  } = props;
  const queryRef = useRef(null);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const countries=useCountries();

  const handleQueryChange = useCallback(
    (event) => {
      event.preventDefault();
      onFiltersChange?.({
        ...filters,
        query: queryRef.current?.value || '',
      });
    },
    [filters, onFiltersChange]
  );

  const handleStartDateChange = useCallback(
    (date) => {
      const newFilters = {
        ...filters,
        startDate: date || undefined,
      };

      // Prevent end date to be before start date
      if (newFilters.endDate && date && date > newFilters.endDate) {
        newFilters.endDate = date;
      }

      onFiltersChange?.(newFilters);
    },
    [filters, onFiltersChange]
  );

  const handleEndDateChange = useCallback(
    (date) => {
      const newFilters = {
        ...filters,
        endDate: date || undefined,
      };

      // Prevent start date to be after end date
      if (newFilters.startDate && date && date < newFilters.startDate) {
        newFilters.startDate = date;
      }

      onFiltersChange?.(newFilters);
    },
    [filters, onFiltersChange]
  );

  const handleCountryChange = useCallback(
    (event) => {
      onFiltersChange?.({
        ...filters,
        country: event.target.value?.toString() || '',
      });
    },
    [filters, onFiltersChange]
  );

  const handleStatusChange = useCallback(
    (event) => {
      onFiltersChange?.({
        ...filters,
        status: event.target.value?.toString() || '',
      });
    },
    [filters, onFiltersChange]
  );


  const content = (
    <div>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        direction="row"
        sx={{ p: 3 }}
      >
        <Typography variant="h5">Filters</Typography>
        {!lgUp && (
          <IconButton onClick={onClose}>
            <SvgIcon>
              <XIcon />
            </SvgIcon>
          </IconButton>
        )}
      </Stack>
      <Stack
        spacing={3}
        sx={{ p: 3 }}
      >
        <form onSubmit={handleQueryChange}>
          <OutlinedInput
            defaultValue=""
            fullWidth
            inputProps={{ ref: queryRef }}
            placeholder="Search for deal"
            startAdornment={
              <InputAdornment position="start">
                <SvgIcon>
                  <SearchMdIcon />
                </SvgIcon>
              </InputAdornment>
            }
          />
        </form>
        <div>
          <FormLabel
            sx={{
              display: 'block',
              mb: 2,
            }}
          >
            Energy type
          </FormLabel>
          
            <Select
              fullWidth
              onChange={(e)=>handleChange('energyType',e)}
              value="all"
            >
              <MenuItem value="all">
                <em>All</em>
              </MenuItem>
              <MenuItem value="greenGas">
              Green gas
              </MenuItem>
              <MenuItem value="electricity">
             Electricity
              </MenuItem>
            </Select>         
        </div>
        <div>
          <FormLabel
            sx={{
              display: 'block',
              mb: 2,
            }}
          >
           Partner company
          </FormLabel>
          
            <Select
              fullWidth
              onChange={(e)=>handleChange('partnerCompany',e)}
              value="all"
            >
              <MenuItem value="all">
                <em>All</em>
              </MenuItem>
              {Object.keys(customers).map((value) => (
               <MenuItem key={value}
                  value={value}>{customers[value]}</MenuItem>
              ))}
            </Select>         
        </div>
        <div>
          <FormLabel
            sx={{
              display: 'block',
              mb: 2,
            }}
          >
            Status
          </FormLabel>
          
            <Select
              fullWidth
              onChange={handleStatusChange}
              value="all"
            >
              <MenuItem value="all">
                <em>All</em>
              </MenuItem>
              <MenuItem value="pending">
               Pending
              </MenuItem>
              <MenuItem value="closed">
              Closed
              </MenuItem>
              <MenuItem value="cancelled">
                Cancelled
              </MenuItem>
            </Select>
         
        </div>

        <div>
          <FormLabel
            sx={{
              display: 'block',
              mb: 2,
            }}
          >
            Date range
          </FormLabel>
          <Stack spacing={2}>
            <DatePicker
              format="dd/MM/yyyy"
              label="From"
              onChange={handleStartDateChange}
              value={filters.startDate || null}
            />
            <DatePicker
              format="dd/MM/yyyy"
              label="To"
              onChange={handleEndDateChange}
              value={filters.endDate || null}
            />
          </Stack>
        </div>

        <div>
          <FormLabel
            sx={{
              display: 'block',
              mb: 2,
            }}
          >
            Origin country
          </FormLabel>
          
            <Select
              fullWidth
              onChange={handleCountryChange}
              value="all"
            >
              <MenuItem value="all">
                <em>All countries</em>
              </MenuItem>
              {Object.keys(countries.all).map((value) => (
               <MenuItem key={value}
                  value={value}>{countries.all[value]}</MenuItem>
              ))}
            </Select>
         
        </div>

      </Stack>
    </div>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={open}
        PaperProps={{
          elevation: 16,
          sx: {
            border: 'none',
            borderRadius: 2.5,
            overflow: 'hidden',
            position: 'relative',
            width: 380,
          },
        }}
        SlideProps={{ container }}
        variant="persistent"
        sx={{ p: 3 }}
        {...other}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      hideBackdrop
      ModalProps={{
        container,
        sx: {
          pointerEvents: 'none',
          position: 'absolute',
        },
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          maxWidth: '100%',
          width: 380,
          pointerEvents: 'auto',
          position: 'absolute',
        },
      }}
      SlideProps={{ container }}
      variant="temporary"
      {...other}
    >
      {content}
    </Drawer>
  );
};

DealListSidebar.propTypes = {
  container: PropTypes.any,
  filters: PropTypes.object,
  group: PropTypes.bool,
  onClose: PropTypes.func,
  onFiltersChange: PropTypes.func,
  onGroupChange: PropTypes.func,
  open: PropTypes.bool,
};
