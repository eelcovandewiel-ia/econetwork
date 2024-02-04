import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const HomeCta = () => (
  <Box
    sx={{
      backgroundColor: 'neutral.800',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundImage: 'url("/assets/gradient-bg.svg")',
      color: 'neutral.100',
      py: '120px',
    }}
  >
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Typography
          align="center"
          color="inherit"
          variant="h3"
        >
          Start with EcoNetwork today
        </Typography>
        <Typography
          align="center"
          color="inherit"
          variant="subtitle2"
        >
          Using EcoNetwork is easy. Start with a free account and simplify your green energy trading from the today. 
        </Typography>
      </Stack>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ mt: 3 }}
      >
        <Button
          component="a"
          href="/register"
          variant="contained"
        >
          Register now
        </Button>
      </Stack>
    </Container>
  </Box>
);
