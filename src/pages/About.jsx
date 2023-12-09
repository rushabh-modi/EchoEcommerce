import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../styles/Button';

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="main-section-data">
            <p className="intro-data">Welcome to </p>
            <h1>Your Shopping Destination</h1>
            <p>
              At EchoEcommerce, we're passionate about providing high-quality
              products that make life easier for our customers. Our Website is
              made up of ensuring your shopping experience is smooth and
              stress-free. We pride ourselves on offering exceptional customer
              service and stand behind every product we sell. Thank you for
              choosing EchoEcommerce for your online shopping needs.
            </p>
            <NavLink to="/products">
              <Button>Let's Shop</Button>
            </NavLink>
          </div>

          {/* AboutPage image */}
          <div className="main-section-image">
            <figure>
              <img
                src="/images/about.jpg"
                alt="about-img"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .main-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 5rem;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }

  .main-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;
    &::after {
      content: '';
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }

  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: '';
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default About;
