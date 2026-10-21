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

  &.visible > * {
    opacity: 1;
    transform: translateY(0);
  }

  ${[...Array(10)].map((_, i) => `&.visible > *:nth-child(${i + 1}) { transition-delay: ${i * 0.08}s; }`).join('\n  ')}
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
  margin: 0 0 1.75rem;
`;

const SubList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const SubItem = styled.li`
  font-family: 'Merriweather', serif;
  font-size: 0.97rem;
  line-height: 1.72;
  color: #fff;
`;

const SubLabel = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: #7ecff4;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-right: 0.4em;
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
              We will double Spectator's endowment—generating income in perpetuity to backstop operations, protect editorial independence, and let Spec plan boldly for decades to come.
            </GoalDesc>

            <GoalTitle>2) Invest in Our People</GoalTitle>
            <GoalDesc>
              Many talented students cannot afford to spend dozens of unpaid hours per week in the newsroom. Since 2014, we have proudly offered a work-study program that allows every student, regardless of need, to learn journalism at Spectator. This campaign will allow us to grow this program—and begin new ones that reward outstanding reporting and launch graduates into their first jobs in journalism.
            </GoalDesc>
          </Inner>
        </TextBox>
      </Wrapper>

      <DonateBar>
        <DonateHeading>Help secure Spectator's next 150 years.</DonateHeading>
        <DonateButton to={DONATE_URL}>Donate Now</DonateButton>
      </DonateBar>
    </>
  );
};

export default GoalSection;
