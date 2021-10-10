import React from 'react';
import {
  Container,
  Image,
  QuantityContainer,
  NameContainer,
  Text,
  Quantity,
  DeleteButton,
  QuantityChangerButton,
} from './styles';

function CartItem({ image, name, quantity, price, id, changeProductQuantity }) {
  const totalPrice = (price * quantity).toFixed(2);

  return (
    <Container>
      <Image src={image} />
      <NameContainer>
        <Text>{name}</Text>
      </NameContainer>
      <Text>{`${totalPrice}€`}</Text>
      <QuantityContainer>
        <QuantityChangerButton onClick={() => changeProductQuantity(-1, id)}>
          -
        </QuantityChangerButton>
        <Quantity>{quantity}</Quantity>
        <QuantityChangerButton onClick={() => changeProductQuantity(1, id)}>
          +
        </QuantityChangerButton>
      </QuantityContainer>
      <DeleteButton>Remove</DeleteButton>
    </Container>
  );
}

export default CartItem;
