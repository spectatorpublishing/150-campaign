import React from 'react';
import styled from 'styled-components';
import { size } from '../device';

const FooterEl = styled.footer`
  background-color: #1c1c1c;
  color: white;
  padding: 3rem 2rem;
  text-align: center;

  @media (max-width: ${size.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

const LogoLink = styled.a`
  display: inline-block;
  margin-bottom: 1.25rem;
`;

const LogoImg = styled.img`
  height: 20px;
  width: auto;
  filter: brightness(0) invert(1);
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const FooterLink = styled.a`
  color: #aaa;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.85rem;

  &:hover {
    color: white;
  }
`;

const Copyright = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8rem;
  color: #666;
  margin: 0;
`;

const Footer = () => (
  <FooterEl>
    <LogoLink href="https://www.columbiaspectator.com/" target="_blank" rel="noopener noreferrer">
      <LogoImg src="/spectator-logo.png" alt="Columbia Daily Spectator" />
    </LogoLink>
    <Links>
      <FooterLink href="https://www.columbiaspectator.com/" target="_blank" rel="noopener noreferrer">
        Columbia Spectator
      </FooterLink>
      <FooterLink href="#faq">FAQ</FooterLink>
      <FooterLink href="#mission">Our Mission</FooterLink>
    </Links>
    <Copyright>© {new Date().getFullYear()} Columbia Daily Spectator. All rights reserved.</Copyright>
  </FooterEl>
);

export default Footer;
