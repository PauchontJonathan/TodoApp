import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SignInForm from 'src/containers/Pages/SignInForm';
import Main from 'src/components/Pages/Main';
import ConnectedMain from 'src/containers/Pages/ConnectedMain';
import SignUpForm from 'src/containers/Pages/SignUpForm';
import { Route, Redirect } from 'react-router-dom';


import './pages.scss';

const Pages = ({ logged, receiveToken, getUserDatas, isDatasReceived }) => {
  const currentToken = localStorage.getItem('token');
  useEffect(() => {
    if (currentToken) {
      receiveToken(currentToken);
      getUserDatas();
    }
  }, [logged])


  return (
    <div className="pages">
      <Route exact path="/">
        { currentToken ? <ConnectedMain isDatasReceived={isDatasReceived} /> : <Main />}
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
  getUserDatas: PropTypes.func.isRequired,
  isDatasReceived: PropTypes.bool.isRequired,
};