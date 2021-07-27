import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';

import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware, { END } from 'redux-saga';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(routerMiddleware(browserHistory), sagaMiddleware),
  ),
);
delete window.__PRELOADED_STATE__;
store.runSaga = sagaMiddleware.run;

store.close = () => store.dispatch(END);
export const history = syncHistoryWithStore(createBrowserHistory(), store);
export default store;
