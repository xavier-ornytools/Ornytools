# Types de AMM

**Cours :** Alyra — Semaine 3 · Les DEX | [[MOC-Alyra-DeFi-V2]]  
**Tags :** #AMM #DEX #DeFi #LiquidityPool #Balancer #Curve #Semaine3

---

## 🎯 Objectifs du cours
- Connaître les différents types d'AMM et leurs conséquences sur l'exécution des ordres

---

## 01 — Pool 50/50

Popularisé par Uniswap V1/V2. Formule : **x × y = k** avec des poids constants (50% / 50%).

La pool rééquilibre automatiquement le portefeuille du LP. Ce rééquilibrage est effectué par les **traders (arbitrageurs)** qui paient des commissions en échange. La pool est donc un outil de rebalancing passif.

**Commission :** fixe à 0,3% sur Uniswap V1/V2 — pas de paramétrage possible.

**DEX :** Uniswap, SushiSwap

---

## 02 — Pool 80/20

Popularisé par **Balancer**. Permet des pools déséquilibrées, jusqu'à 8 tokens, avec des commissions personnalisables.

La bonding curve est plus pentue qu'un 50/50 → **plus grand price impact** pour les traders, mais **moins d'IL** pour les LPs.

**Avantages pour le LP :**
- Moins d'IL (exposition majoritaire à l'actif dominant)
- Moins de capital requis pour entrer en LP
- Commissions personnalisables
- Éligible aux incentives (BAL rewards, bribes)

**Inconvénient :** plus de price impact pour les traders → moins attractif pour les gros volumes.

**Cas d'usage typique :** un protocole dépose dans une pool 80% de son token natif / 20% WETH pour garder l'exposition à son token tout en fournissant de la liquidité.

**Exemples :**
- RDNT/WETH 80/20 — Balancer
- BAL/WETH 80/20 — Balancer
- PSP/WETH 20/80 — ParaSwap (staking pour revenue sharing)

---

## 03 — Stablepools

Optimisées pour les **actifs corrélés** : stablecoins (USDC/USDT/DAI), LSTs (stETH/rETH), ou deux versions du même actif (WBTC/tBTC).

Algorithme popularisé par **Curve** (StableSwap) — bonding curve aplanie autour d'un **prix cible** (p_cible ≈ 1).

### Fonctionnement du poids variable

Contrairement aux pools 50/50 et 80/20, **le poids des tokens varie** dans une stablepool et n'est **pas rebalancé automatiquement**.

> Plus un token est vendu → plus son poids dans la pool augmente.

**C'est un indicateur de risque marché** : si le poids d'un actif est très important, c'est que le marché le vend massivement → actif considéré risqué.

Exemple vécu : pool ibGBP/sGBP sur Curve → ibGBP à 95,36% = le marché fuyait ibGBP.

### Price impact pour le rééquilibrage

La stablepool calcule le price impact pour **inciter le marché à rebalancer vers le prix cible** :

| Action | Effet |
|--------|-------|
| Acheter le token sur-représenté (poids élevé) | "Price impact positif" → prix amélioré |
| Vendre le token sur-représenté | "Price impact négatif" → prix dégradé |

Une stablepool peut être paramétrée pour avoir une zone optimale plus large (ex : 10% → 90% au lieu de 40% → 60%).

### Rôle systémique

Les stablepools jouent un rôle crucial dans le **maintien du peg** des actifs — elles permettent l'échange à un ratio proche de 1:1. Exemple : DAI a retrouvé son peg après ses dépeg historiques grâce aux arbitragistes sur Curve.

### Avantages
- Faible price impact pour les swaps proches du peg
- Mécanisme naturel d'arbitrage pour rebalancer la pool
- Exposition quasi-unique à un seul actif possible (single token deposit)
- IL négligeable dans des conditions normales

### Risques
- **IL de 100%** si un actif perd son peg (depeg complet) → le LP se retrouve avec uniquement l'actif déprécié
- Price impact important pour l'utilisateur lorsqu'une pool est très déséquilibrée

> L'IL sur les stablepools existe mais est négligeable la plupart du temps, puisque les deux tokens sont censés avoir la même valeur.

### Exemples de pools
| Pool | DEX | Fee | Notes |
|------|-----|-----|-------|
| DAI/USDC/USDT (3pool) | Curve | 0,01% | Pool de référence, $193M TVL |
| ETH/stETH | Curve | 0,01% | LST pool |
| crvUSD/USDC | Curve | 0,01% | Stablecoin natif Curve |
| ibGBP/sGBP | Curve | 0,04% | Exemple de pool déséquilibrée (risque) |
| MIM/DAI/USDC/USDT | Curve | 0,04% | Pool 4 tokens, paramètre A=2000 |
| sAMMV2-USDC/sUSD | Velodrome | 0,05% | Optimism |
| 2BRL (jBRL/BRZ) | Ellipsis | — | BNB Chain |

**DEX spécialisés :** Curve (leader), Balancer, Velodrome (Optimism), Ellipsis (BNB Chain)
