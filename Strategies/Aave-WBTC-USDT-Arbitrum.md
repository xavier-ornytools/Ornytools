# Aave V3 — WBTC Collateral / USDT Emprunt
**Protocole :** [[Aave]]  
**Réseau :** Arbitrum  
**Statut :** 🟢 Active  
**Ouverture :** mai 2026  
**Dernière mise à jour :** 04/06/2026  
**Tags :** #stratégie #aave #WBTC #USDT #arbitrum #levier #emprunt

---

## Résumé en une phrase

> Déposer du WBTC comme collatéral sur Aave V3 Arbitrum et emprunter de l'USDT pour libérer des liquidités sans vendre le BTC.

---

## Structure de la Position

| Paramètre | Valeur |
|-----------|--------|
| Actif déposé (collateral) | ~1,377 WBTC |
| Actif emprunté | ~50 381 USDT |
| LTV actuel | à calculer selon prix BTC du jour |
| APY collatéral (WBTC supply) | faible (~0,01%) |
| Coût emprunt (USDT variable) | ~5–8% APY selon le marché |
| Réseau | Arbitrum |

---

## Logique de la Stratégie

**Objectif :** conserver une exposition longue sur BTC sans vendre, tout en accédant à des liquidités en USDT. Les USDT empruntés peuvent être déployés ailleurs (rendement, trading, opérations).

**Pourquoi ne pas vendre le BTC ?**
- Éviter l'événement fiscal de la cession
- Maintenir l'exposition haussière sur BTC
- Le BTC sert d'"épargne garantie" pendant que les USDT travaillent

**Risque central :** si le prix du BTC baisse fortement → le Health Factor descend → risque de liquidation partielle ou totale du collateral.

---

## Suivi du Risque

### Indicateurs à surveiller

| Indicateur | Valeur cible | Seuil d'alerte | Seuil critique |
|------------|-------------|----------------|----------------|
| **Health Factor** | > 2,0 | < 1,5 | < 1,2 |
| **LTV (Loan-to-Value)** | < 50% | > 65% | > 75% |
| **Prix BTC liquidation** | à calculer | -20% du prix actuel | -30% du prix actuel |
| **Taux emprunt USDT** | < 8% | > 12% | > 20% |

> Pour calculer le prix de liquidation exact : aller sur l'interface Aave V3 Arbitrum → onglet "Liquidation price" affiché directement.

### Scénarios de stress

**Scénario BTC -30% :**
Le collatéral perd 30% de sa valeur. Le Health Factor descend proportionnellement. Si le HF passe sous 1,0 → liquidation automatique par les bots Aave. Aave vend une partie du WBTC pour rembourser une fraction de la dette + une pénalité de liquidation (~5–10%).

**Scénario taux USDT spike :**
En période de forte demande d'emprunt, le taux variable USDT peut monter à 15–20%+. La dette grossit plus vite. Surveiller et rembourser partiellement si le taux dépasse 15%.

**Scénario exploit Aave :**
Risque smart contract. Aave V3 est l'un des protocoles les plus audités (Chainlink oracles, multisig, timelock). Risque faible mais non nul.

---

## Comment surveiller la position

1. **Aave Dashboard** — interface directe, affiche le Health Factor en temps réel
2. **DeBank** — vue portefeuille complète avec HF et dette USD
3. **Positions à risque** — sur DefiLlama Liquidations ou Chaos Labs, voir les positions proches de liquidation sur Aave

**Fréquence recommandée :** vérifier le HF au moins 2× par semaine, et immédiatement lors d'une forte chute du prix du BTC.

---

## Plan d'action

| Condition | Action |
|-----------|--------|
| HF < 1,5 | Rembourser une partie de la dette USDT OU déposer du WBTC supplémentaire |
| HF < 1,2 | Action immédiate : rembourser pour repasser au-dessus de 1,5 |
| Taux USDT > 15% | Évaluer un remboursement partiel ou un switch vers emprunt USDC |
| BTC +50% | Possibilité d'emprunter davantage ou de réduire l'exposition |
| BTC -20% | Alert — vérifier HF et préparer des USDT pour rembourser si besoin |

---

## Travail à faire avec Claude

- [ ] Calculer le prix de liquidation exact de la position actuelle
- [ ] Simuler l'impact d'une baisse BTC de -20%, -30%, -40% sur le Health Factor
- [ ] Évaluer si les USDT empruntés génèrent assez de rendement pour couvrir le coût de l'emprunt
- [ ] Définir une stratégie de sortie (conditions de remboursement total)

---

## Historique des ajustements

| Date | Action | Raison |
|------|---------|--------|
| Mai 2026 | Ouverture de la position | Position active en cours de formation |

---

## Liens
- [[Aave]]
- [[Lido-stETH-wstETH-Arbitrum]]
- [[Risques-DeFi]]
- [[MOC-Alyra-DeFi-V2]]
