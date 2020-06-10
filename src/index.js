import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';

import { WishList } from './models/WishList';

const wishList = WishList.create({
  items: [
    {
      name: 'Machine Gun Preacher',
      price: 7.35,
      image:
        'https://www.gstatic.com/tv/thumb/v22vodart/8751039/p8751039_v_v8_ab.jpg',
    },
    {
      name: 'LEGO Mindstorms EV3',
      price: 349.95,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71iQLKdNnpL._AC_SL1500_.jpg',
    },
  ],
});

ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));
