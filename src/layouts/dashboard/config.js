import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Chip from '@mui/material/Chip';
import SvgIcon from '@mui/material/SvgIcon';

import AlignLeft02Icon from 'src/icons/untitled-ui/duocolor/align-left-02';
import BarChartSquare02Icon from 'src/icons/untitled-ui/duocolor/bar-chart-square-02';
import Building04Icon from 'src/icons/untitled-ui/duocolor/building-04';
import CalendarIcon from 'src/icons/untitled-ui/duocolor/calendar';
import CheckDone01Icon from 'src/icons/untitled-ui/duocolor/check-done-01';
import CreditCard01Icon from 'src/icons/untitled-ui/duocolor/credit-card-01';
import CurrencyBitcoinCircleIcon from 'src/icons/untitled-ui/duocolor/currency-bitcoin-circle';
import File01Icon from 'src/icons/untitled-ui/duocolor/file-01';
import GraduationHat01Icon from 'src/icons/untitled-ui/duocolor/graduation-hat-01';
import HomeSmileIcon from 'src/icons/untitled-ui/duocolor/home-smile';
import LayoutAlt02Icon from 'src/icons/untitled-ui/duocolor/layout-alt-02';
import LineChartUp04Icon from 'src/icons/untitled-ui/duocolor/line-chart-up-04';
import Lock01Icon from 'src/icons/untitled-ui/duocolor/lock-01';
import LogOut01Icon from 'src/icons/untitled-ui/duocolor/log-out-01';
import Mail03Icon from 'src/icons/untitled-ui/duocolor/mail-03';
import Mail04Icon from 'src/icons/untitled-ui/duocolor/mail-04';
import MessageChatSquareIcon from 'src/icons/untitled-ui/duocolor/message-chat-square';
import ReceiptCheckIcon from 'src/icons/untitled-ui/duocolor/receipt-check';
import Share07Icon from 'src/icons/untitled-ui/duocolor/share-07';
import ShoppingBag03Icon from 'src/icons/untitled-ui/duocolor/shopping-bag-03';
import ShoppingCart01Icon from 'src/icons/untitled-ui/duocolor/shopping-cart-01';
import Truck01Icon from 'src/icons/untitled-ui/duocolor/truck-01';
import Upload04Icon from 'src/icons/untitled-ui/duocolor/upload-04';
import Users03Icon from 'src/icons/untitled-ui/duocolor/users-03';
import XSquareIcon from 'src/icons/untitled-ui/duocolor/x-square';
import { tokens } from 'src/locales/tokens';
import { paths } from 'src/paths';

export const useSections = () => {
  const { t } = useTranslation();

  return useMemo(() => {
    return [
      {
        items: [
          {
            title: t(tokens.nav.overview),
            path: paths.dashboard.index,
            icon: (
              <SvgIcon fontSize="small">
                <HomeSmileIcon />
              </SvgIcon>
            ),
          },
          {
            title: t(tokens.nav.analytics),
            path: paths.dashboard.analytics,
            icon: (
              <SvgIcon fontSize="small">
                <BarChartSquare02Icon />
              </SvgIcon>
            ),
          },
          {
            title: t(tokens.nav.ecommerce),
            path: paths.dashboard.ecommerce,
            icon: (
              <SvgIcon fontSize="small">
                <LineChartUp04Icon />
              </SvgIcon>
            ),
          },
         
          {
            title: t(tokens.nav.account),
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
          
          {
            title: t(tokens.nav.academy),
            path: paths.dashboard.academy.index,
            icon: (
              <SvgIcon fontSize="small">
                <GraduationHat01Icon />
              </SvgIcon>
            ),
            items: [
              {
                title: t(tokens.nav.dashboard),
                path: paths.dashboard.academy.index,
              },
              {
                title: t(tokens.nav.course),
                path: paths.dashboard.academy.courseDetails,
              },
            ],
          },
          {
            title: t(tokens.nav.jobList),
            path: paths.dashboard.jobs.index,
            icon: (
              <SvgIcon fontSize="small">
                <Building04Icon />
              </SvgIcon>
            ),
            items: [
              {
                title: t(tokens.nav.browse),
                path: paths.dashboard.jobs.index,
              },
              {
                title: t(tokens.nav.details),
                path: paths.dashboard.jobs.companies.details,
              },
              {
                title: t(tokens.nav.create),
                path: paths.dashboard.jobs.create,
              },
            ],
          },
         
          {
            title: t(tokens.nav.blog),
            path: paths.dashboard.blog.index,
            icon: (
              <SvgIcon fontSize="small">
                <LayoutAlt02Icon />
              </SvgIcon>
            ),
            items: [
              {
                title: t(tokens.nav.postList),
                path: paths.dashboard.blog.index,
              },
              {
                title: t(tokens.nav.postDetails),
                path: paths.dashboard.blog.postDetails,
              },
              {
                title: t(tokens.nav.postCreate),
                path: paths.dashboard.blog.postCreate,
              },
            ],
          },
         
          
          
          
        ],
      },
  
     
    ];
  }, [t]);
};
