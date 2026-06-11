111# Devenir LP

**Cours :** Alyra — Semaine 3 · Les DEX | [[MOC-Alyra-DeFi-V2]]  
**Tags :** #AMM #DEX #DeFi #LiquidityPool #LP #Semaine3 #ImpermanentLoss #Rendement

---

## 🎯 Objectifs du cours
- Être capable de fournir de la liquidité sur un AMM
- Connaître les différentes stratégies et risques

---

## 01 — Déposer de la liquidité

Pour devenir LP, il faut déposer **les deux tokens simultanément**, dans le respect des poids et du prix courant de la pool.

**Fonction "zap" :** certaines pools acceptent un dépôt en un seul token (single token deposit). La pool effectue le swap en interne. Dans une stablepool, cela peut générer un **price impact positif** si le token déposé est sous-représenté, ou négatif s'il est sur-représenté.

**Suivi de position :** Zerion ou DeBank.

**Retrait :** renvoyer ses LP tokens au smart contract → récupérer les tokens sous-jacents.

---

## 02 — LP tokens

Le dépôt est **tokenisé** : le LP reçoit des LP tokens représentant sa part dans la pool.

### Deux architectures possibles

**Architecture 1 — même smart contract (ex : Uniswap V2)**
La pool et le LP token partagent la même adresse. Le contrat de la pool détient directement les tokens (USDT, WETH, etc.) et émet des LP tokens au LP.

**Architecture 2 — smart contracts séparés (ex : Curve)**
La pool, le LP token, et la gauge (pour le staking) sont trois contrats distincts.

Exemple Curve 3pool :
- Pool : `0xBE...F1C7`
- Token (3Crv) : `0x6C...E499`
- Gauge : `0xBF...952A`

> Note : le LP token de la 3pool (3Crv) a 9 203 holders. Le top holder "Wintermute Exploiter" détenait 59,48% ($115M) suite au hack de septembre 2022 ($160M volés via une faille sur une vanity address Profanity).

**Architecture Balancer — vault unique**
Tous les tokens de toutes les pools sont dans le **même smart contract** (le Vault). Il n'y a pas de pools distinctes au niveau contractuel.

---

## 03 — Stratégies de rebalancing

**Objectif :** maintenir le même poids entre ses actifs tout en générant du rendement.

Rappel : les pools à poids invariables (50/50, 80/20) sont des outils de rebalancing automatique de portefeuille.

### Sources de rendement

**1. Trading fees (commissions)**
Frais prélevés sur chaque swap, redistribués aux LPs proportionnellement à leur part.

Outil d'analyse : **Aperture Finance** → visualise le Fees APY vs IL APY sur n'importe quelle pool.

**2. Incentives (sponsor)**
Le protocole émet des tokens pour attirer des liquidités dans sa pool.

Exemple — RDNT/WETH 80/20 sur Balancer :
- APR total : 19,51% → 48,25%
- Staking APR (BAL) : 19,15% → 47,89%
- Swap fees APR : 0,36%

**3. Revenue sharing (staking du LP token)**
Le LP token peut être staké pour recevoir une part des revenus du protocole.

Exemples :
- **Aave Safety Module** : staker ABPT (LP token du pool Aave Balancer) → APR ~11,36% en AAVE (avec risque de slashing 30% en cas de shortfall)
- **ParaSwap** : staker PSP dans pool PSP/WETH 20/80 → APR ~20% (Staking APR + protocol fees)

**4. Bribes (pots-de-vin / votes)**
Mécanisme propre aux protocoles à vote (Curve Wars, Balancer Wars) :

```
LP token → staker → veBAL → voter pour une gauge
→ les protocoles paient des bribes aux votants
→ tu reçois des bribes en échange de ton vote
```

Plateformes de bribes : **Hidden Hand**, **Paladin (Quest)**, **StakeDAO VoteMarket**

Exemple — BAL/WETH 80/20 sur Balancer :
- APR total : 0,12% → 0,78%
- Max locking/veBAL APR : 0,66%
- Swap fees APR : 0,12%

---

> ⚠️ **ATTENTION aux mirages !** De fortes APY peuvent être un piège — à étudier en détail dans un cours ultérieur.

---

## 04 — Stratégies directionnelles

**Objectif :** parier sur la hausse du prix d'un actif tout en générant du rendement.

### Stratégie A — Exposition unique (via stablepool)

Acheter un token TKN et le déposer dans une **stablepool TKN_A / TKN_B** (deux versions corrélées du même actif).

Les deux tokens étant corrélés, l'IL est quasi nulle. Le LP conserve une exposition quasi-totale à TKN tout en touchant des fees.

Exemples :
- **tBTC/WBTC** sur Balancer : exposition BTC, APR 11,76% → 18,04%
- **rETH/WETH** sur Balancer : APR 2,94% → 6,04%
- **wstETH/WETH** sur Velodrome (Optimism)

### Stratégie B — DCA automatique (via pool TKN / stable)

Acheter TKN et le déposer dans une **pool TKN-USDC**.

La pool va vendre petit à petit TKN contre USDC au fur et à mesure que le prix monte → **DCA de sortie automatique**, avec rendement en plus.

L'IL dans ce cas correspond à la vente continue tout au long du mouvement — c'est précisément l'effet recherché dans cette stratégie.

**Fonctionne aussi dans l'autre sens :** déposer des USDC dans une pool TKN-USDC → la pool achète automatiquement TKN si le prix baisse → **DCA d'entrée automatique**.

> L'IL est causée par la vente (ou l'achat) continue tout le long du mouvement de prix.

Exemples :
- **sAMMV2-USDT/LUSD** sur Velodrome : APR ~27%
- **sAMMV2-USDC/LUSD** sur Velodrome : APR ~24%
- **2BRL (jBRL/BRZ)** sur Ellipsis (BNB Chain) : stablepool BRL, APR ~12%
