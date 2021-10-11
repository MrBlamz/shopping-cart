import React from 'react';
import { Container, Ring } from './styles';

function Spinner() {
  return (
    <Container>
      <Ring>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Ring>
    </Container>
  );
}

export default Spinner;
