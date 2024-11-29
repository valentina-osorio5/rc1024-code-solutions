interface Orders {
  orderPlaced: string;
  total: number;
  shipTo: string;
  orderNumber: string;
  delivered: string;
  items: object[];
}

interface Items {
  title: string;
  author?: string;
  returnBeforeDate: string;
  cost: number;
}

const orderHistory: Orders[] = [
  {
    orderPlaced: 'August 4, 2020',
    total: 34.0,
    shipTo: 'JS Masher',
    orderNumber: '114-394',
    delivered: 'August 8, 2020',
    items: [
      {
        title: 'Javascript for impatient programmers',
        author: 'Rauschmayer, Dr. Alex',
        returnBeforeDate: 'Sep 7, 2020',
        cost: 31.55,
      },
    ],
  },
  {
    orderPlaced: 'July 19, 2020',
    total: 44.53,
    shipTo: 'JS Masher',
    orderNumber: '113-998',
    delivered: 'July 20, 2020',
    items: [
      {
        title: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        returnBeforeDate: 'Aug 19,2020',
        cost: 41.33,
      },
    ],
  },
  {
    orderPlaced: 'July 4, 2020',
    total: 17.22,
    shipTo: 'JS Masher',
    orderNumber: '114-287',
    delivered: 'July 7, 2020',
    items: [
      {
        title: 'Gamecube Controller Adapter for Wii U,PC.',
        returnBeforeDate: 'Aug 5, 2020',
        cost: 17.22,
      },
    ],
  },
  {
    orderPlaced: 'July 3, 2020',
    total: 138.93,
    shipTo: 'JS Masher',
    orderNumber: '113-288',
    delivered: 'July 5, 2020',
    items: [
      {
        title: 'Gamecube Controller Super Smash Bros.',
        returnBeforeDate: 'Aug 4, 2020',
        cost: 94.95,
      },
      {
        title: 'The Art of Sql',
        author: 'Faroult, Stephanie',
        returnBeforeDate: 'Aug 4, 2020',
        cost: 33.99,
      },
    ],
  },
];

console.log(orderHistory);
