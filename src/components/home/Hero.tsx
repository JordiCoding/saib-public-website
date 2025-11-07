import React from 'react';
import { useTranslation } from 'react-i18next';
import ReusableHero from '../common/ReusableHero';
import Header from '../layout/Header';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      {/* Header/Navbar */}
      <Header position="absolute" />
      
      {/* Hero Content */}
      <ReusableHero
        // Content
        title={t('home.heroTitle')}
        subtitle={t('home.heroSubtitle')}
        ctaText={t('home.startInvesting')}
        
        // Background
        backgroundType="image"
        backgroundSrc="/images/background/Homebackground.png"
        mobileBackgroundSrc="/images/backgroundmobile/MHomebackground.png"
        
        // Layout
        layout="left-aligned"
        
        // Styling
        overlay={false}
        
        // Animation
        enableAnimations={true}
        
        // RTL
        enableRTLFlip={true}
        
        // Typography - Using the updated header typography
        titleTypography="header-title"
        subtitleTypography="header-subtitle"
      />
    </div>
  );
};

export default Hero; 