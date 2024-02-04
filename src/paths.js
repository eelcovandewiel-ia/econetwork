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
    invoices: {
      index: '/dashboard/invoices',
      details: '/dashboard/invoices/:orderId',
    },

    orders: {
      index: '/dashboard/orders',
      details: '/dashboard/orders/:orderId',
    },
    products: {
      index: '/dashboard/products',
      create: '/dashboard/products/create',
    },

  },
  
  notAuthorized: '/401',
  notFound: '/404',
  serverError: '/500',
};
