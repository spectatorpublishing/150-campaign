import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useFadeIn } from '../hooks/useFadeIn';
import { timeline } from '../data/content';

import img1877 from '../assets/timeline-imgs/1877.png';
import img1902 from '../assets/timeline-imgs/1902.jpeg';
import img1933 from '../assets/timeline-imgs/1933.png';
import img1962 from '../assets/timeline-imgs/1962.png';
import img1968 from '../assets/timeline-imgs/1968.png';
import img1983 from '../assets/timeline-imgs/1983.png';
import img1988 from '../assets/timeline-imgs/1988.png';
import img1998 from '../assets/timeline-imgs/1998.png';
import img2004 from '../assets/timeline-imgs/2004.png';
import img2014 from '../assets/timeline-imgs/2014.png';
import img2024 from '../assets/timeline-imgs/2024.png';
import img2027 from '../assets/timeline-imgs/2027.png';

const IMAGES = { '1877': img1877, '1902': img1902, '1933': img1933, '1962': img1962, '1968': img1968, '1983': img1983, '1988': img1988, '1998': img1998, '2004': img2004, '2014': img2014, '2024': img2024, '2027': img2027 };

const PER_PAGE = 2;
const TEXT_HEIGHT = '160px';

const Wrapper = styled.div`
  background-color: #f2efe9;
`;

const HeadingBar = styled.div`
  padding: 2rem 3rem 1.25rem;

  @media (max-width: 600px) {
    padding: 1.5rem 1.5rem 1rem;
  }
`;

const Heading = styled.h2`
  font-family: 'Bitter', serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700;
  color: #1c1c1c;
  margin: 0;
  text-decoration: underline;
  text-decoration-color: #7ecff4;
  text-decoration-thickness: 3px;
  text-underline-offset: 0.2em;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 75vh;
  min-height: 460px;
  overflow: hidden;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
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

const slideFromRight = keyframes`
  from { transform: translateX(40px); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`;

const slideFromLeft = keyframes`
  from { transform: translateX(-40px); opacity: 0; }
  to   { transform: translateX(0);     opacity: 1; }
`;

const Panel = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  animation: ${({ $direction }) => css`${$direction === 'prev' ? slideFromLeft : slideFromRight} 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`};
`;

const PanelImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: ${({ $img }) => $img ? `url(${$img})` : 'none'};
  background-color: ${({ $bgColor }) => $bgColor || '#2a2a2a'};
  background-size: ${({ $bgSize }) => $bgSize || 'cover'};
  background-position: top center;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    background-position: ${({ $bgPositionMobile }) => $bgPositionMobile || 'top center'};
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 30%, transparent 60%);
`;

/* Side vignettes on outermost edges */
const SideVignette = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 4;
  background: ${({ $side }) =>
    $side === 'left'
      ? 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 20%)'
      : 'linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 20%)'};
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
  color: #fff;
  margin: 0;
  line-height: 1.5;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  ${({ $side }) => $side === 'left' ? 'left: 1rem;' : 'right: 1rem;'}
  background: none;
  border: none;
  padding: 2rem 0.5rem;
  cursor: pointer;
  color: ${({ disabled }) => disabled ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.7)'};
  font-family: 'Bitter', serif;
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
  z-index: 10;

  &:hover:not(:disabled) {
    color: #fff;
  }

  @media (max-width: 600px) {
    display: none;
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
  const [direction, setDirection] = useState('next');
  const [headingRef, headingVisible] = useFadeIn(0.1);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 600);
  const touchStartX = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const perPage = isMobile ? 1 : PER_PAGE;
  const numPages = Math.ceil(timeline.length / perPage);
  const prev = () => { setDirection('prev'); setPage(p => Math.max(0, p - 1)); };
  const next = () => { setDirection('next'); setPage(p => Math.min(numPages - 1, p + 1)); };

  useEffect(() => {
    setPage(p => Math.min(p, numPages - 1));
  }, [numPages]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev();
    else if (dx < -40) next();
    touchStartX.current = null;
  };

  const visibleItems = timeline.slice(page * perPage, page * perPage + perPage);

  return (
    <Wrapper id="timeline">
    <HeadingBar>
      <Heading
        ref={headingRef}
        style={{
          opacity: headingVisible ? 1 : 0,
          transform: headingVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        150 Years of Spectator
      </Heading>
    </HeadingBar>
    <Section onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <PanelsWrapper>
        {visibleItems.map((item, i) => (
          <Panel key={`${page}-${i}`} $direction={direction}>
            <PanelImage $img={item.image ? IMAGES[item.image] : null} $bgSize={item.bgSize} $bgColor={item.bgColor} $bgPositionMobile={item.bgPositionMobile}>
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

      <ArrowButton $side="left" onClick={prev} disabled={page === 0} aria-label="Previous">&lt;</ArrowButton>
      <ArrowButton $side="right" onClick={next} disabled={page === numPages - 1} aria-label="Next">&gt;</ArrowButton>

      <Dots>
        {Array.from({ length: numPages }).map((_, i) => (
          <Dot key={i} $active={i === page} onClick={() => setPage(i)} />
        ))}
      </Dots>
    </Section>
    </Wrapper>
  );
};

export default TimelineCarousel;
