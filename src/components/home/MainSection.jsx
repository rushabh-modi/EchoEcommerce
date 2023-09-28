import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BlurhashCanvas } from 'react-blurhash';

import { Button } from '../../styles/Button';

const MainSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="main-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> EchoEcommerce </h1>
            <p>
              Welcome to EchoEcommerce, your one-stop destination for all your
              online shopping needs! We offer a wide range of products from
              various categories including electronics items ranging from
              Mobiles, Laptops and Accessories.
            </p>
            <NavLink to="/products">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          {/* our homepage image */}
          <div className="main-section-image">
            <figure>
              <div style={{ display: !imageLoaded ? 'inline' : 'none' }}>
                <BlurhashCanvas
                  hash="LjRVa{t7.TRj-=f+S1n%u5WAVXbI"
                  width="560"
                  height="400"
                />
              </div>
              <img
                src="https://user-images.githubusercontent.com/109070924/236439782-57d0637f-c3bb-4589-8106-0f33678ad94d.jpg"
                alt="home-img"
                className="img-style"
                style={{ display: imageLoaded ? 'inline' : 'none' }}
                onLoad={() => {
                  setImageLoaded(true);
                }}
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

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
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default MainSection;
