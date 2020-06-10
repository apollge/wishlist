import React from 'react';
import ReactDOM from 'react-dom';
import { getSnapshot } from 'mobx-state-tree';

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

let wishList = WishList.create(initialState);

function renderApp() {
  ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));
}

renderApp();

if (module.hot) {
  // new components change
  module.hot.accept(['./components/App'], () => {
    renderApp();
  });

  // new model definitions
  module.hot.accept(['./models/WishList'], () => {
    const snapshot = getSnapshot(wishList);
    wishList = WishList.create(snapshot);

    renderApp();
  });
}
