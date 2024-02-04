import { addDays, subDays, subHours, subMinutes } from 'date-fns';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { useSettings } from 'src/hooks/use-settings';
import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { OverviewBanner } from 'src/sections/dashboard/overview/overview-banner';
import { OverviewMWH } from 'src/sections/dashboard/overview/overview-mwh';
import { OverviewTransactions } from 'src/sections/dashboard/overview/overview-transactions';
import { OverviewPendingDeals } from 'src/sections/dashboard/overview/overview-pending-deals';
import { OverviewPortfolioGraph } from 'src/sections/dashboard/overview/overview-portfolio-graph';
import { OverviewHelp } from 'src/sections/dashboard/overview/overview-help';
import { OverviewOpenDeals } from 'src/sections/dashboard/overview/overview-open-deals';

const now = new Date();

const portfolioGraph=[
  {
    name: 'This year',
    data: [40, 37, 41, 42, 45, 42, 36, 45, 40, 44, 38, 41],
  },
  {
    name: 'Last year',
    data: [26, 22, 19, 22, 24, 28, 23, 25, 24, 21, 17, 19],
  },
];

const transactions=[
  {
    id: 'd46800328cd510a668253b45',
    price: 25000,
    createdAt: now.getTime(),
    currency: 'usd',
    sender: 'Company A',
    mwh: -100,
    energyType: 'Green gas',
    countryOrigin:'NL',
    countryDestination:'DE',
    status: 'pending',
    type: 'receive',
  },
  {
    id: 'b4b19b21656e44b487441c50',
    price: 6843,
    createdAt: subDays(now, 1).getTime(),
    currency: 'usd',
    sender: 'Producer A',
    mwh: 200,
    energyType: 'Green gas',
    countryOrigin:'NL',
    countryDestination:'NL',
    status: 'closed',
    type: 'send',
  },
  {
    id: '56c09ad91f6d44cb313397db',
    price: 91823,
    createdAt: subDays(now, 1).getTime(),
    currency: 'usd',
    sender: 'Company D',
    mwh: 100,
    energyType: 'Green gas',
    countryOrigin:'NL',
    countryDestination:'DE',
    status: 'failed',
    type: 'send',
  },
  {
    id: 'aaeb96c5a131a55d9623f44d',
    price: 49550,
    createdAt: subDays(now, 3).getTime(),
    currency: 'usd',
    sender: 'Company E',
    mwh: -300,
    energyType: 'Green gas',
    countryOrigin:'NL',
    countryDestination:'DE',
    status: 'closed',
    type: 'receive',
  },
]

const Page = () => {
  const settings = useSettings();

  usePageView();

  return (
    <>
      <Seo title="Dashboard: Overview" />
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
            disableEqualOverflow
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
                <div>
                  <Typography variant="h4">Overview</Typography>
                </div>
                
              </Stack>
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <OverviewPendingDeals amount={12} />
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <OverviewOpenDeals amount={5} />
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <OverviewMWH amount={131} />
            </Grid>
            
        
            <Grid
              xs={12}
              md={12}
            >
              <OverviewTransactions
                transactions={transactions}
              />
            </Grid>
           

            <Grid
              xs={12}
              md={12}
            >
              <OverviewPortfolioGraph
                chartSeries={portfolioGraph}
              />
            </Grid>
            
        
          
            <Grid xs={6}>
              <OverviewHelp />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
