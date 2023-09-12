import { useState } from "react";
import { useProductContext } from "../context/product_context";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import styled from "styled-components";
import { BlurhashCanvas } from "react-blurhash";

const About = () => {
  const { myName } = useProductContext();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Wrapper>
      {myName}

      <div className="container">
        <div className="grid grid-two-column">
          <div className="main-section-data">
            <p className="intro-data">Welcome to </p>
            <h1>Your Shopping Destinstion </h1>
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
              <div style={{ display: !imageLoaded ? "inline" : "none" }}>
                <BlurhashCanvas
                  hash="LKKUAz_N?v%000x[%MxGtmocrroM"
                  width="550"
                  height="375"
                />
              </div>
              <img
                src="https://user-images.githubusercontent.com/109070924/236440722-517ea978-90d8-41e4-8415-063e2c1f2d33.jpg"
                alt="about-img"
                className="img-style"
                style={{ display: imageLoaded ? "inline" : "none" }}
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
      content: "";
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
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default About;
