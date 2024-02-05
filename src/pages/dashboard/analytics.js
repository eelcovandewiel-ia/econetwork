import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { useSettings } from 'src/hooks/use-settings';
import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { AnalyticsEnergyTypePie } from 'src/sections/dashboard/analytics/analytics-energy-type-pie';
import { AnalyticsByCountry } from 'src/sections/dashboard/analytics/analytics-by-country';
import { AnalyticsVolumeChart } from 'src/sections/dashboard/analytics/analytics-volume-chart';
import { AnalyticsVolumeChartFuture } from 'src/sections/dashboard/analytics/analytics-volume-chart-future';
import { AnalyticsSummary } from 'src/sections/dashboard/analytics/analytics-summary';

const Page = () => {
  const settings = useSettings();

  usePageView();

  return (
    <>
      <Seo title="Dashboard: Analytics" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Grid
            container
            spacing={{
              xs: 3,
              lg: 4,
            }}
          >
            <Grid xs={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}
              >
                <Stack spacing={1}>
                  <Typography variant="h4">Analytics</Typography>
                </Stack>                
              </Stack>
            </Grid>

            <Grid
              xs={12}
              md={12}
            >
              <AnalyticsSummary
                buy={10000}
                sell={5000}
                totalVolume={1400}
              />
            </Grid>
            <Grid
              xs={12}
              md={12}
            >
            <AnalyticsVolumeChart        
                  chartSeries={[

                    {
                      name: 'Active portfolio',
                      data: [
                        3350, 1840, 2254, 5780, 9349, 5241, 2770, 2051, 3764, 2385, 5912, 8323,
                      ],
                    },
                    {
                      name: 'Buy',
                      data: [ 3050, 1440, 1654, 4180, 3349, 1241, 3770, 4051, 1764, 3385, 2912, 1323],
                    },
                    {
                      name: 'Sell',
                      data: [ 2350, 1240, 2054, 3780, 3349, 1241, 1770, 1051, 2764, 1385, 2912, 5323,],
                    }
                  ]}
                />
                </Grid>
                <Grid
              xs={12}
              md={12}
            >
            <AnalyticsVolumeChartFuture        
                  chartSeries={[

                    {
                      name: 'Active portfolio',
                      data: [
                        3350, 2000, 1500, 1200, 1000, 600, 200  , 100, 0, 0, 0, 0,
                      ],
                    }
                  ]}
                />
                </Grid>

            <Grid
              xs={12}
              lg={4}
            >
              <AnalyticsByCountry
               title="Country of Destination"
               data={[
                {
                  id: 'dk',
                  name: 'Denmark',
                  mwh: 40,
                  value: 31200,
                },
                {
                  id: 'gb',
                  name: 'United Kingdom',
                  mwh: 47,
                  value: 12700,
                },
                {
                  id: 'it',
                  name: 'Italy',
                  mwh: 65,
                  value: 10360,
                },
                {
                  id: 'nl',
                  name: 'Netherlands',
                  mwh: 23,
                  value: 5749,
                },
                {
                  id: 'de',
                  name: 'Germany',
                  mwh: 45,
                  value: 2932,
                },
                {
                  id: 'es',
                  name: 'Spain',
                  mwh: 56,
                  value: 200,
                },
              ]}
              />
            </Grid>

            <Grid
              xs={12}
              lg={4}
            >
              <AnalyticsByCountry
                title="Country of origin"
                data={[
                  {
                    id: 'dk',
                    name: 'Denmark',
                    mwh: 40,
                    value: 31200,
                  },
                  {
                    id: 'gb',
                    name: 'United Kingdom',
                    mwh: 47,
                    value: 12700,
                  },
                  {
                    id: 'it',
                    name: 'Italy',
                    mwh: 65,
                    value: 10360,
                  },
                  {
                    id: 'nl',
                    name: 'Netherlands',
                    mwh: 23,
                    value: 5749,
                  },
                  {
                    id: 'de',
                    name: 'Germany',
                    mwh: 45,
                    value: 2932,
                  },
                  {
                    id: 'es',
                    name: 'Spain',
                    mwh: 56,
                    value: 200,
                  },
                ]}
              />
            </Grid>
           
            <Grid
              xs={12}
              lg={4}
            >
              <AnalyticsEnergyTypePie
                chartSeries={[10, 10, 20]}
                labels={['Green Gas', 'Green Power', 'Green Heat']}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
