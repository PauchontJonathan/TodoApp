import { combineReducers } from 'redux';

import user from './user';
import list from './list';

const reducer = combineReducers({
  user,
  list,
});

export default reducer;