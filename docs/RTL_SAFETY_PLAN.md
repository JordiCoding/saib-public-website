# 🛡️ RTL/Arabic Safety Plan

## ✅ **Current RTL System (WILL BE PRESERVED)**

### **How It Works:**

1. **Language Detection & Switching:**
   - `useLanguage` hook detects language
   - Sets `document.documentElement.dir = 'rtl'` for Arabic
   - Stores preference in localStorage

2. **Typography System:**
   - `useTypography` hook switches fonts based on language
   - English: Chap (titles), Jokker (body)
   - Arabic: Almarai (titles), Riada (body)
   - CSS classes: `.font-title-ar`, `.font-body-ar`, `.font-title-en`, `.font-body-en`

3. **CSS RTL Support:**
   - `html[dir="rtl"]` selectors for Arabic-specific styles
   - Font families switch automatically
   - Layout flips automatically (Tailwind handles this)

4. **Component-Level RTL:**
   - Components check `i18n.language === 'ar'`
   - Apply RTL classes conditionally
   - Keen Slider uses `rtl: i18n.language === 'ar'`

---

## 🛡️ **Protection Strategy**

### **What We WILL Do:**
✅ Organize CSS files (tokens, utilities, themes)  
✅ Keep all RTL CSS selectors (`html[dir="rtl"]`)  
✅ Preserve font classes (`.font-title-ar`, `.font-body-ar`)  
✅ Keep `useTypography` hook unchanged  
✅ Keep `useLanguage` hook unchanged  
✅ Maintain font paths and @font-face declarations  

### **What We WON'T Touch:**
❌ `useLanguage` hook  
❌ `useTypography` hook  
❌ RTL CSS selectors  
❌ Font class names  
❌ Translation files  
❌ Component RTL logic  

---

## 📋 **Implementation Plan (RTL-Safe)**

### **Phase 1: Token Structure** ✅ **ZERO RTL RISK**

**What we'll do:**
- Extract colors from `index.css` → `tokens/colors.css`
- Extract typography tokens → `tokens/typography.css`
- **Keep all RTL selectors intact**

**RTL Safety:**
- All `html[dir="rtl"]` selectors stay in utilities/rtl.css
- Font classes remain unchanged
- No changes to hooks or components

---

### **Phase 2: Utilities Organization** ✅ **ZERO RTL RISK**

**What we'll do:**
- Move typography classes → `utilities/typography.css`
- Extract RTL helpers → `utilities/rtl.css`
- **Preserve all RTL logic**

**RTL Safety:**
- All RTL selectors moved together
- Font classes preserved
- No logic changes

---

### **Phase 3: Theme System** ✅ **ZERO RTL RISK**

**What we'll do:**
- Create theme files (default, icap, saib)
- **RTL works the same for all themes**

**RTL Safety:**
- RTL is language-based, not theme-based
- Themes only change colors, not RTL behavior
- Language switching remains unchanged

---

## ✅ **RTL Preservation Checklist**

- [x] Keep `useLanguage` hook unchanged
- [x] Keep `useTypography` hook unchanged
- [x] Preserve all `html[dir="rtl"]` CSS selectors
- [x] Keep font class names (`.font-title-ar`, `.font-body-ar`)
- [x] Maintain font paths in `fonts.css`
- [x] Preserve component RTL logic
- [x] Keep translation files untouched
- [x] Test RTL after each phase

---

## 🧪 **Testing Plan**

After each phase, we'll test:
1. ✅ Language switching (EN ↔ AR)
2. ✅ Font changes (Chap ↔ Almarai, Jokker ↔ Riada)
3. ✅ Layout flipping (LTR ↔ RTL)
4. ✅ Text alignment
5. ✅ Component RTL behavior
6. ✅ Slider RTL direction

---

## 🎯 **Conclusion**

**RTL System:** ✅ **100% SAFE**  
**Risk Level:** 🟢 **ZERO** - We're only organizing files, not changing logic

**Your RTL/Arabic system is solid and will remain untouched.**

