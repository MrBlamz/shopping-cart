import React, { Fragment } from 'react';
import {
  Container,
  Heading,
  EmptyCartHeadingContainer,
  EmptyCartHeading,
  Grid,
  Total,
  WaveContainer,
} from './styles';
import CartItem from '../../components/CartItem';
import Wave from '../../components/Wave/index';

function Cart({ items, changeProductQuantity, removeItemFromCart }) {
  const total = items.reduce(
    (previous, current) => previous + current.price * current.quantity,
    0
  );

  const cartItems = items.map((product) => (
    <CartItem
      key={product.id}
      id={product.id}
      image={product.image}
      name={product.title}
      price={product.price}
      quantity={product.quantity}
      changeProductQuantity={changeProductQuantity}
      removeItemFromCart={removeItemFromCart}
    />
  ));

  return (
    <Container>
      {cartItems.length ? (
        <Fragment>
          <Heading>Your Cart</Heading>
          <Grid>{cartItems}</Grid>
          <Total>{`Total: ${total.toFixed(2)}€`}</Total>
        </Fragment>
      ) : (
        <Fragment>
          <EmptyCartHeadingContainer>
            <EmptyCartHeading>Your cart is empty</EmptyCartHeading>
          </EmptyCartHeadingContainer>
          <WaveContainer>
            <Wave />
          </WaveContainer>
        </Fragment>
      )}
    </Container>
  );
}

export default Cart;
