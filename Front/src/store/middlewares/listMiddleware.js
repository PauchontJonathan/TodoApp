import axios from 'axios';
import {
  RECEIVE_LIST,
  getList,
  handleChargedListBoolean,
  CREATE_LIST,
  handleCreatedListBoolean,
  handleCreatedListSuccessMessage,
} from 'src/store/reducers/list';

const listMiddleware = (store) => (next) => (action) => {
  const { userId } = store.getState().user;
  switch (action.type) {
    case RECEIVE_LIST:
      console.log(userId);
      axios.get(`http://localhost:8000/listByUser/${userId}`)
        .then((res) => {
          const { data } = res;
          console.log(data);
          const userLists = res.data;
          store.dispatch(getList(userLists));
        })
        .catch((err) => {
          console.log(err.response.data);
        })
        .finally(() => {
          store.dispatch(handleChargedListBoolean());
        })
      break;
    case CREATE_LIST:
      axios.post('http://localhost:8000/list/create', {user_id: userId})
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          store.dispatch(handleCreatedListBoolean());
        });
      break;
    default:
      next(action);
  };
};

export default listMiddleware;