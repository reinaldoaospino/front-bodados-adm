import React from 'react';
import LoginPage from './pages/login/login.page';
import { createStructuredSelector } from "reselect";
import { selectIsCorrectUser } from './redux/user/user.selector';
import { connect } from 'react-redux';
import AdmPage from './pages/adm/adm.page';
import PrivateRoute from './hoc/private-route';
import PublicRoute from './hoc/public-route';



function App({ isCorrectUser }) {

  console.log(isCorrectUser);
  return (
    <div>
      <PrivateRoute component={AdmPage} exact path='/' />
      <PublicRoute component={LoginPage} exact path='/signin'/>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isCorrectUser: selectIsCorrectUser
})

export default connect(mapStateToProps)(App);
