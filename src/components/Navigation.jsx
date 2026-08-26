import React from 'react';
import styled from 'styled-components';
import { size } from '../device';

const NavBar = styled.nav`
  width: 100%;
  background-color: #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImg = styled.img`
  height: 22px;
  width: auto;

  @media (max-width: ${size.mobile}) {
    height: 18px;
  }
`;

const Navigation = () => (
  <NavBar>
    <LogoLink href="https://www.columbiaspectator.com/" target="_blank" rel="noopener noreferrer">
      <LogoImg src="/spectator-logo.png" alt="Columbia Daily Spectator" />
    </LogoLink>
  </NavBar>
);

export default Navigation;
