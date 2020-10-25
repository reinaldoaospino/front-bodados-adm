import styled from "styled-components";

export const LoginPageCotainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid;
  font-family: "Raleway", sans-serif;
  box-shadow: 0px 10px 5px 10px rgba(242, 242, 242, 1);
  border: 1px solid;
  border-radius: 20px;
  width: 550px;

  @media (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 430px) {
    width: 300px;
  }

  @media (max-width: 313px) {
    width: 250px;
  }
`;

export const LoginForm = styled.form``;

export const LoginWrap = styled.div`
  display: grid;
  padding: 100px;
  grid-gap: 24px;

  @media (max-width: 600px) {
    padding: 50px;
  }

  @media (max-width: 430px) {
    padding: 30px;
  }

  @media (max-width: 313px) {
    padding: 20px;
  }
`;

export const LoginTitleWrap = styled.div``;

export const Title = styled.h2`
text-align: center;
Semi-bold 600;


`;

export const InputWrap = styled.div``;

export const ButtonWrap = styled.div``;


export const FeatureProductQuestion= styled.span``

export const AccessDeniedMessage = styled.p`
text-align: center;
visibility: ${(props) => (props.isDenied ? "visible" : "hidden")};
`;
