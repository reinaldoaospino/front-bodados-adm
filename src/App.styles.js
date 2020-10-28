import styled from 'styled-components';

export const AppContainer = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: 1px solid;
font-family: "Raleway", sans-serif;
box-shadow: 0px 10px 5px 10px rgba(242, 242, 242, 1);
border: 1px solid;
border-radius: 20px;
width: 517px;
max-width: max-content;

@media (max-width: 600px) {
  max-width: 400px;
}

`