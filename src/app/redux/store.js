import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const loggerMiddleware = createLogger({
  stateTransformer(state) {
    return state;
  },
  actionTransformer(action) {
    return { ...action, type: `${action.type}_${action.status}` };
  },
  collapsed: true,
});

const middleware = [
  thunkMiddleware,
  DEBUG !== 'undefined' && loggerMiddleware,
].filter(Boolean);

const store = createStore(reducers, applyMiddleware(...middleware));

if (DEBUG) {
  window.store = store;
}

export default store;
