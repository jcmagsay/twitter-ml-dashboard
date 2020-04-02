
import { combineReducers } from 'redux';
import uiReducers from '../ducks/ui/index';

const reducers = combineReducers({
  ui: uiReducers,
});

export default reducers;
