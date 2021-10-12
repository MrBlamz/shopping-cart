import React from 'react';
import { isMobile } from 'react-device-detect';
import {
  Container,
  Image,
  InfoContainer,
  QuantityContainer,
  NameContainer,
  Text,
  Quantity,
  DeleteButton,
  QuantityChangerButton,
} from './styles';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

function CartItem({
  image,
  name,
  quantity,
  price,
  id,
  changeProductQuantity,
  removeItemFromCart,
}) {
  const totalPrice = (price * quantity).toFixed(2);

  const truncateText = (text) => {
    return text.length <= 15 ? text : `${text.substring(0, 15)}...`;
  };

  return isMobile ? (
    <Container>
      <Image src={image} />
      <InfoContainer>
        <NameContainer>
          <Text>{truncateText(name)}</Text>
        </NameContainer>
        <Text>{`${totalPrice}€`}</Text>
        <QuantityContainer>
          <QuantityChangerButton
            disabled={quantity === 1}
            onClick={() => changeProductQuantity(-1, id)}
          >
            <AiFillMinusCircle />
          </QuantityChangerButton>
          <Quantity>{quantity}</Quantity>
          <QuantityChangerButton onClick={() => changeProductQuantity(1, id)}>
            <AiFillPlusCircle />
          </QuantityChangerButton>
        </QuantityContainer>
        <DeleteButton onClick={() => removeItemFromCart(id)}>
          Remove
        </DeleteButton>
      </InfoContainer>
    </Container>
  ) : (
    <Container>
      <Image src={image} />
      <NameContainer>
        <Text>{name}</Text>
      </NameContainer>
      <Text>{`${totalPrice}€`}</Text>
      <QuantityContainer>
        <QuantityChangerButton
          disabled={quantity === 1}
          onClick={() => changeProductQuantity(-1, id)}
        >
          <AiFillMinusCircle />
        </QuantityChangerButton>
        <Quantity>{quantity}</Quantity>
        <QuantityChangerButton onClick={() => changeProductQuantity(1, id)}>
          <AiFillPlusCircle />
        </QuantityChangerButton>
      </QuantityContainer>
      <DeleteButton onClick={() => removeItemFromCart(id)}>Remove</DeleteButton>
    </Container>
  );
}

export default CartItem;
