import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const StyledHeader = styled.header`
  display: flex;
  padding: 20px;
  background-color: #a0c2ab;
  color: #fff;
  justify-content: space-around;
  max-width: 100%;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
`;
const StyledList = styled.ul`
  display: flex;
  min-width: 300px;
  list-style: none;
  font-size: 24px;
  justify-content: space-between;
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title> My blog app </Title>

      <StyledNavigation>
        <StyledList>
          <li>
            <NavLink
              exact
              to="/"
              activeClassName={styles.activeNav}
              className={styles.navlink}
            >
              Main
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/posts"
              activeClassName={styles.activeNav}
              className={styles.navlink}
            >
              All posts
            </NavLink>
          </li>
        </StyledList>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default Header;
