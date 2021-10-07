import React from 'react';
import {
  Container,
  ImageContainer,
  Image,
  Separator,
  InfoContainer,
  Price,
  Name,
  AddButton,
} from './styles';

function Product({ name, imgUrl, price, addToCart }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={imgUrl} />
      </ImageContainer>
      <Separator />
      <InfoContainer>
        <Name>{name}</Name>
        <Price>{price}</Price>
        <AddButton onClick={addToCart}>Add to Cart</AddButton>
      </InfoContainer>
    </Container>
  );
}

export default Product;
