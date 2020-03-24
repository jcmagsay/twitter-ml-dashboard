import React from 'react';
import { render } from 'react-dom';
import App from './js/main.jsx';

require('./css/index.scss');
require('./css/app.scss');

render(
  <App />,
  document.getElementById('app'),
);
