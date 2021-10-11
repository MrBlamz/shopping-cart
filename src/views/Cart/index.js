import React, { Fragment } from 'react';
import { Container, Title, Grid, Total } from './styles';
import CartItem from '../../components/CartItem';

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
          <Title>Your Cart</Title>
          <Grid>{cartItems}</Grid>
          <Total>{`Total: ${total.toFixed(2)}€`}</Total>
        </Fragment>
      ) : (
        <Title>Your cart is empty</Title>
      )}
    </Container>
  );
}

export default Cart;
