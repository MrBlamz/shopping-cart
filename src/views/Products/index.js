import React from 'react';
import { Container } from './styles';
import Product from '../../components/Product/index';

function Products({ list, onClick }) {
  const products = list.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      imgUrl={product.image}
      name={product.title}
      price={product.price + '€'}
      addToCart={onClick}
    />
  ));

  return <Container>{products}</Container>;
}

export default Products;
