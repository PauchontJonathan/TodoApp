import { connect } from 'react-redux';
import SignInForm from 'src/components/Pages/SignInForm';
import {
  handleEmailInputSignin,
  handlePasswordInputSignin,
  handleSigninSubmit,
  clearSigninState,
} from 'src/store/reducers/user';

const mapStateToProps = (state) => ({
  signinErrors: state.user.signinErrors,
  emailInputSignin: state.user.emailInputSignin,
  passwordInputSignin: state.user.passwordInputSignin,
});

const mapDispatchToProps = (dispatch) => ({
  handleEmailInputSignin: (currentEmail) => {
    dispatch(handleEmailInputSignin(currentEmail));
  },
  handlePasswordInputSignin: (currentPassword) => {
    dispatch(handlePasswordInputSignin(currentPassword));
  },
  handleSignin: () => {
    dispatch(handleSigninSubmit());
  },
  clearSigninState: () => {
    dispatch(clearSigninState());
  }
});


const SignInFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInForm);

export default SignInFormContainer;
