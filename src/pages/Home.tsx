import React, { useEffect } from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import TeamSection from '../components/Home/TeamSection';
import FeaturedProjects from '../components/Home/FeaturedProjects';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Team Blaze | AI & Full-Stack Development';
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <FeaturedProjects />
    </main>
  );
};

export default Home;