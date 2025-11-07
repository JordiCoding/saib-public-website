# 🧹 Next Cleanup Phase - Unused Stores & Types

## 📊 **Analysis Results**

### ❌ **UNUSED - Safe to Delete**

1. **`src/stores/useMarketStore.ts`** 
   - ❌ Not imported/used in any components or pages
   - ❌ Market data components were deleted
   - **Dependencies:** `types/market.ts`

2. **`src/types/market.ts`**
   - ❌ Only used by `useMarketStore.ts` (which is unused)
   - Contains ICAP-specific market symbols (TASI, MT30)

3. **`src/stores/useAppStore.ts`**
   - ❌ Not imported/used in any components or pages
   - Generic CMS/Excel data store (not actively used)
   - **Dependencies:** `types/cms.ts`

4. **`src/types/cms.ts`**
   - ❌ Only used by `useAppStore.ts` (which is unused)
   - Note: `useStrapiHero.ts` uses its own types, not this file

---

### ✅ **KEEP - Still Used**

1. **`src/types/news.ts`** ✅
   - Used by `useStrapiNews.ts` (we kept Strapi services)

2. **`src/types/promotion.ts`** ✅
   - Used by `PromotionModal` component (used in `App.tsx`)

3. **`src/hooks/useStrapiHero.ts`** ✅
   - Uses its own inline types (not `types/cms.ts`)
   - Part of Strapi services (we kept)

4. **`src/hooks/useStrapiNews.ts`** ✅
   - Uses `types/news.ts`
   - Part of Strapi services (we kept)

5. **`src/hooks/usePromotionPopup.ts`** ✅
   - Used in `App.tsx`

---

## 🎯 **Recommended Action**

**Delete these 4 files:**
1. `src/stores/useMarketStore.ts`
2. `src/types/market.ts`
3. `src/stores/useAppStore.ts`
4. `src/types/cms.ts`

**Risk Level:** 🟢 **LOW** - These files are not referenced anywhere in the codebase.

---

## 📋 **After This Cleanup**

**Remaining cleanup opportunities:**
- Review remaining hooks (check if all are used)
- Review utilities folder
- Review any remaining unused components
- Documentation files (you'll review manually)

**Should I proceed with deleting these 4 unused files?**

