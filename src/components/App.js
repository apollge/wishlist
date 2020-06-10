import React from 'react';
import logo from '../assets/santa-claus.png';

import WishListView from './WishListView';

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">WishList</h1>
      </header>
      <WishListView wishList={props.wishList} />
    </div>
  );
};

export default App;
