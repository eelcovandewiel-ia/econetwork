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

const customers = [
  'Blind Spots Inc.',
  'Dispatcher Inc.',
  'ACME SRL',
  'Novelty I.S',
  'Beauty Clinic SRL',
  'Division Inc.',
];


const countries={
  "AL": "Albania",
  "AD": "Andorra",
  "AT": "Austria",
  "BY": "Belarus",
  "BE": "Belgium",
  "BA": "Bosnia and Herzegovina",
  "BG": "Bulgaria",
  "HR": "Croatia",
  "CY": "Cyprus",
  "CZ": "Czech Republic",
  "DK": "Denmark",
  "EE": "Estonia",
  "FI": "Finland",
  "FR": "France",
  "DE": "Germany",
  "GR": "Greece",
  "HU": "Hungary",
  "IS": "Iceland",
  "IE": "Ireland",
  "IT": "Italy",
  "LV": "Latvia",
  "LI": "Liechtenstein",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MK": "North Macedonia",
  "MT": "Malta",
  "MD": "Moldova",
  "MC": "Monaco",
  "ME": "Montenegro",
  "NL": "Netherlands",
  "NO": "Norway",
  "PL": "Poland",
  "PT": "Portugal",
  "RO": "Romania",
  "RU": "Russia",
  "SM": "San Marino",
  "RS": "Serbia",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "ES": "Spain",
  "SE": "Sweden",
  "CH": "Switzerland",
  "UA": "Ukraine",
  "GB": "United Kingdom",
  "VA": "Vatican City"
}

export const PortfolioListSidebar = (props) => {
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
            placeholder="Certificate number"
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
            Issue date
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
            Expiry date
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
            Country
          </FormLabel>
          
            <Select
              fullWidth
              onChange={handleCountryChange}
              value="all"
            >
              <MenuItem value="all">
                <em>All countries</em>
              </MenuItem>
              {Object.keys(countries).map((value) => (
               <MenuItem key={value}
                  value={value}>{countries[value]}</MenuItem>
              ))};
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

PortfolioListSidebar.propTypes = {
  container: PropTypes.any,
  filters: PropTypes.object,
  group: PropTypes.bool,
  onClose: PropTypes.func,
  onFiltersChange: PropTypes.func,
  onGroupChange: PropTypes.func,
  open: PropTypes.bool,
};
