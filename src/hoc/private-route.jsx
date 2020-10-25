import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Header from "../components/header/header.component";
import { selectIsCorrectUser } from "../redux/user/user.selector";

const PrivateRoute = ({ component: Component, isCorrectUser, ...rest }) => {
  return (
    <div>

      <Header/>
      <Route
        {...rest}
        render={(props) =>
          isCorrectUser ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCorrectUser: selectIsCorrectUser,
});

export default connect(mapStateToProps)(PrivateRoute);
