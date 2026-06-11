# 2-3-2 — Bridges, Wrap/Tokenisation, Layer 2 vs Sidechain

> **Source** : Live DeFi — Pascal Tallavde — Questions / Réponses
> **Semaine 2 · Jour 3 · Page 2**
> **Tags** : #bridge #wrap #tokenisation #layer2 #sidechain #L1 #L2 #ethereum #scaling

---

## 1. Les 2 Familles de Bridges

Un bridge permet de transférer des actifs entre deux blockchains. Il en existe deux grandes familles :

### Bridge Custom
- Développé **spécifiquement pour un protocole ou une dApp**
- Exemple : le bridge de Ronin (Axie Infinity) — conçu uniquement pour ce jeu
- Plus rapide à déployer mais souvent **moins audité**, donc plus risqué
- Vulnérabilité concentrée : si le bridge est compromis, tout l'écosystème l'est

### Bridge Canonique (ou natif multi-chain)
- Intégré **directement dans la blockchain** ou développé par ses fondateurs
- Exemple : le bridge officiel Polygon ↔ Ethereum
- Généralement plus sécurisé car **plus audité et maintenu activement**
- Bénéficie de la légitimité et des ressources de la communauté principale

> 💡 En pratique, les bridges canoniques sont préférables pour des montants importants. Les bridges custom peuvent offrir de meilleures liquidités sur certaines paires mais exposent à plus de risques.

---

## 2. Le Mécanisme Wrap / Tokenisation Inter-Chain

### Qu'est-ce que le "wrap" ?

Quand tu passes un actif d'une chaîne à une autre via un bridge, tu ne déplaces pas réellement le token natif. À la place :

1. **Le token original est bloqué** (locked) dans un smart contract sur la chaîne source
2. **Un token wrappé est émis** sur la chaîne de destination — c'est une *représentation* du token original

### Exemple concret : WBTC
- BTC natif (Bitcoin) → bridge → Ethereum
- Tu reçois du **WBTC** (Wrapped Bitcoin), un token ERC-20
- 1 WBTC = 1 BTC en collatéral bloqué quelque part
- Tu peux maintenant utiliser ton BTC dans des protocoles DeFi sur Ethereum (Aave, Uniswap…)

### Risque du wrap
- Si le custodian du BTC bloqué est compromis → le WBTC n'a plus de collatéral → il perd sa valeur
- C'est exactement ce qui s'est passé lors du hack Wormhole (voir fiche 2-3-1)

---

## 3. Différence Layer 1, Layer 2 et Sidechain

C'est l'un des points les plus importants à maîtriser en DeFi. Voici la distinction claire.

### Layer 1 (L1) — La Blockchain de Base
- C'est la **blockchain principale**, souveraine, avec son propre consensus
- Exemples : **Ethereum, Bitcoin, Solana, BNB Chain**
- Elle traite et valide toutes les transactions directement sur sa chaîne
- Problème : **lente et chère** à mesure que l'adoption augmente (scalabilité limitée)

### Sidechain — "Mini L1" à côté de L1
- Une sidechain est une **blockchain indépendante** avec son propre consensus, qui tourne *en parallèle* d'une L1
- Elle a ses propres validateurs, ses propres règles
- Elle est connectée à la L1 via un bridge
- Exemples : **Polygon PoS, Gnosis Chain** (connectés à Ethereum)

> ⚠️ **La sidechain ne bénéficie PAS de la sécurité d'Ethereum.** Si les validateurs de la sidechain sont compromis, tes fonds le sont aussi — Ethereum ne peut pas intervenir.

**Sidechain = ancêtre du L2** — concept plus ancien, moins sécurisé

### Layer 2 (L2) — Extension Sécurisée de L1
- Un L2 est un protocole qui **s'appuie sur la sécurité d'Ethereum** (ou d'une autre L1)
- Il traite les transactions *off-chain* (hors de la L1) mais **publie les preuves sur L1**
- Résultat : rapide et peu cher, mais avec la **garantie de sécurité de la L1**
- Exemples : **Arbitrum, Optimism, Base, zkSync, Starknet**

---

## 4. Comment Fonctionne un L2 Concrètement ?

### Le problème de l'espace sur un block Ethereum
- Ethereum dispose d'un **espace limité par block** — chaque transaction occupe de l'espace
- Un utilisateur paie 1 USD pour une transaction → Ethereum lui **facture 0,01 USD** de l'espace utilisé
- Mais si 100 utilisateurs font pareil → **100 × 0,01 = 1$** collecté par le L2 pour cet espace

### La compression des données (le cœur du modèle L2)
1. Le L2 **regroupe des centaines ou milliers de transactions** en dehors d'Ethereum
2. Il **compresse toutes ces données** en un seul paquet compact
3. Il **envoie ce paquet compressé sur Ethereum** — en n'occupant qu'un seul "slot" de block

> 🔑 **L2 = grossiste de l'espace disponible sur L1**
> Il achète de l'espace en gros sur Ethereum et le revend au détail à ses utilisateurs.

### Pourquoi le L2 bénéficie de la sécurité d'Ethereum ?
- Les données compressées sont publiées **directement sur Ethereum**
- En cas de fraude ou de problème sur le L2, on peut toujours **reconstituer l'état depuis Ethereum**
- Les fonds ne peuvent être volés que si Ethereum lui-même est compromis

---

## 5. Sidechain vs L2 — Comparaison Directe

| Critère | Sidechain | Layer 2 |
|---|---|---|
| Consensus propre | ✅ Oui | ❌ Non (hérite de L1) |
| Sécurité | ⚠️ Ses propres validateurs | ✅ Sécurité de la L1 |
| Risque de hack | Plus élevé | Plus faible |
| Frais | Très bas | Bas |
| Lien avec Ethereum | Bridge externe | Ancré dans Ethereum |
| Exemple | Polygon PoS, Gnosis | Arbitrum, Base, zkSync |

> **Sidechain = plus dangereuse que L2**
> **Sidechain = ancêtre du L2**

---

## 6. Les L2 sont Payés en ETH

- Les Layer 2 paient Ethereum pour publier leurs données compressées
- Ce paiement se fait **en ETH** — c'est une source de revenus directe pour Ethereum
- Exemple : **BASE (Coinbase, 2025)** génère **200M$ de revenus** annuels
  - → Une grande partie est reversée à Ethereum sous forme de frais
  - → BASE vend aussi des **stablecoins** (USDC natif sur Base)

### Ethereum Blockchain = Pair des Pairs du Marché
- Ethereum "voit" tous les ETH être vendus/achetés
- C'est la **couche de règlement finale** (settlement layer) pour tout l'écosystème L2

---

## 7. Résumé — Points Clés

| Concept | Essentiel |
|---|---|
| Bridge custom | Spécifique à un protocole, plus risqué |
| Bridge canonique | Natif à la blockchain, plus sûr |
| Wrap | Token représentatif d'un actif bloqué sur une autre chaîne |
| L1 | Blockchain de base souveraine (Ethereum, Bitcoin…) |
| Sidechain | Blockchain indépendante connectée à L1, sans héritage de sécurité |
| L2 | Extension de L1, compresse les tx et publie sur L1 → sécurisé |
| Modèle économique L2 | Grossiste de l'espace block — compresse et revend |

---

## Liens vers d'autres fiches
- [[2-3-1_Live-DeFi-Exchanges-Bridge-Interchain]] — Freeze USDC, messagerie inter-chain, hack Wormhole
- [[2-3-3_Sequenceur-L2-Ordre-Transactions]] — Le séquenceur L2 et l'ordre des transactions
- [[MOC-Alyra-DeFi-V2]]
