import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './js/main.jsx';

import './css/index.scss';
import './css/app.scss';

const root = document.getElementById('root');

render(
  <App />,
  root,
);

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install({
    onUpdateReady() {
      require('offline-plugin/runtime').applyUpdate();
    },
  });
}
