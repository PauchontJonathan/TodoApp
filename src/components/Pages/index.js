import React from 'react';
import SignInForm from 'src/components/Pages/SignInForm';
import Main from 'src/components/Pages/Main';
import SignUpForm from 'src/components/Pages/SignUpForm';
import { Route } from 'react-router-dom';


import './pages.scss';

const Pages = () => {
  return (
    <div className="pages">
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/signin">
        <SignInForm />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
    </div>
  )
}

export default Pages;