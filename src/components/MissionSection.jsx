import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { size } from '../device';
import { mission } from '../data/content';
import newspaperImg from '../assets/page-imgs/newspaper-we-win.png';
import { useFadeIn } from '../hooks/useFadeIn';

const Section = styled.section`
  background-color: #f2efe9;
  padding: 5rem 2rem 0;
  overflow: hidden;
  position: relative;

  @media (max-width: ${size.mobile}) {
    padding: 3rem 1.5rem 0;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: flex-end;

  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const FadeChildren = styled.div`
  & > * {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  &.visible > * {
    opacity: 1;
    transform: translateY(0);
  }

  ${[...Array(6)].map((_, i) => `&.visible > *:nth-child(${i + 1}) { transition-delay: ${i * 0.1}s; }`).join('\n  ')}
`;

const TextCol = styled.div`
  padding-bottom: 5rem;

  @media (max-width: ${size.mobile}) {
    padding-bottom: 3rem;
  }
`;

const Heading = styled.h2`
  font-family: 'Bitter', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #1c1c1c;
  margin: 0 0 1.5rem;
  text-decoration: underline;
  text-decoration-color: #7ecff4;
  text-decoration-thickness: 3px;
  text-underline-offset: 0.2em;
`;

const Body = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 1.1rem;
  line-height: 1.75;
  color: #222;
  margin: 0 0 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${size.mobile}) {
    font-size: 0.95rem;
  }
`;

const ImageCol = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 2rem;

  @media (max-width: ${size.mobile}) {
    margin-top: -2.5rem;
    justify-content: center;
  }
`;

const riseIn = keyframes`
  from { transform: rotate(2deg) translateY(18px); opacity: 0.4; }
  to   { transform: rotate(2deg) translateY(0px);  opacity: 1; }
`;

const Img = styled.img`
  width: 80%;
  max-width: 400px;
  border-radius: 0.75rem 0.75rem 0 0;
  box-shadow: -6px -6px 32px rgba(0, 0, 0, 0.18);
  display: block;
  transform-origin: bottom right;
  animation: ${riseIn} 0.9s ease-out both;

  @media (max-width: ${size.tablet}) {
    width: 90%;
    max-width: 420px;
  }

  @media (max-width: ${size.mobile}) {
    width: 65%;
    max-width: 300px;
  }
`;

const MissionSection = () => {
  const [ref, visible] = useFadeIn(0.1);

  return (
    <Section id="mission">
      <Inner>
        <TextCol>
          <FadeChildren ref={ref} className={visible ? 'visible' : ''}>
            <Heading>{mission.heading}</Heading>
            {mission.paragraphs.map((p, i) => (
              <Body key={i}>{p}</Body>
            ))}
          </FadeChildren>
        </TextCol>
        <ImageCol>
          <Img src={newspaperImg} alt="Columbia Spectator 'We Win!' front page" />
        </ImageCol>
      </Inner>
    </Section>
  );
};

export default MissionSection;
