const initialState = {
  signupSuccessMessage: null,
  signupErrors: null,
  nicknameInput: '',
  emailInput: '',
  passwordInput: '',
  token: '',
  logged: false,
};

const HANDLE_NICKNAME_INPUT = 'HANDLE_NICKNAME_INPUT';
const HANDLE_EMAIL_INPUT = 'HANDLE_EMAIL_INPUT';
const HANDLE_PASSWORD_INPUT = 'HANDLE_PASSWORD_INPUT';
const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
const RECEIVE_SUCCESS_MESSAGE = 'RECEIVE_SUCCESS_MESSAGE';
export const SEND_SIGNUP_DATAS = 'SEND_SIGNUP_DATAS';


const reducer = ( state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_NICKNAME_INPUT:
      return { ...state, nicknameInput: action.currentNickname };
    case HANDLE_EMAIL_INPUT:
      return { ...state, emailInput: action.currentEmail };
    case HANDLE_PASSWORD_INPUT:
      return { ...state, passwordInput: action.currentPassword };
    case RECEIVE_SIGNUP_ERRORS:
      return { ...state, signupErrors: action.errors, signupSuccessMessage: null};
    case RECEIVE_SUCCESS_MESSAGE:
      return { ...state, signupSuccessMessage: action.success, signupErrors: null };
    default:
      return state;
  }
};

// now the actions type
export const handleNicknameInput = (currentNickname) => ({
  type: HANDLE_NICKNAME_INPUT,
  currentNickname,
});

export const handleEmailInput = (currentEmail) => ({
  type: HANDLE_EMAIL_INPUT,
  currentEmail,
});

export const handlePasswordInput = (currentPassword) => ({
  type: HANDLE_PASSWORD_INPUT,
  currentPassword,
});

export const handleSignUpSubmit = () => ({
  type: SEND_SIGNUP_DATAS,
});

export const receiveSignUpErrors = (errors) => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors,
});

export const receiveSuccessMessage = (success) => ({
  type: RECEIVE_SUCCESS_MESSAGE,
  success,
});

export default reducer;
