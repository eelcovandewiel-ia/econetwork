import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Chip from '@mui/material/Chip';
import SvgIcon from '@mui/material/SvgIcon';

import BarChartSquare02Icon from 'src/icons/untitled-ui/duocolor/bar-chart-square-02';
import HomeSmileIcon from 'src/icons/untitled-ui/duocolor/home-smile';
import LayoutAlt02Icon from 'src/icons/untitled-ui/duocolor/layout-alt-02';
import LineChartUp04Icon from 'src/icons/untitled-ui/duocolor/line-chart-up-04';
import ReceiptCheckIcon from 'src/icons/untitled-ui/duocolor/receipt-check';
import ShoppingBag03Icon from 'src/icons/untitled-ui/duocolor/shopping-bag-03';
import ShoppingCart01Icon from 'src/icons/untitled-ui/duocolor/shopping-cart-01';
import Users03Icon from 'src/icons/untitled-ui/duocolor/users-03';
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
      {
        subheader: t(tokens.nav.concepts),
        items: [
          {
            title: t(tokens.nav.customers),
            path: paths.dashboard.customers.index,
            icon: (
              <SvgIcon fontSize="small">
                <Users03Icon />
              </SvgIcon>
            ),
            items: [
              {
                title: t(tokens.nav.list),
                path: paths.dashboard.customers.index,
              },
              {
                title: t(tokens.nav.details),
                path: paths.dashboard.customers.details,
              },
              {
                title: t(tokens.nav.edit),
                path: paths.dashboard.customers.edit,
              },
            ],
          },
          {
            title: t(tokens.nav.productList),
            path: paths.dashboard.products.index,
            icon: (
              <SvgIcon fontSize="small">
                <ShoppingBag03Icon />
              </SvgIcon>
            ),
            items: [
              {
                title: t(tokens.nav.list),
                path: paths.dashboard.products.index,
              },
              {
                title: t(tokens.nav.create),
                path: paths.dashboard.products.create,
              },
            ],
          },
          {
            title: t(tokens.nav.orderList),
            icon: (
              <SvgIcon fontSize="small">
                <ShoppingCart01Icon />
              </SvgIcon>
            ),
            path: paths.dashboard.orders.index,
            items: [
              {
                title: t(tokens.nav.list),
                path: paths.dashboard.orders.index,
              },
              {
                title: t(tokens.nav.details),
                path: paths.dashboard.orders.details,
              },
            ],
          },
          {
            title: t(tokens.nav.invoiceList),
            path: paths.dashboard.invoices.index,
            icon: (
              <SvgIcon fontSize="small">
                <ReceiptCheckIcon />
              </SvgIcon>
            ),
            items: [
              {
                title: t(tokens.nav.list),
                path: paths.dashboard.invoices.index,
              },
              {
                title: t(tokens.nav.details),
                path: paths.dashboard.invoices.details,
              },
            ],
          },
          
          
        ],
      },
  
     
    ];
  }, [t]);
};
