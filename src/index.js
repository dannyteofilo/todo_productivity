import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

import configureStore from './redux/store/store';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

async function init() {
  console.log('Waiting for store')

  await configureStore();

  console.log('Store was fully loaded')

  ReactDOM.render(<TodoApp />, document.getElementById('root'));

  console.log('Rendering');
}

init();
