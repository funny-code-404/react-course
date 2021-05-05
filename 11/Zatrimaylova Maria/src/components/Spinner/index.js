import styled from 'styled-components';

const Spinner = () => {
  return (
    <SpinnerTitle>
      Loading...
    </SpinnerTitle>
  )
};

const SpinnerTitle = styled.h1`
  text-align: center;
  margin-top: 300px;
`;

export default Spinner;