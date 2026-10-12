import React from 'react';
import styled from 'styled-components';
import { size } from '../device';
import { mission } from '../data/content';
import newspapersImg from '../assets/page-imgs/newspapers.webp';

const Section = styled.section`
  background-color: #f2efe9;
  padding: 5rem 2rem;

  @media (max-width: ${size.mobile}) {
    padding: 3rem 1.5rem;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const TextCol = styled.div``;

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
  border-radius: 1rem;
  overflow: hidden;
  aspect-ratio: 4 / 3;

  @media (max-width: ${size.tablet}) {
    max-width: 540px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const MissionSection = () => (
  <Section id="mission">
    <Inner>
      <TextCol>
        <Heading>{mission.heading}</Heading>
        {mission.paragraphs.map((p, i) => (
          <Body key={i}>{p}</Body>
        ))}
      </TextCol>
      <ImageCol>
        <Img src={newspapersImg} alt="Columbia Spectator newspapers" />
      </ImageCol>
    </Inner>
  </Section>
);

export default MissionSection;
