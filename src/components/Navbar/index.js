import React from 'react';
import { LinkWrapper, NavLink, Logo, Nav } from './styles';
import CartButton from '../CartButton';

const Navbar = ({ logoText, itemNumber }) => (
  <Nav>
    <NavLink to='/'>
      <Logo>{logoText}</Logo>
    </NavLink>
    <LinkWrapper>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/products'>Products</NavLink>
    </LinkWrapper>
    <CartButton itemNumber={itemNumber} />
  </Nav>
);

export default Navbar;
