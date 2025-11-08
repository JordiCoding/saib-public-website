import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import ReusableHero from '../components/common/ReusableHero';
import { useTypography } from '../hooks/useTypography';
import { useLanguage } from '../hooks/useLanguage';

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
  const { isRTL } = useLanguage(); // Ensure RTL is activated

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
          {/* H1 Title - Production style */}
          <h2 className="text-h1 mb-6">
            {t('placeholder.comingSoonTest')}
          </h2>
          {/* Test 2: Existing working style */}
          <h2 className="section-title mb-6">
            {t('placeholder.comingSoonExisting')}
          </h2>
          <p className={`text-lg text-gray-600 ${getTypographyClasses('body')}`}>
            {t('placeholder.underConstruction')}
          </p>
          
          {/* Body Text Test Section */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h3 className="text-h1 mb-8">
              {t('placeholder.bodyTextTitle')}
            </h3>
            <div className="max-w-2xl mx-auto text-left">
              <p className="text-body-xl text-gray-700 mb-4">
                {t('placeholder.bodyTextSample')}
              </p>
              <p className="text-body-xl text-gray-700">
                {t('placeholder.bodyTextSample')}
              </p>
            </div>
            
            {/* Technical Info */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg text-left max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold mb-4">Technical Details:</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>English:</strong> Jokker Light, 20px/28px (desktop), 16px/24px (mobile)</p>
                <p><strong>Arabic:</strong> Almarai Light, 20px/28px (desktop), 16px/24px (mobile)</p>
                <p><strong>Class:</strong> <code className="bg-gray-200 px-2 py-1 rounded">.text-body-xl</code></p>
                <p><strong>Responsive:</strong> Mobile-first (16px default, 20px at 768px+)</p>
              </div>
            </div>
          </div>
          
          {/* Body L Test Section */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h3 className="text-h1 mb-8">
              {t('placeholder.bodyLTextTitle')}
            </h3>
            <div className="max-w-2xl mx-auto text-left">
              <p className="text-body-l text-gray-700 mb-4">
                {t('placeholder.bodyLTextSample')}
              </p>
              <p className="text-body-l text-gray-700">
                {t('placeholder.bodyLTextSample')}
              </p>
            </div>
            
            {/* Technical Info */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg text-left max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold mb-4">Technical Details:</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>English:</strong> Jokker Light, 16px/22px (desktop), 14px/20px (mobile)</p>
                <p><strong>Arabic:</strong> Almarai Regular, 16px/24px (desktop), 12px/18px (mobile)</p>
                <p><strong>Class:</strong> <code className="bg-gray-200 px-2 py-1 rounded">.text-body-l</code></p>
                <p><strong>Responsive:</strong> Mobile-first (14px/20px default, 16px/22px at 768px+)</p>
              </div>
            </div>
          </div>

          {/* H5 Test Section */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h3 className="text-h1 mb-8">
              {t('placeholder.h5TextTitle')}
            </h3>
            <div className="max-w-2xl mx-auto text-left space-y-4">
              <p className="text-h5 text-gray-900">
                {t('placeholder.h5TextSample')}
              </p>
              <p className="text-h5 text-gray-900">
                {t('placeholder.h5TextSample')}
              </p>
            </div>
            
            {/* Technical Info */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg text-left max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold mb-4">Technical Details:</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>English:</strong> Jokker Light, 24px/36px (desktop), 20px/30px (mobile)</p>
                <p><strong>Arabic:</strong> Almarai Regular, 24px/36px (desktop), 20px/32px (mobile)</p>
                <p><strong>Class:</strong> <code className="bg-gray-200 px-2 py-1 rounded">.text-h5</code></p>
                <p><strong>Responsive:</strong> Mobile-first (20px base, bumps to 24px at 768px+)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePlaceholder;

