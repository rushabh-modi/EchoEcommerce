import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" className="logo-link">
        <img
          src="https://user-images.githubusercontent.com/109070924/236601488-6c60f98a-ad2a-40a9-922a-e6bf7e0d56c6.png"
          alt="icon logo"
          width="56px"
          height="56px"
        />
        <h2>EchoEcommerce</h2>
      </NavLink>
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
    font-size: 4rem;
    margin: 0.5rem 0 0 0.5rem;
  }
  .logo-link {
    display: inline-flex;
    align-items: center;
  }
`;
export default Header;
