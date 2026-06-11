---
type: template
usage: stratégie complète sur une stable pool — analyse + entrée Curve/Convex/Beefy + suivi
tags: [template, strategie, stablepool, Curve, Convex, Beefy, LP]
---

# Stratégie Stablepool : {{title}}

**Protocole :** Curve → Convex / Beefy  
**Statut :** 🟡 En analyse / 🟢 Active / ⚫ Archivée  
**Date d'analyse :** {{date}}  
**Décision :** ✅ ENTRER / ⚠️ SURVEILLER / ❌ ÉVITER

---

## Partie 1 — Analyse de la pool

> Voir [[Template_Pool-Analyse]] pour la version détaillée. Résumé ici.

| Champ | Valeur |
|-------|--------|
| **Nom de la pool** | |
| **Token A** | |
| **Token B** | |
| **TVL** | $xxx |
| **APY total** | xx% |
| **APR fees** | xx% |
| **APR rewards** | xx% |
| **Ratio actuel A/B** | xx% / xx% |
| **Score Token A** | OrnyTools : xx · Pharos Watch : xx |
| **Score Token B** | OrnyTools : xx · Pharos Watch : xx |

**Résumé risque pool :**
- Token A : à compléter
- Token B : à compléter
- Risque principal : à compléter

---

## Partie 2 — Préparation de l'entrée

### Vérification ZAP

| Condition | Résultat |
|-----------|----------|
| Ratio actuel de la pool | xx% / xx% |
| Déséquilibre | xx% |
| ZAP autorisé ? | ✅ Oui (< 10%) / ❌ Non (> 10%) |

> **Règle absolue :** ZAP uniquement si déséquilibre < 10%. Sinon, dépôt manuel dans les proportions exactes de la pool.

### Budget et proportions

| Paramètre | Valeur |
|-----------|--------|
| Capital total | $xxx |
| Montant Token A | $xxx (xx%) |
| Montant Token B | $xxx (xx%) |
| Gas estimé (ETH) | $xxx — prévoir pour 3-4 tx |
| Slippage max accepté | xx% |

---

## Partie 3 — Workflow d'entrée

### Via Convex (CRV boosté + CVX rewards)

- [ ] **Étape 1** — Acheter Token A sur [DEX] au prix : $xxx
- [ ] **Étape 2** — Acheter Token B sur [DEX] au prix : $xxx
- [ ] **Étape 3** — Déposer sur Curve [lien pool] — reçu LP token : xxx
- [ ] **Étape 4** — Déposer LP token sur Convex [lien pool] — tx hash : `0x...`
- [ ] **Étape 5** — Vérifier l'affichage sur Convex (solde + APY affiché)

### Via Beefy (autocompound — alternative simplifiée)

- [ ] **Étape 1** — Acheter Token A ou Token B selon ZAP possible
- [ ] **Étape 2** — Déposer sur Beefy [lien vault] — tx hash : `0x...`
- [ ] **Étape 3** — Vérifier le mooToken reçu et le solde affiché

**Choix protocole retenu :** Convex / Beefy  
**Raison :**

---

## Partie 4 — Position active

**Date d'entrée :** JJ/MM/AAAA  
**Capital déposé :** $xxx  
**LP tokens reçus :** xxx  
**APY au moment de l'entrée :** xx%

### Suivi des rewards

| Protocole | Token reward | Fréquence claim | Stratégie |
|-----------|-------------|-----------------|-----------|
| Convex | CRV + CVX | à définir | Vendre / Locker / Compounder |
| Beefy | Autocompound | Auto | — |

### Seuils d'alerte

| Indicateur | Valeur actuelle | Seuil d'alerte | Action |
|------------|-----------------|----------------|--------|
| APY | xx% | < xx% | Réévaluer |
| Ratio pool | xx/xx | > 60/40 | Sortir manuellement |
| Score Token A | xx/100 | < 40 | Sortir immédiatement |
| Score Token B | xx/100 | < 40 | Sortir immédiatement |
| Signal dépeg Token | — | tout dépeg > 0.5% | Surveiller, sortie possible |

---

## Partie 5 — Suivi périodique

| Date | TVL | APY | Ratio | Claimable | Action |
|------|-----|-----|-------|-----------|--------|
| | | | | | |

---

## Partie 6 — Sortie

**Date de sortie :** JJ/MM/AAAA  
**Condition déclenchante :**

### Workflow de sortie (Convex)

- [ ] Retirer le LP token de Convex (Withdraw)
- [ ] Retirer les tokens depuis Curve (Remove Liquidity)
- [ ] Vérifier les proportions reçues vs déposées
- [ ] Claim les derniers rewards si applicable

### Workflow de sortie (Beefy)

- [ ] Retirer le mooToken via Beefy (Withdraw)
- [ ] Vérifier les tokens reçus

### Résultat final

| Paramètre | Valeur |
|-----------|--------|
| Capital initial | $xxx |
| Capital récupéré | $xxx |
| Rewards claimés | $xxx |
| PnL net | $xxx (xx%) |
| Durée | xx jours |
| APY réalisé | xx% |
| Commentaire | |

---

## Liens
- [[Template_Pool-Analyse]] — analyse détaillée de la pool
- [[4-3_Curve-Convex-Beefy-LP-Avance]] — cours LP avancé
- [[4-3-5_Exercice-pmUSD-Convex-Beefy]] — exercice pratique
- [[Stablecoins-INDEX]]
- [[MOC-Alyra-DeFi-V2]]
