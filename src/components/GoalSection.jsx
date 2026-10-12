import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { size } from '../device';
import { DONATE_URL } from '../data/content';
import DonorOpportunities from './DonorOpportunities';

function useFadeIn(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const Wrapper = styled.div`
  background-color: #faf8f5;
`;

const HeroSection = styled.section`
  padding: 5rem 2rem 2.5rem;
  text-align: center;

  @media (max-width: ${size.mobile}) {
    padding: 3.5rem 1.5rem 2rem;
  }
`;

const HeroInner = styled.div`
  max-width: 760px;
  margin: 0 auto;

  & > * {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.75s ease, transform 0.75s ease;
  }

  &.visible > *:nth-child(1) { transition-delay: 0s; }
  &.visible > *:nth-child(2) { transition-delay: 0.1s; }
  &.visible > *:nth-child(3) { transition-delay: 0.22s; }

  &.visible > * {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionLabel = styled.h2`
  font-family: 'Bitter', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #1c1c1c;
  margin: 0 0 1.25rem;
  text-decoration: underline;
  text-decoration-color: #7ecff4;
  text-decoration-thickness: 3px;
  text-underline-offset: 0.2em;
`;

const BigNumber = styled.h2`
  font-family: 'Bitter', serif;
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 700;
  color: #1c1c1c;
  line-height: 1;
  margin: 0 0 1.25rem;
  letter-spacing: -0.02em;
`;

const HeroTagline = styled.p`
  font-family: 'Bitter', serif;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 600;
  color: #555;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.5;
`;

const CardsSection = styled.section`
  padding: 1.5rem 2rem 4.5rem;

  @media (max-width: ${size.mobile}) {
    padding: 1rem 1.5rem 3rem;
  }
`;

const CardGridInner = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  & > * {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }

  &.visible > *:nth-child(1) { transition-delay: 0s; }
  &.visible > *:nth-child(2) { transition-delay: 0.13s; }

  &.visible > * {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: ${size.mobile}) {
    grid-template-columns: 1fr;

    &.visible > *:nth-child(2) { transition-delay: 0s; }
  }
`;

const Card = styled.div`
  border-radius: 1.75rem;
  padding: 2.75rem 2.5rem;
  background-color: ${({ $dark }) => $dark ? '#1c1c1c' : '#7ecff4'};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${size.mobile}) {
    padding: 2rem 1.75rem;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Bitter', serif;
  font-size: clamp(1.6rem, 3vw, 2.1rem);
  font-weight: 700;
  color: ${({ $dark }) => $dark ? '#fff' : '#1c1c1c'};
  margin: 0;
  line-height: 1.15;
`;

const CardDesc = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 0.97rem;
  line-height: 1.72;
  color: ${({ $dark }) => $dark ? '#fff' : '#1c1c1c'};
  margin: 0;
`;

const DonateBar = styled.div`
  background-color: #1c1c1c;
  padding: 3.5rem 2rem;
  text-align: center;
`;

const DonateHeading = styled.p`
  font-family: 'Bitter', serif;
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  color: white;
  margin: 0 0 1.5rem;
`;

const DonateButton = styled(Link)`
  display: inline-block;
  padding: 0.85rem 2.5rem;
  background-color: #7ecff4;
  border-radius: 100px;
  color: #1c1c1c;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  transition: background-color 0.2s;

  &:hover { background-color: #93d9f8; }
`;

const GoalSection = () => {
  const [heroRef, heroVisible] = useFadeIn(0.1);
  const [cardsRef, cardsVisible] = useFadeIn(0.1);

  return (
    <Wrapper id="goal">
      <HeroSection>
        <HeroInner ref={heroRef} className={heroVisible ? 'visible' : ''}>
          <SectionLabel>Our Goal</SectionLabel>
          <BigNumber>$1.5M</BigNumber>
          <HeroTagline>To fortify Spectator and invest in its people.</HeroTagline>
        </HeroInner>
      </HeroSection>

      <CardsSection>
        <CardGridInner>
          <CardGrid ref={cardsRef} className={cardsVisible ? 'visible' : ''}>
            <Card>
              <CardTitle>Secure the Future</CardTitle>
              <CardDesc>
                A major boost to Spectator's endowment—generating income in perpetuity to backstop operations, protect editorial independence, and let Spec plan boldly for decades to come.
              </CardDesc>
            </Card>

            <Card $dark>
              <CardTitle $dark>Invest in People</CardTitle>
              <CardDesc $dark>
                A new suite of programs to attract journalists from every background, reward outstanding reporting, and launch graduates into their first jobs.
              </CardDesc>
            </Card>
          </CardGrid>
        </CardGridInner>
      </CardsSection>

      <DonorOpportunities />

      <DonateBar>
        <DonateHeading>Help secure Spectator's next 150 years.</DonateHeading>
        <DonateButton to={DONATE_URL}>Donate Now</DonateButton>
      </DonateBar>
    </Wrapper>
  );
};

export default GoalSection;
