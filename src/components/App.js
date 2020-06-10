import React, { Component } from 'react';
import logo from '../assets/santa-claus.png';

import WishListView from './WishListView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedUser: null,
    };
  }

  render() {
    const { group } = this.props;
    const selectedUser = group.users.get(this.state.selectedUser);

    console.log('group', group.users.values());

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WishList</h1>
        </header>

        <select onChange={this.onSelectUser}>
          <option>- Select user -</option>
          {Array.from(group.users.values()).map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        {selectedUser && <WishListView wishList={selectedUser.wishList} />}
      </div>
    );
  }

  onSelectUser = (event) => {
    this.setState({ selectedUser: event.target.value });
  };
}

export default App;
