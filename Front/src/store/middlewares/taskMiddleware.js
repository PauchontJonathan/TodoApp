import axios from 'axios';
import {
  CREATE_TASK,
  handleCreatedTaskBoolean,
  handleIsDeletedTask,
  DELETE_TASK,
  UPDATE_TASK,
  handleUpdatedTaskBoolean,
  handleTaskModal,
  clearTaskInput,
  SET_CHECK_STATE_TASK,
  handleCheckedCallLoaded,
} from 'src/store/reducers/task';

const taskMiddleware = (store) => (next) => (action) => {
  const { createlistId, taskId, contentTaskInput, isCheckedTask } = store.getState().task;
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
          console.log(err.response);
        })
        .finally(() => {
          store.dispatch(handleIsDeletedTask());
        })
      break;
    case UPDATE_TASK:
      axios.post('http://localhost:8000/task/update', {taskId, content: contentTaskInput})
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        })
        .finally(() => {
          store.dispatch(handleUpdatedTaskBoolean());
          store.dispatch(handleTaskModal());
          store.dispatch(clearTaskInput());
        });
      break;
    case SET_CHECK_STATE_TASK:
      axios.post('http://localhost:8000/task/validate',{ taskId, isChecked: isCheckedTask })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          store.dispatch(handleCheckedCallLoaded());
        });
      break;
    default:
      next(action);
  };
};

export default taskMiddleware;