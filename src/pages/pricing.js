import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { Layout as MarketingLayout } from 'src/layouts/marketing';
import { PricingFaqs } from 'src/sections/pricing/pricing-faqs';
import { PricingPlan } from 'src/sections/pricing/pricing-plan';
import { PricingPlanIcon } from 'src/sections/pricing/pricing-plan-icon';

const Page = () => {
  usePageView();

  return (
    <>
      <Seo title="Pricing" />
      <Box
        component="main"
        sx={{ flexGrow: 1 }}
      >
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50',
            pb: '120px',
            pt: '184px',
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                mb: 4,
              }}
            >
              <Typography variant="h3">Start today with EcoNetwork!</Typography>
              <Typography
                color="text.secondary"
                sx={{ my: 2 }}
                variant="body1"
              >
               Join our network and make trading easy. 
              </Typography>
             
            </Box>
            <Grid
              container
              spacing={4}
            >
              <Grid
                xs={12}
                md={4}
              >
                <PricingPlan
                  cta="Start for free"
                  currency="$"
                  description="To participate in a trade. "
                  features={['Access pre-created deals.','See status overview']}
                  icon={<PricingPlanIcon name="startup" />}
                  name="Startup"
                  price="0"
                  sx={{
                    height: '100%',
                    maxWidth: 460,
                    mx: 'auto',
                  }}
                />
              </Grid>
              <Grid
                xs={12}
                md={4}
              >
                <PricingPlan
                  cta="Register"
                  currency="$"
                  description="To start trading yourself."
                  features={[
                    'All previous',
                    'Connect your trading account',
                    'See a personal overview.',
                    'Dashboard with your data.',
                    'Up to 5 deals per month. '
                  ]}
                  icon={<PricingPlanIcon name="standard" />}
                  name="Standard"
                  popular
                  price="99.99"
                  sx={{
                    height: '100%',
                    maxWidth: 460,
                    mx: 'auto',
                  }}
                />
              </Grid>
              <Grid
                xs={12}
                md={4}
              >
                <PricingPlan
                  cta="Contact Us"
                  currency="$"
                  description="To familiarize yourself with our tools."
                  features={[
                    'All previous',
                    'Unlimited deals',
                    'Cross-border trading',
                    'Personal support',
                  ]}
                  icon={<PricingPlanIcon name="business" />}
                  name="Business"
                  price="299.99"
                  sx={{
                    height: '100%',
                    maxWidth: 460,
                    mx: 'auto',
                  }}
                />
              </Grid>
            </Grid>
            
          </Container>
        </Box>
        <Divider />
        <PricingFaqs />
      </Box>
    </>
  );
};

Page.getLayout = (page) => <MarketingLayout>{page}</MarketingLayout>;

export default Page;
