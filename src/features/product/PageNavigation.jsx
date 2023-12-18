import { NavLink } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';

import { styled } from '../../styles';

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/products" className="nav-single">
        <BiLeftArrowAlt className="icon" />
        <span className="text">Products/{title}</span>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 3rem;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.2rem;
  padding-left: 1.2rem;

  .nav-single {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    transition: color 0.3s linear;

    .icon {
      width: 2.2rem;
      height: 2.2rem;
    }

    .text {
      display: inline-block;
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }
`;

export default PageNavigation;
