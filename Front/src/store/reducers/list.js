const initialState = {
  isListCharged: false,
  list: [],
};

export const RECEIVE_LIST = 'RECEIVE_LIST';
const GET_LIST = 'GET_LIST';
const IS_CHARGED_LIST = 'IS_CHARGED_LIST';

const reducer = ( state = initialState, action = {}) => {
  switch (action.type) {
    case GET_LIST:
      return { ...state, list: action.currentList };
    case IS_CHARGED_LIST:
      return { ...state, isListCharged: true };
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

export default reducer;
