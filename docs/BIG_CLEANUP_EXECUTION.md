# 🎯 Big Cleanup Plan - Template Conversion

## ✅ **KEEP - Core Template Components**

### **Home Page Components (4 components)**
1. ✅ `Hero.tsx` - Generic hero (uses ReusableHero internally)
2. ✅ `PortfolioSection.tsx` - Image/text composition template
3. ✅ `MutualFundsSection.tsx` - Carousel logic (uses mutual-funds/)
4. ✅ `WhyAlistithmarSection.tsx` - Template for 3-8 elements

### **Supporting Components (KEEP)**
- ✅ `common/ReusableHero.tsx` - Used by Hero.tsx
- ✅ `mutual-funds/` - Used by MutualFundsSection
- ✅ `layout/` - Header, Footer, Layout (critical)
- ✅ `common/` - Breadcrumbs, PromotionModal, TextBlock
- ✅ `ui/` - All UI components

---

## ❌ **DELETE - From Home.tsx**

- ❌ `GlobalMarkets2Section.tsx`
- ❌ `MarginSection2.tsx`
- ❌ `NewsroomSection.tsx`
- ❌ `CtaSection.tsx` (used in other pages, but not needed in template)

---

## ❌ **DELETE - Entire Page Component Folders**

1. ❌ `asset-management/` (3 files)
2. ❌ `brokerage/` (4 files)
3. ❌ `international-markets/` (4 files)
4. ❌ `investment-banking/` (6 files)
5. ❌ `local-market/` (5 files)
6. ❌ `margin-lending/` (4 files)
7. ❌ `market-data/` (2 files)
8. ❌ `real-estate/` (2 files)
9. ❌ `news/` (3 files)
10. ❌ `calculator/` (5 files)

**Total:** ~38 component files

---

## ❌ **DELETE - Page Files**

- ❌ `Brokerage.tsx`
- ❌ `AssetManagement.tsx`
- ❌ `InvestmentBanking.tsx`
- ❌ `LocalMarket.tsx`
- ❌ `InternationalMarkets.tsx`
- ❌ `MarginLending.tsx`
- ❌ `RealEstate.tsx`
- ❌ `CalculatorPage.tsx`
- ❌ `NewsDetailPage.tsx`

**KEEP:**
- ✅ `Home.tsx` (simplified)
- ✅ `PlaceholderPage.tsx` (generic)

---

## 📋 **Execution Plan**

### **Step 1: Simplify Home.tsx** ✅
- Remove unused imports
- Keep only 4 components

### **Step 2: Delete Home Components** ✅
- Delete 4 unused components from home/

### **Step 3: Delete Page Folders** ✅
- Delete 10 component folders

### **Step 4: Delete Page Files** ✅
- Delete 9 page files

### **Step 5: Clean Routes** ✅
- Remove routes from App.tsx
- Keep only Home and PlaceholderPage routes

---

## ⚠️ **Dependencies Check**

- ✅ `MutualFundsSection` → uses `mutual-funds/` → **KEEP**
- ✅ `Hero` → uses `ReusableHero` → **KEEP**
- ✅ `CtaSection` → used in deleted pages → **DELETE**
- ✅ `NewsroomSection` → used in deleted pages → **DELETE**

---

## 🎯 **Final Home.tsx**

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

## ✅ **Risk Assessment: 🟢 LOW**

- Components are isolated
- Pages are independent
- Easy to test
- Easy to rollback with git

**Ready to proceed!**

