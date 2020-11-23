/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './signupform.scss';

const SignUpForm = ({
  nicknameInput,
  emailInput,
  passwordInput,
  handleNickname,
  handleEmail,
  handlePassword,
  handleSignUp,
  signupErrors,
  signupSuccessMessage,
}) => {

  const handleNicknameValue = (e) => {
    const { value } = e.target;
    handleNickname(value)
  };

  const handleEmailValue = (e) => {
    const { value } = e.target;
    handleEmail(value);
  };

  const handlePasswordValue = (e) => {
    const { value } = e.target;
    handlePassword(value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSignUp();
  }

  return (
    <div className="signup">
      <h1 className="signup-title">Allez viens, on a des cookies !</h1>
      <form type="post" className="signup-form" onSubmit={handleSubmitForm}>
        <label htmlFor="nickname" className="signup-form-label">Pseudo</label>
        <input className="signup-form-input" name="nickname" type="text" placeholder="Là c'est pour ton pseudo" onChange={handleNicknameValue} value={nicknameInput}/>
        <p className="signup-form-description">Je dois comporter au moins 5 caractères</p>
        <label htmlFor="email" className="signup-form-label">Email</label>
        <input className="signup-form-input" name="email" type="email" placeholder="Et ici c'est pour ton email" onChange={handleEmailValue} value={emailInput}/>
        <label htmlFor="password" className="signup-form-label">Mot-de-passe</label>
        <input className="signup-form-input" name="password" type="password" placeholder="Là c'est secret !! Chut !" onChange={handlePasswordValue} value={passwordInput}/>
        <p className="signup-form-description">Je dois comporter au moins 5 caractères</p>
        <button type="submit" className="signup-form-submit">s'inscrire</button>
        { signupSuccessMessage && <p className="signup-form-success">{signupSuccessMessage}</p> }
        { signupErrors &&
        (
          <>
            {signupErrors.map((error) => (
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

export default SignUpForm;

SignUpForm.propTypes = {
  handleNickname: PropTypes.func.isRequired,
  nicknameInput: PropTypes.string.isRequired,
  emailInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  signupErrors: PropTypes.array,
  signupSuccessMessage: PropTypes.array,
};

SignUpForm.defaultProps = {
  signupErrors: null,
  signupSuccessMessage: null,
}