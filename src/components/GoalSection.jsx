import React from 'react';
import styled from 'styled-components';
import { size } from '../device';
import { goal, goals, DONATE_URL } from '../data/content';

const Wrapper = styled.div`
  background-color: #faf8f5;
`;

const IntroSection = styled.section`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 2rem 4rem;

  @media (max-width: ${size.mobile}) {
    padding: 0 1.5rem 3rem;
  }
`;

const Heading = styled.h2`
  font-family: 'Bitter', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #1c1c1c;
  margin: 0 0 1.25rem;
`;

const Body = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 1.1rem;
  line-height: 1.75;
  color: #222;
  margin: 0 0 1.25rem;
`;

const Callout = styled.blockquote`
  font-family: 'Bitter', serif;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 700;
  color: #1c1c1c;
  line-height: 1.3;
  margin: 3rem 0;
  padding: 0;
  border: none;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 0;
`;

const GoalItem = styled.section`
  max-width: 760px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: ${size.mobile}) {
    padding: 3rem 1.5rem;
  }
`;

const GoalLabel = styled.span`
  display: block;
  font-family: 'Merriweather', serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7ecff4;
  margin-bottom: 0.5rem;
`;

const GoalHeading = styled.h3`
  font-family: 'Bitter', serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #1c1c1c;
  margin: 0 0 1.5rem;
`;

const Highlight = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 1.1rem;
  line-height: 1.75;
  color: #222;
  margin: 0 0 1.25rem;

  strong {
    font-weight: 600;
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

const DonateButton = styled.a`
  display: inline-block;
  padding: 0.85rem 2.5rem;
  background-color: #7ecff4;
  border-radius: 100px;
  color: #1c1c1c;
  text-decoration: none;
  font-family: 'Merriweather', serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  transition: background-color 0.2s;

  &:hover {
    background-color: #93d9f8;
  }
`;

const GoalSection = () => (
  <Wrapper id="goal">
    <IntroSection>
      <Heading>{goal.heading}</Heading>
      <Body>{goal.intro}</Body>
      <Callout>{goal.callout}</Callout>
    </IntroSection>

    {goals.map((g, i) => (
      <React.Fragment key={g.id}>
        <Divider />
        <GoalItem id={g.id}>
          <GoalLabel>{g.number}</GoalLabel>
          <GoalHeading>{g.title}</GoalHeading>
          {g.body.map((p, j) => (
            <Highlight key={j}>
              {p.includes(g.highlight.replace(/\*\*/g, ''))
                ? <>
                    {p.split(g.highlight)[0]}
                    <strong>{g.highlight}</strong>
                    {p.split(g.highlight)[1]}
                  </>
                : p}
            </Highlight>
          ))}
        </GoalItem>
      </React.Fragment>
    ))}

    <DonateBar>
      <DonateHeading>Help secure the next 150 years.</DonateHeading>
      <DonateButton href={DONATE_URL} target="_blank" rel="noopener noreferrer">
        Donate Now
      </DonateButton>
    </DonateBar>
  </Wrapper>
);

export default GoalSection;
