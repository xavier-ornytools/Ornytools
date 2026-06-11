# 🔗 Chaînes, Layer 2 & lecture de la TVL

**Cours :** Alyra — Semaine 3 · Session Q&R Paul Rocchi  
**Date :** 04/06/2026  
**MOC :** [[MOC-Alyra-DeFi-V2]]  
**Tags :** #alyra #semaine3 #Layer2 #TVL #chaînes #DEX #LP

---

## 01 — Cartographie des chaînes

| Chaîne | Type | Stablecoin de référence | Notes |
|--------|------|-------------------------|-------|
| **Ethereum** | L1 | Indépendant | Référence de base |
| **Arbitrum** | L2 — Rollup | USDC | Compatible EVM |
| **Base** | L2 — Rollup | USDC | Compatible EVM |
| **Plasma** | Blockchain centralisée | USDT | Compatible EVM · ≠ rollup |
| **Polygon** | Sidechain | USDC / POL | Token natif = POL pour le gas |

> Plasma est **centralisée** — différent d'Arbitrum ou Base qui sont des rollups ancrés sur Ethereum.

---

## 02 — Lire la TVL correctement

La TVL brute est trompeuse. Ce qui compte vraiment : **l'écart (Δ) entre la TVL et la taille de sa propre position**.

| Scénario | TVL | Position | Commentaire |
|----------|-----|----------|-------------|
| A | 10 M | 10 € | Très petite part → risque de dilution des frais |
| B | 10 M | 10 000 € | Part significative → exposition aux frais et à l'IL plus visible |

> Une position de 10 € dans 10 M de TVL ne donne quasiment aucun frais — et une variation de TVL ne t'impacte presque pas.

---

## 03 — Analyser une pool : le ratio Fees / TVL

Pour identifier les **meilleures pools** où fournir de la liquidité :

**Cible idéale = maximum de volume (= frais) pour une petite TVL**

Ratio clé à surveiller → **Fees / TVL**

Un ratio Fees/TVL élevé signifie que la pool génère beaucoup de frais par rapport à son capital → meilleur rendement pour le LP.

**Outil : Revert Finance** — analyse et historique de pools, permet de comparer les ratios Fees/TVL sur différentes pools.

---

## 04 — Simuler l'impermanent loss

Avant de déposer en LP, simuler l'impermanent loss avec ses propres montants.

**Outil : Baller** (simulateur d'IL — nom à reconfirmer)

---

## 🔗 Liens connexes

- [[MOC-Alyra-DeFi-V2]]
- [[3-4-2_Liquidite-V2-V3]] — suite directe
- [[3-5-1_Prix-et-Liquidite]] — fondamentaux liquidité
- [[3-5-4_Devenir-LP]] — devenir LP en pratique

---

## ❓ À approfondir

- [ ] Vérifier le nom exact du simulateur IL "Baller"
- [ ] Tester Revert Finance sur une pool Uniswap pour calculer le ratio Fees/TVL
