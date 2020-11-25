import axios from 'axios';
import {
  SEND_SIGNUP_DATAS,
  receiveSignUpErrors,
  receiveSuccessMessage,
  SEND_SIGNIN_DATAS,
  receiveSigninErrors,
  receiveToken,
  receiveId,
  RECEIVE_DATAS,
  receiveUserId,
  receiveNickname,
} from 'src/store/reducers/user';

const userMiddleware = (store) => (next) => (action) => {
  const { nicknameInput, emailInput, passwordInput, emailInputSignin, passwordInputSignin, token } = store.getState().user;
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
          const { id } = res.data[0];
          const userToken = res.data[0].token;
          localStorage.setItem('token', userToken);
          store.dispatch(receiveToken(userToken));
          store.dispatch(receiveId(id));
        })
        .catch((err) => {
          const errors = err.response.data;
          store.dispatch(receiveSigninErrors(errors));
        })
      break;
    case RECEIVE_DATAS:
      axios.post('http://localhost:8000/user/datas', { token })
        .then((res) => {
          const { nickname, id } = res.data[0];
          store.dispatch(receiveNickname(nickname));
          store.dispatch(receiveUserId(id));
        })
        .catch((err) => {
          console.log(err.res);
        });
      break;
    default:
      next(action);
  };
};

export default userMiddleware;