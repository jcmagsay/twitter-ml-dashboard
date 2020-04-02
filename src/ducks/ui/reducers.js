import { combineReducers } from 'redux';

const viewportReducer = (state, action) => {
  const {
    payload,
    type,
  } = action;
    if (payload) {
      return payload;
    }

    return state
      ? state
      : null;
}


const uiReducers = combineReducers({
  viewport: viewportReducer,
});

export default uiReducers;
