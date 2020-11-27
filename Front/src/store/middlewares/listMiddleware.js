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
  handleUpdateListBool,
  UPDATE_LIST,
  handleOpenInputUpdate,
} from 'src/store/reducers/list';

const listMiddleware = (store) => (next) => (action) => {
  const { userId } = store.getState().user;
  const { listId, nameInput } = store.getState().list;
  switch (action.type) {
    case RECEIVE_LIST:
      axios.get(`http://localhost:8000/listByUser/${userId}`)
        .then((res) => {
          const userLists = res.data;
          store.dispatch(getList(userLists));
        })
        .finally(() => {
          store.dispatch(handleChargedListBoolean());
        })
      break;
    case CREATE_LIST:
      axios.post('http://localhost:8000/list/create', {user_id: userId})
        .then((res) => {
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
      axios.delete(`http://localhost:8000/list/delete/${listId}`)
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
    case UPDATE_LIST:
      axios.post('http://localhost:8000/list/update', {listId, name: nameInput})
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally(() => {
          store.dispatch(handleUpdateListBool());
          store.dispatch(handleOpenInputUpdate());
        });
      break;
    default:
      next(action);
  };
};

export default listMiddleware;