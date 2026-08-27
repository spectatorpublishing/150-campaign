import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { size } from '../device';
import { testimonials } from '../data/content';

const Section = styled.section`
  background-color: #f2efe9;
  padding: 4rem 0 3rem;
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Heading = styled.h2`
  font-family: 'Bitter', serif;
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 700;
  color: #1c1c1c;
  margin: 0 0 2rem;

  @media (max-width: ${size.mobile}) {
    white-space: normal;
  }

  em {
    font-style: italic;
  }
`;

const CarouselRow = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 2.5rem;
  ${({ side }) => side === 'left' ? 'right: calc(100% - 2rem + 1.5rem);' : 'left: calc(100% - 2rem + 1.5rem);'}
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ disabled }) => disabled ? 'rgba(28,28,28,0.2)' : '#1c1c1c'};
  padding: 0;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover:not(:disabled) {
    color: #7ecff4;
  }

  @media (max-width: ${size.mobile}) {
    top: 50%;
    transform: translateY(-50%);
    ${({ side }) => side === 'left' ? 'right: auto; left: 0.6rem;' : 'left: auto; right: 0.6rem;'}
  }
`;

const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  overflow: hidden;
  padding: 0 1rem;
  animation: ${({ dir }) => dir === 'left' ? 'slideFromLeft' : 'slideFromRight'} 0.35s ease;

  @keyframes slideFromRight {
    from { transform: translateX(60px); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
  }

  @keyframes slideFromLeft {
    from { transform: translateX(-60px); opacity: 0; }
    to   { transform: translateX(0);     opacity: 1; }
  }

  @media (max-width: ${size.tablet}) {
    height: 300px;
  }

  @media (max-width: ${size.mobile}) {
    height: 260px;
    padding: 0 2.25rem;
  }
`;

const Quote = styled.p`
  font-family: 'Merriweather', serif;
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.85;
  color: #1c1c1c;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;

  strong {
    font-weight: 400;
  }
`;

const Attribution = styled.div`
  text-align: right;
  margin-top: 0.75rem;
`;

const Name = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #1c1c1c;
`;

const JobTitle = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: #555;
  margin-top: 0.15rem;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1.25rem;
`;

const Dot = styled.button`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background-color: ${({ active }) => (active ? '#7ecff4' : 'rgba(28,28,28,0.2)')};
  transition: background-color 0.2s;
`;

const renderSegments = (segments) =>
  segments.map((seg, i) => <span key={i}>{seg.text}</span>);

const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState('right');
  const touchStartX = useRef(null);

  const prev = () => { setDir('left');  setIndex(i => Math.max(0, i - 1)); };
  const next = () => { setDir('right'); setIndex(i => Math.min(testimonials.length - 1, i + 1)); };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev();
    else if (dx < -40) next();
    touchStartX.current = null;
  };

  const t = testimonials[index];

  return (
    <Section id="testimonials">
      <Inner>
        <Heading>
          Why I'm Supporting the Spectator
        </Heading>
      </Inner>

      <CarouselRow onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <ArrowButton side="left" onClick={prev} disabled={index === 0} aria-label="Previous">
          <svg width="18" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </ArrowButton>

        <CardInner key={index} dir={dir}>
          <Quote>{renderSegments(t.segments)}</Quote>
          <Attribution>
            <Name>—{t.name}</Name>
            <JobTitle>{t.title}</JobTitle>
          </Attribution>
        </CardInner>

        <ArrowButton side="right" onClick={next} disabled={index === testimonials.length - 1} aria-label="Next">
          <svg width="18" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </ArrowButton>
      </CarouselRow>

      <Dots>
        {testimonials.map((_, i) => (
          <Dot key={i} active={i === index} onClick={() => setIndex(i)} aria-label={`Go to testimonial ${i + 1}`} />
        ))}
      </Dots>
    </Section>
  );
};

export default TestimonialsCarousel;
