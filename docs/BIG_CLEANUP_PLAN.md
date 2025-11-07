# 🗑️ Big Cleanup Plan - Template Conversion

## ✅ **KEEP - Core Template Components**

### **Home Page Components (4 components)**
1. ✅ `Hero.tsx` - Generic hero (title, subtitle, buttons, image/video background)
2. ✅ `PortfolioSection.tsx` - Image/text composition template
3. ✅ `MutualFundsSection.tsx` - Carousel logic (reusable pattern)
4. ✅ `WhyAlistithmarSection.tsx` - Template for 3-8 elements

### **Infrastructure (MUST KEEP)**
- ✅ `layout/` - Header, Footer, Layout, MobileNav, LeadCaptureSection
- ✅ `common/` - Breadcrumbs, PromotionModal, ReusableHero, TextBlock
- ✅ `ui/` - All UI components (Button, FeatureCard, GridCard, etc.)
- ✅ `mutual-funds/` - Used by MutualFundsSection (carousel logic)

### **Core Files (MUST KEEP)**
- ✅ `hooks/` - All hooks (useLanguage, useTypography, etc.)
- ✅ `utils/` - i18n, calculations
- ✅ `stores/` - State management
- ✅ `types/` - TypeScript types
- ✅ `locales/` - Translation files

---

## ❌ **DELETE - Page-Specific Components**

### **Entire Folders to Delete:**
1. ❌ `asset-management/` - 3 components
2. ❌ `brokerage/` - 4 components
3. ❌ `international-markets/` - 4 components
4. ❌ `investment-banking/` - 6 components
5. ❌ `local-market/` - 5 components
6. ❌ `margin-lending/` - 4 components
7. ❌ `market-data/` - 2 components
8. ❌ `real-estate/` - 2 components
9. ❌ `news/` - 3 components (unless needed)
10. ❌ `calculator/` - 5 components (unless needed)

**Total:** ~38 component files

### **Home Components to Remove:**
- ❌ `GlobalMarkets2Section.tsx`
- ❌ `MarginSection2.tsx`
- ❌ `NewsroomSection.tsx`
- ❌ `CtaSection.tsx` (unless you want to keep it)

---

## 📄 **Pages to Simplify**

### **Keep:**
- ✅ `Home.tsx` - Simplified (only 4 components)
- ✅ `PlaceholderPage.tsx` - Generic placeholder

### **Remove or Simplify:**
- ❌ `Brokerage.tsx` - Delete (uses deleted components)
- ❌ `AssetManagement.tsx` - Delete
- ❌ `InvestmentBanking.tsx` - Delete
- ❌ `LocalMarket.tsx` - Delete
- ❌ `InternationalMarkets.tsx` - Delete
- ❌ `MarginLending.tsx` - Delete
- ❌ `RealEstate.tsx` - Delete
- ❌ `CalculatorPage.tsx` - Delete (unless you want calculator)
- ❌ `NewsDetailPage.tsx` - Delete (unless you want news)

---

## 🎯 **Simplified Home.tsx**

```tsx
import React from 'react';
import Hero from '../components/home/Hero';
import PortfolioSection from '../components/home/PortfolioSection';
import MutualFundsSection from '../components/home/MutualFundsSection';
import WhyAlistithmarSection from '../components/home/WhyAlistithmarSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PortfolioSection />
      <MutualFundsSection />
      <WhyAlistithmarSection />
    </>
  );
};
```

---

## ⚠️ **Dependencies to Check**

### **Before Deleting, Verify:**
1. ✅ `MutualFundsSection` uses `mutual-funds/` folder - **KEEP**
2. ✅ `Hero` might use `common/ReusableHero` - **KEEP**
3. ✅ `CtaSection` might be used elsewhere - Check first
4. ✅ `NewsroomSection` might be used elsewhere - Check first

---

## 📋 **Deletion Order (Safest First)**

### **Phase 1: Remove from Home.tsx** (2 min)
- Remove unused imports
- Remove unused components from JSX

### **Phase 2: Delete Home Components** (1 min)
- Delete `GlobalMarkets2Section.tsx`
- Delete `MarginSection2.tsx`
- Delete `NewsroomSection.tsx`
- Delete `CtaSection.tsx` (if not used elsewhere)

### **Phase 3: Delete Page Folders** (5 min)
- Delete entire component folders
- Delete corresponding page files

### **Phase 4: Clean Up Routes** (2 min)
- Remove routes from `App.tsx`
- Remove page imports

### **Phase 5: Clean Up Services** (optional)
- Remove unused services (strapi-hero-service, strapi-news-service)
- Remove unused hooks (useStrapiHero, useStrapiNews)

---

## 🚨 **Risk Assessment**

| Action | Risk | Impact |
|--------|------|--------|
| Remove from Home.tsx | 🟢 LOW | Only affects home page |
| Delete home components | 🟢 LOW | Only if not used elsewhere |
| Delete page folders | 🟢 LOW | Pages already won't work |
| Remove routes | 🟢 LOW | Just removes navigation |
| Delete services | 🟡 MEDIUM | Check if used elsewhere |

**Overall Risk:** 🟢 **LOW** - Most components are isolated

---

## ✅ **Final Template Structure**

```
src/
├── components/
│   ├── home/              # 4 components only
│   │   ├── Hero.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── MutualFundsSection.tsx
│   │   └── WhyAlistithmarSection.tsx
│   ├── common/            # Reusable components
│   ├── layout/            # Header, Footer, Layout
│   ├── ui/                # UI primitives
│   └── mutual-funds/      # Carousel logic
├── pages/
│   ├── Home.tsx          # Simplified
│   └── PlaceholderPage.tsx
└── ... (infrastructure)
```

---

## 💡 **Recommendation**

**This is NOT crazy - it's smart!** 

You're creating a clean template with:
- ✅ Only essential components
- ✅ Reusable patterns (Hero, Carousel, Image/Text)
- ✅ Clean structure
- ✅ Easy to extend

**Estimated Time:** 15-20 minutes  
**Risk Level:** 🟢 **LOW**  
**Result:** Clean, minimal template ready for new projects

**Should I proceed?**

