import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { timeline } from '../data/content';

import img1877 from '../assets/timeline-imgs/1877.png';
import img1933 from '../assets/timeline-imgs/1933.png';
import img1968 from '../assets/timeline-imgs/1968.png';
import img1983 from '../assets/timeline-imgs/1983.png';
import img1988 from '../assets/timeline-imgs/1988.png';
import img2004 from '../assets/timeline-imgs/2004.png';
import img2024 from '../assets/timeline-imgs/2024.png';

const IMAGES = { '1877': img1877, '1933': img1933, '1968': img1968, '1983': img1983, '1988': img1988, '2004': img2004, '2024': img2024 };
const MOBILE_BREAKPOINT = 600;

const Section = styled.section`
  background-color: #faf8f5;
  padding: 5rem 0 4rem;
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 2rem;
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

const CarouselOuter = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 4rem;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 0 2.5rem;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 0.5rem;
  ${({ side }) => side === 'left' ? 'left: 0.75rem;' : 'right: 0.75rem;'}
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
`;

const TrackOuter = styled.div`
  overflow: hidden;
`;

const Track = styled.div`
  display: flex;
  transition: transform 0.4s ease;
`;

const SlideItem = styled.div`
  flex-shrink: 0;
  text-align: center;
  padding: 0 0.75rem;
`;

const Year = styled.div`
  font-family: 'Bitter', serif;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 700;
  color: #7ecff4;
  margin-bottom: 0.6rem;
`;

const ItemDivider = styled.div`
  height: 2px;
  background-color: #1c1c1c;
  margin: 0 -0.75rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #7ecff4;
  }
`;

const EventText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.6;
  color: #1c1c1c;
  margin: 0.85rem 0 0.75rem;
  min-height: 2.5em;
`;

const EventImage = styled.img`
  width: ${({ large }) => large ? '95%' : '80%'};
  max-height: ${({ large }) => large ? '220px' : '160px'};
  object-fit: contain;
  display: block;
  margin: 0.75rem auto 0;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1.5rem;
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

const TimelineCarousel = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= MOBILE_BREAKPOINT);
  const [page, setPage] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const visible = isMobile ? 2 : 3;
  const numPages = Math.ceil(timeline.length / visible);
  const startIndex = page * visible;
  const itemWidth = 100 / visible;

  useEffect(() => {
    setPage(p => Math.min(p, numPages - 1));
  }, [numPages]);

  const prev = () => setPage(p => Math.max(0, p - 1));
  const next = () => setPage(p => Math.min(numPages - 1, p + 1));

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev();
    else if (dx < -40) next();
    touchStartX.current = null;
  };

  return (
    <Section id="timeline">
      <Inner>
        <Heading>150 Years of Spectator</Heading>
      </Inner>

      <CarouselOuter>
        <ArrowButton side="left" onClick={prev} disabled={page === 0} aria-label="Previous">
          <svg width="18" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </ArrowButton>

        <TrackOuter onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <Track style={{ transform: `translateX(-${startIndex * itemWidth}%)` }}>
            {timeline.map((item) => (
              <SlideItem key={item.year} style={{ width: `${itemWidth}%` }}>
                <Year>{item.year}</Year>
                <ItemDivider />
                {!item.imageOnly && <EventText>{item.event}</EventText>}
                {item.image && (
                  <EventImage src={IMAGES[item.image]} alt={item.event} large={item.imageOnly} />
                )}
              </SlideItem>
            ))}
          </Track>
        </TrackOuter>

        <ArrowButton side="right" onClick={next} disabled={page === numPages - 1} aria-label="Next">
          <svg width="18" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </ArrowButton>
      </CarouselOuter>

      <Dots>
        {Array.from({ length: numPages }).map((_, i) => (
          <Dot key={i} active={i === page} onClick={() => setPage(i)} aria-label={`Go to page ${i + 1}`} />
        ))}
      </Dots>
    </Section>
  );
};

export default TimelineCarousel;
