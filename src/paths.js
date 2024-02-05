export const paths = {
  index: '/',
  checkout: '/checkout',
  contact: '/contact',
  pricing: '/pricing',
  auth: {
      login: '/auth/login',
      register: '/auth/register',
  },
  contact: '/contact',

  dashboard: {
    index: '/dashboard',
    account: '/dashboard/account',
    analytics: '/dashboard/analytics',
    blank: '/dashboard/blank',
    portfolio: '/dashboard/portfolio',
    deals: '/dashboard/deals',
    news: {
      index: '/dashboard/news',
      postDetails: '/dashboard/news/:postId',
      postCreate: '/dashboard/news/create',
    },
    customers: {
      index: '/dashboard/customers',
      details: '/dashboard/customers/:customerId',
      edit: '/dashboard/customers/:customerId/edit',
    },

    orders: {
      index: '/dashboard/orders',
      details: '/dashboard/orders/:orderId',
    },

  },
  
  notAuthorized: '/401',
  notFound: '/404',
  serverError: '/500',
};
