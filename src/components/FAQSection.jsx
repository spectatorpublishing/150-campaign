import React, { useState } from 'react';
import styled from 'styled-components';
import { size } from '../device';
import { faq } from '../data/content';

const Section = styled.section`
  background-color: #f2efe9;
  padding: 5rem 2rem;

  @media (max-width: ${size.mobile}) {
    padding: 3rem 1.5rem;
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
  margin: 0 0 2.5rem;
  text-decoration: underline;
  text-decoration-color: #7ecff4;
  text-decoration-thickness: 3px;
  text-underline-offset: 0.2em;
`;

const Item = styled.div`
  border-top: 1px solid #d0d0d0;

  &:last-child {
    border-bottom: 1px solid #d0d0d0;
  }
`;

const Question = styled.button`
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 1.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #1c1c1c;
  gap: 1rem;
`;

const Chevron = styled.span`
  font-size: 1.2rem;
  transition: transform 0.2s;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
  flex-shrink: 0;
`;

const Answer = styled.div`
  overflow: hidden;
  max-height: ${({ open }) => (open ? '800px' : '0')};
  transition: max-height 0.3s ease;
`;

const AnswerText = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 1rem;
  line-height: 1.75;
  color: #444;
  margin: 0 0 1.25rem;
`;

const emailRegex = /([\w.]+@[\w.]+\.[a-z]{2,})/g;

const renderWithLinks = (text) => {
  const parts = text.split(emailRegex);
  return parts.map((part, i) =>
    emailRegex.test(part)
      ? <a key={i} href={`mailto:${part}`} style={{ color: '#7ecff4' }}>{part}</a>
      : part
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Section id="faq">
      <Inner>
        <Heading>FAQs</Heading>
        <AnswerText style={{ marginBottom: '2rem', fontFamily: "'Open Sans', sans-serif", color: '#1c1c1c' }}>
          Want to learn more? Contact <a href="mailto:giving@columbiaspectator.com" style={{ color: '#7ecff4' }}>giving@columbiaspectator.com</a>.
        </AnswerText>
        {faq.map((item, i) => (
          <Item key={i}>
            <Question onClick={() => toggle(i)}>
              {item.question}
              <Chevron open={openIndex === i}>▾</Chevron>
            </Question>
            <Answer open={openIndex === i}>
              {Array.isArray(item.answer)
                ? item.answer.map((para, j) => <AnswerText key={j}>{renderWithLinks(para)}</AnswerText>)
                : <AnswerText>{renderWithLinks(item.answer)}</AnswerText>}
            </Answer>
          </Item>
        ))}
      </Inner>
    </Section>
  );
};

export default FAQSection;
