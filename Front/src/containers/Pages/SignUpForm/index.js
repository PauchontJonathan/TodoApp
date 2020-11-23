import { connect } from 'react-redux';
import SignUpForm from 'src/components/Pages/SignUpForm';
import {
  handleNicknameInput,
  handleEmailInput,
  handlePasswordInput,
  handleSignUpSubmit,
  clearSignupState,
} from 'src/store/reducers/user';

const mapStateToProps = (state) => ({
  signupSuccessMessage: state.user.signupSuccessMessage,
  signupErrors: state.user.signupErrors,
  emailInput: state.user.emailInput,
  nicknameInput: state.user.nicknameInput,
  passwordInput: state.user.passwordInput,
});

const mapDispatchToProps = (dispatch) => ({
  handleNickname: (currentNickname) => {
    dispatch(handleNicknameInput(currentNickname));
  },
  handleEmail: (currentEmail) => {
    dispatch(handleEmailInput(currentEmail));
  },
  handlePassword: (currentPassword) => {
    dispatch(handlePasswordInput(currentPassword));
  },
  handleSignUp: () => {
    dispatch(handleSignUpSubmit());
  },
  clearSignup: () => {
    dispatch(clearSignupState());
  },
});


const SignUpFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);

export default SignUpFormContainer;
