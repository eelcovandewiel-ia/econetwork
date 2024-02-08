import { addDays, subDays, subHours } from 'date-fns';

const now = new Date();

export const listData =[
  {
    id: 'd46800328cd510a668253b45',
    nr:'123',
    price: 25000,
    createdAt: now.getTime(),
    currency: 'usd',
    sender: 'Company A',
    mwh: -100,
    energyType: 'Green gas',
    countryOrigin:'NL',
    countryDestination:'DE',
    status: 'pending',
    type: 'receive',
  },
  {
    id: 'b4b19b21656e44b487441c50',    
    nr:'223',
    price: 6843,
    createdAt: subDays(now, 1).getTime(),
    currency: 'usd',
    sender: 'Producer A',
    mwh: 200,
    energyType: 'Green gas',
    countryOrigin:'NL',
    countryDestination:'NL',
    status: 'closed',
    type: 'send',
  },
  {
    id: '56c09ad91f6d44cb313397db',    
    nr:'143',
    price: 91823,
    createdAt: subDays(now, 1).getTime(),
    currency: 'usd',
    sender: 'Company D',
    mwh: 100,
    energyType: 'Green gas',
    countryOrigin:'NL',
    countryDestination:'DE',
    status: 'failed',
    type: 'send',
  },
  {
    id: 'aaeb96c5a131a55d9623f44d',   
     nr:'133',
    price: 49550,
    createdAt: subDays(now, 3).getTime(),
    currency: 'usd',
    sender: 'Company E',
    mwh: -300,
    energyType: 'Green gas',
    countryOrigin:'NL',
    countryDestination:'DE',
    status: 'closed',
    type: 'receive',
  },
];



export const itemData = {
  id: '5ecb8a6879877087d4aa2690',
nr:'A100',
mwh:"1000",
  coupon: null,
  createdAt: subDays(subHours(now, 4), 1).getTime(),
  currency: '$',
  productionDevice: 'Gas generator',
  productionDeviceNr:'124A34431A1',
  energyType: 'Green gas',
  buyer: {
    company:"Company A",
    address1: 'Street John Wick, no. 7',
    address2: 'House #25',
    city: 'Amsterdam',
    country: 'NL',
    email: 'test@test.com',
    name: 'Miron Vitold',
    phonenumber:"06123456789",
    registryAccountNr:"12345",
    registryDatabase:"NL",
    registryOperator:"Operator"
  },
  seller: {

    company:"Company B",
    address1: 'Street John Wick, no. 7',
    address2: 'House #25',
    city: 'berlin',
    country: 'DE',
    email: 'test@test.com',
    name: 'Miron Vitold',
    phonenumber:"06123456789",
    registryAccountNr:"12345",
    registryDatabase:"DE",
    registryOperator:"Operator"
    
  },
  items: [
    {
      id: '5ecb8abbdd6dfb1f9d6bf98b',
      productionPeriod: 'March 2023',
      technology: 'Green gas extraction',
      deliveryDate: '1-4-2024',
      quantity: 25,
      certificatePrice: 20,
      contractPrice: 500
    },
    {
      id: '5ecb8abbdd6ddb1f9d6bf98b',
      productionPeriod: 'March 2023',
      technology: 'Green gas extraction v2',
      deliveryDate: '4-4-2024',
      quantity: 25,
      certificatePrice: 30,
      contractPrice: 600
    }
  ],
  logs: [
    {
      id: '9a50be1fa5ec7317d459d5a8',
      createdAt: subHours(Date.now(), 18).getTime(),
      message: 'Certificates transferred',
    },
    {
      id: '9a50be1fa5ec7317d459d5a8',
      createdAt: subHours(Date.now(), 18).getTime(),
      message: 'Payment received by seller',
    }, {
      id: '9a50be1fa5ec7317d459d5a8',
      createdAt: subHours(Date.now(), 18).getTime(),
      message: 'Payment sent from buyer',
    },
    {
      id: '41845b427db837502b4d6a57',
      createdAt: subHours(Date.now(), 21).getTime(),
      message: 'Completed order details',
    },
    {
      id: '41845b427db837502b4d6a57',
      createdAt: subHours(Date.now(), 21).getTime(),
      message: 'Order created by Eelco van de Wiel',
    },
  ],
  number: 'DEV-103',
  paymentMethod: 'CreditCard',
  promotionCode: 'PROMO1',
  status: 'pending',
  totalAmount: 500.0,
};
