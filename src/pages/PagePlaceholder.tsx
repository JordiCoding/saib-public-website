import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import ReusableHero from '../components/common/ReusableHero';
import { useTypography } from '../hooks/useTypography';

interface PagePlaceholderProps {
  titleKey: string;
  subtitleKey?: string;
  backgroundImage?: string;
}

const PagePlaceholder: React.FC<PagePlaceholderProps> = ({ 
  titleKey, 
  subtitleKey,
  backgroundImage = '/images/background/Homebackground.png'
}) => {
  const { t } = useTranslation();
  const { getTypographyClasses } = useTypography();

  return (
    <div className="relative">
      {/* Hero Section */}
      <ReusableHero
        // Content - use translation keys directly
        title={titleKey}
        subtitle={subtitleKey}
        
        // Background
        backgroundType="image"
        backgroundSrc={backgroundImage}
        
        // Layout
        layout="left-aligned"
        
        // Styling
        overlay={true}
        overlayOpacity={0.3}
        
        // Animation
        enableAnimations={true}
        
        // RTL
        enableRTLFlip={true}
        
        // Typography
        titleTypography="header-title"
        subtitleTypography="header-subtitle"
        
        // Breadcrumbs
        showBreadcrumbs={true}
      />
      
      {/* Coming Soon Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className={`text-3xl md:text-4xl mb-6 ${getTypographyClasses('title')}`}>
            Coming Soon
          </h2>
          <p className={`text-lg text-gray-600 ${getTypographyClasses('body')}`}>
            This page is under construction. Please check back later.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PagePlaceholder;

