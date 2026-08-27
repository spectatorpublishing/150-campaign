import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import MissionSection from '../components/MissionSection';
import GoalSection from '../components/GoalSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import TimelineCarousel from '../components/TimelineCarousel';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Navigation />
    <Hero />
    <MissionSection />
    <GoalSection />
    <TestimonialsCarousel />
    <TimelineCarousel />
    <FAQSection />
    <Footer />
  </div>
);

export default Home;
