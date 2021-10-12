import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Title, Button, WaveContainer } from './styles';
import Wave from '../../components/Wave/index';

function Home() {
  const history = useHistory();

  function handleClick() {
    history.push('/shopping-cart/products');
  }

  return (
    <Container>
      <Title>Your Favorite Clothing Store</Title>
      <Button onClick={handleClick}>Shop Now</Button>
      <WaveContainer>
        <Wave />
      </WaveContainer>
    </Container>
  );
}

export default Home;
