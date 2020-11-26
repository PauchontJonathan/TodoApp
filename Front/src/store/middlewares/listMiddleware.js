import axios from 'axios';
import {
  RECEIVE_LIST,
  getList,
  handleChargedListBoolean,
  CREATE_LIST,
  handleCreatedListBoolean,
  handleCreatedListSuccessMessage,
  DELETE_LIST,
  handleIsDeletedList,
} from 'src/store/reducers/list';

const listMiddleware = (store) => (next) => (action) => {
  const { userId } = store.getState().user;
  const { listId } = store.getState().list;
  switch (action.type) {
    case RECEIVE_LIST:
      console.log(userId);
      axios.get(`http://localhost:8000/listByUser/${userId}`)
        .then((res) => {
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
          console.log(res.data.success);
          const { success } = res.data.success;
          store.dispatch(handleCreatedListSuccessMessage(success));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          store.dispatch(handleCreatedListBoolean());
        });
      break;
    case DELETE_LIST:
      axios.post('http://localhost:8000/list/delete', {listId})
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally(() => {
          store.dispatch(handleIsDeletedList());
        })
      break;
    default:
      next(action);
  };
};

export default listMiddleware;