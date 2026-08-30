import React from 'react';
import styled from 'styled-components';
import { size } from '../device';
import { donorOpportunities } from '../data/content';

const Section = styled.section`
  background-color: #faf8f5;
  padding: 3rem 2rem 2rem;

  @media (max-width: ${size.mobile}) {
    padding: 2rem 1.5rem 1.5rem;
  }
`;

const Inner = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-family: 'Bitter', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #1c1c1c;
  margin: 0 0 2rem;
  text-decoration: underline;
  text-decoration-color: #7ecff4;
  text-decoration-thickness: 3px;
  text-underline-offset: 0.2em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0 2.5rem;

  @media (max-width: ${size.mobile}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const Row = styled.div`
  display: contents;
`;

const Amount = styled.div`
  font-family: 'Bitter', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #1c1c1c;
  text-align: right;
  padding: 1.5rem 0;

  @media (max-width: ${size.mobile}) {
    font-size: 2rem;
    text-align: left;
    padding: 0 0 0.4rem;
  }
`;

const Details = styled.div`
  text-align: left;
  padding: 1.5rem 0;

  @media (max-width: ${size.mobile}) {
    padding: 0 0 1.25rem;
  }
`;

const Title = styled.span`
  font-family: 'Merriweather', serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #1c1c1c;
  line-height: 1.6;

  em { font-style: italic; }

  @media (max-width: ${size.mobile}) {
    font-size: 0.85rem;
  }
`;

const Description = styled.span`
  font-family: 'Merriweather', serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #222;
  line-height: 1.6;

  em { font-style: italic; }

  @media (max-width: ${size.mobile}) {
    font-size: 0.85rem;
  }
`;

const DonorOpportunities = () => (
  <Section>
    <Inner>
      <Heading>Donor Opportunities</Heading>
      <Grid>
        {donorOpportunities.map((item, i) => (
          <Row key={i}>
            <Amount>{item.amount}</Amount>
            <Details>
              <Title>{item.title}</Title>
              <br />
              <Description>{item.description}</Description>
            </Details>
          </Row>
        ))}
      </Grid>
    </Inner>
  </Section>
);

export default DonorOpportunities;
