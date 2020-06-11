import React, { Component } from 'react';
import { observer } from 'mobx-react';

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

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WishList</h1>
        </header>
        <button onClick={group.reload}>Reload</button>

        <select onChange={this.onSelectUser}>
          <option>- Select user -</option>
          {Array.from(group.users.values()).map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <button onClick={group.drawLots}>Draw lots</button>
        {selectedUser && <User user={selectedUser} />}
      </div>
    );
  }

  onSelectUser = (event) => {
    this.setState({ selectedUser: event.target.value });
  };
}

const User = observer(({ user }) => (
  <>
    <WishListView wishList={user.wishList} />
    <button onClick={user.getSuggestions}>Suggestion</button>
    <hr />
    <h2>{user.recipient && user.recipient.name}</h2>
    {user.recipient && <WishListView wishList={user.wishList} readonly />}
  </>
));

export default App;
