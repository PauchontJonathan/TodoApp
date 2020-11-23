/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './signinform.scss';

const SignInForm = ({
  emailInputSignin,
  passwordInputSignin,
  handleEmailInputSignin,
  handlePasswordInputSignin,
  handleSignin,
  signinErrors,
  clearSigninState,
}) => {

  useEffect(() => {
    return () => {
      clearSigninState();
    }
  }, []);

  const handleEmail = (e) => {
    const { value } = e.target;
    handleEmailInputSignin(value);
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    handlePasswordInputSignin(value);
  };

  const handleSigninSub = (e) => {
    e.preventDefault();
    handleSignin();
  };

  return (
    <div className="signin">
      <h1 className="signin-title">Tu as un compte ? C'est que tu es prêt !</h1>
      <form type="post" className="signin-form" onSubmit={handleSigninSub}>
        <label htmlFor="email" className="signin-form-label">Email</label>
        <input className="signin-form-input" name="email" type="email" placeholder="Et ici c'est pour ton email" onChange={handleEmail} value={emailInputSignin}/>
        <label htmlFor="password" className="signin-form-label">Mot-de-passe</label>
        <input className="signin-form-input" name="password" type="password" placeholder="Là c'est secret !! Chut !" onChange={handlePassword} value={passwordInputSignin}/>
        <p className="signin-form-description">Je dois comporter au moins 5 caractères</p>
        <button type="submit" className="signin-form-submit">Se connecter</button>
        { signinErrors &&
        (
          <>
            {signinErrors.map((error) => (
              <p key={error.key} className="signup-form-error">{error.content}</p>
            ))
            }
          </>
        )
        }
      </form>
    </div>
  )
}

export default SignInForm;

SignInForm.propTypes = {
  emailInputSignin: PropTypes.string.isRequired,
  passwordInputSignin: PropTypes.string.isRequired,
  handleEmailInputSignin: PropTypes.func.isRequired,
  handlePasswordInputSignin: PropTypes.func.isRequired,
  handleSignin: PropTypes.func.isRequired,
  signinErrors: PropTypes.array,
  clearSigninState: PropTypes.func.isRequired,
};

SignInForm.defaultProps = {
  signinErrors: null,
};