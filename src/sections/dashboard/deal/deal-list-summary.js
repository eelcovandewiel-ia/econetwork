import ClockIcon from '@untitled-ui/icons-react/build/esm/Clock';
import ReceiptCheckIcon from '@untitled-ui/icons-react/build/esm/ReceiptCheck';
import CreditCardIcon from '@untitled-ui/icons-react/build/esm/CreditCard01';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const DealListSummary = () => (
  <div>
    <Grid
      container
      spacing={3}
    >
      <Grid
        xs={12}
        md={6}
        lg={4}
      >
        <Card>
          <CardContent>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
            >
              <Avatar
                sx={{
                  backgroundColor: 'success.lightest',
                  color: 'success.main',
                  height: 48,
                  width: 48,
                }}
              >
                 <ReceiptCheckIcon />
              </Avatar>
              <div>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Total
                </Typography>
                <Typography variant="h6">300
                  <Typography inline
                  style={{display:'inline',marginLeft:4}}
                    color="text.secondary"
                    variant="body2">mwh
                  </Typography>
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  in 25 batches
                </Typography>
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={4}
      >
        <Card>
          <CardContent>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
            >
              <Avatar
                sx={{
                  backgroundColor: 'success.lightest',
                  color: 'success.main',
                  height: 48,
                  width: 48,
                }}
              >
                <CreditCardIcon />
              </Avatar>
              <div>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Original value
                </Typography>
                <Typography variant="h6">$3,439.60</Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  &nbsp;
                </Typography>
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      
    </Grid>
  </div>
);
