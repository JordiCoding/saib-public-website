import React from 'react';
import clsx from 'clsx';
import Button from '../ui/Button';
import type { ButtonVariant } from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

type ColorBackground = {
  variant?: 'color';
  className?: string;
  style?: React.CSSProperties;
};

type ImageBackground = {
  variant: 'image';
  src: string;
  alt?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  className?: string;
  style?: React.CSSProperties;
  objectPosition?: React.CSSProperties['objectPosition'];
};

type BackgroundConfig = ColorBackground | ImageBackground;

type CtaConfig = {
  label: string;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
};

type SlideLayout = 'image-start' | 'image-end';

type SlideImage = {
  src: string;
  alt: string;
  className?: string;
};

type SlideTitle =
  | string
  | {
      before?: string;
      highlight: string;
      after?: string;
    }
  | React.ReactNode;

interface SlideTemplateProps {
  title: SlideTitle;
  titleHighlightColorClass?: string;
  description: React.ReactNode;
  cta?: CtaConfig;
  image: SlideImage;
  layout?: SlideLayout;
  background?: BackgroundConfig;
  className?: string;
  contentMaxWidth?: number;
}

const SlideTemplate: React.FC<SlideTemplateProps> = ({
  title,
  titleHighlightColorClass = 'text-icap-accent',
  description,
  cta,
  image,
  layout = 'image-start',
  background,
  className,
  contentMaxWidth = 560,
}) => {
  const { isRTL } = useLanguage();

  const backgroundVariant = background?.variant ?? 'color';
  const wrapperStyle = backgroundVariant === 'color' ? background?.style : undefined;
  const baseWrapperClass = clsx(
    'relative overflow-hidden px-6 py-12 md:px-12 lg:px-20 lg:py-[120px]',
    backgroundVariant === 'color' ? (background as ColorBackground | undefined)?.className ?? 'bg-bg-light' : 'bg-transparent',
    className
  );

  const imageOrderDesktop = layout === 'image-start' ? 'lg:order-1' : 'lg:order-2';
  const textOrderDesktop = layout === 'image-start' ? 'lg:order-2' : 'lg:order-1';

  const renderTitle = () => {
    if (React.isValidElement(title)) {
      return title;
    }

    if (typeof title === 'string') {
      return title;
    }

    if (typeof title === 'object' && title) {
      const { before, highlight, after } = title;
      return (
        <>
          {before && <span>{before} </span>}
          <span className={clsx('font-inherit', titleHighlightColorClass)}>{highlight}</span>
          {after && <span> {after}</span>}
        </>
      );
    }

    return null;
  };

  const renderBackground = () => {
    if (!background || backgroundVariant !== 'image') {
      return null;
    }

    const imageBackground = background as ImageBackground;
    const overlayColor = imageBackground.overlayColor ?? 'rgba(17, 17, 17, 0.35)';
    const overlayOpacity = imageBackground.overlayOpacity ?? 0.65;

    return (
      <>
        <img
          src={imageBackground.src}
          alt={imageBackground.alt ?? ''}
          className={clsx('absolute inset-0 h-full w-full object-cover', imageBackground.className)}
          style={{ objectPosition: imageBackground.objectPosition, ...imageBackground.style }}
          aria-hidden={imageBackground.alt ? undefined : true}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
          aria-hidden="true"
        />
      </>
    );
  };

  return (
    <section className={baseWrapperClass} data-component="slide-template" style={wrapperStyle}>
      {renderBackground()}
      <div className="relative mx-auto flex max-w-7xl flex-col-reverse gap-12 lg:flex-row lg:items-center lg:gap-20 rtl:lg:flex-row-reverse">
        <div className={clsx('order-1 flex-1', textOrderDesktop)}>
          <div
            className={clsx('flex flex-col gap-6', {
              'text-left items-start': !isRTL,
              'text-right items-end rtl:text-right rtl:items-end': isRTL,
            })}
            style={{ maxWidth: contentMaxWidth }}
          >
            <h2 className="text-h1 text-brand-dark">{renderTitle()}</h2>
            {typeof description === 'string' ? (
              <p className="text-body text-text-gray max-w-xl">{description}</p>
            ) : (
              <div className="text-body text-text-gray max-w-xl">{description}</div>
            )}
            {cta && (
              <div className="pt-2">
                <Button
                  as="a"
                  href={cta.href}
                  variant={cta.variant ?? 'primary'}
                  aria-label={cta.ariaLabel ?? cta.label}
                  className={clsx(
                    'inline-flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                    'focus-visible:outline-icap-accent',
                    cta.className
                  )}
                >
                  {cta.label}
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className={clsx('order-2 flex-1', imageOrderDesktop)}>
          <div className="relative mx-auto flex w-full max-w-xl justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className={clsx('w-full max-w-[420px] object-contain', image.className)}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideTemplate;
