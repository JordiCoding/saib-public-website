# 🔍 Complete Typography System Explanation

## ⚠️ **THE PROBLEM: Two Systems Running in Parallel**

You're right - something is off. We currently have **TWO separate typography systems** that don't talk to each other:

### **System 1: Old System (fonts.css + useTypography hook)**
- `fonts.css` → Defines CSS variables (`--font-arabic-title`, `--font-english-title`)
- `useTypography` hook → Uses those variables
- Components → Use `getTypographyClasses()` from hook

### **System 2: New System (tokens + utilities)**
- `tokens/typography.css` → Defines size/line-height tokens
- `utilities/typography.css` → Uses explicit fonts ("Chap", "Riada")
- Components → Use `.text-h1` class directly

**Problem:** They're not connected! The new system ignores fonts.css variables.

---

## 📊 **How Everything Currently Works**

### **1. fonts.css (Font Definitions)**

**Purpose:** Defines font files and creates CSS variables

```css
/* Step 1: Load font files */
@font-face {
  font-family: 'Chap';
  src: url('./chap/Chap Light.woff');
  font-weight: 300;
}

/* Step 2: Create CSS variables */
:root {
  --font-english-title: 'Chap', 'Arial', sans-serif;
  --font-arabic-title: 'Almarai', 'Arial', sans-serif;
}

/* Step 3: Create utility classes */
.font-title-en {
  font-family: var(--font-english-title);
}
```

**What it does:**
- ✅ Loads font files (@font-face)
- ✅ Creates CSS variables for font families
- ✅ Creates utility classes (.font-title-en, .font-title-ar)

**Used by:**
- `useTypography` hook (reads CSS variables)
- Old components (use `.font-title-en` classes)

---

### **2. tokens/typography.css (New System)**

**Purpose:** Defines typography values (sizes, line-heights)

```css
:root {
  --font-size-h1-en: 44px;
  --line-height-h1-en: 56px;
  --font-weight-h1-en: 300;
}
```

**What it does:**
- ✅ Defines size/line-height tokens
- ✅ Defines accessibility scale (`--text-scale`)

**Problem:** ❌ Doesn't reference fonts.css variables
- Should reference: `--font-heading: var(--font-english-title)`
- Currently: Doesn't reference fonts at all

---

### **3. utilities/typography.css (New System)**

**Purpose:** Creates semantic classes using tokens

```css
.text-h1 {
  font-family: "Chap", sans-serif;  /* ❌ Hardcoded, ignores fonts.css */
  font-size: calc(var(--font-size-h1-en) * var(--text-scale));
  line-height: calc(var(--line-height-h1-en) * var(--text-scale));
}

html[dir="rtl"] .text-h1 {
  font-family: "Riada", sans-serif;  /* ❌ Hardcoded, ignores fonts.css */
}
```

**What it does:**
- ✅ Uses tokens for sizes
- ✅ Includes accessibility scaling
- ❌ Uses hardcoded fonts (ignores fonts.css variables)

**Problem:** Should use fonts.css variables:
```css
.text-h1 {
  font-family: var(--font-english-title);  /* ✅ Use fonts.css variable */
}
```

---

### **4. useLanguage Hook**

**Purpose:** Sets RTL direction on `<html>` element

```typescript
// Sets: document.documentElement.dir = 'rtl' (for Arabic)
// Sets: document.documentElement.dir = 'ltr' (for English)
```

**What it does:**
- ✅ Detects language
- ✅ Sets `dir` attribute on `<html>`
- ✅ Stores preference in localStorage

**Used by:**
- CSS selectors: `html[dir="rtl"]`
- Components: Check `isRTL` for conditional logic

---

### **5. useTypography Hook (Old System)**

**Purpose:** Returns font classes based on language

```typescript
// Returns: "font-title-en" or "font-title-ar"
const { getTypographyClasses } = useTypography();
<h1 className={getTypographyClasses('title')}>
```

**What it does:**
- ✅ Reads fonts.css variables (`--font-english-title`)
- ✅ Returns appropriate class based on language
- ✅ Used by old components

**Problem:** ❌ Not used by new system (`.text-h1`)

---

## 🔄 **How RTL Currently Works**

### **Flow:**

```
1. User switches language
   ↓
2. useLanguage hook sets: document.documentElement.dir = 'rtl'
   ↓
3. CSS selector activates: html[dir="rtl"] .text-h1
   ↓
4. Font switches: "Chap" → "Riada"
```

**Current Implementation:**
```css
/* English (default) */
.text-h1 {
  font-family: "Chap", sans-serif;  /* Hardcoded */
}

/* Arabic (RTL) */
html[dir="rtl"] .text-h1 {
  font-family: "Riada", sans-serif;  /* Hardcoded */
}
```

**Problem:** Fonts are hardcoded, not using fonts.css variables.

---

## ✅ **How It SHOULD Work (Best Practice)**

### **Proper Connection:**

```
fonts.css
  ↓ (defines variables)
tokens/typography.css
  ↓ (references fonts.css variables)
utilities/typography.css
  ↓ (uses tokens + fonts.css variables)
Components
  ↓ (use semantic classes)
RTL switches automatically
```

### **Correct Implementation:**

**1. fonts.css** (Keep as is - defines fonts)
```css
:root {
  --font-english-title: 'Chap', 'Arial', sans-serif;
  --font-arabic-title: 'Almarai', 'Arial', sans-serif;
}
```

**2. tokens/typography.css** (Reference fonts.css)
```css
:root {
  /* Reference fonts.css variables */
  --font-heading: var(--font-english-title);
  --font-body: var(--font-english-body);
  
  /* Typography values */
  --font-size-h1-en: 44px;
  --line-height-h1-en: 56px;
}

[dir="rtl"] {
  --font-heading: var(--font-arabic-title);
  --font-body: var(--font-arabic-body);
}
```

**3. utilities/typography.css** (Use tokens + fonts.css variables)
```css
.text-h1 {
  /* Use fonts.css variable via token */
  font-family: var(--font-heading);
  font-size: calc(var(--font-size-h1-en) * var(--text-scale));
  line-height: calc(var(--line-height-h1-en) * var(--text-scale));
}

/* RTL automatically switches via [dir="rtl"] token override */
/* No need for html[dir="rtl"] selector! */
```

**Benefits:**
- ✅ Single source of truth (fonts.css)
- ✅ Automatic RTL switching (via token override)
- ✅ Consistent font usage
- ✅ Easy to maintain

---

## 📱 **Best Practices for Mobile View**

### **1. Mobile-First Approach**

**Current (Desktop-only):**
```css
.text-h1 {
  font-size: 44px;  /* Only desktop */
}
```

**Best Practice (Mobile-first):**
```css
/* Mobile (default) */
.text-h1 {
  font-size: 32px;  /* Mobile */
  line-height: 40px;
}

/* Desktop (768px+) */
@media (min-width: 768px) {
  .text-h1 {
    font-size: 44px;  /* Desktop */
    line-height: 56px;
  }
}
```

### **2. Token Structure for Responsive**

**tokens/typography.css:**
```css
:root {
  /* Mobile tokens */
  --font-size-h1-mobile-en: 32px;
  --line-height-h1-mobile-en: 40px;
  
  /* Desktop tokens */
  --font-size-h1-desktop-en: 44px;
  --line-height-h1-desktop-en: 56px;
}
```

**utilities/typography.css:**
```css
.text-h1 {
  font-family: var(--font-heading);
  font-size: calc(var(--font-size-h1-mobile-en) * var(--text-scale));
  line-height: calc(var(--line-height-h1-mobile-en) * var(--text-scale));
}

@media (min-width: 768px) {
  .text-h1 {
    font-size: calc(var(--font-size-h1-desktop-en) * var(--text-scale));
    line-height: calc(var(--line-height-h1-desktop-en) * var(--text-scale));
  }
}
```

### **3. Breakpoint Standards**

**Recommended breakpoints:**
- Mobile: `< 768px` (default)
- Tablet: `768px - 1024px`
- Desktop: `≥ 1024px`

**Common pattern:**
```css
/* Mobile first */
.element { /* mobile styles */ }

@media (min-width: 768px) { /* tablet+ */ }
@media (min-width: 1024px) { /* desktop */ }
```

---

## 🎯 **Recommended Fix**

### **Step 1: Connect tokens to fonts.css**

**tokens/typography.css:**
```css
:root {
  /* Reference fonts.css variables */
  --font-heading: var(--font-english-title);
  --font-body: var(--font-english-body);
  
  /* H1 tokens */
  --font-size-h1-en: 44px;
  --line-height-h1-en: 56px;
}

[dir="rtl"] {
  --font-heading: var(--font-arabic-title);
  --font-body: var(--font-arabic-body);
}
```

### **Step 2: Use variables in utilities**

**utilities/typography.css:**
```css
.text-h1 {
  font-family: var(--font-heading);  /* ✅ Uses fonts.css via token */
  font-size: calc(var(--font-size-h1-en) * var(--text-scale));
  line-height: calc(var(--line-height-h1-en) * var(--text-scale));
}

/* RTL automatically works via [dir="rtl"] token override */
/* No html[dir="rtl"] selector needed! */
```

### **Step 3: Add mobile tokens**

**tokens/typography.css:**
```css
:root {
  --font-size-h1-mobile-en: 32px;   /* Mobile */
  --font-size-h1-desktop-en: 44px;  /* Desktop */
}
```

**utilities/typography.css:**
```css
.text-h1 {
  font-size: calc(var(--font-size-h1-mobile-en) * var(--text-scale));
}

@media (min-width: 768px) {
  .text-h1 {
    font-size: calc(var(--font-size-h1-desktop-en) * var(--text-scale));
  }
}
```

---

## 📋 **Summary**

### **Current State:**
- ❌ Two separate systems (old + new)
- ❌ New system ignores fonts.css variables
- ❌ Hardcoded fonts in utilities
- ❌ No mobile breakpoints

### **Should Be:**
- ✅ Single system (fonts.css → tokens → utilities)
- ✅ Tokens reference fonts.css variables
- ✅ Utilities use tokens (which reference fonts.css)
- ✅ Mobile-first responsive design
- ✅ Automatic RTL via token override

### **Next Steps:**
1. Update tokens/typography.css to reference fonts.css variables
2. Update utilities/typography.css to use token variables (not hardcoded fonts)
3. Add mobile tokens + responsive breakpoints
4. Remove redundant `html[dir="rtl"]` selectors (RTL handled by token override)

---

**Would you like me to implement this fix?**

