import React from 'react';
import styled from 'styled-components';
import { size } from '../device';
import { useFadeIn } from '../hooks/useFadeIn';
import nadiaImg from '../assets/page-imgs/nadia-headshot.png';
import jillianImg from '../assets/page-imgs/jillian-headshot.png';
import newspapersBg from '../assets/page-imgs/newspapers-bg.png';

const Section = styled.section`
  background-image: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${newspapersBg});
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem;

  @media (max-width: ${size.mobile}) {
    padding: 3.5rem 1.5rem;
  }
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-family: 'Bitter', serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700;
  color: #fff;
  margin: 0 0 2.5rem;
  text-decoration: underline;
  text-decoration-color: #7ecff4;
  text-decoration-thickness: 3px;
  text-underline-offset: 0.2em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${size.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: rgba(10, 10, 10, 0.96);
  border-radius: 1rem;
  padding: 1.75rem 2rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: flex-start;

  @media (max-width: ${size.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Headshot = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  flex-shrink: 0;
  border: 2px solid rgba(255,255,255,0.15);
`;

const Quote = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 0.95rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 1.25rem;
  flex: 1;
`;

const Attribution = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
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

  &.visible > *:nth-child(1) { transition-delay: 0s; }
  &.visible > *:nth-child(2) { transition-delay: 0.1s; }
  &.visible > *:nth-child(3) { transition-delay: 0.2s; }
`;

const WorkStudyTestimonials = () => {
  const [ref, visible] = useFadeIn(0.1);

  return (
    <Section>
      <Inner>
        <FadeChildren ref={ref} className={visible ? 'visible' : ''}>
          <Heading>Work-Study Testimonials</Heading>
          <Grid>
            <Card>
              <Headshot src={jillianImg} alt="Jillian Prunty" />
              <div>
                <Quote>"Coming from a low income background, the fact that I could get paid for the work I put into Spec meant I was able to devote more time and energy to my reporting, rather than some other campus job. I'm not sure that I would've been able to take on the added responsibilities of a managing board position without this opportunity. I'm very grateful."</Quote>
                <Attribution>—Jillian Prunty '26</Attribution>
              </div>
            </Card>
            <Card>
              <Headshot src={nadiaImg} alt="Nadia Knoblauch" />
              <div>
                <Quote>"Finding work-study jobs on campus is already stressful. When I learned about financial aid at Spec, I was relieved. This program allows me to fully immerse myself in reporting, work that I'm passionate about."</Quote>
                <Attribution>—Nadia Knoblauch '28</Attribution>
              </div>
            </Card>
          </Grid>
        </FadeChildren>
      </Inner>
    </Section>
  );
};

export default WorkStudyTestimonials;
