import React from 'react';
import styled from 'styled-components';
import { size } from '../device';

const FooterEl = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 3.5rem 4rem;

  @media (max-width: ${size.mobile}) {
    padding: 2.5rem 1.75rem;
  }
`;

const LogoRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const LogoImg = styled.img`
  height: 22px;
  width: auto;
  filter: brightness(0) invert(1);
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const Col = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9rem;
  line-height: 1.7;
  color: #fff;
`;

const Footer = () => (
  <FooterEl>
    <LogoRow>
      <LogoImg src="/spectator-logo.png" alt="Columbia Daily Spectator" />
    </LogoRow>
    <Columns>
      <Col>
        <strong>Contact:</strong><br />
        150 Campaign Committee<br />
        <a href="mailto:giving@columbiaspectator.com" style={{ color: '#fff', fontWeight: '700', textDecoration: 'none' }}>giving@columbiaspectator.com</a>
      </Col>
      <Col>
        Spectator Publishing Company<br />
        490 Riverside Dr.<br />
        Rm. 414<br />
        New York, NY, 10027
      </Col>
      <Col>
        Spectator Publishing Company is a 501(c)(3) nonprofit organization. All contributions are tax-deductible to the fullest extent allowed by law. Our EIN is 13-1975005.
      </Col>
    </Columns>
  </FooterEl>
);

export default Footer;
