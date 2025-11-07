# 🎯 Next Cleanup Steps - Priority Order

## ✅ **Completed So Far**
1. ✅ Moved all .md files to docs folder
2. ✅ Deleted testing components (6 files)
3. ✅ Deleted commented components (2 files)
4. ✅ Simplified Home.tsx (4 components only)
5. ✅ Deleted unused home components (6 files)
6. ✅ Deleted page-specific component folders (10 folders, ~38 files)
7. ✅ Created placeholder pages for main navigation
8. ✅ Cleaned up routes in App.tsx
9. ✅ Deleted secondary navigation pages (5 files)

**Total Deleted:** ~60+ files
**Result:** Clean template with 4 core components

---

## 🎯 **Next Steps - Recommended Order**

### **Phase 3: Remove Unused Data & Services** 🟢 **LOW RISK** (5 min)

**Delete:**
- `src/data/dividends.json` - Calculator data (calculator deleted)
- `src/data/navs.json` - Calculator data (calculator deleted)
- `src/services/strapi-hero-service.ts` - CMS service (if not using CMS)
- `src/services/strapi-news-service.ts` - CMS service (if not using CMS)
- `src/hooks/useStrapiHero.ts` - CMS hook (if not using CMS)
- `src/hooks/useStrapiNews.ts` - CMS hook (if not using CMS)
- `src/hooks/useCmsData.ts` - CMS hook (if not using CMS)
- `src/hooks/useApi.ts` - Generic API hook (if not used)

**Risk:** 🟢 **LOW** - These are isolated, easy to verify

---

### **Phase 4: Component Renaming** 🟡 **MEDIUM RISK** (15 min)

**Rename:**
- `WhyAlistithmarSection.tsx` → `WhyChooseUsSection.tsx`
- Update import in `Home.tsx`
- Update component name inside file
- Update translation keys (optional)

**Risk:** 🟡 **MEDIUM** - Requires import updates, but straightforward

---

### **Phase 5: CSS Variables Cleanup** 🟡 **MEDIUM RISK** (1-2 hours)

**Rename CSS variables:**
- `--color-icap-primary` → `--color-brand-primary`
- `--color-icap-secondary` → `--color-brand-secondary`
- `--color-icap-accent` → `--color-brand-accent`
- `--color-icap-gold` → `--color-brand-gold`

**Process:**
1. Add new generic names alongside old ones
2. Find & replace all references (84 matches across 22 files)
3. Test thoroughly
4. Remove old variable names

**Risk:** 🟡 **MEDIUM** - But safe if done incrementally

---

### **Phase 6: Logo & Assets** 🟡 **MEDIUM RISK** (30 min)

**Replace:**
- Logo files in `public/logo/`
- Update logo paths in `Header.tsx` and `Footer.tsx`
- Review and remove ICAP-specific images

**Risk:** 🟡 **MEDIUM** - Visual changes, easy to test

---

### **Phase 7: Translation Files** 🟡 **MEDIUM RISK** (1 hour)

**Clean up:**
- Remove ICAP-specific text from `en.json` and `ar.json`
- Replace with generic placeholders
- Test all pages for missing translations

**Risk:** 🟡 **MEDIUM** - May break translations if not careful

---

## 💡 **My Recommendation**

**Start with Phase 3** (Remove Unused Data & Services):
- ✅ Lowest risk
- ✅ Quick win (5 minutes)
- ✅ Reduces clutter
- ✅ Easy to verify (just check if files are imported)

**Then Phase 4** (Component Renaming):
- ✅ Quick (15 minutes)
- ✅ Removes ICAP-specific naming
- ✅ Easy to test

**Save CSS/Logo/Translation cleanup for later:**
- These are more visual/branding changes
- Can be done when you're ready to customize the template

---

## 📊 **Current Status**

**Template Structure:**
```
✅ 4 Core Components (Hero, PortfolioSection, MutualFundsSection, WhyAlistithmarSection)
✅ Layout Components (Header, Footer, Layout)
✅ UI Components (Button, GridCard, etc.)
✅ Infrastructure (hooks, utils, stores)
⚠️ Unused data files (dividends.json, navs.json)
⚠️ Unused CMS services/hooks
⚠️ ICAP-specific naming (WhyAlistithmarSection)
⚠️ ICAP CSS variables
⚠️ ICAP logos/assets
⚠️ ICAP translations
```

**Ready to proceed with Phase 3?**

