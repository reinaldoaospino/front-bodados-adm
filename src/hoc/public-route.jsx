import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectIsCorrectUser } from "../redux/user/user.selector";

const PublicRoute = ({ component: Component, isCorrectUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isCorrectUser ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = createStructuredSelector({
  isCorrectUser: selectIsCorrectUser,
});

export default connect(mapStateToProps)(PublicRoute);
