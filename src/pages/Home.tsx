import React from 'react';
import Hero from '../components/home/Hero';
import PortfolioSection from '../components/home/PortfolioSection';
import MutualFundsSection from '../components/home/MutualFundsSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PortfolioSection />
      <MutualFundsSection />
      <WhyChooseUsSection />
    </>
  );
};

export default Home; 