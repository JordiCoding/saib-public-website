# 🔍 Complete Codebase Deep Scan & Analysis

**Generated:** $(date)  
**Purpose:** Comprehensive map of all files, dependencies, and relationships before cleanup

---

## 📊 **Project Statistics**

- **Total TypeScript/TSX Files:** 110+
- **Pages:** 11
- **Components:** 80+
- **Hooks:** 9
- **Stores:** 2
- **Services:** 2
- **Types:** 4
- **Utils:** 2

---

## 🏗️ **Architecture Overview**

### **Entry Points**
```
main.tsx → App.tsx → Layout.tsx → [Routes]
```

### **Core Infrastructure**
- **Routing:** React Router DOM v6
- **State Management:** Zustand (2 stores)
- **Styling:** Tailwind CSS v4 + Custom CSS
- **i18n:** react-i18next (EN/AR support)
- **Animations:** Framer Motion
- **Build Tool:** Vite 6

---

## 📁 **File Structure & Dependencies**

### **1. Entry & Core Files** ⚠️ **CRITICAL - DO NOT DELETE**

```
src/
├── main.tsx                    # Entry point - imports App.tsx, index.css, i18n
├── App.tsx                     # Main app - imports Layout, all Pages, Testing
├── index.css                   # Global styles - ICAP colors, fonts, utilities
└── vite-env.d.ts              # Vite type definitions
```

**Dependencies:**
- `main.tsx` → `App.tsx`, `index.css`, `utils/i18n.ts`
- `App.tsx` → `Layout.tsx`, all `pages/*`, `components/testing/Testing.tsx`
- `index.css` → `assets/fonts/fonts.css`, Tailwind CSS

---

### **2. Pages** (11 files) ⚠️ **CRITICAL - Used in Routes**

```
src/pages/
├── Home.tsx                    # Imports: Hero, PortfolioSection, MutualFundsSection, etc.
├── Brokerage.tsx               # Imports: BrokerageHero, BrokerageProducts, SlidePlatformAccess
├── AssetManagement.tsx         # Imports: ReusableHero, InvestmentOpportunities, etc.
├── InvestmentBanking.tsx       # ⚠️ Imports: GridLayoutDemo from testing/
├── LocalMarket.tsx             # Imports: ReusableHero, LocalMarketsSection, etc.
├── InternationalMarkets.tsx    # Imports: ReusableHero, InternationalUSSection, etc.
├── MarginLending.tsx           # Imports: ReusableHero, MarginLendingUnlockSection, etc.
├── RealEstate.tsx              # Imports: ReusableHero, TailoredFunds, etc.
├── CalculatorPage.tsx          # Imports: Calculator component
├── PlaceholderPage.tsx         # Generic placeholder
└── NewsDetailPage.tsx          # Imports: useStrapiNews hook
```

**Key Findings:**
- ✅ `InvestmentBanking.tsx` imports `GridLayoutDemo` from `testing/` (line 9)
- ✅ All other pages are clean (no testing imports)

---

### **3. Layout Components** ⚠️ **CRITICAL - Core UI**

```
src/components/layout/
├── Layout.tsx                   # Wraps all pages - imports Header, Footer
├── Header.tsx                   # Navigation - imports MobileNav, Button, useLanguage
├── Footer.tsx                   # Footer - uses translations, logo paths
├── MobileNav.tsx                # Mobile navigation menu
└── LeadCaptureSection.tsx      # Lead capture form
```

**Dependencies:**
- `Layout.tsx` → `Header.tsx`, `Footer.tsx`
- `Header.tsx` → `/logo/icap-logo.png` (hardcoded), `Button.tsx`, `MobileNav.tsx`
- `Footer.tsx` → `/logo/icap-logo.svg` (hardcoded), `/images/footer-background.png`

**ICAP References:**
- Logo paths: `/logo/icap-logo.png`, `/logo/icap-logo.svg`
- Company name in translations: `footer.logoDescription`

---

### **4. Testing Components** 🟢 **SAFE TO DELETE**

```
src/components/testing/
├── Testing.tsx                  # Main testing page - imports FeatureSectionDemo
├── GridLayoutDemo.tsx           # Grid layout demo
├── NavigationCardDemo.tsx       # Navigation card demo
├── FeatureSectionDemo.tsx       # Feature section demo
├── ReusableHeroTest.tsx         # Hero component test
└── index.ts                     # Exports all testing components
```

**Usage:**
- ✅ `App.tsx` imports `Testing` (line 14)
- ✅ `App.tsx` has route `/testing` (line 33)
- ✅ `InvestmentBanking.tsx` imports `GridLayoutDemo` (line 9) - **NEEDS REMOVAL**

**Risk Level:** 🟢 **LOW** - Only used in `/testing` route and one import

---

### **5. Home Components** (11 files) 🟡 **MEDIUM RISK**

```
src/components/home/
├── Hero.tsx                     # Used in Home.tsx
├── HomeHero.tsx                 # ⚠️ Commented out in Home.tsx (line 3)
├── PortfolioSection.tsx         # Used in Home.tsx
├── MutualFundsSection.tsx       # Used in Home.tsx
├── GlobalMarketsSection.tsx    # ⚠️ Commented out in Home.tsx (line 20)
├── GlobalMarkets2Section.tsx    # Used in Home.tsx
├── MarginSection2.tsx           # Used in Home.tsx
├── WhyAlistithmarSection.tsx    # ⚠️ ICAP-specific name - Used in Home.tsx
├── NewsroomSection.tsx          # Used in Home.tsx
└── CtaSection.tsx               # Used in multiple pages
```

**Key Findings:**
- `WhyAlistithmarSection.tsx` - ICAP-specific name (17 references to "ICAP" inside)
- `HomeHero.tsx` - Commented out, safe to delete
- `GlobalMarketsSection.tsx` - Commented out, safe to delete

---

### **6. UI Components** (11 files) ✅ **REUSABLE**

```
src/components/ui/
├── Button.tsx                   # Used everywhere - ICAP color references
├── FeatureCard.tsx              # Generic reusable
├── FeatureSection.tsx           # Generic reusable
├── GridCard.tsx                 # Generic reusable
├── GridLayout.tsx               # Generic reusable
├── InputField.tsx               # Generic reusable
├── NavigationCard.tsx           # Generic reusable
├── NavigationCardGrid.tsx       # Generic reusable
├── NavigationCardSection.tsx    # Generic reusable
├── SectionHeader.tsx            # Generic reusable
└── index.ts                     # Exports
```

**ICAP References:**
- `Button.tsx` - Uses `icap-gold` color (2 references)

---

### **7. Common Components** (4 files) ✅ **REUSABLE**

```
src/components/common/
├── Breadcrumbs.tsx              # Generic reusable
├── PromotionModal.tsx           # Generic reusable
├── ReusableHero.tsx             # Generic reusable - used in many pages
└── TextBlock.tsx                # Generic reusable - ICAP color reference
```

**ICAP References:**
- `TextBlock.tsx` - Uses `icap-gold` color (1 reference)

---

### **8. Hooks** (9 files) ⚠️ **CRITICAL INFRASTRUCTURE**

```
src/hooks/
├── useLanguage.ts               # ⚠️ CRITICAL - Language switching, RTL support
├── useTypography.ts             # ⚠️ CRITICAL - Typography system (ICAP fonts)
├── useApi.ts                    # Generic API hook
├── useCmsData.ts                # CMS data hook
├── useFundSlider.ts             # Fund slider hook
├── usePromotionPopup.ts         # Promotion popup hook
├── useScrollToTop.ts            # Scroll to top hook
├── useStrapiHero.ts             # Strapi hero hook
└── useStrapiNews.ts             # Strapi news hook
```

**Critical Hooks:**
- `useLanguage.ts` - Used in Header, many components
- `useTypography.ts` - Used everywhere - contains ICAP font references (Chap, Jokker, Almarai, Riada)

---

### **9. Stores** (2 files) 🟡 **MEDIUM RISK**

```
src/stores/
├── useAppStore.ts               # Generic app state (CMS, Excel data)
└── useMarketStore.ts            # Market data store - ICAP-specific markets (TASI, MT30)
```

**ICAP References:**
- `useMarketStore.ts` - Hardcoded Saudi markets (TASI, MT30)

---

### **10. Services** (2 files) 🟡 **MEDIUM RISK**

```
src/services/
├── strapi-hero-service.ts       # Strapi CMS integration
└── strapi-news-service.ts       # Strapi CMS integration
```

**Note:** These reference Strapi CMS - may not be needed if not using CMS

---

### **11. Utils** (2 files) ⚠️ **CRITICAL**

```
src/utils/
├── i18n.ts                      # ⚠️ CRITICAL - Translation setup
└── calculations.ts              # Calculator utilities
```

---

### **12. Types** (4 files) ✅ **REUSABLE**

```
src/types/
├── cms.ts                       # CMS types
├── market.ts                    # Market data types - ICAP reference
├── news.ts                      # News types
└── promotion.ts                 # Promotion types
```

**ICAP References:**
- `market.ts` - ICAP reference (1 match)

---

### **13. Locales** (2 files) ⚠️ **CRITICAL**

```
src/locales/
├── en.json                      # English translations - ICAP references
└── ar.json                      # Arabic translations - ICAP references
```

**ICAP References:**
- `en.json` - 18 matches (company name, footer text, etc.)
- `ar.json` - 6 matches

---

### **14. Assets** 🟡 **MEDIUM RISK**

```
src/assets/fonts/
├── fonts.css                    # Font definitions
├── almarai/                     # Arabic fonts (4 files)
├── chap/                        # English font (1 file)
├── jokker/                      # English fonts (4 files)
└── riada/                       # Arabic font (1 file)
```

**Note:** Fonts are ICAP-specific but may want to keep for typography system

---

### **15. Public Assets** 🟡 **MEDIUM RISK**

```
public/
├── logo/
│   ├── icap-logo.png            # ⚠️ ICAP logo (used in Header)
│   └── icap-logo.svg            # ⚠️ ICAP logo (used in Footer)
├── icons/                       # Generic icons (12 SVG files)
└── images/                      # Many images (141 files)
    ├── HeroSlides/              # Hero background images
    ├── background/              # Background images
    └── ...                      # Other images
```

**ICAP-Specific Assets:**
- Logo files: `icap-logo.png`, `icap-logo.svg`
- Many images may be ICAP-specific (need manual review)

---

## 🔗 **Import/Export Dependencies**

### **Critical Import Chains**

```
main.tsx
  → App.tsx
    → Layout.tsx
      → Header.tsx (uses useLanguage, Button, MobileNav)
      → Footer.tsx (uses translations, logo)
    → Home.tsx
      → Hero.tsx
      → PortfolioSection.tsx
      → MutualFundsSection.tsx
      → WhyAlistithmarSection.tsx (ICAP-specific)
      → NewsroomSection.tsx
      → CtaSection.tsx
    → InvestmentBanking.tsx
      → GridLayoutDemo.tsx (⚠️ FROM TESTING/)
```

### **Testing Component Usage**

```
App.tsx
  → Testing.tsx (route: /testing)
    → FeatureSectionDemo.tsx

InvestmentBanking.tsx
  → GridLayoutDemo.tsx (⚠️ NEEDS REMOVAL)
```

---

## 🎨 **CSS & Styling Analysis**

### **CSS Variables** (in `index.css`)

```css
--color-icap-primary: #0A2D45;      /* Used: 21 times */
--color-icap-secondary: #114972;   /* Used: ? */
--color-icap-accent: #A44F17;       /* Used: ? */
--color-icap-gold: #EECA60;          /* Used: 21 times */
```

**Usage Count:** 84 matches across 22 files

### **Font Classes**

```css
.font-jokker-light
.font-jokker-regular
.font-jokker-semibold
```

**Note:** Fonts are ICAP-specific but part of typography system

---

## 📋 **ICAP Branding References Summary**

### **Files with ICAP References** (22 files, 84 matches)

1. **Critical Files:**
   - `src/index.css` - CSS variables (4 references)
   - `src/components/layout/Header.tsx` - Logo path (1 reference)
   - `src/components/layout/Footer.tsx` - Logo path (1 reference)
   - `src/locales/en.json` - Company name, text (18 references)
   - `src/locales/ar.json` - Company name, text (6 references)

2. **Component Files:**
   - `src/components/home/WhyAlistithmarSection.tsx` - 17 references
   - `src/components/ui/Button.tsx` - 2 references
   - `src/components/common/TextBlock.tsx` - 1 reference
   - `src/components/home/NewsroomSection.tsx` - 3 references
   - `src/components/home/PortfolioSection.tsx` - 1 reference
   - `src/components/home/MarginLendingNewSection.tsx` - 2 references
   - `src/components/home/CtaSection.tsx` - 1 reference
   - `src/components/home/MarginLendingSection.tsx` - 1 reference
   - `src/components/margin-lending/MarginLendingUnlockSection.tsx` - 1 reference
   - `src/components/international-markets/InternationalUSSection.tsx` - 1 reference
   - `src/components/ui/FeatureSection.tsx` - 1 reference
   - `src/components/testing/FeatureSectionDemo.tsx` - 14 references
   - `src/components/news/NewsCard.tsx` - 2 references
   - `src/components/market-data/MarketCard.tsx` - 2 references
   - `src/pages/NewsDetailPage.tsx` - 1 reference
   - `src/types/market.ts` - 1 reference

---

## ✅ **Safe Cleanup Checklist**

### **Phase 1: Testing Components** 🟢 **LOW RISK**

- [ ] Delete `src/components/testing/` folder
- [ ] Remove `/testing` route from `App.tsx` (line 33)
- [ ] Remove `Testing` import from `App.tsx` (line 14)
- [ ] Remove `GridLayoutDemo` import from `InvestmentBanking.tsx` (line 9)
- [ ] Remove `GridLayoutDemo` usage from `InvestmentBanking.tsx` (if any)

**Estimated Time:** 5 minutes  
**Risk:** 🟢 **LOW** - Only affects `/testing` route

---

### **Phase 2: Commented Components** 🟢 **LOW RISK**

- [ ] Delete `src/components/home/HomeHero.tsx` (commented out)
- [ ] Delete `src/components/home/GlobalMarketsSection.tsx` (commented out)

**Estimated Time:** 2 minutes  
**Risk:** 🟢 **LOW** - Already commented out

---

### **Phase 3: CSS Variables** 🟡 **MEDIUM RISK**

- [ ] Create generic color names alongside ICAP names
- [ ] Replace all references incrementally
- [ ] Test after each replacement
- [ ] Remove old ICAP variable names

**Estimated Time:** 1-2 hours  
**Risk:** 🟡 **MEDIUM** - But safe if done incrementally

---

### **Phase 4: Component Renaming** 🟡 **MEDIUM RISK**

- [ ] Rename `WhyAlistithmarSection.tsx` → `WhyChooseUsSection.tsx`
- [ ] Update import in `Home.tsx`
- [ ] Update component name inside file
- [ ] Update translation keys if needed

**Estimated Time:** 15 minutes  
**Risk:** 🟡 **MEDIUM** - Requires import updates

---

### **Phase 5: Logo & Assets** 🟡 **MEDIUM RISK**

- [ ] Replace logo files in `public/logo/`
- [ ] Update logo paths in `Header.tsx` and `Footer.tsx`
- [ ] Review and remove ICAP-specific images

**Estimated Time:** 30 minutes  
**Risk:** 🟡 **MEDIUM** - Visual changes

---

### **Phase 6: Translation Files** 🟡 **MEDIUM RISK**

- [ ] Remove ICAP-specific text from `en.json` and `ar.json`
- [ ] Replace with generic placeholders
- [ ] Test all pages for missing translations

**Estimated Time:** 1 hour  
**Risk:** 🟡 **MEDIUM** - May break translations

---

## 🚨 **Critical Dependencies Map**

### **Files That MUST Exist for App to Run:**

```
✅ main.tsx
✅ App.tsx
✅ Layout.tsx
✅ Header.tsx
✅ Footer.tsx
✅ utils/i18n.ts
✅ hooks/useLanguage.ts
✅ hooks/useTypography.ts
✅ index.css (base structure)
✅ locales/en.json
✅ locales/ar.json
```

### **Files Safe to Delete:**

```
✅ src/components/testing/ (entire folder)
✅ src/components/home/HomeHero.tsx (commented out)
✅ src/components/home/GlobalMarketsSection.tsx (commented out)
```

### **Files Requiring Careful Handling:**

```
⚠️ src/index.css (CSS variables)
⚠️ src/components/layout/Header.tsx (logo path)
⚠️ src/components/layout/Footer.tsx (logo path)
⚠️ src/components/home/WhyAlistithmarSection.tsx (rename)
⚠️ src/locales/en.json (ICAP text)
⚠️ src/locales/ar.json (ICAP text)
```

---

## 📊 **Risk Assessment Summary**

| Category | Files | Risk Level | Action Required |
|----------|-------|------------|-----------------|
| Testing Components | 6 files | 🟢 LOW | Delete folder, remove imports |
| Commented Components | 2 files | 🟢 LOW | Delete files |
| CSS Variables | 1 file | 🟡 MEDIUM | Rename, replace references |
| Logo Assets | 2 files | 🟡 MEDIUM | Replace files, update paths |
| Translation Files | 2 files | 🟡 MEDIUM | Update text, test |
| Component Names | 1 file | 🟡 MEDIUM | Rename, update imports |
| Core Infrastructure | 10 files | 🔴 HIGH | Do not touch |

---

## 🎯 **Recommended Cleanup Order**

1. **Phase 1:** Delete testing components (5 min) ✅ **START HERE**
2. **Phase 2:** Delete commented components (2 min)
3. **Phase 3:** Review and plan CSS variable replacement (30 min)
4. **Phase 4:** Rename ICAP-specific component (15 min)
5. **Phase 5:** Replace logos and update paths (30 min)
6. **Phase 6:** Update translation files (1 hour)

**Total Estimated Time:** ~3 hours for complete cleanup

---

## 💡 **Key Insights**

1. **Testing components are isolated** - Safe to delete immediately
2. **CSS variables are widely used** - Need careful replacement strategy
3. **Logo paths are hardcoded** - Easy to update but visual impact
4. **Translation files contain ICAP text** - Need systematic replacement
5. **Most components are reusable** - Good foundation for white-label

---

**Next Steps:** Start with Phase 1 (testing components) as a safe test run.

