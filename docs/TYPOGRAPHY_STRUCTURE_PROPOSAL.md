# 🎯 Typography Structure Proposal

## **Structure Overview**

### **Approach: Hybrid System**
- **CSS Classes** for styles (clean, performant)
- **You provide** the exact values (sizes, weights, line-heights)
- **Incremental** addition (only what you need)
- **RTL Support** built-in with `html[dir="rtl"]`

---

## 📋 **Proposed Structure**

### **File Organization:**
```
src/design-system/tokens/
  └── typography.css          ← All typography styles here
```

### **Naming Convention:**
```
.{style-name}
html[dir="rtl"] .{style-name}
```

**Examples:**
- `.h1-title` → H1 Titles
- `.h2-title` → H2 Titles
- `.body-large` → Large body text
- `.button-text` → Button text

---

## 🏗️ **Structure Template**

### **For Each Style You Provide:**

```css
/* ===== H1 Titles ===== */
.h1-title {
  /* English Version */
  font-family: "Chap", sans-serif;
  font-weight: 300;              /* light */
  font-size: 44px;
  line-height: 56px;
}

html[dir="rtl"] .h1-title {
  /* Arabic Version */
  font-family: "Riada", sans-serif;
  font-weight: 300;              /* light */
  font-size: 44px;
  line-height: 72px;
}
```

---

## 📝 **How It Works**

### **Step 1: You Provide Style Spec**
```
H1 Titles
Eng - Chap light 44px / 56px line height
Arb - Riada light 44px / 72px line height
```

### **Step 2: I Create CSS Class**
- Add `.h1-title` class to `typography.css`
- Include EN version (default)
- Include AR version (`html[dir="rtl"]`)

### **Step 3: Usage**
```tsx
<h1 className="h1-title">Your Title</h1>
```

### **Step 4: Test & Iterate**
- Test in browser
- Adjust if needed
- Add next style when ready

---

## 🎨 **Style Categories (As Needed)**

### **1. Headings**
- `.h1-title`
- `.h2-title`
- `.h3-title`
- `.h4-title`
- (Add more as needed)

### **2. Body Text**
- `.body-large`
- `.body-regular`
- `.body-small`
- (Add more as needed)

### **3. Special Cases**
- `.button-text`
- `.caption`
- `.label`
- (Add more as needed)

---

## ✅ **Benefits of This Structure**

1. **Clean & Organized**
   - All styles in one file
   - Easy to find and update
   - Clear naming convention

2. **Incremental**
   - Add one style at a time
   - Test before adding next
   - No unused styles

3. **RTL Ready**
   - Built-in Arabic support
   - Works with existing system
   - No hook changes needed

4. **Flexible**
   - Easy to add responsive sizes later
   - Easy to adjust values
   - Easy to add new styles

5. **Maintainable**
   - Clear comments for each style
   - Easy to see EN/AR differences
   - Easy to update values

---

## 🔄 **Workflow**

```
1. You provide: "H1 Titles - Eng: X, Arb: Y"
   ↓
2. I add: .h1-title class to typography.css
   ↓
3. You test: Check in browser (EN + AR)
   ↓
4. Adjust if needed: Update values
   ↓
5. Next style: Repeat for H2, H3, etc.
```

---

## 📊 **Example: Complete Structure**

```css
/* ===== HEADINGS ===== */

/* H1 Titles */
.h1-title {
  font-family: "Chap", sans-serif;
  font-weight: 300;
  font-size: 44px;
  line-height: 56px;
}

html[dir="rtl"] .h1-title {
  font-family: "Riada", sans-serif;
  font-weight: 300;
  font-size: 44px;
  line-height: 72px;
}

/* H2 Titles */
/* (Add when you provide specs) */

/* H3 Titles */
/* (Add when you provide specs) */

/* ===== BODY TEXT ===== */

/* Body Large */
/* (Add when you provide specs) */

/* Body Regular */
/* (Add when you provide specs) */

/* ===== SPECIAL CASES ===== */

/* Button Text */
/* (Add when you provide specs) */
```

---

## ⚠️ **Considerations**

### **1. Responsive Sizes**
**Question:** Do you need mobile/desktop variants?
- If YES: Add `@media` queries per style
- If NO: Keep single size (simpler)

**Example:**
```css
.h1-title {
  font-size: 32px;        /* mobile */
  line-height: 40px;
}

@media (min-width: 768px) {
  .h1-title {
    font-size: 44px;      /* desktop */
    line-height: 56px;
  }
}
```

### **2. Font Weight Mapping**
**Available Weights:**
- English: Chap (300), Jokker (300, 400, 500, 600)
- Arabic: Almarai (300, 400, 700, 800), Riada (300 only)

**Note:** I'll use exactly what you specify, but will flag if weight isn't available.

### **3. Line Height Units**
**Options:**
- Pixels (px) - Fixed, precise
- Relative (1.27) - Scales with font size

**Recommendation:** Use pixels (as in your example) for precision.

---

## ✅ **Final Structure**

**File:** `src/design-system/tokens/typography.css`

**Format:**
- Organized by category (Headings, Body, Special)
- Each style has EN + AR versions
- Clear comments for each style
- Easy to add incrementally

**Ready to implement when you provide:**
1. Style name (e.g., "H1 Titles")
2. English specs (font, weight, size, line-height)
3. Arabic specs (font, weight, size, line-height)

---

## 🎯 **Next Steps**

1. **Review this structure** - Does it work for you?
2. **Provide first style** - H1 Titles (or whichever you want to start with)
3. **I implement** - Add the CSS class
4. **You test** - Check EN + AR versions
5. **Iterate** - Add more styles as needed

**Does this structure work for you?**

