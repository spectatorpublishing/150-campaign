import React from 'react';
import styled from 'styled-components';
import { size } from '../device';
import { fundraising } from '../data/content';

const DURATION = 1600;

const Wrapper = styled.section`
  margin: 0 0 2.5rem;
`;

const Amounts = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.25rem 1rem;
  margin-bottom: 0.75rem;
`;

const Raised = styled.p`
  font-family: 'Bitter', serif;
  font-size: clamp(2rem, 6vw, 2.75rem);
  font-weight: 700;
  color: #1c1c1c;
  margin: 0;
  font-variant-numeric: tabular-nums;

  span {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: #555;
    margin-left: 0.5rem;
  }

  @media (max-width: ${size.mobile}) {
    span { display: block; margin-left: 0; }
  }
`;

const Percent = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1c1c1c;
  margin: 0;
  font-variant-numeric: tabular-nums;
`;

const Track = styled.div`
  height: 14px;
  background-color: #e6e2dc;
  border-radius: 999px;
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  width: 100%;
  background-color: #7ecff4;
  border-radius: 999px;
  transform-origin: left;
  transform: scaleX(${(props) => props.$progress});
`;

const Note = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 0.95rem;
  color: #444;
  margin: 0.75rem 0 0;
`;

const formatDollars = (n) =>
  '$' + Math.round(n).toLocaleString('en-US');

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const FundraisingProgress = () => {
  const { goal, raised } = fundraising;
  const [t, setT] = React.useState(() => (prefersReducedMotion() ? 1 : 0));

  React.useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let frame;
    let start;
    const step = (now) => {
      if (start === undefined) start = now;
      const progress = Math.min((now - start) / DURATION, 1);
      setT(easeOutCubic(progress));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  const percent = Math.round((raised / goal) * 100);
  const goalLabel = goal >= 1000000 ? `$${goal / 1000000} million` : formatDollars(goal);

  return (
    <Wrapper aria-label="Fundraising progress">
      <Amounts>
        <Raised>
          {formatDollars(raised * t)}
          <span>raised of {goalLabel} goal</span>
        </Raised>
        <Percent>{Math.round(percent * t)}%</Percent>
      </Amounts>
      <Track
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={goal}
        aria-valuenow={raised}
        aria-valuetext={`${formatDollars(raised)} raised of ${goalLabel} goal`}
      >
        <Fill $progress={Math.min(raised / goal, 1) * t} />
      </Track>
    </Wrapper>
  );
};

export default FundraisingProgress;
