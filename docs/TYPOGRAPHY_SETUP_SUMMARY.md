# 📝 Typography Setup Summary

## 🎯 **Current Architecture**

### **1. Font System**
- **English Fonts:**
  - `Chap` → Titles (Light weight)
  - `Jokker` → Body text (Light, Regular, Medium, Semibold)

- **Arabic Fonts:**
  - `Almarai` → Titles (Light, Regular, Bold, ExtraBold)
  - `Riada` → Body text (Light only)

### **2. Typography Hook (`useTypography.ts`)**
- **Purpose:** Automatically switches fonts based on current language
- **Text Types:** `title`, `body`, `body2`, `subtitle-hero`, `hero-title`, `button`
- **Returns:** CSS classes + font families + weights

**Usage:**
```tsx
const { getTypographyClasses } = useTypography();
<h1 className={getTypographyClasses('title')}>Title</h1>
```

### **3. RTL Integration**

**How it works:**
1. `useLanguage` hook detects language → sets `document.documentElement.dir = 'rtl'` for Arabic
2. `useTypography` hook reads language → returns Arabic/English font classes
3. CSS uses `html[dir="rtl"]` selectors → applies Arabic fonts automatically

**Example:**
```css
/* English (default) */
.section-title {
  font-family: "Chap", sans-serif;
}

/* Arabic (RTL) */
html[dir="rtl"] .section-title {
  font-family: "Almarai", sans-serif;
}
```

### **4. Current Typography Classes**

**Component-Specific:**
- `.card-title` → 28px, Chap/Almarai
- `.card-subtitle` → 16px, Jokker/Riada
- `.section-title` → 52px, Chap/Almarai
- `.section-subtitle` → 22px, Jokker/Riada
- `.navigation-card-title` → 40px, Chap/Almarai
- `.navigation-card-subtitle` → 18px, Jokker/Riada

**Hero Typography:**
- `.subtitle-hero` → 18px (mobile) / 20px (desktop), Jokker Light
- `.subtitle-hero-ar` → 18px (mobile) / 20px (desktop), Riada Light

**Font Classes:**
- `.font-title-en` → Chap
- `.font-body-en` → Jokker
- `.font-title-ar` → Almarai
- `.font-body-ar` → Riada

---

## 🔄 **How Typography & RTL Work Together**

```
User switches language
    ↓
useLanguage hook updates document.documentElement.dir
    ↓
useTypography hook detects language change
    ↓
Returns appropriate font classes (.font-title-ar or .font-title-en)
    ↓
CSS html[dir="rtl"] selectors apply Arabic fonts
    ↓
Components re-render with correct fonts
```

---

## 📊 **Current Token Structure**

**Minimal (needs expansion):**
- Font families (English/Arabic)
- Custom breakpoint (xs: 475px)

**Missing:**
- Font sizes (responsive)
- Line heights
- Font weights
- Letter spacing
- Text style tokens

---

## ✅ **Next Steps**

1. Expand `typography.css` with comprehensive tokens
2. Keep RTL support intact
3. Maintain backward compatibility with existing classes
4. Create reusable typography scale

