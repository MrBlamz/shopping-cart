import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const styles = css`
  text-decoration: none;
  color: #fff;
`;

export const Nav = styled.nav`
  background-color: red;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const Logo = styled.h1`
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
`;
