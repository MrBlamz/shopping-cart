import React, { Fragment, useState } from 'react';
import {
  Container,
  LinkWrapper,
  NavLink,
  Logo,
  NavBar,
  MenuButton,
  MenuIcon,
  MobileMenu,
} from './styles';
import CartButton from '../CartButton';
import { isMobile } from 'react-device-detect';

const Navbar = ({ logoText, itemNumber }) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const handleClick = () => {
    mobileMenuIsOpen ? setMobileMenuIsOpen(false) : setMobileMenuIsOpen(true);
  };

  return (
    <NavBar>
      <Container>
        <Logo to='/'>{logoText}</Logo>
        {isMobile ? (
          <MenuButton onClick={handleClick}>
            <MenuIcon />
          </MenuButton>
        ) : (
          <Fragment>
            <LinkWrapper>
              <NavLink to='/shopping-cart'>Home</NavLink>
              <NavLink to='/shopping-cart/products'>Products</NavLink>
            </LinkWrapper>
            <CartButton itemNumber={itemNumber} />
          </Fragment>
        )}
      </Container>
      {mobileMenuIsOpen ? (
        <MobileMenu>
          <NavLink onClick={handleClick} to='/shopping-cart'>
            Home
          </NavLink>
          <NavLink onClick={handleClick} to='/shopping-cart/products'>
            Products
          </NavLink>
          <NavLink onClick={handleClick} to='/shopping-cart/cart'>
            Cart
          </NavLink>
        </MobileMenu>
      ) : null}
    </NavBar>
  );
};

export default Navbar;
