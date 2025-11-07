import { useState, useEffect } from 'react';
// import { gql } from 'graphql-request';
// import { hygraphClient } from '../utils/hygraph';
import type { HeroContent, HeroContentResponse } from '../types/cms';
import { useLanguage } from './useLanguage';
import { useTranslation } from 'react-i18next';

// const GET_HERO_CONTENT = gql`
//   query GetHeroContent($locale: Locale!) {
//     heroContents(locales: [$locale]) {
//       id
//       title
//       subtitle
//       ctaPrimary
//       ctaSecondary
//       backgroundImage {
//         url
//       }
//     }
//   }
// `;

export const useCmsData = () => {
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return {
    data: { hero: heroContent },
    loading,
    error,
  };
}; 