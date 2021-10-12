import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

const styles = css`
  text-decoration: none;
  color: #fff;
`;

export const NavBar = styled.nav`
  background-color: red;
  padding: 1rem 3rem;
  width: 100vw;
  position: relative;
  z-index: 9999;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    overflow: hidden;
    position: relative;
  }
`;

export const Logo = styled(Link)`
  ${styles}
  font-size: 2rem;
  font-weight: 600;
`;

export const LinkWrapper = styled.div`
  margin-left: auto;
`;

export const NavLink = styled(Link)`
  ${styles}
  padding: 1rem;
  font-size: 1.3rem;

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin-left: auto;
`;

export const MenuIcon = styled(AiOutlineMenu)`
  font-size: 2rem;
  vertical-align: middle;
  color: #fff;
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
