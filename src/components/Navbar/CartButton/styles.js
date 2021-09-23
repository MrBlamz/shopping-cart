import styled from 'styled-components';
import { BiCart } from 'react-icons/bi';

export const Container = styled.div`
  position: relative;
  margin: 1rem;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: black;
  color: #fff;
`;

export const CartIcon = styled(BiCart)`
  vertical-align: middle;
  font-size: 1.5rem;
`;

export const ItemNumber = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50px;
  background-color: #fff;
  font-size: 1rem;
  font-weight: bold;
`;
