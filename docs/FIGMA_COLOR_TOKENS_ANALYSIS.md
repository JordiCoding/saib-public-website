# 🎨 Figma Color Tokens Analysis

## 📊 **Token Mapping & Overlaps**

### **Existing Tokens → New Figma Tokens**

| Existing Token | Value | Figma Token | Status |
|----------------|-------|-------------|--------|
| `--color-text-dark` | #1A1C1E | Text Primary | ✅ **OVERLAP** |
| `--color-icap-accent` | #A44F17 | Text Secondary, Tabs Active | ✅ **OVERLAP** |
| `--color-bg-light` | #FBF7F1 | (similar but different) | ⚠️ **SIMILAR** |
| `--color-placeholder-bg` | #BEBEBE | Icon Placeholder (#C1C1C1) | ⚠️ **SIMILAR** |

### **New Tokens to Add**

**Text:**
- `--color-text-primary: #1A1C1E` (overlaps with text-dark)
- `--color-text-secondary: #A44F17` (overlaps with icap-accent)
- `--color-text-tertiary: #FADD96` (NEW)
- `--color-text-neutral: #FFFFFF` (white)

**Buttons:**
- `--color-button-primary: #FADD96` (NEW)
- `--color-button-secondary: #FFFFFF` (white)

**Background:**
- `--color-bg-screen: #FCFBF8` (NEW)
- `--color-bg-card: #FFFFFF` (white)

**Icons:**
- `--color-icon-primary: #1A1C1E` (overlaps with text-primary)
- `--color-icon-secondary: #707070` (NEW)
- `--color-icon-placeholder: #C1C1C1` (NEW)
- `--color-icon-white: #FFFFFF` (white)

**Tabs:**
- `--color-tab-active: #A44F17` (overlaps with accent)

**Borders:**
- `--color-border-divider: #A7A7A7` (NEW)
- `--color-border-tabs-outline: #DFD5CA` (NEW)
- `--color-border-button-outline: #DFD5CA` (NEW - with 50% opacity)
- `--color-border-button-outline2: #FFFFFF` (white)

---

## 🔄 **Consolidation Strategy**

### **Option 1: Semantic Naming (Recommended)**
Use semantic names that describe usage, not just values:

```css
/* Text Colors */
--color-text-primary: #1A1C1E;      /* Main text */
--color-text-secondary: #A44F17;    /* Accent text */
--color-text-tertiary: #FADD96;    /* Highlight text */
--color-text-neutral: #FFFFFF;     /* White text */

/* Button Colors */
--color-button-primary: #FADD96;
--color-button-secondary: #FFFFFF;

/* Background Colors */
--color-bg-screen: #FCFBF8;
--color-bg-card: #FFFFFF;

/* Icon Colors */
--color-icon-primary: #1A1C1E;
--color-icon-secondary: #707070;
--color-icon-placeholder: #C1C1C1;
--color-icon-white: #FFFFFF;

/* Tab Colors */
--color-tab-active: #A44F17;

/* Border Colors */
--color-border-divider: #A7A7A7;
--color-border-tabs-outline: #DFD5CA;
--color-border-button-outline: #DFD5CA;  /* Use with opacity: 0.5 */
--color-border-button-outline2: #FFFFFF;
```

### **Option 2: Keep Legacy + Add New**
Keep existing tokens for backward compatibility, add new ones:

```css
/* Legacy (keep for backward compatibility) */
--color-text-dark: #1A1C1E;
--color-icap-accent: #A44F17;

/* New Figma tokens */
--color-text-primary: #1A1C1E;
--color-text-secondary: #A44F17;
/* ... etc */
```

---

## ⚠️ **Issues to Address**

1. **#FADD96** - Missing `#` in your list (assuming it's `#FADD96`)
2. **button-outline opacity** - `#DFD5CA - 50%` needs special handling (use `rgba()` or opacity utility)
3. **White color** - Used in multiple contexts (text, buttons, backgrounds, icons, borders)
4. **Overlaps** - Some tokens share values but have different semantic meanings

---

## 💡 **Recommendation**

**Use Option 1 (Semantic Naming)** with aliases for backward compatibility:

1. Add new semantic tokens
2. Create aliases for existing tokens pointing to new ones
3. Gradually migrate components to use semantic names
4. Document which tokens are "legacy" vs "new"

This approach:
- ✅ Supports Figma design system
- ✅ Maintains backward compatibility
- ✅ Allows gradual migration
- ✅ Clear semantic meaning

---

## 🎯 **Proposed Token Structure**

```css
:root {
  /* ===== TEXT COLORS ===== */
  --color-text-primary: #1A1C1E;      /* Main text color */
  --color-text-secondary: #A44F17;    /* Accent text */
  --color-text-tertiary: #FADD96;     /* Highlight text */
  --color-text-neutral: #FFFFFF;      /* White text */

  /* ===== BUTTON COLORS ===== */
  --color-button-primary: #FADD96;
  --color-button-secondary: #FFFFFF;

  /* ===== BACKGROUND COLORS ===== */
  --color-bg-screen: #FCFBF8;         /* Page background */
  --color-bg-card: #FFFFFF;           /* Card background */

  /* ===== ICON COLORS ===== */
  --color-icon-primary: #1A1C1E;
  --color-icon-secondary: #707070;
  --color-icon-placeholder: #C1C1C1;
  --color-icon-white: #FFFFFF;

  /* ===== TAB COLORS ===== */
  --color-tab-active: #A44F17;

  /* ===== BORDER COLORS ===== */
  --color-border-divider: #A7A7A7;
  --color-border-tabs-outline: #DFD5CA;
  --color-border-button-outline: #DFD5CA;  /* Use with opacity: 0.5 */
  --color-border-button-outline2: #FFFFFF;

  /* ===== LEGACY ALIASES (for backward compatibility) ===== */
  --color-text-dark: var(--color-text-primary);
  --color-icap-accent: var(--color-text-secondary);
}
```

---

**Ready to implement? I'll add these tokens and create aliases for backward compatibility.**

