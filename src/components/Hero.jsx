import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { size } from '../device';
import { DONATE_URL } from '../data/content';

const HeroSection = styled.section`
  background-color: #1c1c1c;
  color: white;
  height: calc(100vh - 44px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 2rem 0;
  padding-bottom: 15vh;
  position: relative;

  @media (max-width: ${size.mobile}) {
    padding: 2rem 1.5rem 28vh;
  }
`;

const Title = styled.h1`
  font-family: 'Bitter', serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  margin: 0 0 1.5rem;
  line-height: 1.05;
  letter-spacing: -0.01em;
`;

const Subtitle = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  color: #ffffff;
  line-height: 1.5;
  max-width: 520px;
  margin: 0 0 2.5rem;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const OutlineButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  border: 2px solid white;
  border-radius: 100px;
  color: white;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #faf8f5;
    color: #1c1c1c;
  }
`;

const FilledButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: #7ecff4;
  border: 2px solid #7ecff4;
  border-radius: 100px;
  color: #1c1c1c;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  transition: background-color 0.2s, border-color 0.2s;

  &:hover {
    background-color: #93d9f8;
    border-color: #93d9f8;
  }
`;

const ScrollCue = styled.a`
  position: absolute;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const ScrollLabel = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const Arrow = styled.svg``;

const Hero = () => (
  <HeroSection>
    <Title>Secure the Spec</Title>
    <Subtitle>
      A campaign for the next 150 years of independent student journalism.
    </Subtitle>
    <ButtonRow>
      <FilledButton to={DONATE_URL}>
        Donate Now
      </FilledButton>
    </ButtonRow>

    <ScrollCue href="#mission">
      <ScrollLabel>Learn more</ScrollLabel>
      <Arrow width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </Arrow>
    </ScrollCue>
  </HeroSection>
);

export default Hero;
