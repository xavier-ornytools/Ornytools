# AMM x\*y=k

**Cours :** Semaine 3 – Les DEX | [[MOC-Alyra-DeFi-V2]]
**Tags :** #AMM #DEX #DeFi #LiquidityPool #UniSwap #Semaine3

---

## 🎯 Objectifs du cours
- Comprendre le modèle **x\*y=k** et ses conséquences sur l'exécution des ordres
- Comprendre les risques pris par les **fournisseurs de liquidité (LP)** sur un AMM

---

## 01 — Principe d'un AMM

**AMM = Autonomous Market Maker**

- Pas de carnet d'ordres
- Liquidité **infinie et uniforme**
- Fonctionnement purement mathématique

> Un AMM est un **distributeur automatique** : Alice dépose token A → reçoit token B (et inversement).

**Acteurs :**
- **Traders (Alice)** : échangent des tokens contre d'autres
- **Liquidity Providers / LP (Bob)** : déposent des paires de tokens pour alimenter la pool
- En échange, Bob reçoit des **LP tokens** représentant sa part de liquidité

> ⚡ Un AMM est une **pool de liquidité** : contient des tokens déposés par des LPs, qui sert de contrepartie aux traders.

Lorsqu'Alice achète token B, elle vend token A **directement à Bob** (via la pool) — le LP token de Bob reflète alors +1 token A et −1 token B.

---

## 02 — Le calcul du prix

### Prix actuel

La blockchain est **coupée du monde extérieur** → elle ne connaît pas le prix réel des tokens.

L'AMM calcule le prix en **divisant les quantités** :

$$\text{Prix Token A} = \frac{\text{Nombre Token B}}{\text{Nombre Token A}}$$

$$\text{Prix Token B} = \frac{\text{Nombre Token A}}{\text{Nombre Token B}}$$

**Exemple réel** : Pool ETH/USDT avec 34 579 ETH et 79 898 357 USDT
$$p_{ETH} = \frac{79\,898\,357}{34\,579} = 2\,310,6 \text{ USDT}$$

### Prix de l'échange — la formule x\*y=k

L'AMM détermine le prix d'exécution via la formule :

$$x \times y = k$$

- **x** = quantité de token A dans la pool
- **y** = quantité de token B dans la pool
- **k** = constante (recalculée à chaque dépôt/retrait de LP)

> ⚠️ **k est constant lors des swaps**, mais recalculé après chaque dépôt/retrait de liquidité.

### Exemple complet

Bob dépose **0,1 WBTC + 4 300 USDC** (WBTC = 43 000$) :
- k = 0,1 × 4 300 = **430**
- Prix WBTC = 4 300 / 0,1 = **43 000**

Alice veut acheter pour **50 USDC de WBTC** :
1. Nouveau y = 4 300 + 50 = **4 350**
2. Nouveau x = k / y = 430 / 4 350 = **0,09885…**
3. WBTC reçu = 0,1 − 0,09885 = **0,00115 WBTC**
4. Nouveau prix WBTC = 4 350 / 0,09885 = **44 005 USDC**

---

## 03 — Price impact et slippage

### Price impact

Différence entre le **prix actuel** et le **prix d'exécution** causée par le swap lui-même.

$$\text{Price impact} = \frac{p_{\text{exec}} - p_{\text{actuel}}}{p_{\text{actuel}}}$$

**Exemple** : Alice paye 50 USDC, exécutée à 44 005 au lieu de 43 000 → price impact = **+2,34%**

Le price impact dépend de :
- la **taille de l'ordre** (plus l'ordre est grand, plus l'impact est fort)
- la **profondeur de liquidité** (plus la pool est grosse, moins l'impact est important)

Sur un AMM, l'ordre est exécuté à **un seul prix** (vs carnet d'ordres : découpé à chaque niveau).

### Slippage

Différence de prix entre le **moment d'envoi** et le **moment d'exécution** de la transaction — cause **externe**.

Causes : mouvement de marché, ou attaque **front-running (sandwich)**.

> Les AMM permettent de fixer un **slippage maximum**. Si dépassé → transaction annulée (revert).

### Attaque sandwich (MEV)

1. Un **MEV bot** repère la transaction d'Alice dans la **mempool** (visible publiquement)
2. Il **front-run** Alice en achetant avant elle (plus de gas) → prix monte
3. Alice s'exécute dans le slippage max autorisé → prix encore plus haut
4. Le bot **revend immédiatement** → profit garanti

Ces robots (**MEV bots = Maximum Extractable Value**) génèrent des millions.

**Protection** : utiliser des DEX avec **transactions privées** (ex. CoW Swap, UniswapX) → la transaction reste invisible dans la mempool.

---

## 04 — La Bonding Curve

La représentation graphique de x\*y=k est une **hyperbole** appelée « bonding curve ».

```
y (WBTC)
│  ·
│   ·
│    ·
│      ·  ← prix actuel
│          ·
│               ·
└────────────────── x (USDC)
```

Chaque point de la courbe représente un **état possible de la pool** (et donc un prix).

| USDC échangés | WBTC reçus | Nouveau prix WBTC | Price impact |
|---|---|---|---|
| 50 | 0,00115 | 44 006 | +2% |
| 1 000 | 0,01887 | 65 327 | +50% |
| 10 000 | 0,06993 | 475 715 | +1 000% |

> Plus on s'éloigne de la **tangente au point du prix actuel**, plus le price impact est élevé.

### Avantages du modèle x\*y=k

- **Liquidité infinie et uniforme** : échanges possibles à tous les prix, pour tous les montants
- **LP passif** : la liquidité est déployée automatiquement sur toute la courbe
- **Scalable** : n'importe quelle paire créée a immédiatement un marché liquide

### Inconvénients

- **Inefficience du capital** : la liquidité hors zone optimale (autour du prix actuel) est inutilisée → vs carnet d'ordres où toute la liquidité est concentrée au prix
- **Rentabilité LP** : les commissions couvrent rarement les pertes impermanentes (voir §06)

---

## 05 — Les arbitrages

**Arbitrage** = acheter un token sur un DEX/CEX, le revendre ailleurs à un prix supérieur.

Les arbitrageurs **équilibrent les prix** entre tous les exchanges. Dès qu'une différence apparaît, elle est vite exploitée.

> À ses débuts, Uniswap suivait les prix des CEX via arb. Aujourd'hui, avec la liquidité des DEX, la direction peut s'inverser.

> ⚡ La **majorité des transactions** sur les AMM sont en réalité des arbitrages et du front-running.

---

## 06 — Les pertes impermanentes (Impermanent Loss / IL)

**Définition :**
$$\text{IL} = \text{Valeur LP token} - \text{Valeur théorique des tokens si non-LP}$$

C'est ce que Bob **perd** par rapport à avoir simplement conservé ses tokens.

### Exemple

Bob dépose 0,1 WBTC + 4 300 USDC (total = 8 600$). Alice achète pour 50 USDC :

| | Dépôt | Après swap |
|---|---|---|
| USDC | 4 300 | 4 350 |
| WBTC | 0,1 | 0,09885 |
| Prix WBTC | 43 000 | 44 005 |
| **Valeur LP token** | 8 600 | **8 699,89** |
| **Valeur si HODL** | 8 600 | **8 700,5** |

**IL = 8 700,5 − 8 699,89 = 0,61$**

Bob a touché **0,15$** de commission (0,3% × 50) → ne couvre pas l'IL.

### Pourquoi l'IL existe ?

La liquidité des LPs est disponible **uniformément** sur toute la courbe → lors d'une hausse, le LP vend ses tokens progressivement à plusieurs niveaux de prix (moins bien que de tout vendre au sommet).

---

## 🔗 Liens & ressources

- [[DEX]] | [[Uniswap]] | [[Liquidity-Pool]]
- Calculateur IL : [CoinGecko Impermanent Loss Calculator](https://www.coingecko.com/en/tools/impermanent-loss-calculator)
- Suivi MEV sandwiches : [EigenPhi](https://eigenphi.io/)
- Protection MEV : [CoW Swap](https://swap.cow.fi/) (transactions privées)

**Prochain cours →** [[3-5-3_Types-de-pools]]
