import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

export const AccountNotificationsSettings = () => (
  <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
      >
        <Grid
          xs={12}
          md={4}
        >
          <Typography variant="h6">Email</Typography>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={8}
        >
          <Stack
            divider={<Divider />}
            spacing={3}
          >
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">Status changes</Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  All changes in status of orders
                </Typography>
              </Stack>
              <Switch defaultChecked />
            </Stack>
            <Stack
              alignItems="flex-start"
              direction="row"
              justifyContent="space-between"
              spacing={3}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1">Essential platform communication</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                General communication of EcoNetwork
                </Typography>
              </Stack>
              <Switch defaultChecked />
            </Stack>
          </Stack>
        </Grid>
      </Grid>

    </CardContent>
  </Card>
);
