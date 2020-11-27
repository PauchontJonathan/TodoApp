import { createStore, compose, applyMiddleware } from 'redux';
import reducer from 'src/store/reducers';

import userMiddleware from 'src/store/middlewares/userMiddleware';
import listMiddleware from 'src/store/middlewares/listMiddleware';
import taskMiddleware from 'src/store/middlewares/taskMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    userMiddleware,
    listMiddleware,
    taskMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;