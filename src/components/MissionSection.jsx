import React from 'react';
import styled from 'styled-components';
import { size } from '../device';
import { mission } from '../data/content';

const Section = styled.section`
  background-color: #faf8f5;
  padding: 5rem 2rem;
  max-width: 760px;
  margin: 0 auto;

  @media (max-width: ${size.mobile}) {
    padding: 3rem 1.5rem;
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
`;

const MissionSection = () => (
  <Section id="mission">
    <Heading>{mission.heading}</Heading>
    {mission.paragraphs.map((p, i) => (
      <Body key={i}>{p}</Body>
    ))}
  </Section>
);

export default MissionSection;
