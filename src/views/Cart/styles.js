import styled from 'styled-components';

export const Container = styled.div`
  margin: 1.5rem 10rem;

  @media (max-width: 600px) {
    margin: 1.5rem;
  }
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 2.3rem;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
export const EmptyCartHeadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  pointer-events: none;
`;

export const EmptyCartHeading = styled.h2`
  font-size: 5rem;

  @media (max-width: 600px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  overflow-y: auto;
`;

export const Total = styled.h2`
  text-align: center;
  font-size: 2.3rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const WaveContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
