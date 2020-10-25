import styled from "styled-components";

export const AdmContainer = styled.div`
  display: grid;
  padding: 100px;
  grid-gap: 24px;
  text-decoration: none;

  @media (max-width: 600px) {
    padding: 50px;
  }
`;

export const OptionWrap = styled.div`
  display: grid;
  grid-gap: 20px;
  text-align: center;
`;

export const OptionTitle = styled.span`
  font-size: 1.4em;
`;

export const Option = styled.span`
  background-color: #f5f5eb;
  border-radius: 10px;
  box-shadow: -1px 7px 38px -9px rgba(235, 226, 235, 0.57);
  font-size: 1.1em;
`;
