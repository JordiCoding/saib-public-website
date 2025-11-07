# 🔄 Migration Plan: Preserving Component Styles

## 🎯 **The Problem**

When we migrate `fonts.css` to the design system, we need to ensure:
- ✅ All existing components continue working
- ✅ No styles break
- ✅ No re-applying styles needed

## 📊 **Current Usage Analysis**

### **Classes Being Used:**

1. **`.font-title-ar`, `.font-body-ar`, `.font-title-en`, `.font-body-en`**
   - **Used by:** `useTypography` hook
   - **Used in:** Multiple components via hook
   - **Direct usage:** `Header.tsx` (lines 95, 109)

2. **`.subtitle-hero`, `.subtitle-hero-ar`**
   - **Used by:** `useTypography` hook
   - **Used in:** `ReusableHero.tsx` (line 175)

### **How They're Used:**

```tsx
// useTypography.ts returns class names
getTypographyClasses('subtitle-hero') → 'subtitle-hero' or 'subtitle-hero-ar'

// Components use them
<MotionSubtitle className={getTypographyClasses('subtitle-hero')} />
```

---

## ✅ **Migration Strategy: Zero-Break Approach**

### **Option 1: Move Classes to Utilities (RECOMMENDED)**

**Structure:**
```
design-system/
├── assets/
│   └── fonts.css              # ONLY @font-face
├── tokens/
│   └── typography.css          # ALL :root variables
└── utilities/
    └── typography.css          # ALL classes (existing + legacy)
```

**What happens:**
1. Move `@font-face` to `assets/fonts.css`
2. Move `:root` variables to `tokens/typography.css`
3. **Move ALL utility classes to `utilities/typography.css`**
   - `.font-title-ar`, `.font-body-ar`, etc.
   - `.subtitle-hero`, `.subtitle-hero-ar`
   - Keep existing `.text-h1` classes

**Result:**
- ✅ All classes still work
- ✅ No component changes needed
- ✅ Clean organization

---

### **Option 2: Keep Legacy File (SAFER)**

**Structure:**
```
design-system/
├── assets/
│   └── fonts.css              # ONLY @font-face
├── tokens/
│   └── typography.css          # ALL :root variables
└── utilities/
    └── typography.css          # New classes (.text-h1)
    
src/assets/fonts/
└── fonts-legacy.css            # Legacy classes (imports from design-system)
```

**What happens:**
1. Move `@font-face` to `design-system/assets/fonts.css`
2. Move variables to `tokens/typography.css`
3. **Keep utility classes in `fonts-legacy.css`** (imports variables from design-system)
4. Update `index.css` to import both

**Result:**
- ✅ Zero risk - nothing breaks
- ✅ Can migrate components gradually
- ⚠️ Two files for classes (temporary)

---

## 🎯 **Recommended Approach: Option 1**

### **Step-by-Step Migration:**

#### **Step 1: Create `design-system/assets/fonts.css`**
```css
/* ONLY @font-face declarations */
@font-face {
  font-family: 'Almarai';
  src: url('../../assets/fonts/almarai/Almarai-Light.ttf') format('truetype');
  /* ... */
}
/* All @font-face rules */
```

#### **Step 2: Update `tokens/typography.css`**
```css
:root {
  /* Font family variables (moved from fonts.css) */
  --font-arabic-title: 'Almarai', 'Arial', sans-serif;
  --font-arabic-body: 'Riada', 'Arial', sans-serif;
  --font-english-title: 'Chap', 'Arial', sans-serif;
  --font-english-body: 'Jokker', 'Arial', sans-serif;
  
  /* Existing typography tokens */
  --font-family-h1-en: var(--font-english-title);
  /* ... */
}
```

#### **Step 3: Update `utilities/typography.css`**
```css
/* New classes */
.text-h1 { /* ... */ }

/* Legacy classes (preserved for compatibility) */
.font-title-ar {
  font-family: var(--font-arabic-title);
}

.font-body-ar {
  font-family: var(--font-arabic-body);
}

.font-title-en {
  font-family: var(--font-english-title);
}

.font-body-en {
  font-family: var(--font-english-body);
}

.subtitle-hero {
  font-size: 18px;
  line-height: 1.4;
  font-weight: 300;
  font-family: var(--font-english-body);
}

@media (min-width: 768px) {
  .subtitle-hero {
    font-size: 20px;
  }
}

.subtitle-hero-ar {
  font-size: 18px;
  line-height: 1.4;
  font-weight: 300;
  font-family: var(--font-arabic-body);
}

@media (min-width: 768px) {
  .subtitle-hero-ar {
    font-size: 20px;
  }
}
```

#### **Step 4: Update `index.css`**
```css
@import './design-system/assets/fonts.css';      /* 1st - Load fonts */
@import './design-system/tokens/typography.css';  /* 2nd - Variables */
@import './design-system/utilities/typography.css'; /* 3rd - Classes */
```

#### **Step 5: Delete old `fonts.css`**
- All functionality moved to design-system
- Components continue working (same class names)

---

## ✅ **Why This Works:**

1. **Same Class Names**
   - `.font-title-ar` still exists
   - `.subtitle-hero` still exists
   - Components don't need changes

2. **Same Variables**
   - `--font-english-title` still exists
   - `useTypography` hook still works
   - No hook changes needed

3. **Better Organization**
   - Fonts → `assets/fonts.css`
   - Variables → `tokens/typography.css`
   - Classes → `utilities/typography.css`

4. **Zero Breaking Changes**
   - All existing code continues working
   - No component updates needed
   - No re-applying styles

---

## 🔍 **Testing Checklist:**

After migration, verify:
- [ ] `ReusableHero.tsx` - `.subtitle-hero` works
- [ ] `Header.tsx` - `.font-title-ar` works
- [ ] `useTypography` hook - Returns correct classes
- [ ] RTL switching - Fonts switch correctly
- [ ] New `.text-h1` class - Works alongside legacy classes

---

## 📋 **Future Migration (Optional):**

Once everything is stable, you can gradually:
1. Migrate components to use `.text-h1` instead of `.subtitle-hero`
2. Remove legacy classes when no longer used
3. Update `useTypography` hook to use new classes

**But this is NOT required for the migration!**

---

## 🎯 **Summary:**

**Migration = Moving files, NOT changing classes**

- ✅ Move `@font-face` → `design-system/assets/fonts.css`
- ✅ Move variables → `tokens/typography.css`
- ✅ Move classes → `utilities/typography.css`
- ✅ Keep same class names
- ✅ Components work without changes

**Result:** Better organization, zero breaking changes!

