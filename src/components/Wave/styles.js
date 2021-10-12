import styled from 'styled-components';
import svg from '../../assets/images/wavesNegative.svg';

const Wave = styled.div`
  width: 100%;
  height: 25vh;
  background-image: url(${svg});

  @media (max-width: 600px) {
    height: 15vh;
  }
`;

export default Wave;
