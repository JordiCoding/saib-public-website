# 📚 Typography & RTL System - Complete Onboarding Guide

## 🎯 Purpose
This document provides a complete overview of the typography system and RTL (Right-to-Left) implementation for Arabic/English bilingual support. Use this guide when onboarding new AI assistants or developers to understand how typography works in this project.

---

## 📋 Table of Contents

1. [System Overview](#system-overview)
2. [Architecture](#architecture)
3. [How RTL Works](#how-rtl-works)
4. [Typography Implementation](#typography-implementation)
5. [Adding New Typography Styles](#adding-new-typography-styles)
6. [Common Mistakes](#common-mistakes)
7. [Debugging Guide](#debugging-guide)
8. [File Structure](#file-structure)
9. [Best Practices](#best-practices)

---

## 🏗️ System Overview

### **What We Built**
A **CSS-based typography system** that automatically switches fonts, sizes, and line-heights based on language (English/Arabic) without requiring JavaScript logic.

### **Key Principle**
**One class name, automatic language switching** - CSS handles everything based on the `html[dir]` attribute.

### **Example:**
```tsx
// Same class works for both languages!
<h1 className="text-h1">{t('title')}</h1>
// English → Chap font, 44px/56px
// Arabic → Riada font, 44px/72px
```

---

## 🏛️ Architecture

### **File Structure**
```
src/design-system/
├── assets/
│   └── fonts.css              # Font file loading (@font-face)
├── tokens/
│   ├── colors.css             # Color definitions
│   └── typography.css         # Typography tokens (sizes, line-heights, fonts)
└── utilities/
    ├── typography.css         # Semantic classes (.text-h1, .text-body-xl)
    └── a11y.css               # Accessibility utilities
```

### **Data Flow**
```
1. fonts.css
   ↓ Defines @font-face and CSS variables
   
2. tokens/typography.css
   ↓ References fonts.css variables
   ↓ Defines sizes, line-heights, weights
   
3. utilities/typography.css
   ↓ Uses tokens for all properties
   ↓ Creates semantic classes
   
4. Components
   ↓ Use semantic classes (.text-h1)
   ↓ RTL switches automatically via CSS
```

---

## 🔄 How RTL Works

### **The Magic: CSS-Based Language Switching**

**Step 1: Language Hook Sets Direction**
```typescript
// src/hooks/useLanguage.ts
document.documentElement.dir = 'rtl';  // Arabic
document.documentElement.dir = 'ltr';  // English
```

**Step 2: CSS Automatically Switches**
```css
/* Default (English) */
.text-h1 {
  font-family: var(--font-family-h1-en);  /* Chap */
  font-size: var(--font-size-h1-desktop-en);  /* 44px */
  line-height: var(--line-height-h1-desktop-en);  /* 56px */
}

/* When html[dir="rtl"] → Arabic styles apply */
html[dir="rtl"] .text-h1 {
  font-family: var(--font-family-h1-ar);  /* Riada */
  font-size: var(--font-size-h1-desktop-ar);  /* 44px */
  line-height: var(--line-height-h1-desktop-ar);  /* 72px */
}
```

**Step 3: Components Use Same Class**
```tsx
// No JavaScript needed!
<h1 className="text-h1">{t('title')}</h1>
// Automatically switches based on html[dir]
```

### **Why This Is Better Than Old System**

**OLD System (JavaScript-based):**
```tsx
// ❌ Requires JavaScript logic
const { getTypographyClasses } = useTypography();
<h1 className={getTypographyClasses('title')}>
  // Returns: "font-title-en" or "font-title-ar"
</h1>
```

**NEW System (CSS-based):**
```tsx
// ✅ Pure CSS, no JavaScript
<h1 className="text-h1">
  // CSS automatically switches based on html[dir]
</h1>
```

**Benefits:**
- ✅ Simpler code
- ✅ Faster (less JavaScript)
- ✅ Easier to use
- ✅ More maintainable

---

## 📝 Typography Implementation

### **Current Typography Styles**

#### **1. H1 Titles**
- **English:** Chap Light, 44px/56px (desktop), 32px/40px (mobile)
- **Arabic:** Riada Light, 44px/72px (desktop), 32px/48px (mobile)
- **Class:** `.text-h1`

#### **2. Body XL**
- **English:** Jokker Light, 20px/28px (desktop), 16px/24px (mobile)
- **Arabic:** Almarai Light, 20px/28px (desktop), 16px/24px (mobile)
- **Class:** `.text-body-xl`

### **Font Mapping**

**English Fonts:**
- **Titles:** `"Chap", sans-serif` (Light: 300)
- **Body:** `"Jokker", sans-serif` (Light: 300, Regular: 400, Medium: 500, Semibold: 600)

**Arabic Fonts:**
- **Titles:** `"Almarai", sans-serif` (Light: 300, Regular: 400, Bold: 700, ExtraBold: 800)
- **Body:** `"Riada", sans-serif` (Light: 300 only)

**Special Case:** H1 titles use **Riada** for Arabic (not Almarai), per user specification.

---

## ➕ Adding New Typography Styles

### **Step-by-Step Process**

#### **Step 1: Add Tokens**

**File:** `src/design-system/tokens/typography.css`

```css
:root {
  /* ===== YOUR NEW STYLE TOKENS ===== */
  /* English */
  --font-size-your-style-mobile-en: 16px;
  --font-size-your-style-desktop-en: 20px;
  --line-height-your-style-mobile-en: 24px;
  --line-height-your-style-desktop-en: 28px;
  --font-weight-your-style-en: 300;
  --font-family-your-style-en: var(--font-english-body);  /* Jokker */
  
  /* Arabic */
  --font-size-your-style-mobile-ar: 16px;
  --font-size-your-style-desktop-ar: 20px;
  --line-height-your-style-mobile-ar: 24px;
  --line-height-your-style-desktop-ar: 28px;
  --font-weight-your-style-ar: 300;
  --font-family-your-style-ar: var(--font-arabic-title);  /* Almarai */
}
```

**Key Points:**
- ✅ Use separate tokens for EN and AR
- ✅ Include mobile and desktop values
- ✅ Reference font variables from `fonts.css` via `tokens/typography.css`
- ✅ Mobile values should be 70-80% of desktop (best practice)

#### **Step 2: Create Utility Class**

**File:** `src/design-system/utilities/typography.css`

```css
/* ===== YOUR NEW STYLE ===== */
.your-class-name {
  /* English - Uses token variables */
  font-family: var(--font-family-your-style-en);
  font-weight: var(--font-weight-your-style-en);
  
  /* Mobile (default) */
  font-size: calc(var(--font-size-your-style-mobile-en) * var(--text-scale));
  line-height: calc(var(--line-height-your-style-mobile-en) * var(--text-scale));
}

/* Desktop (768px+) */
@media (min-width: 768px) {
  .your-class-name {
    font-size: calc(var(--font-size-your-style-desktop-en) * var(--text-scale));
    line-height: calc(var(--line-height-your-style-desktop-en) * var(--text-scale));
  }
}

/* RTL/Arabic - Automatically switches */
html[dir="rtl"] .your-class-name {
  font-family: var(--font-family-your-style-ar);
  font-weight: var(--font-weight-your-style-ar);
  
  /* Mobile (default) */
  font-size: calc(var(--font-size-your-style-mobile-ar) * var(--text-scale));
  line-height: calc(var(--line-height-your-style-mobile-ar) * var(--text-scale));
}

/* Desktop (768px+) */
@media (min-width: 768px) {
  html[dir="rtl"] .your-class-name {
    font-size: calc(var(--font-size-your-style-desktop-ar) * var(--text-scale));
    line-height: calc(var(--line-height-your-style-desktop-ar) * var(--text-scale));
  }
}
```

**Key Points:**
- ✅ Use CSS variables from tokens (NOT hardcoded values)
- ✅ Mobile-first responsive design
- ✅ Include accessibility scaling (`* var(--text-scale)`)
- ✅ Use `html[dir="rtl"]` selector (NOT `[dir="rtl"]`)

#### **Step 3: Add Translation Keys**

**Files:** `src/locales/en.json` and `src/locales/ar.json`

```json
// en.json
{
  "yourSection": {
    "yourKey": "Your English Text"
  }
}

// ar.json
{
  "yourSection": {
    "yourKey": "نصك بالعربية"
  }
}
```

**Why:** Translation keys ensure proper language switching and RTL activation.

#### **Step 4: Use in Component**

**File:** `src/components/YourComponent.tsx`

```tsx
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

const YourComponent = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage(); // Ensures RTL is activated

  return (
    <p className="your-class-name">
      {t('yourSection.yourKey')}
    </p>
  );
};
```

**Key Points:**
- ✅ Import `useTranslation` and `useLanguage`
- ✅ Use `t()` function for all text (NOT hardcoded strings)
- ✅ Use ONLY your CSS class (remove conflicting classes)
- ✅ `useLanguage` hook ensures RTL activation

---

## 🚫 Common Mistakes

### **Mistake 1: Hardcoded Font Names**

```css
/* ❌ WRONG */
.your-class {
  font-family: "Chap", sans-serif;  /* Hardcoded */
}

/* ✅ CORRECT */
.your-class {
  font-family: var(--font-family-your-style-en);  /* Uses token */
}
```

**Why:** Tokens reference `fonts.css` variables, ensuring consistency and easy updates.

---

### **Mistake 2: Wrong RTL Selector**

```css
/* ❌ WRONG */
[dir="rtl"] .your-class {
  font-family: var(--font-family-your-style-ar);
}

/* ✅ CORRECT */
html[dir="rtl"] .your-class {
  font-family: var(--font-family-your-style-ar);
}
```

**Why:** The `dir` attribute is set on `<html>` element, not on individual elements.

---

### **Mistake 3: Missing Translation Keys**

```tsx
/* ❌ WRONG */
<h1 className="text-h1">Coming Soon</h1>

/* ✅ CORRECT */
<h1 className="text-h1">{t('placeholder.comingSoon')}</h1>
```

**Why:** Hardcoded text doesn't trigger language switching. Translation keys ensure proper RTL activation.

---

### **Mistake 4: Conflicting Classes**

```tsx
/* ❌ WRONG */
<h1 className={`${getTypographyClasses('title')} text-h1`}>
  {t('title')}
</h1>

/* ✅ CORRECT */
<h1 className="text-h1">
  {t('title')}
</h1>
```

**Why:** Conflicting classes cause CSS specificity issues. Use ONLY your new class.

---

### **Mistake 5: Missing useLanguage Hook**

```tsx
/* ❌ WRONG */
const Component = () => {
  const { t } = useTranslation();
  return <h1 className="text-h1">{t('title')}</h1>;
};

/* ✅ CORRECT */
const Component = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage(); // Ensures RTL activation
  return <h1 className="text-h1">{t('title')}</h1>;
};
```

**Why:** `useLanguage` hook ensures the `dir` attribute is set correctly on `<html>`.

---

### **Mistake 6: Desktop-First Instead of Mobile-First**

```css
/* ❌ WRONG - Desktop-first */
.your-class {
  font-size: 44px;  /* Desktop */
}

@media (max-width: 767px) {
  .your-class {
    font-size: 32px;  /* Mobile */
  }
}

/* ✅ CORRECT - Mobile-first */
.your-class {
  font-size: 32px;  /* Mobile (default) */
}

@media (min-width: 768px) {
  .your-class {
    font-size: 44px;  /* Desktop */
  }
}
```

**Why:** Mobile-first is modern best practice and more maintainable.

---

## 🔍 Debugging Guide

### **Problem: Font Doesn't Switch to Arabic**

**Checklist:**
1. ✅ Is `html[dir="rtl"]` selector used? (NOT `[dir="rtl"]`)
2. ✅ Are CSS variables used? (NOT hardcoded fonts)
3. ✅ Are translation keys in both `en.json` and `ar.json`?
4. ✅ Is `useLanguage` hook imported and used?
5. ✅ Is `t()` function used for text? (NOT hardcoded)
6. ✅ Are conflicting classes removed?
7. ✅ Is CSS file imported in `index.css`?

**Debug Steps:**
```bash
# 1. Check if dir attribute is set
# Open browser console and run:
document.documentElement.dir
# Should return "rtl" when Arabic is selected

# 2. Check computed styles
# In browser DevTools, inspect element
# Check "Computed" tab → font-family
# Should show Arabic font when Arabic is selected

# 3. Check CSS is loaded
# In browser DevTools → Network tab
# Filter by CSS, check if typography.css is loaded
```

---

### **Problem: CSS Not Applied**

**Checklist:**
1. ✅ Is CSS file imported in `index.css`?
2. ✅ Is import order correct?
3. ✅ Are there CSS syntax errors?
4. ✅ Is browser cache cleared?

**Import Order in `index.css`:**
```css
@import './design-system/assets/fonts.css';
@import './design-system/tokens/colors.css';
@import './design-system/tokens/typography.css';
@import './design-system/utilities/typography.css';
@import './design-system/utilities/a11y.css';
@import "tailwindcss";
```

---

### **Problem: Translation Not Working**

**Checklist:**
1. ✅ Are keys in both `en.json` and `ar.json`?
2. ✅ Is key path correct? (e.g., `placeholder.comingSoon`)
3. ✅ Is `useTranslation` imported?
4. ✅ Is `t()` function called correctly?

**Debug Steps:**
```tsx
// Add debug log
const { t, i18n } = useTranslation();
console.log('Current language:', i18n.language);
console.log('Translation:', t('your.key'));
```

---

## 📁 File Structure

```
src/
├── design-system/
│   ├── assets/
│   │   └── fonts.css                    # Font loading (@font-face)
│   ├── tokens/
│   │   ├── colors.css                   # Color tokens
│   │   └── typography.css               # Typography tokens
│   └── utilities/
│       ├── typography.css               # Typography classes
│       └── a11y.css                     # Accessibility utilities
├── locales/
│   ├── en.json                          # English translations
│   └── ar.json                          # Arabic translations
├── hooks/
│   └── useLanguage.ts                   # Language/RTL hook
└── index.css                            # Main CSS (imports all)
```

---

## ✅ Best Practices

### **1. Mobile-First Responsive Design**

Always start with mobile styles, then add desktop overrides:

```css
/* Mobile (default) */
.your-class {
  font-size: 16px;
}

/* Desktop (768px+) */
@media (min-width: 768px) {
  .your-class {
    font-size: 20px;
  }
}
```

**Mobile Size Guidelines:**
- Mobile should be **70-80%** of desktop size
- Example: Desktop 20px → Mobile 16px (80%)

---

### **2. Use CSS Variables (Not Hardcoded Values)**

```css
/* ✅ CORRECT - Uses tokens */
.your-class {
  font-family: var(--font-family-your-style-en);
  font-size: calc(var(--font-size-your-style-desktop-en) * var(--text-scale));
}

/* ❌ WRONG - Hardcoded */
.your-class {
  font-family: "Chap", sans-serif;
  font-size: 44px;
}
```

---

### **3. Include Accessibility Scaling**

Always multiply sizes by `--text-scale`:

```css
font-size: calc(var(--font-size-your-style-desktop-en) * var(--text-scale));
line-height: calc(var(--line-height-your-style-desktop-en) * var(--text-scale));
```

**Why:** Allows users to scale text for accessibility.

---

### **4. Consistent Breakpoints**

Use consistent breakpoints across the project:

- **Mobile:** `< 768px` (default)
- **Tablet:** `768px - 1024px`
- **Desktop:** `≥ 1024px`

**Common Pattern:**
```css
/* Mobile first */
.element { /* mobile styles */ }

@media (min-width: 768px) { /* tablet+ */ }
@media (min-width: 1024px) { /* desktop */ }
```

---

### **5. Complete Implementation Checklist**

When adding a new typography style:

- [ ] **Tokens Created**
  - [ ] English tokens (mobile + desktop)
  - [ ] Arabic tokens (mobile + desktop)
  - [ ] Font family references correct
  - [ ] Mobile values are 70-80% of desktop

- [ ] **Utility Class Created**
  - [ ] English version with CSS variables
  - [ ] RTL version with `html[dir="rtl"]` selector
  - [ ] Mobile-first responsive design
  - [ ] Accessibility scaling included

- [ ] **Translation Keys Added**
  - [ ] Key added to `en.json`
  - [ ] Key added to `ar.json`
  - [ ] Keys match exactly

- [ ] **Component Updated**
  - [ ] `useTranslation` imported
  - [ ] `useLanguage` imported and used
  - [ ] `t()` function used for text
  - [ ] Only new CSS class used (no conflicts)
  - [ ] No hardcoded text

- [ ] **Testing**
  - [ ] Test in English (check font, size, line-height)
  - [ ] Switch to Arabic (check font switches, size, line-height)
  - [ ] Test mobile view (check responsive sizes)
  - [ ] Test desktop view (check responsive sizes)
  - [ ] Verify text content changes

---

## 📊 Current Typography Styles Reference

### **H1 Titles**
- **Class:** `.text-h1`
- **English:** Chap Light, 44px/56px (desktop), 32px/40px (mobile)
- **Arabic:** Riada Light, 44px/72px (desktop), 32px/48px (mobile)

### **Body XL**
- **Class:** `.text-body-xl`
- **English:** Jokker Light, 20px/28px (desktop), 16px/24px (mobile)
- **Arabic:** Almarai Light, 20px/28px (desktop), 16px/24px (mobile)

---

## 🎯 Quick Reference

### **Pattern for New Typography Style**

**1. Tokens (`tokens/typography.css`):**
```css
:root {
  --font-size-your-style-mobile-en: 16px;
  --font-size-your-style-desktop-en: 20px;
  --line-height-your-style-mobile-en: 24px;
  --line-height-your-style-desktop-en: 28px;
  --font-weight-your-style-en: 300;
  --font-family-your-style-en: var(--font-english-body);
  
  --font-size-your-style-mobile-ar: 16px;
  --font-size-your-style-desktop-ar: 20px;
  --line-height-your-style-mobile-ar: 24px;
  --line-height-your-style-desktop-ar: 28px;
  --font-weight-your-style-ar: 300;
  --font-family-your-style-ar: var(--font-arabic-title);
}
```

**2. Utility Class (`utilities/typography.css`):**
```css
.your-class-name {
  font-family: var(--font-family-your-style-en);
  font-weight: var(--font-weight-your-style-en);
  font-size: calc(var(--font-size-your-style-mobile-en) * var(--text-scale));
  line-height: calc(var(--line-height-your-style-mobile-en) * var(--text-scale));
}

@media (min-width: 768px) {
  .your-class-name {
    font-size: calc(var(--font-size-your-style-desktop-en) * var(--text-scale));
    line-height: calc(var(--line-height-your-style-desktop-en) * var(--text-scale));
  }
}

html[dir="rtl"] .your-class-name {
  font-family: var(--font-family-your-style-ar);
  font-weight: var(--font-weight-your-style-ar);
  font-size: calc(var(--font-size-your-style-mobile-ar) * var(--text-scale));
  line-height: calc(var(--line-height-your-style-mobile-ar) * var(--text-scale));
}

@media (min-width: 768px) {
  html[dir="rtl"] .your-class-name {
    font-size: calc(var(--font-size-your-style-desktop-ar) * var(--text-scale));
    line-height: calc(var(--line-height-your-style-desktop-ar) * var(--text-scale));
  }
}
```

**3. Component:**
```tsx
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

const Component = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  return <p className="your-class-name">{t('key')}</p>;
};
```

---

## 🚨 Critical Reminders

1. **Always use CSS variables** - Never hardcode fonts or sizes
2. **Always use `html[dir="rtl"]`** - Not `[dir="rtl"]`
3. **Always add translation keys** - Both EN and AR
4. **Always use `useLanguage` hook** - Ensures RTL activation
5. **Always use `t()` function** - Never hardcode text
6. **Remove conflicting classes** - Use ONLY your new class
7. **Test both languages** - English AND Arabic
8. **Mobile-first** - Start with mobile, add desktop
9. **Include accessibility scaling** - Multiply by `--text-scale`
10. **Follow the pattern** - Tokens → Utilities → Components

---

## 📚 Related Documentation

- `docs2/RTL_TYPOGRAPHY_IMPLEMENTATION_GUIDE.md` - Detailed RTL implementation guide
- `docs2/TYPOGRAPHY_SYSTEM_EXPLANATION.md` - Technical deep dive
- `docs2/DESIGN_SYSTEM_REVIEW.md` - Design system assessment

---

## ✅ Summary

**Key Takeaways:**

1. **CSS-based switching** - No JavaScript needed for font switching
2. **Token system** - Single source of truth for all typography values
3. **Mobile-first** - Responsive design built-in
4. **Accessibility ready** - Text scaling foundation included
5. **RTL support** - Automatic language switching via CSS

**The System:**
- ✅ Simple to use (one class name)
- ✅ Automatic RTL switching
- ✅ Scalable and maintainable
- ✅ Follows best practices

---

**Last Updated:** Based on successful implementation of H1 and Body XL styles  
**Status:** ✅ Production Ready  
**Version:** 1.0


