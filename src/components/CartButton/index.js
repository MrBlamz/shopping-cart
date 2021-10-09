import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button, CartIcon, ItemNumber } from './styles';

const CartButton = ({ itemNumber }) => {
  const history = useHistory();

  function handleClick() {
    history.push('/cart');
  }

  return (
    <Container>
      <Button onClick={handleClick}>
        <CartIcon />
      </Button>
      {itemNumber ? <ItemNumber>{itemNumber}</ItemNumber> : null}
    </Container>
  );
};

export default CartButton;
