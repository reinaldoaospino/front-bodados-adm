import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 200;
  background: rgba(0, 0, 0, 0.22);
  background: white;
`;
