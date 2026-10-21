import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { size } from '../device';
import { DONATE_URL } from '../data/content';
import specLogosBg from '../assets/page-imgs/spec-logos-bg.png';

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
  background-color: #e8d9b5;
  background-image: linear-gradient(rgba(232, 217, 181, 0.6), rgba(232, 217, 181, 0.6)), url(${specLogosBg});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  padding: 5rem 2rem;

  @media (max-width: ${size.mobile}) {
    padding: 3.5rem 1.5rem;
  }
`;

const TextBox = styled.div`
  max-width: 760px;
  margin: 0 auto;
  background-color: rgba(40, 40, 40, 0.95);
  border-radius: 1rem;
  padding: 3rem 3.5rem;

  @media (max-width: ${size.mobile}) {
    padding: 2rem 1.75rem;
  }
`;

const Inner = styled.div`
  & > * {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.75s ease, transform 0.75s ease;
  }

  &.visible > *:nth-child(1) { transition-delay: 0s; }
  &.visible > *:nth-child(2) { transition-delay: 0.1s; }
  &.visible > *:nth-child(3) { transition-delay: 0.2s; }
  &.visible > *:nth-child(4) { transition-delay: 0.3s; }
  &.visible > *:nth-child(5) { transition-delay: 0.4s; }
  &.visible > *:nth-child(6) { transition-delay: 0.5s; }

  &.visible > * {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionLabel = styled.h2`
  font-family: 'Bitter', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #fff;
  margin: 0 0 1.5rem;
  text-decoration: underline;
  text-decoration-color: #7ecff4;
  text-decoration-thickness: 3px;
  text-underline-offset: 0.2em;
`;

const BigNumber = styled.h2`
  font-family: 'Bitter', serif;
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 700;
  color: #fff;
  line-height: 1;
  margin: 0 0 1.25rem;
  letter-spacing: -0.02em;
`;

const HeroTagline = styled.p`
  font-family: 'Bitter', serif;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin: 0 0 2.5rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0 0 2rem;
`;

const GoalTitle = styled.h3`
  font-family: 'Bitter', serif;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.75rem;
  line-height: 1.15;
`;

const GoalDesc = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 0.97rem;
  line-height: 1.72;
  color: #fff;
  margin: 0 0 2rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const LeadershipNote = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 0.9rem;
  line-height: 1.72;
  color: #fff;
  margin: 1.25rem 0 0;

  a {
    color: #7ecff4;
  }
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
  const [ref, visible] = useFadeIn(0.1);

  return (
    <>
      <Wrapper id="goal">
        <TextBox>
          <Inner ref={ref} className={visible ? 'visible' : ''}>
            <SectionLabel>We're raising $1.5M to:</SectionLabel>
            <GoalTitle>1) Secure the Future</GoalTitle>
            <GoalDesc>
              A major boost to Spectator's endowment—generating income in perpetuity to backstop operations, protect editorial independence, and let Spec plan boldly for decades to come.
            </GoalDesc>
            <GoalTitle>2) Invest in Our People</GoalTitle>
            <GoalDesc>
              Many talented students cannot afford to spend dozens of unpaid hours per week in the newsroom. Since 2014, we have proudly offered a work-study program that allows every student, regardless of need, to learn journalism at Spectator. This campaign will allow us to grow this program—and offer a new suite of prizes and stipends to attract journalists from every background, reward outstanding reporting, and launch graduates into their first jobs in journalism, without financial stress.
            </GoalDesc>
          </Inner>
        </TextBox>
      </Wrapper>

      <DonateBar>
        <DonateHeading>Help secure Spectator's next 150 years.</DonateHeading>
        <DonateButton to={DONATE_URL}>Donate Now</DonateButton>
        <LeadershipNote>
          Interested in a leadership gift? Contact <a href="mailto:giving@columbiaspectator.com">giving@columbiaspectator.com</a> to learn more about naming opportunities and other details.
        </LeadershipNote>
      </DonateBar>
    </>
  );
};

export default GoalSection;
