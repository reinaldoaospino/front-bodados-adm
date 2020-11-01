import React, { useState } from "react";
import {
  AccessDeniedMessage,
  ButtonWrap,
  InputWrap,
  LoginForm,
  LoginTitleWrap,
  LoginWrap,
  Title,
} from "./login.styles";
import CustomImput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { fechAutenticationStart } from "../../redux/user/user.action";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthenticationDenied } from "../../redux/user/user.selector";
import { AppContainer } from "../../App.styles";

const LoginPage = ({ fetAutenticationStart, autenticationDenied }) => {
  const [userCredentials, setCredentials] = useState({
    user: "",
    password: "",
  });

  const { user, password } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    setCredentials({ user: "", password: "" });
    fetAutenticationStart(userCredentials);
  };

  const handleCHange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <AppContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginWrap>
          <LoginTitleWrap>
            <Title>Bocados admin</Title>
          </LoginTitleWrap>
          <InputWrap>
            <CustomImput
              name={"user"}
              value={user}
              text="Usuario"
              required={true}
              onChange={handleCHange}
            />
          </InputWrap>
          <InputWrap>
            <CustomImput
              name={"password"}
              type="password"
              value={password}
              text="Contraseña"
              required={true}
              onChange={handleCHange}
            />
          </InputWrap>

          <ButtonWrap>
            <CustomButton text="ingresar" />
          </ButtonWrap>
          <AccessDeniedMessage isDenied={autenticationDenied}>
            Usuario y/o clave incorrecto
          </AccessDeniedMessage>
        </LoginWrap>
      </LoginForm>
    </AppContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  autenticationDenied: selectAuthenticationDenied,
});

const mapDispatchToProps = (dispatch) => ({
  fetAutenticationStart: (userData) =>
    dispatch(fechAutenticationStart(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
