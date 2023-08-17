import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 100+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://user-images.githubusercontent.com/109070924/236445032-d0b41443-a946-4c47-b8f4-3e35a5ec15de.png"
              alt="trusted-brands-accusoft"
            />
          </div>
          <div className="slide">
            <img
              src="https://user-images.githubusercontent.com/109070924/236445187-ccfbf157-19fd-4667-84e1-4025bdfba4b0.png"
              alt="trusted-brands-ati"
            />
          </div>
          <div className="slide">
            <img
              src="https://user-images.githubusercontent.com/109070924/236445223-9ae2945f-888b-486c-b08b-47db6cbe47e7.png"
              alt="trusted-brands-amd"
            />
          </div>
          <div className="slide">
            <img
              src="https://user-images.githubusercontent.com/109070924/236445238-b13b4e17-f846-47ec-8c45-fc46ca5c03bf.png"
              alt="trusted-brands-unity"
            />
          </div>
          <div className="slide">
            <img
              src="https://user-images.githubusercontent.com/109070924/236445252-bde3c659-4581-4b84-a4c2-8d574230096b.png"
              alt="trusted-brands-icloud"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
    margin-top: 2rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
