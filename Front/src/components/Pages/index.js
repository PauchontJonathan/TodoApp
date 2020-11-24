import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SignInForm from 'src/containers/Pages/SignInForm';
import Main from 'src/components/Pages/Main';
import ConnectedMain from 'src/components/Pages/ConnectedMain';
import SignUpForm from 'src/containers/Pages/SignUpForm';
import { Route, Redirect } from 'react-router-dom';


import './pages.scss';

const Pages = ({ logged, receiveToken }) => {
  const currentToken = localStorage.getItem('token');
  useEffect(() => {
    if (currentToken) {
      receiveToken(currentToken);
    }
  }, [logged])


  return (
    <div className="pages">
      <Route exact path="/">
        { currentToken ? <ConnectedMain /> : <Main />}
      </Route>
      { !currentToken && (
        <>
          <Route path="/signin">
            <SignInForm />
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
        </>
      )}
      {currentToken && <Redirect to="/" />}
    </div>
  )
}

export default Pages;

Pages.propTypes = {
  logged: PropTypes.bool.isRequired,
  receiveToken: PropTypes.func.isRequired,
};