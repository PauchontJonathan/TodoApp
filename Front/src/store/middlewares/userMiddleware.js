import axios from 'axios';
import {
  SEND_SIGNUP_DATAS,
  receiveSignUpErrors,
  receiveSuccessMessage,
  SEND_SIGNIN_DATAS,
  receiveSigninErrors,
  receiveToken,
  receiveId,
} from 'src/store/reducers/user';

const userMiddleware = (store) => (next) => (action) => {
  const { nicknameInput, emailInput, passwordInput, emailInputSignin, passwordInputSignin } = store.getState().user;
  switch (action.type) {
    case SEND_SIGNUP_DATAS:
      axios.post('http://localhost:8000/signup',{nickname: nicknameInput, email: emailInput, password: passwordInput})
        .then((res) => {
          const { success } = res.data;
          store.dispatch(receiveSuccessMessage(success));
        })
        .catch((err) => {
          const errors = err.response.data;
          store.dispatch(receiveSignUpErrors(errors));
        });
      break;
    case SEND_SIGNIN_DATAS:
      axios.post('http://localhost:8000/signin', {email: emailInputSignin, password: passwordInputSignin})
        .then((res) => {
          const { token, id } = res.data[0];
          console.log(res.data);
          store.dispatch(receiveToken(token));
          store.dispatch(receiveId(id));
        })
        .catch((err) => {
          const errors = err.response.data;
          store.dispatch(receiveSigninErrors(errors));
        })
      break;
    default:
      next(action);
  };
};

export default userMiddleware;