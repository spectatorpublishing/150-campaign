import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { size } from '../device';
import { DONATE_URL } from '../data/content';
import specLogosBg from '../assets/page-imgs/spec-logos-bg.png';
import brochureCover from '../assets/page-imgs/brochure-cover.png';
import speakersImg from '../assets/page-imgs/speakers.jpeg';
import stuartKarleImg from '../assets/page-imgs/stuart-karle.png';
import workStudyImg from '../assets/page-imgs/work-study.png';
import endowmentImg from '../assets/page-imgs/endowment.png';
import earlyCareerImg from '../assets/page-imgs/early-career.jpeg';
import adyBarkanImg from '../assets/page-imgs/ady-barkan.png';
import { useFadeIn } from '../hooks/useFadeIn';

const Wrapper = styled.div`
  background-color: #f2efe9;
  padding: 5rem 2rem;

  @media (max-width: ${size.mobile}) {
    padding: 3.5rem 0.75rem;
  }
`;

const TextBox = styled.div`
  max-width: 820px;
  margin: 0 auto;
`;

const Inner = styled.div`
  & > * {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.75s ease, transform 0.75s ease;
  }

  &.visible > * {
    opacity: 1;
    transform: translateY(0);
  }

  ${[...Array(10)].map((_, i) => `&.visible > *:nth-child(${i + 1}) { transition-delay: ${i * 0.08}s; }`).join('\n  ')}
`;

const SectionLabel = styled.h2`
  font-family: 'Bitter', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #1c1c1c;
  margin: 0 0 1.5rem;
  text-decoration: underline;
  text-decoration-color: #7ecff4;
  text-decoration-thickness: 3px;
  text-underline-offset: 0.2em;
`;

const GoalTitle = styled.h3`
  font-family: 'Bitter', serif;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 700;
  color: #1c1c1c;
  margin: 0 0 0.75rem;
  line-height: 1.15;
`;

const GoalDesc = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 0.88rem;
  line-height: 1.72;
  color: #222;
  margin: 0 0 1.75rem;
`;

const SubList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const SubItem = styled.li`
  font-family: 'Merriweather', serif;
  font-size: 0.97rem;
  line-height: 1.72;
  color: #222;
`;

const SubLabel = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: #1a9fd4;
  display: block;
  margin-bottom: 0.2em;
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin-top: 0.5rem;

  @media (max-width: ${size.mobile}) {
    padding: 0 0.75rem;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 0.75rem;
  overflow: hidden;
  display: flex;
  flex-direction: ${({ $reverse }) => $reverse ? 'row-reverse' : 'row'};
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  height: ${({ $height }) => $height || '220px'};

  @media (max-width: ${size.mobile}) {
    flex-direction: column;
    height: auto;
  }
`;

const CardImg = styled.img`
  width: 42%;
  flex-shrink: 0;
  object-fit: cover;
  object-position: ${({ $objectPosition }) => $objectPosition || 'center'};
  display: block;
  height: 100%;

  @media (max-width: ${size.mobile}) {
    width: 100%;
    height: 240px;
  }
`;

const CardBody = styled.div`
  padding: 1.5rem 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LeadershipNote = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 0.9rem;
  line-height: 1.72;
  color: #222;
  margin: 1.25rem 0 0;

  a {
    color: #1a9fd4;
  }
`;

const BrochureBar = styled.div`
  background-color: #f2efe9;
  padding: 3.5rem 2rem 4rem;
  text-align: center;
`;

const BrochureImg = styled.img`
  width: 200px;
  border-radius: 4px;
  transform: rotate(3deg);
  box-shadow: 6px 10px 32px rgba(0,0,0,0.55);
  display: block;
  margin: 0 auto 2rem;

  @media (max-width: ${size.mobile}) {
    width: 160px;
  }
`;

const BrochureButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: #7ecff4;
  border: 2px solid #7ecff4;
  border-radius: 100px;
  color: #1c1c1c;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  transition: background-color 0.2s, border-color 0.2s;

  &:hover {
    background-color: #93d9f8;
    border-color: #93d9f8;
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

const DonateButton = styled(Link)`
  display: inline-block;
  padding: 0.85rem 2.5rem;
  background-color: #7ecff4;
  border-radius: 100px;
  color: #1c1c1c;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  transition: background-color 0.2s;

  &:hover { background-color: #93d9f8; }
`;

const GoalSection = () => {
  const [ref, visible] = useFadeIn(0.1);

  return (
    <>
      <Wrapper id="goal">
        <TextBox>
          <Inner ref={ref} className={visible ? 'visible' : ''}>
            <SectionLabel>We're raising $1.5M to:</SectionLabel>

            <GoalTitle>1) Secure the Future</GoalTitle>
            <CardGrid style={{ marginBottom: '1.75rem' }}>
              <Card $height="170px" $reverse>
                <CardImg src={endowmentImg} alt="1889 Columbia Spectator front page" $objectPosition="top" />
                <CardBody>
                  <SubLabel>Built to Last</SubLabel>
                  <GoalDesc style={{ margin: '0.4rem 0 0' }}>We will <strong>double Spectator's endowment</strong>—generating income in perpetuity to backstop operations, protect editorial independence, and let Spec plan boldly for decades to come.</GoalDesc>
                </CardBody>
              </Card>
            </CardGrid>

            <GoalTitle>2) Invest in Our People</GoalTitle>

            <CardGrid>
              <Card>
                <CardImg src={workStudyImg} alt="Spectator student working" />
                <CardBody>
                  <SubLabel>Expand Work-Study</SubLabel>
                  <GoalDesc style={{ margin: '0.4rem 0 0' }}>Many talented students cannot afford to spend dozens of unpaid hours per week in the newsroom. Since 2014, we have proudly offered a work-study program that allows students with financial need to get paid for the hours they pour into Spectator.</GoalDesc>
                </CardBody>
              </Card>

              <Card $reverse>
                <CardImg src={stuartKarleImg} alt="Stuart Karle speaking at Spectator event" />
                <CardBody>
                  <SubLabel>Encourage Exceptional Journalism</SubLabel>
                  <GoalDesc style={{ margin: '0.4rem 0 0' }}>The <strong>Stuart Karle Prize for Outstanding Journalism</strong>, named for Stuart Karle, Spectator's 105th Editor-in-Chief and long-time board member, will confer a semesterly prize to a Spectator staffer for exceptional in-depth coverage of Columbia University or its surrounding community.</GoalDesc>
                </CardBody>
              </Card>

              <Card>
                <CardImg src={adyBarkanImg} alt="Ady Barkan" />
                <CardBody>
                  <SubLabel>Amplify Young Voices</SubLabel>
                  <GoalDesc style={{ margin: '0.4rem 0 0' }}>The <strong>Ady Barkan Fellowship for Opinion Journalism</strong>, named for Ady Barkan, a former Spectator columnist and healthcare reform activist, will provide a yearly fellowship award for a graduating Columbia student pursuing opinion writing.</GoalDesc>
                </CardBody>
              </Card>

              <Card $reverse>
                <CardImg src={earlyCareerImg} alt="Spectator journalists at early-career event" />
                <CardBody>
                  <SubLabel>Support Early-career Journalists</SubLabel>
                  <GoalDesc style={{ margin: '0.4rem 0 0' }}>A new stipend pool of fellowships to help graduating students afford entry-level media positions. These fellowships can be the difference between a career that starts and one that doesn't.</GoalDesc>
                </CardBody>
              </Card>

              <Card>
                <CardImg src={speakersImg} alt="Spectator Media Conference panel" />
                <CardBody>
                  <SubLabel>Develop the Next Generation</SubLabel>
                  <GoalDesc style={{ margin: '0.4rem 0 0' }}>A new speaker series will bring working journalists to campus for informal lunches with students.</GoalDesc>
                </CardBody>
              </Card>
            </CardGrid>
          </Inner>
        </TextBox>
      </Wrapper>

      <DonateBar>
        <DonateHeading>Help secure Spectator's next 150 years.</DonateHeading>
        <DonateButton to={DONATE_URL}>Donate Now</DonateButton>
      </DonateBar>

      <BrochureBar>
        <a href="/Spectator_150_brochure.pdf" target="_blank" rel="noopener noreferrer">
          <BrochureImg src={brochureCover} alt="Secure the Spec brochure cover" style={{ cursor: 'pointer' }} />
        </a>
        <BrochureButton href="/Spectator_150_brochure.pdf" target="_blank" rel="noopener noreferrer">
          Get the Secure the Spec brochure
        </BrochureButton>
      </BrochureBar>
    </>
  );
};

export default GoalSection;
