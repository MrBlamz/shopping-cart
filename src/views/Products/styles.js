import styled from 'styled-components';

export const Container = styled.div`
  margin: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;

  @media (max-width: 600px) {
    margin: 1.5rem;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.5rem;
  }
`;
