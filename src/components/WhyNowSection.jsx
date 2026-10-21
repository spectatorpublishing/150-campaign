import React from 'react';
import styled from 'styled-components';
import { size } from '../device';
import { whyNow } from '../data/content';
import columbiaSkyline from '../assets/page-imgs/columbia-skyline.jpeg';

const Section = styled.section`
  position: relative;
  padding: 5rem 2rem;
  background-image: url(${columbiaSkyline});
  background-size: cover;
  background-position: center;

  @media (max-width: ${size.mobile}) {
    padding: 3rem 1.5rem;
  }
`;

const TextBox = styled.div`
  position: relative;
  max-width: 760px;
  margin: 0 auto;
  background-color: rgba(40, 40, 40, 0.95);
  border-radius: 1rem;
  padding: 3rem 3.5rem;

  @media (max-width: ${size.mobile}) {
    padding: 2rem 1.75rem;
  }
`;

const Heading = styled.h2`
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

const Body = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 1.1rem;
  line-height: 1.75;
  color: #fff;
  margin: 0 0 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${size.mobile}) {
    font-size: 0.95rem;
  }
`;

const WhyNowSection = () => (
  <Section id="why-now">
    <TextBox>
      <Heading>{whyNow.heading}</Heading>
      {whyNow.paragraphs.map((p, i) => (
        <Body key={i}><strong>{p.bold}</strong>{p.rest}</Body>
      ))}
    </TextBox>
  </Section>
);

export default WhyNowSection;
