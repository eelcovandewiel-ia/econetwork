import { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import InfoCircleIcon from '@untitled-ui/icons-react/build/esm/InfoCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { applySort } from 'src/utils/apply-sort';


export const AnalyticsByCountry = (props) => {
  const { data,title } = props;
  const [sort, setSort] = useState('desc');

  const sortedData = useMemo(() => {
    return applySort(data, 'value', sort);
  }, [data, sort]);

  const handleSort = useCallback(() => {
    setSort((prevState) => {
      if (prevState === 'asc') {
        return 'desc';
      }

      return 'asc';
    });
  }, []);

  return (
    <Card>
      <CardHeader
        title={title}
        action={
          <Tooltip title="Refresh rate is 24h">
            <SvgIcon color="action">
              <InfoCircleIcon />
            </SvgIcon>
          </Tooltip>
        }
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell sortDirection={sort}>
              <TableSortLabel
                active
                direction={sort}
                onClick={handleSort}
              >
                Value
              </TableSortLabel>
            </TableCell>
            <TableCell>Mwh</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((item) => {
            const value = numeral(item.value).format('0,0');
            const flag = '/assets/flags/'+item.id+'.svg';

            return (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <Box
                      sx={{
                        height: 16,
                        width: 16,
                        '& img': {
                          height: 16,
                          width: 16,
                        },
                      }}
                    >
                      <img
                        alt={item.name}
                        src={flag}
                      />
                    </Box>
                    <Typography
                      sx={{ ml: 1 }}
                      variant="subtitle2"
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>&euro; {value}</TableCell>
                <TableCell>{item.mwh}mwh</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Divider />
     
    </Card>
  );
};

AnalyticsByCountry.propTypes = {
  data: PropTypes.array.isRequired,
};
