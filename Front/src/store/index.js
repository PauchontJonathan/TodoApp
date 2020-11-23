import { createStore, compose, applyMiddleware } from 'redux';
import reducer from 'src/store/reducers';

import userMiddleware from 'src/store/middlewares/userMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    userMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;