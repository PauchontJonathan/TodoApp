import { combineReducers } from 'redux';

import user from './user';
import list from './list';
import task from './task';

const reducer = combineReducers({
  user,
  list,
  task,
});

export default reducer;