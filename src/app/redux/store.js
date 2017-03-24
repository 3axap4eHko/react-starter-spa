import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
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

export const history = createHistory();

const middleware = [
  thunkMiddleware,
  DEBUG !== 'undefined' && loggerMiddleware,
  routerMiddleware(history),
].filter(Boolean);

const store = createStore(reducers, applyMiddleware(...middleware));

if (DEBUG) {
  window.store = store;
}

export default store;
