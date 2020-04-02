import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './js/main.jsx';

// import configureStore from 'Store/configureStore';
import reducers from './reducers/index';

import './css/index.scss';
import './css/app.scss';

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
      : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

const store = createStore(
  reducers,
  enhancer,
);

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <App />,
  </Provider>,
  root,
);

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install({
    onUpdateReady() {
      require('offline-plugin/runtime').applyUpdate();
    },
  });
}
