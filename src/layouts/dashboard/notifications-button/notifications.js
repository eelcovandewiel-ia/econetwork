import { subDays, subHours } from 'date-fns';

const now = new Date();

export const notifications = [
  {
    id: '5e8883f1b51cc1956a5a1ec0',
    name: 'Jie Yang Song',
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    createdAt: subHours(now, 2).getTime(),
    company: 'Augmastic Inc',
    read: true,
    type: 'status_change',
  },
  {
    id: 'bfb21a370c017acc416757c7',
    name: 'Jie Yang Song',
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    createdAt: subHours(now, 2).getTime(),
    company: 'Augmastic Inc',
    read: false,
    type: 'status_change',
  },
  {
    id: '20d9df4f23fff19668d7031c',
    createdAt: subDays(now, 1).getTime(),
    description: 'New reporting feature is available',
    read: true,
    type: 'new_feature',
  },
  {
    id: '5e8883fca0e8612044248ecf',
    name: 'Jie Yang Song',

    company: 'Augmastic Inc',
    createdAt: subHours(now, 2).getTime(),
    read: false,
    type: 'deal_added',
  },
];
