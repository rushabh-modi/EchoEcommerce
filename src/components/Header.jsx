import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          src="https://user-images.githubusercontent.com/109070924/236442235-9115d45f-b21b-4527-9153-a3d1430cf354.png"
          alt="icon logo"
        />
      </NavLink>
      <h2>EchoEcommerce</h2>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
  h2 {
    font-size: 3.5rem;
    margin-right: 40rem;
  }
`;
export default Header;
