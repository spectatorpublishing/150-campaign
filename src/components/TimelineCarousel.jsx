import React, { useState, useRef } from 'react';
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

const PER_PAGE = 2;
const TEXT_HEIGHT = '160px';

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 520px;
  overflow: hidden;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  position: absolute;
  top: 2rem;
  left: 3rem;
  font-family: 'Bitter', serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700;
  color: #fff;
  margin: 0;
  text-decoration: underline;
  text-decoration-color: #7ecff4;
  text-decoration-thickness: 3px;
  text-underline-offset: 0.2em;
  z-index: 10;

  @media (max-width: 600px) {
    left: 1.5rem;
    top: 1.25rem;
  }
`;

const Counter = styled.div`
  position: absolute;
  top: 2rem;
  right: 3rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
  z-index: 10;

  @media (max-width: 600px) {
    right: 1.5rem;
  }
`;

const PanelsWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
`;

const Panel = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  opacity: ${({ $active }) => $active ? 1 : 0};
  transition: opacity 0.5s ease;
`;

const PanelImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: ${({ $img }) => $img ? `url(${$img})` : 'none'};
  background-color: #2a2a2a;
  background-size: cover;
  background-position: top center;
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 25%),
    linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 30%, transparent 60%);
`;

/* Side vignettes on outermost edges */
const SideVignette = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 4;
  background: ${({ $side }) =>
    $side === 'left'
      ? 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 30%)'
      : 'linear-gradient(to left, rgba(0,0,0,0.7) 0%, transparent 30%)'};
`;

/* The full-width line that runs across both panels at the year level */
const TimelineLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: calc(${TEXT_HEIGHT} - 0.5rem);
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  z-index: 6;
`;

const PanelBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${TEXT_HEIGHT};
  padding: 0.75rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  z-index: 5;
`;

const YearLabel = styled.div`
  font-family: 'Bitter', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: #fff;
  line-height: 1;
  margin-bottom: 0.6rem;
`;

const EventLabel = styled.p`
  font-family: 'Merriweather', serif;
  font-size: clamp(0.78rem, 1.1vw, 0.95rem);
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  line-height: 1.5;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  ${({ $side }) => $side === 'left' ? 'left: 1rem;' : 'right: 1rem;'}
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: ${({ disabled }) => disabled ? 'rgba(255,255,255,0.15)' : '#fff'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  z-index: 10;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.4rem;
  z-index: 10;
`;

const Dot = styled.button`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  background-color: ${({ $active }) => $active ? '#7ecff4' : 'rgba(255,255,255,0.25)'};
  transition: background-color 0.2s;
`;

const TimelineCarousel = () => {
  const [page, setPage] = useState(0);
  const touchStartX = useRef(null);

  const numPages = Math.ceil(timeline.length / PER_PAGE);
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

  const visibleItems = timeline.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <Section id="timeline" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <Heading>150 Years of Spectator</Heading>

      <TimelineLine />

      <PanelsWrapper>
        {visibleItems.map((item, i) => (
          <Panel key={`${page}-${i}`} $active>
            <PanelImage $img={item.image ? IMAGES[item.image] : null}>
              <ImageOverlay />
              {i === 0 && <SideVignette $side="left" />}
              {i === visibleItems.length - 1 && <SideVignette $side="right" />}
              <PanelBottom>
                <YearLabel>{item.year}</YearLabel>
                <EventLabel>{item.event}</EventLabel>
              </PanelBottom>
            </PanelImage>
          </Panel>
        ))}
      </PanelsWrapper>

      <ArrowButton $side="left" onClick={prev} disabled={page === 0} aria-label="Previous">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </ArrowButton>

      <ArrowButton $side="right" onClick={next} disabled={page === numPages - 1} aria-label="Next">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </ArrowButton>

      <Dots>
        {Array.from({ length: numPages }).map((_, i) => (
          <Dot key={i} $active={i === page} onClick={() => setPage(i)} />
        ))}
      </Dots>
    </Section>
  );
};

export default TimelineCarousel;
