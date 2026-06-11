# Exercice — Recherche pmUSD + Entrée Convex & Beefy

**Cours :** Alyra — Semaine 4 · Session 4.3.5  
**MOC :** [[MOC-Alyra-DeFi-V2]]  
**Tags :** #alyra #semaine4 #exercice #pmUSD #Convex #Beefy #Curve #stablepool

---

## Exercice 1 — Recherche sur le pmUSD

> Objectif : analyser un stablecoin RWA peu connu avant d'y toucher.

Voir analyse complète : [[pmUSD]]

| Question | Réponse |
|----------|---------|
| Qu'est-ce que c'est ? | Stablecoin RWA adossé à l'or physique (XAU), peg USD via PSM Sky Protocol |
| Collatéral | Or physique (XAU) détenu off-chain par un custodian |
| Comment c'est minté ? | Via PSM Sky Protocol — échange USDC/DAI → pmUSD |
| Comment c'est redeemé ? | Via PSM (si liquidité disponible) ou marché secondaire avec slippage |
| Transparence | Faible — attestation des réserves d'or non publique |
| Liquidité du collatéral | Variable — dépend du prix de l'or et du ratio de couverture |
| Liquidité du token | Score 28/100 OrnyTools — insuffisant pour des positions significatives |
| Événements récents | 450+ épisodes de dépeg (source Pharos Watch) — Grade D |

**Verdict exercice :** pmUSD ne passe pas le filtre de qualité. Ne pas entrer sur une pool contenant pmUSD sans surveillance quotidienne.

---

## Exercice 2 — Entrer sur Convex (étape par étape)

> Workflow pour déposer dans une stable pool Curve et booster sur Convex.

**Étape 1 — Préparer les proportions**
Vérifier le ratio actuel de la pool sur Curve UI (Pool Stats). Si la pool est à 60/40, acheter les tokens dans ces mêmes proportions — pas 50/50.

**Étape 2 — Acheter les deux tokens**
Acheter Token A et Token B dans les bonnes proportions. Budget = montant total. Garder un peu d'ETH pour le gas (2-3 transactions).

**Étape 3 — Déposer sur Curve**
Aller sur curve.fi → pool cible → "Deposit". Déposer les deux tokens. Ne pas utiliser le ZAP sauf si le ratio est proche de 50/50. Recevoir le LP token (ex: OUSD3CRV-f).

**Étape 4 — Déposer le LP token sur Convex**
Aller sur convex.finance → "Pools" → trouver la pool correspondante → "Deposit" le LP token. Convex stake automatiquement chez Curve et maximise les CRV.

**Étape 5 — Claim**
Les rewards (CRV + CVX) s'accumulent. Claim manuel sur Convex → "Claim All". Fréquence optimale : selon le montant déposé et le prix du gas.

---

## Exercice 3 — Entrer sur Beefy (étape par étape)

> Workflow pour l'autocompound via Beefy — plus simple, sans claim manuel.

**Étape 1 — Acheter un seul token**
Beefy gère souvent l'équilibrage via ZAP. Acheter l'un des deux tokens de la pool.

**Étape 2 — Déposer sur Beefy**
Aller sur beefy.com → sélectionner la vault Curve correspondante → "Deposit". Beefy accepte un seul token ou les deux + ZAP automatique.

**Attention ZAP :**

> N'utiliser la fonction ZAP de Beefy ou de Curve **si et seulement si la pool est équilibrée** (ratio proche de 50/50).
> Un déséquilibre > 10% = dépôt manuel proportionnel obligatoire.

---

## Règle clé retenue

La vérification du ratio avant tout dépôt est non-négociable. Un ZAP dans une pool déséquilibrée = slippage subi immédiatement.

Voir : [[Template_Pool-Analyse]] · [[4-3_Curve-Convex-Beefy-LP-Avance]] · [[Template_Strategie-Stablepool]]

---

## 🔗 Liens connexes

- [[pmUSD]] — fiche complète stablecoin
- [[4-3_Curve-Convex-Beefy-LP-Avance]] — cours LP avancé
- [[4-3-4_IA-Claude-Obsidian-Outillage]] — outillage IA
- [[Template_Pool-Analyse]] — template analyse pool
- [[Template_Strategie-Stablepool]] — template stratégie stablepool
- [[MOC-Alyra-DeFi-V2]]
