/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './signupform.scss';

const SignUpForm = () => {
  return (
    <div className="signup">
      <h1 className="signup-title">Allez viens, on a des cookies !</h1>
      <form type="post" className="signup-form">
        <label htmlFor="nickname" className="signup-form-label">Pseudo</label>
        <input className="signup-form-input" name="nickname" type="text" placeholder="Là c'est pour ton pseudo"/>
        <label htmlFor="email" className="signup-form-label">Email</label>
        <input className="signup-form-input" name="email" type="email" placeholder="Et ici c'est pour ton email"/>
        <label htmlFor="password" className="signup-form-label">Mot-de-passe</label>
        <input className="signup-form-input" name="password" type="password" placeholder="Là c'est secret !! Chut !"/>
        <button type="submit" className="signup-form-submit">s'inscrire</button>
      </form>
    </div>
  )
}

export default SignUpForm;