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
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/products'>Products</NavLink>
            </LinkWrapper>
            <CartButton itemNumber={itemNumber} />
          </Fragment>
        )}
      </Container>
      {mobileMenuIsOpen ? (
        <MobileMenu>
          <NavLink onClick={handleClick} to='/'>
            Home
          </NavLink>
          <NavLink onClick={handleClick} to='/products'>
            Products
          </NavLink>
          <NavLink onClick={handleClick} to='/cart'>
            Cart
          </NavLink>
        </MobileMenu>
      ) : null}
    </NavBar>
  );
};

export default Navbar;
