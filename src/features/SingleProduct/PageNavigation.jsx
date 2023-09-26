import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BiLeftArrowAlt } from 'react-icons/bi';

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/products">
        <BiLeftArrowAlt className="nav-single" />
        Products/{title}
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 5rem;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 2.2rem;
  }
`;

export default PageNavigation;
