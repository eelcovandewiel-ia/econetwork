import { useState } from 'react';
import LinkExternal01Icon from '@untitled-ui/icons-react/build/esm/LinkExternal01';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const features = [
  {
    id: 'easy',
    title: 'Ease of use',
    description:
      'We have an easy-to-use platform for all your green energy certificate needs. We simplify the whole process of trading, both national and cross-border.',
    imageDark: '/assets/home-features-experts-dark.png',
    imageLight: '/assets/home-features-experts-light.png',
  },
  {
    id: 'worflow',
    title: 'Workflow insights',
    description:
      "We offer you full insights in your trade and facilitate the whole workflow amongst all stakeholders. ",
    imageDark: '/assets/home-features-figma-dark.png',
    imageLight: '/assets/home-features-figma-light.png',
  },
  {
    id: 'crossborder',
    title: 'Cross border trading',
    description:
      'We facilitate the whole process of trading, both national and cross-border. ',
    imageDark: '/assets/home-features-tech-dark.png',
    imageLight: '/assets/home-features-tech-light.png',
  },
  {
    id: 'wallet',
    title: 'Wallet and portfolio',
    description:
      'We give you insights in the portfolio you have of certificates by connecting to your trading account.',
    imageDark: '/assets/home-features-customize-dark.png',
    imageLight: '/assets/home-features-customize-light.png',
  },
  {
    id: 'multi',
    title: 'Biogas, biomethane and electricity',
    description:
      'We offer a platform for all types of green energy certificates, including biogas, biomethane and electricity. ',
    imageDark: '/assets/home-features-customize-dark.png',
    imageLight: '/assets/home-features-customize-light.png',
  }
];

export const HomeFeatures = () => {
  const theme = useTheme();
  const [activeFeature, setActiveFeature] = useState(0);
  const feature = features[activeFeature];
  const image = theme.palette.mode === 'dark' ? feature?.imageDark : feature?.imageLight;

  return (
    <Box
      sx={{
        backgroundColor: 'neutral.800',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        color: 'common.white',
        py: '120px',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          sx={{ mb: 8 }}
        >
          <Typography
            align="center"
            color="inherit"
            variant="h3"
          >
            What EcoNetwork.io offers you
          </Typography>
          <Typography
            align="center"
            color="inherit"
            variant="subtitle2"
          >
          We have a full end-to-end platform for green energy certificate training.<br/>We offer a simple and easy to use platform for all your green energy needs.
          </Typography>
        </Stack>
        <Grid
          alignItems="center"
          container
          spacing={3}
        >
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={1}>
              {features.map((feature, index) => {
                const isActive = activeFeature === index;

                return (
                  <Box
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    sx={{
                      borderRadius: 2.5,
                      color: 'neutral.400',
                      cursor: 'pointer',
                      p: 3,
                      transition: (theme) =>
                        theme.transitions.create(['background-color, box-shadow', 'color'], {
                          easing: theme.transitions.easing.easeOut,
                          duration: theme.transitions.duration.enteringScreen,
                        }),
                      ...(isActive && {
                        backgroundColor: 'primary.alpha12',
                        boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
                        color: 'common.white',
                      }),
                      '&:hover': {
                        ...(!isActive && {
                          backgroundColor: 'primary.alpha4',
                          boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
                          color: 'common.white',
                        }),
                      },
                    }}
                  >
                    <Typography
                      color="inherit"
                      sx={{ mb: 1 }}
                      variant="h6"
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      color="inherit"
                      variant="body2"
                    >
                      {feature.description}
                    </Typography>                    
                  </Box>
                );
              })}
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Box
              sx={{
                '& img': {
                  width: '100%',
                },
              }}
            >
              <img src={image} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
