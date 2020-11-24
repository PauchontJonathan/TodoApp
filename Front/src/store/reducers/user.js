const initialState = {
  signupSuccessMessage: null,
  signupErrors: null,
  signinErrors: null,
  nicknameInput: '',
  emailInput: '',
  passwordInput: '',
  emailInputSignin: '',
  passwordInputSignin: '',
  token: '',
  id: null,
  logged: false,
};

const HANDLE_EMAIL_INPUT_SIGNIN = 'HANDLE_EMAIL_INPUT_SIGNIN';
const HANDLE_PASSWORD_INPUT_SIGNIN = 'HANDLE_PASSWORD_INPUT_SIGNIN';
const HANDLE_NICKNAME_INPUT = 'HANDLE_NICKNAME_INPUT';
const HANDLE_EMAIL_INPUT = 'HANDLE_EMAIL_INPUT';
const HANDLE_PASSWORD_INPUT = 'HANDLE_PASSWORD_INPUT';
const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
const RECEIVE_ID = 'RECEIVE_ID';
const RECEIVE_SIGNIN_ERRORS = 'RECEIVE_SIGNIN_ERRORS';
const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
const RECEIVE_SUCCESS_MESSAGE = 'RECEIVE_SUCCESS_MESSAGE';
const CLEAR_SIGNUP_STATE = 'CLEAR_SIGNUP_STATE';
const CLEAR_SIGNIN_STATE = 'CLEAR_SIGNIN_STATE';
const DISCONNECT_USER = 'DISCONNECT_USER';
export const SEND_SIGNUP_DATAS = 'SEND_SIGNUP_DATAS';
export const SEND_SIGNIN_DATAS = 'SEND_SIGNIN_DATAS';


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
    case CLEAR_SIGNUP_STATE:
      return { ...state, signupSuccessMessage: null, signupErrors: null, nicknameInput: '', emailInput: '', passwordInput: '' };
    case HANDLE_EMAIL_INPUT_SIGNIN:
      return { ...state, emailInputSignin: action.currentEmail };
    case HANDLE_PASSWORD_INPUT_SIGNIN:
      return { ...state, passwordInputSignin: action.currentPassword };
    case RECEIVE_TOKEN:
      return { ...state, token: action.currentToken, logged: true};
    case RECEIVE_ID:
      return { ...state, id: action.currentId };
    case RECEIVE_SIGNIN_ERRORS:
      return { ...state, signinErrors: action.errors };
    case CLEAR_SIGNIN_STATE:
      return { ...state, signinErrors: null, emailInputSignin: '', passwordInputSignin: '' };
    case DISCONNECT_USER:
      localStorage.clear();
      return { ...state, token: '', logged: false };
    default:
      return state;
  }
};

// now the actions type

export const handlePasswordInputSignin = (currentPassword) => ({
  type: HANDLE_PASSWORD_INPUT_SIGNIN,
  currentPassword,
});

export const handleEmailInputSignin = (currentEmail) => ({
  type: HANDLE_EMAIL_INPUT_SIGNIN,
  currentEmail,
});

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

export const receiveSigninErrors = (errors) => ({
  type: RECEIVE_SIGNIN_ERRORS,
  errors,
});

export const receiveToken = (currentToken) => ({
  type: RECEIVE_TOKEN,
  currentToken,
});

export const receiveId = (currentId) => ({
  type: RECEIVE_ID,
  currentId,
});

export const clearSignupState = () => ({
  type: CLEAR_SIGNUP_STATE,
});

export const clearSigninState = () => ({
  type: CLEAR_SIGNIN_STATE,
});

export const handleSigninSubmit = () => ({
  type: SEND_SIGNIN_DATAS,
});

export const disconnectUser = () => ({
  type: DISCONNECT_USER,
});

export default reducer;
