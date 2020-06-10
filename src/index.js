import React from 'react';
import ReactDOM from 'react-dom';
import { onSnapshot } from 'mobx-state-tree';

import './assets/index.css';
import App from './components/App';

import { WishList } from './models/WishList';

let initialState = {
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
};

if (localStorage.getItem('wishlistapp')) {
  const json = JSON.parse(localStorage.getItem('wishlistapp'));

  // Check if the shape of the object is still the same
  if (WishList.is(json)) {
    initialState = json;
  }
}

const wishList = WishList.create(initialState);

onSnapshot(wishList, (snapshot) => {
  localStorage.setItem('wishlistapp', JSON.stringify(snapshot));
});

ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));
