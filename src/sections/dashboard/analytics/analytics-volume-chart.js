import PropTypes from 'prop-types';
import { format, subDays, subMonths } from 'date-fns';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles';

import { Chart } from 'src/components/chart';

const now = new Date();

const createCategories = () => {
  const categories = [];

  for (let i = 12; i >= 0; i--) {
    categories.push(format(subMonths(now, i), 'MMM yyyy'));
  }

  return categories;
};

const useChartOptions = () => {
  const theme = useTheme();
  const categories = createCategories();

  return {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [theme.palette.info.main, theme.palette.primary.main, theme.palette.warning.main, ],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: 'solid',
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      horizontalAlign: 'right',
      labels: {
        colors: theme.palette.text.secondary,
      },
      position: 'top',
      show: true,
    },
    markers: {
      hover: {
        size: undefined,
        sizeOffset: 2,
      },
      radius: 2,
      shape: 'circle',
      size: 4,
      strokeWidth: 0,
    },
    stroke: {
      curve: 'smooth',
      dashArray: [0, 3],
      lineCap: 'butt',
      width: 3,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories,
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: 
      {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
        },
      }
    
  };
};

export const AnalyticsVolumeChart = (props) => {
  const { chartSeries } = props;
  const chartOptions = useChartOptions();

  return (
    <Card>
      <CardHeader title="Volume per month (mwh)" />
      <CardContent sx={{ pt: 0 }}>
        <Chart
          height={320}
          options={chartOptions}
          series={chartSeries}
          type="line"
        />
      </CardContent>
    </Card>
  );
};

AnalyticsVolumeChart.propTypes = {
  chartSeries: PropTypes.array.isRequired,
};