import React from 'react';
import LoginPage from './pages/login/login.page';
import { createStructuredSelector } from "reselect";
import { selectIsCorrectUser } from './redux/user/user.selector';
import { connect } from 'react-redux';
import AdmPage from './pages/adm/adm.page';
import PrivateRoute from './hoc/private-route';
import PublicRoute from './hoc/public-route';
import { AppContainer } from './App.styles';



function App({ isCorrectUser }) {
  return (
    <AppContainer>
      <PrivateRoute component={AdmPage} exact path='/' />
      <PublicRoute component={LoginPage} exact path='/signin'/>
    </AppContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  isCorrectUser: selectIsCorrectUser
})

export default connect(mapStateToProps)(App);
