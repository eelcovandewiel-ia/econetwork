import InfoCircleIcon from '@untitled-ui/icons-react/build/esm/InfoCircle';
import Link01Icon from '@untitled-ui/icons-react/build/esm/Link01';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

export const OverviewHelp = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <SvgIcon color="primary">
          <InfoCircleIcon />
        </SvgIcon>
        <Typography
          color="primary.main"
          sx={{ pl: 1 }}
          variant="subtitle2"
        >
          Help Center
        </Typography>
      </Box>
      <Typography
        sx={{ mt: 2 }}
        variant="h6"
      >
       Need help?
      </Typography>
      <Typography
        color="text.secondary"
        sx={{ mt: 1 }}
        variant="body2"
      >
     Our team is ready to support you in your journey here at EcoNetwork. We have a dedicated help center to help you with any questions you might have.
    
      </Typography>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="inherit"
        endIcon={
          <SvgIcon>
            <Link01Icon />
          </SvgIcon>
        }
        size="small"
      >
        Help Center
      </Button>
    </CardActions>
  </Card>
);
