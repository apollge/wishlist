import React from 'react';
import ReactDOM from 'react-dom';
import { getSnapshot } from 'mobx-state-tree';

import './assets/index.css';
import App from './components/App';

import { Group } from './models/Group';

let initialState = { users: {} };

let group = (window.group = Group.create(initialState));

function renderApp() {
  ReactDOM.render(<App group={group} />, document.getElementById('root'));
}

renderApp();

if (module.hot) {
  // new components change
  module.hot.accept(['./components/App'], () => {
    renderApp();
  });

  // new model definitions
  module.hot.accept(['./models/Group'], () => {
    const snapshot = getSnapshot(group);
    group = window.group = Group.create(snapshot);

    renderApp();
  });
}
