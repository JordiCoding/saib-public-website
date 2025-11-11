# 📋 Index.css Cleanup Plan

## 🎯 Goal
Separate **NEW Design System** code from **LEGACY** code in `index.css` for better maintainability.

---

## 📊 Current Analysis

### **✅ NEW Design System (Keep)**
- Lines 1-7: Design system imports
- These are the new, clean imports we added

### **⚠️ MIXED - @theme Block**
- Lines 9-49: Contains duplicate colors and legacy font references
- **Issue:** Colors duplicated from `tokens/colors.css`
- **Issue:** Uses Inter/Noto fonts instead of design system fonts

### **⚠️ LEGACY - Base HTML Styles**
- Lines 51-58: Uses Inter/Noto fonts
- **Should:** Use design system font tokens

### **⚠️ LEGACY - Component Styles (Still Used)**
- Lines 60-220: Component-specific styles
- **Status:** Still actively used in components
- **Classes Used:**
  - `.glassmorphism-card` - GridCard, FeatureCard
  - `.flat-card` - GridCard
  - `.card-title` - GridCard
  - `.card-subtitle` - GridCard
  - `.card-content-compact` - FeatureCard
  - `.card-content-spaced` - FeatureCard
  - `.section-title` - PagePlaceholder, NavigationCardSection
  - `.section-subtitle` - NavigationCardSection
  - `.navigation-card-title` - NavigationCard
  - `.navigation-card-subtitle` - NavigationCard
  - `.lead-capture-input` - InputField

---

## ✅ Recommended Cleanup Strategy

### **Option 1: Reorganize with Clear Sections (Recommended)**
- Keep everything in `index.css` but organize clearly
- Add section comments: NEW vs LEGACY
- Clean up @theme block (remove duplicates)
- Update base HTML to use design system tokens

### **Option 2: Move Legacy to Separate File**
- Create `src/design-system/components/legacy.css`
- Move all legacy component styles there
- Import in `index.css`
- **Risk:** May break if import order changes

### **Option 3: Keep As-Is, Just Add Comments**
- Minimal changes
- Just add clear section markers
- **Risk:** File will grow unwieldy over time

---

## 🎯 Recommended: Option 1 (Reorganize)

**Structure:**
```css
/* ===== NEW DESIGN SYSTEM IMPORTS ===== */
@import './design-system/...';

/* ===== TAILWIND THEME CONFIGURATION ===== */
@theme {
  /* Only Tailwind-specific mappings */
  /* Remove duplicate colors */
}

/* ===== BASE STYLES (UPDATED TO USE DESIGN SYSTEM) ===== */
html {
  /* Use design system font tokens */
}

/* ===== LEGACY COMPONENT STYLES (Still Used) ===== */
/* TODO: Migrate to design system when components are refactored */
.glassmorphism-card { ... }
.flat-card { ... }
/* etc. */
```

---

## 📝 Action Items

1. ✅ Clean up @theme block (remove duplicate colors)
2. ✅ Update base HTML styles to use design system tokens
3. ✅ Add clear section comments (NEW vs LEGACY)
4. ✅ Organize legacy component styles
5. ⚠️ Keep legacy styles (still being used)
6. 📝 Add TODO comments for future migration


