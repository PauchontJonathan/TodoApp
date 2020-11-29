const initialState = {
  isTaskUpdated: false,
  isDeletedTask: false,
  isTaskCreated: false,
  isOpenTaskModal: false,
  contentTaskInput: '',
  createlistId: null,
  taskId: null,
}

const HANDLE_TASK_MODAL = 'HANDLE_TASK_MODAL';
const HANDLE_TASK_CREATED_BOOLEAN = 'HANDLE_TASK_CREATED_BOOLEAN';
const HANDLE_TASK_UPDATED_BOOLEAN = 'HANDLE_TASK_UPDATED_BOOLEAN';
const GET_CREATE_LIST_ID = 'GET_CREATE_LIST_ID';
const HANDLE_TASK_INPUT = 'HANDLE_TASK_INPUT';
const GET_TASK_ID = 'GET_TASK_ID';
const IS_DELETED_TASK = 'IS_DELETED_TASK';
const CLEAR_TASK_UPDATE_INPUT = 'CLEAR_TASK_UPDATE_INPUT';
export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';


const reducer = ( state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_TASK_MODAL:
      return { ...state, isOpenTaskModal: !state.isOpenTaskModal };
    case HANDLE_TASK_CREATED_BOOLEAN:
      return { ...state, isTaskCreated: !state.isTaskCreated };
    case GET_CREATE_LIST_ID:
      return { ...state, createlistId: action.currentListId };
    case HANDLE_TASK_INPUT:
      return { ...state, contentTaskInput: action.currentTaskValue };
    case GET_TASK_ID:
      return { ...state, taskId: action.currentTaskId };
    case IS_DELETED_TASK:
      return { ...state, isDeletedTask: !state.isDeletedTask };
    case HANDLE_TASK_UPDATED_BOOLEAN:
      return { ...state, isTaskUpdated: !state.isTaskUpdated };
    case CLEAR_TASK_UPDATE_INPUT:
      return { ...state, contentTaskInput: '' };
    default:
      return state;
  }
};

// here are the actions
export const handleTaskModal = () => ({
  type: HANDLE_TASK_MODAL,
});

export const handleCreatedTaskBoolean = () => ({
  type: HANDLE_TASK_CREATED_BOOLEAN,
});

export const getListId = (currentListId) => ({
  type: GET_CREATE_LIST_ID,
  currentListId,
});

export const getCurrentTaskValue = (currentTaskValue) => ({
  type: HANDLE_TASK_INPUT,
  currentTaskValue,
});

export const createTask = () => ({
  type: CREATE_TASK,
});

export const getTaskId = (currentTaskId) => ({
  type: GET_TASK_ID,
  currentTaskId,
});

export const deleteTask = () => ({
  type: DELETE_TASK,
});

export const handleIsDeletedTask = () => ({
  type: IS_DELETED_TASK,
});

export const handleUpdatedTaskBoolean = () => ({
  type: HANDLE_TASK_UPDATED_BOOLEAN,
});

export const updateTask = () => ({
  type: UPDATE_TASK,
});

export const clearTaskInput = () => ({
  type: CLEAR_TASK_UPDATE_INPUT,
});


export default reducer;
