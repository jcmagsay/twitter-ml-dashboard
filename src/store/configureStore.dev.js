import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {logger} from 'redux-logger';
import reducers from 'Reducers/index';

// const loggerMiddleware = logger(); // initialize logger
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStoreDev = createStore(
  reducers,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(logger),
  ),
);

export default {configureStoreDev};
