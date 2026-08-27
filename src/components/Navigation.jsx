import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { size } from '../device';

const NavBar = styled.nav`
  width: 100%;
  background-color: #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.1rem 2rem;
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
  height: 26px;
  width: auto;

  @media (max-width: ${size.mobile}) {
    height: 20px;
  }
`;

const NavLinks = styled.div`
  position: absolute;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 1.75rem;

  @media (max-width: ${size.mobile}) {
    display: none;
  }
`;

const NavLink = styled(RouterNavLink)`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #ffffff;
    text-decoration: underline;
    text-decoration-color: #7ecff4;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.25em;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  position: absolute;
  right: 1.25rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: ${size.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Drawer = styled.div`
  display: none;

  @media (max-width: ${size.mobile}) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(28, 28, 28, 0.9);
    backdrop-filter: blur(4px);
    padding: 1rem 1.5rem 1.25rem;
    gap: 1.1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

const DrawerLink = styled(RouterNavLink)`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #ffffff;
    text-decoration: underline;
    text-decoration-color: #7ecff4;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.25em;
  }
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <NavBar style={{ position: 'sticky', flexWrap: 'wrap' }}>
      <LogoLink href="https://www.columbiaspectator.com/" target="_blank" rel="noopener noreferrer">
        <LogoImg src="/spectator-logo.png" alt="Columbia Daily Spectator" />
      </LogoLink>

      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/donate">Donate</NavLink>
      </NavLinks>

      <HamburgerButton onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </HamburgerButton>

      <Drawer open={open}>
        <DrawerLink to="/">Home</DrawerLink>
        <DrawerLink to="/donate">Donate</DrawerLink>
      </Drawer>
    </NavBar>
  );
};

export default Navigation;
