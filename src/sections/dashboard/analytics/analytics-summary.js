import PropTypes from 'prop-types';
import numeral from 'numeral';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const AnalyticsSummary = (props) => {
  const {buy,sell,totalVolume } = props;

  const formattedBuy = numeral(buy).format('$0.[0]a');
  const formattedSell = numeral(sell).format('$0.[0]a');
  const formattedVolume = numeral(totalVolume).format('0.[0]')+' mwh';

  return (
    <Card>
      <CardHeader
        title="YTD summary"
        sx={{ pb: 0 }}
      />
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            md={4}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'neutral.800' : 'error.lightest',
                borderRadius: 2.5,
                px: 3,
                py: 4,
              }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  height: 48,
                  width: 48,
                  '& img': {
                    width: '100%',
                  },
                }}
              >
                <img src="/assets/iconly/iconly-glass-chart.svg" />
              </Box>
              <div>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Sell
                </Typography>
                <Typography variant="h5">{formattedSell}</Typography>
              </div>
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={4}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'neutral.800' : 'warning.lightest',
                borderRadius: 2.5,
                px: 3,
                py: 4,
              }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  height: 48,
                  width: 48,
                  '& img': {
                    width: '100%',
                  },
                }}
              >
                <img src="/assets/iconly/iconly-glass-discount.svg" />
              </Box>
              <div>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Buy
                </Typography>
                <Typography variant="h5">{formattedBuy}</Typography>
              </div>
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={4}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'neutral.800' : 'success.lightest',
                borderRadius: 2.5,
                px: 3,
                py: 4,
              }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  height: 48,
                  width: 48,
                  '& img': {
                    width: '100%',
                  },
                }}
              >
                <img src="/assets/iconly/iconly-glass-tick.svg" />
              </Box>
              <div>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Total volume
                </Typography>
                <Typography variant="h5">{formattedVolume}</Typography>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

AnalyticsSummary.propTypes = {
  buy: PropTypes.number.isRequired,
  sell: PropTypes.number.isRequired,
  totalVolume: PropTypes.number.isRequired,
};
