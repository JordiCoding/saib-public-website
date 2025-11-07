# 🔗 CSS Variable Aliases Explained

## **What Are Aliases?**

**Aliases** = Pointing one CSS variable to another variable's value, instead of duplicating the same color value.

---

## **Current Situation (Overlaps)**

You have **multiple variables with the same color value**:

```css
/* Same color (#1A1C1E) defined 3 times */
--color-text-dark: #1A1C1E;        /* Existing */
--color-text-primary: #1A1C1E;     /* New from Figma */
--color-icon-primary: #1A1C1E;     /* New from Figma */

/* Same color (#A44F17) defined 3 times */
--color-icap-accent: #A44F17;      /* Existing */
--color-text-secondary: #A44F17;   /* New from Figma */
--color-tab-active: #A44F17;       /* New from Figma */
```

**Problem:** If you need to change `#1A1C1E` to a different color, you'd have to change it in 3 places.

---

## **Solution: Create Aliases**

Instead of duplicating values, **point old variables to new ones**:

### **Example 1: Text Primary**

**Before (duplicated values):**
```css
--color-text-dark: #1A1C1E;
--color-text-primary: #1A1C1E;
--color-icon-primary: #1A1C1E;
```

**After (with aliases):**
```css
/* Define once */
--color-text-primary: #1A1C1E;

/* Point others to it */
--color-text-dark: var(--color-text-primary);      /* Alias */
--color-icon-primary: var(--color-text-primary);  /* Alias */
```

**Benefit:** Change `#1A1C1E` in ONE place, all three update automatically.

---

### **Example 2: Accent Color**

**Before:**
```css
--color-icap-accent: #A44F17;
--color-text-secondary: #A44F17;
--color-tab-active: #A44F17;
```

**After (with aliases):**
```css
/* Define once (choose the most semantic name) */
--color-text-secondary: #A44F17;

/* Point others to it */
--color-icap-accent: var(--color-text-secondary);  /* Alias */
--color-tab-active: var(--color-text-secondary);   /* Alias */
```

---

## **Real-World Example**

### **Scenario: Change Primary Text Color**

**Without Aliases (Current):**
```css
/* Need to change in 3 places */
--color-text-dark: #1A1C1E;        /* Change here */
--color-text-primary: #1A1C1E;     /* Change here */
--color-icon-primary: #1A1C1E;     /* Change here */
```

**With Aliases:**
```css
/* Change in ONE place */
--color-text-primary: #2B2D2F;  /* Changed once */

/* Others automatically update */
--color-text-dark: var(--color-text-primary);      /* Auto-updated */
--color-icon-primary: var(--color-text-primary);   /* Auto-updated */
```

---

## **How It Works**

```css
:root {
  /* Step 1: Define the "source" variable */
  --color-text-primary: #1A1C1E;
  
  /* Step 2: Create aliases pointing to source */
  --color-text-dark: var(--color-text-primary);
  /* This means: "text-dark uses whatever text-primary is" */
}
```

**Usage in components:**
```tsx
// Both work the same way:
className="text-[var(--color-text-dark)]"        // Uses alias
className="text-[var(--color-text-primary)]"      // Uses source

// Both resolve to: color: #1A1C1E
```

---

## **Benefits**

1. ✅ **Single Source of Truth** - Define color once
2. ✅ **Easy Updates** - Change in one place
3. ✅ **Consistency** - Can't accidentally have different values
4. ✅ **Backward Compatibility** - Old code still works
5. ✅ **Gradual Migration** - Can migrate components slowly

---

## **Recommendation**

**Create aliases for overlaps:**

```css
:root {
  /* ===== SOURCE TOKENS (Define once) ===== */
  --color-text-primary: #1A1C1E;
  --color-text-secondary: #A44F17;
  --color-text-tertiary: #FADD96;
  --color-text-neutral: #FFFFFF;
  
  /* ===== ALIASES (Point to sources) ===== */
  --color-text-dark: var(--color-text-primary);        /* Alias */
  --color-icon-primary: var(--color-text-primary);      /* Alias */
  --color-icap-accent: var(--color-text-secondary);    /* Alias */
  --color-tab-active: var(--color-text-secondary);      /* Alias */
}
```

**Result:**
- ✅ Old code (`text-dark`, `icap-accent`) still works
- ✅ New code can use semantic names (`text-primary`, `text-secondary`)
- ✅ Change color once, all aliases update automatically

---

## **Visual Example**

```
┌─────────────────────────────────────┐
│  --color-text-primary: #1A1C1E      │ ← SOURCE (define here)
└─────────────────────────────────────┘
           │
           ├───→ --color-text-dark: var(--color-text-primary)
           │
           └───→ --color-icon-primary: var(--color-text-primary)
```

**If you change the source:**
```
┌─────────────────────────────────────┐
│  --color-text-primary: #2B2D2F      │ ← Changed once
└─────────────────────────────────────┘
           │
           ├───→ --color-text-dark: #2B2D2F  (auto-updated)
           │
           └───→ --color-icon-primary: #2B2D2F  (auto-updated)
```

---

**Want me to create the aliases? It's a simple change that makes the system more maintainable.**

