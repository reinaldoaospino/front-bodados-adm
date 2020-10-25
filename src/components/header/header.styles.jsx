import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  position: fixed;
  top: 0px;
  background-color: white;
  width: 100%;
  z-index: 99;
  grid-template-columns: 50% 50%;
  align-items: center;
  text-align: center;
  color: black;
  box-shadow: 0px 10px 5px -5px rgba(242, 242, 242, 1);

  @media (max-width: 916px) {
  grid-template-columns: 20% 60% 20%;
  }
  @media (max-width: 399px) {
    grid-template-columns:16% 57% 31%;
    }
`;

export const LogoWrap = styled.div``;

export const Logo = styled.div`
  background-image: url(${(props) => props.ImageUrl});
  height: 70px;
  width: 270px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
  margin: auto;
`;
export const MenuWrap = styled.div``;

export const MenuOptionsWrap = styled.ul`
  display: grid;
  grid-template-columns: 25% 25%;
  justify-items: end;

  @media (max-width: 916px) {
    display: none;
  }
`;


export const ProductName = styled.span`
  font-family: "Sansita Swashed", cursive;
  font-size: 2.5em;
`;

