import EyeIcon from '@untitled-ui/icons-react/build/esm/Eye';
import LayoutBottomIcon from '@untitled-ui/icons-react/build/esm/LayoutBottom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';


export const HomeHero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        pt: '120px',
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="sm">
          <Typography
            variant="h1"
            sx={{ mb: 2 }}
          >
          
            <Typography
              component="span"
              color="primary.main"
              variant="inherit"
            >
           Green energy trading
            </Typography>
            &nbsp;made simple
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: 20,
              fontWeight: 500,
            }}
          >
          EcoNetwork.io is at the forefront of facilitating a sustainable future, specifically designed for business-to-business interactions. Our platform simplifies the trading of green energy certificates, making it easy for companies of all sizes to contribute to and benefit from renewable energy initiatives.
          </Typography>
         
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ my: 3 }}
          >
            <Button
              component={RouterLink}
              href={paths.auth.register}
              startIcon={
                <SvgIcon fontSize="small">
                  <EyeIcon />
                </SvgIcon>
              }
              sx={(theme) =>
                theme.palette.mode === 'dark'
                  ? {
                      backgroundColor: 'neutral.50',
                      color: 'neutral.900',
                      '&:hover': {
                        backgroundColor: 'neutral.200',
                      },
                    }
                  : {
                      backgroundColor: 'neutral.900',
                      color: 'neutral.50',
                      '&:hover': {
                        backgroundColor: 'neutral.700',
                      },
                    }
              }
              variant="contained"
            >
             Register
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              href={paths.contact}
              startIcon={
                <SvgIcon fontSize="small">
                  <LayoutBottomIcon />
                </SvgIcon>
              }
            >
              Contact Us
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            pt: '120px',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              width: '90%',
              fontSize: 0,
              mt: -2,
              mx: -2,
              pt: 2,
              px: 2,
              '& img': {
                borderTopLeftRadius: (theme) => theme.shape.borderRadius * 2.5,
                borderTopRightRadius: (theme) => theme.shape.borderRadius * 2.5,
                boxShadow: 16,
                width: '100%',
              },
            }}
          >
            <img
              src={
                theme.palette.mode === 'dark'
                  ? '/assets/home-thumbnail-dark.png'
                  : '/assets/home-thumbnail-light.png'
              }
            />
          </Box>
          <Box
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              overflow: 'hidden',
              position: 'absolute',
              right: 0,
              top: 40,
              '& > div': {
                height: 460,
                width: 560,
              },
            }}
          >

          </Box>
        </Box>
      </Container>
    </Box>
  );
};
