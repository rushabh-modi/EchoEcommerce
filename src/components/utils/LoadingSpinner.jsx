import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';

export const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <TailSpin
        height="80"
        width="80"
        color="#6254F3"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </LoadingSpinnerContainer>
  );
};

const LoadingSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
