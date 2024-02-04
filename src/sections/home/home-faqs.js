import { useState } from 'react';
import PropTypes from 'prop-types';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

const faqs = [
  {
    "question": "What Types of Renewable Energy Certificates are Traded on EcoNetwork.io?",
    "answer": "EcoNetwork.io facilitates the trading of a variety of Renewable Energy Certificates (RECs), including those for solar, wind, hydroelectric power, and biogas. Our platform ensures diverse options for businesses to meet their specific sustainability goals and energy needs."
  },
  {
    "question": "How Does EcoNetwork.io Verify Biogas Certificates?",
    "answer": "For biogas certificates, EcoNetwork.io follows strict verification procedures. We work closely with certified biogas producers and use advanced tracking systems to ensure each certificate represents the actual production of biogas energy, guaranteeing authenticity and transparency."
  },
  {
    "question": "Can Biogas Certificates Help Meet Corporate Sustainability Goals?",
    "answer": "Absolutely. Trading in biogas certificates allows businesses to diversify their green energy portfolio and enhance their sustainability credentials. Biogas is crucial in the renewable energy mix, helping reduce greenhouse gas emissions and support a low-carbon economy."
  },
  {
    "question": "What are the Benefits for Businesses Trading Biogas Certificates on EcoNetwork.io?",
    "answer": "Trading biogas certificates on EcoNetwork.io allows businesses to support the biogas sector, crucial in waste management and renewable energy. It helps fulfill corporate social responsibility and environmental goals, enhancing brand reputation."
  },
  {
    "question": "Is EcoNetwork.io Suitable for Businesses New to Green Energy and Biogas Trading?",
    "answer": "Yes, EcoNetwork.io is user-friendly for businesses at any stage of their green energy journey. We offer resources and support for new participants, and our platform's intuitive design makes it easy for newcomers to navigate and engage in trading."
  }
];

const Faq = (props) => {
  const { answer, question } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Stack
      onClick={() => setIsExpanded((prevState) => !prevState)}
      spacing={2}
      sx={{ cursor: 'pointer' }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="subtitle1">{question}</Typography>
        <SvgIcon>{isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}</SvgIcon>
      </Stack>
      <Collapse in={isExpanded}>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {answer}
        </Typography>
      </Collapse>
    </Stack>
  );
};

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export const HomeFaqs = () => {
  return (
    <Box sx={{ py: '120px' }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
        >
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={2}>
              <Typography variant="h3">Everything you need to know</Typography>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                Frequently asked questions
              </Typography>
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={4}>
              {faqs.map((faq, index) => (
                <Faq
                  key={index}
                  {...faq}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
