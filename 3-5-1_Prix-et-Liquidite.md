# 💧 Le Prix et la Liquidité

**Cours :** Alyra — Semaine 3 · Les DEX  
**Date :** 29/05/2026  
**MOC :** [[MOC-Alyra-DeFi-V2]]  
**Tags :** #alyra #DEX #liquidité #carnet-d-ordres #AMM #prix #DeFi

---

## 🎯 Objectifs

- Comprendre comment se forme et se déplace la liquidité sur un marché
- Comprendre comment un mouvement de marché se crée

---

## 01 — L'importance de la liquidité

Un marché **liquide** est :
- **Sécurisé** : on peut acheter et vendre facilement à n'importe quel prix
- **Efficient** : le marché peut correctement *pricer* l'actif

> 💡 Sans liquidité, pas de prix fiable, pas de marché fonctionnel.

---

## 02 — La formation du prix

Le prix se forme en fonction de **l'offre (vente)** et de la **demande (achat)** :
- Plus d'achats que de ventes → le prix **monte**
- Plus de ventes que d'achats → le prix **descend**

### Les 4 mécanismes de rencontre offre/demande

| Mécanisme | Description |
|---|---|
| **Enchères** | Offres en temps limité, prix max gagnant |
| **OTC (gré à gré)** | Accord direct entre deux parties, hors marché |
| **Carnet d'ordres** | Liste organisée d'offres d'achat et de vente |
| **Algorithme (AMM)** | Formule mathématique détermine le prix automatiquement |

---

## 03 — Le carnet d'ordres (Order Book)

Un carnet d'ordres **inscrit les offres d'achats et de ventes** en quantité et en prix.

### Acteurs clés

- **Maker** = Fournisseur de liquidité → celui qui **place** un ordre (offre)
- **Taker** = Trader → celui qui **répond** à l'offre (exécute)

### Concepts fondamentaux

#### Spread
> Différence entre la **meilleure offre d'achat (Bid)** et la **meilleure offre de vente (Ask)**

- Spread faible → marché très liquide
- Spread élevé → marché peu liquide

#### Profondeur de marché (Market Depth)
> La **quantité** d'actifs disponibles à l'achat ou à la vente pour un niveau de prix donné

- Visualisée via le **Market Depth Chart** (courbe verte = acheteurs, rouge = vendeurs)
- La liquidité n'est pas uniforme → crée des **poches** et des **trous** de liquidité

#### Price Impact
> Différence entre le **prix d'exécution** et le **prix actuel**  
> ↳ Dépend de la liquidité disponible sur chaque niveau de prix

**Exemple du cours (pommes) :**
- Vente de 0,01 BTC → assez de liquidité → **prix ne bouge pas**
- Vente de 0,5 BTC → mange plusieurs niveaux → **prix chute**

#### Slippage
> Différence entre le **prix estimé** (avec price impact) et le **prix réel d'exécution**  
> ↳ Causé par la volatilité du marché entre le moment de l'ordre et son exécution

### Limites du carnet d'ordres
- Liquidité **finie** : si plus d'offres de vente → plus d'achat possible (et vice versa)
- Requiert une gestion **active en continu** : ajouter, retirer, modifier des ordres

---

## 04 — Liquidité on-chain vs off-chain

### Liquidité off-chain → CEX (Centralized Exchange)
- Fonctionne via **carnets d'ordres** classiques + OTC
- Gestion active par des teneurs de marché professionnels
- **Plus efficiente** car concentre la liquidité autour du prix courant

### Liquidité on-chain → DEX (Decentralized Exchange)
- Adaptée aux **contraintes de la blockchain** (latence, coût des txs, transparence)
- Solution inventée : les **AMM** (Autonomous Market Maker)

### AMM — Deux grandes approches

| Approche | Description | Exemples |
|---|---|---|
| **Liquidité distribuée** | Classique, liquidité sur toute la courbe de prix | Uniswap v2 |
| **Concentrated Liquidity Pool (CLP)** | Mime le carnet d'ordres, liquidité concentrée autour du prix actuel | Uniswap v3, Trader Joe |

### Tendance actuelle
La liquidité on-chain tend à **devenir plus efficiente** via :
- Des **carnets d'ordres on-chain** sur des L2 ou L1 rapides
  - Solana → **OpenBook**
  - Cosmos → **dYdX v4**
  - Arbitrum → **Vertex**
- Des **Concentrated Liquidity Pools (CLP)** qui imitent le comportement des carnets d'ordres

> 📊 DEX vs CEX dominance (données cours Alyra) : ~25% du volume total → les DEX progressent mais les CEX restent dominants

---

## 🔗 Liens connexes

- [[MOC-Alyra-DeFi-V2]]
- Prochain cours : [[3-5-2_AMM-xyk]]

---

## ❓ Questions / À approfondir

- [ ] Quelle est la différence exacte entre price impact et slippage dans Uniswap v3 ?
- [ ] Comment un LP (Liquidity Provider) définit-il sa plage de prix dans un CLP ?
- [ ] Pourquoi le carnet d'ordres on-chain est-il difficile à implémenter sur Ethereum L1 ?
