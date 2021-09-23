import React from 'react';
import { Container, Button, CartIcon, ItemNumber } from './styles';

const CartButton = ({ itemNumber }) => (
  <Container>
    <Button>
      <CartIcon />
    </Button>
    {itemNumber ? <ItemNumber>{itemNumber}</ItemNumber> : null}
  </Container>
);

export default CartButton;
