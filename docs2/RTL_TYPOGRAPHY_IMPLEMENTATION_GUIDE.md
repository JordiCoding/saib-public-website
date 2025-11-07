# RTL/Arabic Typography Implementation Guide

## 🎯 Purpose
This guide explains the **correct way** to implement English/Arabic typography with RTL support in this project. Follow these steps exactly to avoid common pitfalls.

---

## ✅ **Correct Implementation Pattern**

### **Step 1: Create CSS Class**

**File:** `src/design-system/utilities/typography.css`

```css
/* Your Typography Class */
.your-class-name {
  /* English Version (Default) */
  font-family: "Chap", sans-serif;  /* Explicit font, NOT CSS variable */
  font-size: 44px;
  line-height: 56px;
  font-weight: 300;
}

/* RTL/Arabic Version */
html[dir="rtl"] .your-class-name {
  font-family: "Riada", sans-serif;  /* Explicit Arabic font */
  line-height: 72px;  /* Different line-height if needed */
}
```

**Critical Rules:**
- ✅ Use explicit font names: `"Chap", sans-serif` NOT `var(--font-heading)`
- ✅ Use `html[dir="rtl"]` selector (NOT just `[dir="rtl"]`)
- ✅ Place RTL styles immediately after English styles
- ✅ NO `!important` unless absolutely necessary

---

### **Step 2: Add Translation Keys**

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

---

### **Step 3: Use in Component**

**File:** `src/components/YourComponent.tsx`

```tsx
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

const YourComponent = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage(); // Ensures RTL is activated

  return (
    <h2 className="your-class-name">
      {t('yourSection.yourKey')}
    </h2>
  );
};
```

**Critical Rules:**
- ✅ Import `useTranslation` from `react-i18next`
- ✅ Import `useLanguage` hook (ensures RTL activation)
- ✅ Use `t()` function for all text (NOT hardcoded strings)
- ✅ Use ONLY your CSS class (remove conflicting classes like `getTypographyClasses`)

---

## 🚫 **Common Mistakes (DO NOT DO THIS)**

### **Mistake 1: Using CSS Variables**
```css
/* ❌ WRONG */
.your-class {
  font-family: var(--font-heading);
}

/* ✅ CORRECT */
.your-class {
  font-family: "Chap", sans-serif;
}
```

**Why:** CSS variables don't work reliably with RTL switching. Use explicit font names.

---

### **Mistake 2: Wrong Selector**
```css
/* ❌ WRONG */
[dir="rtl"] .your-class {
  font-family: "Riada", sans-serif;
}

/* ✅ CORRECT */
html[dir="rtl"] .your-class {
  font-family: "Riada", sans-serif;
}
```

**Why:** The `dir` attribute is set on `<html>` element, not on individual elements.

---

### **Mistake 3: Using Hardcoded Text**
```tsx
/* ❌ WRONG */
<h2 className="your-class">Coming Soon</h2>

/* ✅ CORRECT */
<h2 className="your-class">{t('placeholder.comingSoon')}</h2>
```

**Why:** Hardcoded text doesn't trigger language switching. Translation keys ensure proper RTL activation.

---

### **Mistake 4: Conflicting Classes**
```tsx
/* ❌ WRONG */
<h2 className={`${getTypographyClasses('title')} your-class`}>
  {t('key')}
</h2>

/* ✅ CORRECT */
<h2 className="your-class">
  {t('key')}
</h2>
```

**Why:** Conflicting classes cause CSS specificity issues. Use ONLY your new class.

---

### **Mistake 5: Missing useLanguage Hook**
```tsx
/* ❌ WRONG */
const Component = () => {
  const { t } = useTranslation();
  return <h2 className="your-class">{t('key')}</h2>;
};

/* ✅ CORRECT */
const Component = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage(); // Ensures RTL activation
  return <h2 className="your-class">{t('key')}</h2>;
};
```

**Why:** `useLanguage` hook ensures the `dir` attribute is set correctly on `<html>`.

---

## 🔍 **Debugging Guide**

### **Problem: Font Doesn't Switch to Arabic**

**Checklist:**
1. ✅ Is `html[dir="rtl"]` selector used? (NOT `[dir="rtl"]`)
2. ✅ Is explicit font name used? (NOT CSS variable)
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
# Should show "Riada" when Arabic is selected

# 3. Check CSS is loaded
# In browser DevTools → Network tab
# Filter by CSS, check if typography.css is loaded
```

---

### **Problem: CSS Not Applied**

**Checklist:**
1. ✅ Is CSS file imported in `index.css`?
2. ✅ Is import order correct? (After tokens, before tailwindcss)
3. ✅ Are there CSS syntax errors?
4. ✅ Is browser cache cleared?

**Debug Steps:**
```bash
# Check import order in index.css
# Should be:
@import './design-system/tokens/typography.css';
@import './design-system/utilities/typography.css';
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

## 📋 **Complete Implementation Checklist**

When adding a new typography style:

- [ ] **CSS Class Created**
  - [ ] English version with explicit font
  - [ ] RTL version with `html[dir="rtl"]` selector
  - [ ] No CSS variables used
  - [ ] No `!important` unless absolutely necessary

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
  - [ ] Test in English (check font is Chap)
  - [ ] Switch to Arabic (check font switches to Riada/Almarai)
  - [ ] Check line-height changes if specified
  - [ ] Verify text content changes

---

## 🎯 **Font Mapping Reference**

### **English Fonts:**
- **Titles:** `"Chap", sans-serif` (Light: 300)
- **Body:** `"Jokker", sans-serif` (Light: 300, Regular: 400, Medium: 500, Semibold: 600)

### **Arabic Fonts:**
- **Titles:** `"Almarai", sans-serif` (Light: 300, Regular: 400, Bold: 700, ExtraBold: 800)
- **Body:** `"Riada", sans-serif` (Light: 300 only)

**Note:** Per user spec, H1 titles use Riada for Arabic (not Almarai).

---

## 📁 **File Structure**

```
src/
├── design-system/
│   └── utilities/
│       └── typography.css    ← Add your classes here
├── locales/
│   ├── en.json               ← Add English translations
│   └── ar.json               ← Add Arabic translations
└── components/
    └── YourComponent.tsx     ← Use classes here
```

---

## ✅ **Example: Complete Implementation**

### **1. CSS (`typography.css`)**
```css
.text-h1-title {
  font-family: "Chap", sans-serif;
  font-size: 44px;
  line-height: 56px;
  font-weight: 300;
}

html[dir="rtl"] .text-h1-title {
  font-family: "Riada", sans-serif;
  line-height: 72px;
}
```

### **2. Translations (`en.json`)**
```json
{
  "home": {
    "title": "Welcome"
  }
}
```

### **3. Translations (`ar.json`)**
```json
{
  "home": {
    "title": "مرحباً"
  }
}
```

### **4. Component**
```tsx
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

const Home = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <h1 className="text-h1-title">
      {t('home.title')}
    </h1>
  );
};
```

---

## 🚨 **Critical Reminders**

1. **Always use explicit font names** - CSS variables don't work reliably
2. **Always use `html[dir="rtl"]`** - Not `[dir="rtl"]`
3. **Always add translation keys** - Both EN and AR
4. **Always use `useLanguage` hook** - Ensures RTL activation
5. **Always use `t()` function** - Never hardcode text
6. **Remove conflicting classes** - Use ONLY your new class
7. **Test both languages** - English AND Arabic

---

## 📝 **Quick Reference**

**Pattern:**
```css
.your-class {
  font-family: "EnglishFont", sans-serif;
  /* English styles */
}

html[dir="rtl"] .your-class {
  font-family: "ArabicFont", sans-serif;
  /* Arabic styles */
}
```

**Component:**
```tsx
const { t } = useTranslation();
const { isRTL } = useLanguage();
<h2 className="your-class">{t('key')}</h2>
```

---

**Last Updated:** Based on successful Phase 5 implementation  
**Status:** ✅ Working Pattern Verified

