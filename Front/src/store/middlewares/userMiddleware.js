import axios from 'axios';
import { SEND_SIGNUP_DATAS, receiveSignUpErrors, receiveSuccessMessage } from 'src/store/reducers/user';

const userMiddleware = (store) => (next) => (action) => {
  const { nicknameInput, emailInput, passwordInput } = store.getState().user;
  switch (action.type) {
    case SEND_SIGNUP_DATAS:
      axios.post('http://localhost:8000/signup',{nickname: nicknameInput, email: emailInput, password: passwordInput})
        .then((res) => {
          console.log(res);
          const { success } = res.data;
          store.dispatch(receiveSuccessMessage(success));
        })
        .catch((err) => {
          const errors = err.response.data;
          store.dispatch(receiveSignUpErrors(errors));
        });
      break;
    default:
      next(action);
  };
};

export default userMiddleware;