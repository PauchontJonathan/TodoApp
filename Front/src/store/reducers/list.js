const initialState = {
  listId: null,
  successListCreated: '',
  isDeletedList: false,
  isListCreated: false,
  isListCharged: false,
  list: [],
};

export const RECEIVE_LIST = 'RECEIVE_LIST';
export const CREATE_LIST = 'CREATE_LIST';
export const DELETE_LIST = 'DELETE_LIST';
const GET_LIST_ID = 'GET_LIST_ID';
const GET_LIST = 'GET_LIST';
const IS_CHARGED_LIST = 'IS_CHARGED_LIST';
const IS_LIST_CREATED = 'IS_LIST_CREATED';
const GET_SUCCESS_LIST_CREATED = 'GET_SUCCESS_LIST_CREATED';
const IS_DELETED_LIST = 'IS_DELETED_LIST';

const reducer = ( state = initialState, action = {}) => {
  switch (action.type) {
    case GET_LIST:
      return { ...state, list: action.currentList };
    case IS_CHARGED_LIST:
      return { ...state, isListCharged: true };
    case IS_LIST_CREATED:
      return { ...state, isListCreated: !state.isListCreated };
    case GET_SUCCESS_LIST_CREATED:
      return { ...state, successListCreated: action.curentSuccessMessage };
    case GET_LIST_ID:
      return { ...state, listId: action.currentlistId }
    case IS_DELETED_LIST:
      return { ...state, isDeletedList: !state.isDeletedList };
    default:
      return state;
  }
};

// here are the actions
export const receiveList = (listArray) => ({
  type: RECEIVE_LIST,
  listArray,
});

export const getList = (currentList) => ({
  type: GET_LIST,
  currentList,
});

export const handleChargedListBoolean = () => ({
  type: IS_CHARGED_LIST,
});

export const createList = () => ({
  type: CREATE_LIST,
});

export const handleCreatedListBoolean = () => ({
  type: IS_LIST_CREATED,
});

export const handleCreatedListSuccessMessage = (curentSuccessMessage) => ({
  type: GET_SUCCESS_LIST_CREATED,
  curentSuccessMessage,
});

export const getListId = (currentlistId) => ({
  type: GET_LIST_ID,
  currentlistId,
});

export const deleteList = () => ({
  type: DELETE_LIST,
});

export const handleIsDeletedList = () => ({
  type: IS_DELETED_LIST,
});

export default reducer;
