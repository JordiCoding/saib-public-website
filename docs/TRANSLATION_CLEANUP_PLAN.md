# 📋 Translation Keys Analysis & Cleanup Plan

## 🔍 **Analysis Method**

We need to identify:
1. **Used Keys** - Translation keys actually referenced in code
2. **Orphaned Keys** - Translation keys that exist but aren't used (from deleted components)

---

## ✅ **Translation Keys Currently Used**

### **Home Page Components:**
- `home.heroTitle`
- `home.heroSubtitle`
- `home.startInvesting`
- `home.openAccount`
- `home.login`
- `portfolio.preTitle`
- `portfolio.title`
- `portfolio.description`
- `whyAlistithmar.*` (7 keys: title, subtitle, secureTitle, secureDescription, shariaTitle, shariaDescription, globalTitle, globalDescription)
- `mutualFunds.*` (risk levels, shariaCompliant)

### **Layout Components:**
- `navigation.*` (brokerage, assetManagment, investmentBanking, realEstate, about)
- `header.*` (logo, menu, close)
- `footer.*` (all footer keys - many!)
- `breadcrumb.*` (home, routes)

### **Placeholder Pages:**
- `brokerageHero.title`
- `brokerageHero.subtitle`
- `assetManagement.hero.title`
- `assetManagement.hero.subtitle`
- `investmentBanking.hero.title`
- `realEstate.hero.title`

### **Other:**
- `common.*` (loading, error, etc.)
- `leadCapture.*` (if used)

---

## ❌ **Translation Keys Likely Orphaned** (From Deleted Components)

### **Deleted Home Components:**
- `marginLendingHome.*` - Margin lending section deleted
- `marginLendingUnlock.*` - Margin lending section deleted
- `globalMarkets.*` - GlobalMarketsSection deleted
- `globalMarkets2.*` - GlobalMarkets2Section deleted
- `newsroom.*` - NewsroomSection deleted
- `cta.*` - CtaSection deleted

### **Deleted Page Components:**
- `localMarkets.*` - LocalMarket page deleted
- `internationalUS.*` - InternationalMarkets page deleted
- `gccRegional.*` - GCCRegional component deleted
- `investmentBankingDifferent.*` - InvestmentBankingDifferent deleted
- `investmentBankingClients.*` - InvestmentBankingClientsSection deleted
- `capitalSolutions.*` - CapitalSolutionsSection deleted
- `marginLending.*` (page-level) - MarginLending page deleted
- `assetManagement.*` (page-level sections) - AssetManagement page deleted
- `brokerageProducts.*` - BrokerageProducts deleted
- `slidePlatformAccess.*` - SlidePlatformAccess deleted
- `realEstate.*` (page-level sections) - RealEstate page deleted
- `calculator.*` - CalculatorPage deleted
- `news.*` - NewsDetailPage deleted

### **Other Orphaned:**
- `market.*` - MarketDataSection deleted
- `funds.*` - May be used by MutualFundsSection (need to check)
- `risk.*` - May be used (need to check)
- `gridCard.*` - May be used (need to check)

---

## 🎯 **Cleanup Strategy**

### **Phase 1: Identify All Used Keys** (15 min)
1. Extract all `t('key')` calls from code
2. Extract all `i18nKey="key"` from Trans components
3. Create list of actually used keys

### **Phase 2: Compare & Mark Orphaned** (10 min)
1. Compare used keys vs all keys in JSON files
2. Mark keys that are orphaned
3. Create cleanup list

### **Phase 3: Safe Cleanup** (30 min)
1. Remove orphaned keys from both `en.json` and `ar.json`
2. Test app - check for missing translation errors
3. Fix any broken references

### **Phase 4: Genericize ICAP Text** (1 hour)
1. Replace ICAP-specific text with generic placeholders
2. Update `whyAlistithmar.*` → `whyChooseUs.*`
3. Update company names, addresses, etc.

---

## ⚠️ **Risk Assessment**

**Risk Level:** 🟡 **MEDIUM**

**Why:**
- Removing unused keys is safe (won't break app)
- But removing keys that ARE used will cause missing translation errors
- Need careful analysis before deletion

**Safe Approach:**
1. First, identify ALL used keys (comprehensive scan)
2. Then remove only confirmed orphaned keys
3. Test thoroughly after each batch

---

## 💡 **Recommendation**

**Do this in two phases:**

**Phase A: Remove Orphaned Keys** (Safe)
- Remove keys from deleted components
- Test app - should work fine

**Phase B: Genericize ICAP Text** (Later)
- Replace ICAP-specific content
- Update company names, addresses
- Can be done when customizing template

**Should I proceed with Phase A (remove orphaned keys)?**

