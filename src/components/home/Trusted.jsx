import { styled } from '../../styles';

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 100+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img src="/images/accusoft.png" alt="trusted-brands-accusoft" />
          </div>
          <div className="slide">
            <img src="/images/ati.png" alt="trusted-brands-ati" />
          </div>
          <div className="slide">
            <img src="/images/amd.png" alt="trusted-brands-amd" />
          </div>
          <div className="slide">
            <img src="/images/unity.png" alt="trusted-brands-unity" />
          </div>
          <div className="slide">
            <img src="/images/icloud.png" alt="trusted-brands-icloud" />
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
      text-align: center;
    }
  }
`;

export default Trusted;
