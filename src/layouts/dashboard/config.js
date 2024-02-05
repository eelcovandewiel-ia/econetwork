import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Chip from '@mui/material/Chip';
import SvgIcon from '@mui/material/SvgIcon';

import BarChartSquare02Icon from 'src/icons/untitled-ui/duocolor/bar-chart-square-02';
import HomeSmileIcon from 'src/icons/untitled-ui/duocolor/home-smile';
import LayoutAlt02Icon from 'src/icons/untitled-ui/duocolor/layout-alt-02';
import ReceiptCheckIcon from 'src/icons/untitled-ui/duocolor/receipt-check';
import TrendUp02Icon from '@untitled-ui/icons-react/build/esm/TrendUp02';
import { tokens } from 'src/locales/tokens';
import { paths } from 'src/paths';

export const useSections = () => {
  const { t } = useTranslation();

  return useMemo(() => {
    return [
      {
        items: [
          {
            title: "Overview",
            path: paths.dashboard.index,
            icon: (
              <SvgIcon fontSize="small">
                <HomeSmileIcon />
              </SvgIcon>
            ),
          },
          {
            title: "Deals",
            path: paths.dashboard.deals,
            icon: (
              <SvgIcon fontSize="small">
                <TrendUp02Icon />
              </SvgIcon>
            ),
          },

          {
            title: "Portfolio",
            path: paths.dashboard.portfolio,
            icon: (
              <SvgIcon fontSize="small">
                <ReceiptCheckIcon />
              </SvgIcon>
            ),
          },
          {
            title: "Report",
            path: paths.dashboard.analytics,
            icon: (
              <SvgIcon fontSize="small">
                <BarChartSquare02Icon />
              </SvgIcon>
            ),
          },
          {
            title: "News",
            path: paths.dashboard.news.index,
            icon: (
              <SvgIcon fontSize="small">
                <LayoutAlt02Icon />
              </SvgIcon>
            ),
          },
          {
            title: "Account",
            path: paths.dashboard.account,
            icon: (
              <SvgIcon fontSize="small">
                <HomeSmileIcon />
              </SvgIcon>
            ),
          },
          
        ],
      },
     
  
     
    ];
  }, [t]);
};
