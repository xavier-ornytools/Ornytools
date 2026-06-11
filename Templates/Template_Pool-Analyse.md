---
type: template
usage: analyse d'une pool de liquidité avant dépôt (Curve / Convex / Beefy / Uniswap V3)
tags: [template, pool, LP, analyse, DeFi]
---

# Pool : {{title}}

**Protocole :** Curve / Convex / Beefy / Uniswap V3  
**Chaîne :** Ethereum / Arbitrum / autre  
**Date d'analyse :** {{date}}  
**Décision finale :** ✅ ENTRER / ⚠️ SURVEILLER / ❌ ÉVITER

---

## 01 — Identité de la pool

| Champ | Valeur |
|-------|--------|
| **Nom de la pool** | |
| **Tokens** | Token A / Token B |
| **Type** | Stable / Volatile / Correlated |
| **Version AMM** | Curve StableSwap / Uni V3 / autre |
| **Adresse du contrat** | `0x...` |
| **Lien Curve/Convex/Beefy** | |
| **Lien DefiLlama** | |

---

## 02 — Métriques clés

| Métrique | Valeur | Source | Date |
|----------|--------|--------|------|
| **TVL** | $xxx | DefiLlama | |
| **Volume 24h** | $xxx | | |
| **Fees 24h** | $xxx | | |
| **APR fees** | xx% | | |
| **APY total (avec rewards)** | xx% | Beefy / Convex | |
| **APR rewards (CRV/CVX/autre)** | xx% | | |
| **Ratio actuel Token A** | xx% | Curve UI | |
| **Ratio actuel Token B** | xx% | Curve UI | |

> **Règle ZAP :** n'utiliser le ZAP que si le ratio est proche de 50/50. Tout déséquilibre > 10% = dépôt manuel proportionnel.

---

## 03 — Analyse des tokens

### Token A — [NOM]

- **Type** (fiat-backed / overcollateralized / synthetic / RWA) : à rechercher
- **Mécanisme de peg** : à rechercher
- **Backing** : à rechercher
- **Score OrnyTools** : xx/100 → [[Wiki stablecoin]]
- **Score Pharos Watch** : à rechercher → [[Pharos-Watch]]
- **Risques principaux** : à rechercher
- **Historique de dépeg** : à rechercher

### Token B — [NOM]

- **Type** : à rechercher
- **Mécanisme de peg** : à rechercher
- **Backing** : à rechercher
- **Score OrnyTools** : xx/100
- **Score Pharos Watch** : à rechercher
- **Risques principaux** : à rechercher
- **Historique de dépeg** : à rechercher

---

## 04 — Risques de la pool

### Risque de déséquilibre
- **Scénario** : si Token A dépeg → la pool accumule Token A (le moins bon) → tu sors avec plus de Token A
- **Probabilité estimée** : Faible / Modérée / Élevée
- **Impact** : à rechercher

### Risque de liquidité
- **Profondeur suffisante pour ta taille ?** : à rechercher
- **Concentration des LPs** (quelques gros wallets ?) : à rechercher
- **Risque de migration / retrait soudain** : à rechercher

### Risque protocole
- **Audits Curve** : à rechercher
- **Audits Convex / Beefy** : à rechercher
- **Incidents passés** : à rechercher
- **Upgradeabilité des contrats** : à rechercher

### Risque de rendement
- **Part fees vs part rewards** : xx% / xx%
- **Durabilité des rewards** (inflationniste ?) : à rechercher
- **Risque de compression APY** : à rechercher

### Risque d'impermanent loss
- **IL théorique** (stable-stable = quasi nul / volatile = significatif) : à rechercher
- **Historique corrélation des deux tokens** : à rechercher

---

## 05 — Checklist avant dépôt

- [ ] Ratio pool vérifié (proche 50/50 si ZAP)
- [ ] Score OrnyTools des deux tokens ≥ seuil acceptable
- [ ] Pharos Watch consulté pour les deux tokens
- [ ] Audits Curve + couche supérieure (Convex/Beefy) vérifiés
- [ ] TVL suffisante (min $5M pour limiter le risque de retrait soudain)
- [ ] Source de rendement comprise (fees vs rewards vs compound)
- [ ] Double approve prévu (gas budgeté)
- [ ] Stratégie de sortie définie

---

## 06 — Décision et raisonnement

**Décision :** ✅ ENTRER / ⚠️ SURVEILLER / ❌ ÉVITER

**Raisonnement :**
> à compléter — expliquer pourquoi en 2-3 phrases : ce qui est favorable, ce qui pose problème, pourquoi on entre ou pas maintenant.

**Montant envisagé :** $xxx  
**Horizon de temps :** court terme / moyen terme / ouvert  
**Condition de sortie :** à définir (APY tombe sous X% / ratio déséquilibré / signal de dépeg)

---

## 07 — Suivi post-dépôt

| Date | TVL | APY | Ratio A/B | Claimable | Action |
|------|-----|-----|-----------|-----------|--------|
| | | | | | |

---

## Liens
- [[Stablecoins-INDEX]]
- [[Pharos-Watch]]
- [[4-3_Curve-Convex-Beefy-LP-Avance]]
- [[MOC-Alyra-DeFi-V2]]
