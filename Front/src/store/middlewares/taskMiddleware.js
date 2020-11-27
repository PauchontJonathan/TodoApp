import axios from 'axios';
import { CREATE_TASK, handleCreatedTaskBoolean, handleIsDeletedTask, DELETE_TASK } from 'src/store/reducers/task';

const taskMiddleware = (store) => (next) => (action) => {
  const { createlistId, taskId } = store.getState().task;
  switch (action.type) {
    case CREATE_TASK:
      axios.post('http://localhost:8000/task/create', { listId: createlistId })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally(() => {
          store.dispatch(handleCreatedTaskBoolean());
        });
      break;
    case DELETE_TASK:
      axios.delete(`http://localhost:8000/task/delete/${taskId}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        })
        .finally(() => {
          store.dispatch(handleIsDeletedTask());
        })
      break;
    default:
      next(action);
  };
};

export default taskMiddleware;