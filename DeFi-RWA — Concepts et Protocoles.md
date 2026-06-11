---
tags:
  - concept
  - protocole
  - defi
  - rwa
created: 2026-05-29
---
  
# DeFi-RWA — Concepts et Protocoles

MOC : [[MOC-Alyra-DeFi-V2]]

> Fiche de synthèse. Les six premiers blocs sont des **concepts** (intemporels), les six suivants des **protocoles** (orientés RWA). Chaque bloc se termine par ses liens, qui densifient le graphe.

---

## Concepts

### Liquidity Pool
Réserve de deux tokens (ou plus) bloqués dans un smart contract, qui sert de contrepartie **automatique** aux échanges sur un DEX. À la place d'un carnet d'ordres, le prix résulte d'une formule mathématique (souvent le produit constant `x·y = k`). Les fournisseurs de liquidité (LP) déposent une paire et touchent une part des frais de swap, en assumant le risque d'impermanent loss.
**Reliée à :** [[Automated Market Maker]] · [[DEX]] · [[Impermanent Loss]] · [[Slippage]] · [[Yield]] · [[MEV]]

### MEV (Maximal Extractable Value)
Valeur maximale qu'un validateur ou un *searcher* peut extraire en **réordonnant, insérant ou censurant** des transactions dans un bloc, au-delà des récompenses et frais normaux. Se manifeste par le front-running, le back-running et les *sandwich attacks*, surtout autour des DEX et des pools de liquidité. C'est une « taxe invisible » sur l'activité on-chain.
**Reliée à :** [[Liquidity Pool]] · [[DEX]] · [[Proof of Stake]] · [[Gas]] · [[Smart Contract]]

### Nothing at Stake
Faille **théorique** du Proof of Stake : lors d'un fork, un validateur n'a aucun coût à valider *toutes* les chaînes concurrentes en même temps (contrairement au Proof of Work, où miner consomme de l'électricité). Sans sanction, il aurait intérêt à parier sur tous les forks, ce qui empêcherait le consensus. Résolu en pratique par le **slashing** (confiscation d'une partie du stake en cas de double-signature).
**Reliée à :** [[Proof of Stake]] · [[Slashing]] · [[Staking]] · [[Consensus]] · [[Fork]]

### Block Explorer
Interface web qui rend lisible le contenu d'une blockchain : transactions, adresses, soldes, blocs, smart contracts et frais de gas. Référence : Etherscan. C'est l'outil de base pour vérifier qu'une transaction est passée, auditer une adresse ou lire un contrat.
**Reliée à :** [[Etherscan]] · [[Transaction]] · [[Smart Contract]] · [[Gas]] · [[Adresse]]

### RWA (Real World Assets)
Actifs du monde réel — bons du Trésor, obligations, actions, immobilier, crédit privé, matières premières — représentés **on-chain** sous forme de tokens. L'objectif : amener les rendements et la valeur de la finance traditionnelle dans la DeFi, avec transparence et composabilité. Secteur en forte croissance, souvent encadré par du KYC. C'est le **thème central** qui relie les protocoles ci-dessous.
**Reliée à :** [[Centrifuge]] · [[Mountain Protocol]] · [[Backed Finance]] · [[Propy]] · [[Chainlink]] · [[Tokenisation]] · [[Stablecoin]]

### Private Key
Nombre secret qui prouve la propriété d'une adresse et autorise la **signature** des transactions. Qui détient la clé privée contrôle les fonds : *not your keys, not your coins*. Elle est dérivée d'une seed phrase, ne se partage jamais ; la clé publique et l'adresse en découlent (fonction à sens unique).
**Reliée à :** [[Wallet]] · [[Seed Phrase]] · [[Public Key]] · [[Self-custody]] · [[Signature]]

---

## Protocoles

### Centrifuge
Protocole pionnier (2017) de **tokenisation d'actifs réels** : crédit structuré, factures, immobilier, T-bills. Les pools sont découpés en tranches **DROP** (senior, moins risquée) et **TIN** (junior), historiquement via Tinlake ; le token **CFG** sert à la gouvernance. Centrifuge V3 (2025) est multichain (Ethereum, Base, Arbitrum, Avalanche, BNB).
**Reliée à :** [[RWA]] · [[Tinlake]] · [[Private Credit]] · [[Tokenisation]] · [[Aave]]

### Mountain Protocol
Émetteur de **USDM**, stablecoin *yield-bearing* adossé à des bons du Trésor US court terme (régulé aux Bermudes), qui reversait le rendement aux porteurs via un **rebase quotidien**.
⚠️ **Mise à jour — 12 mai 2025 :** dans le cadre de son rachat par **Anchorage Digital** (banque crypto à charte fédérale US), Mountain a **arrêté le mint de USDM le 12 mai 2025** et lancé un *wind-down* ordonné. Les récompenses ont tourné encore 30 jours, puis l'APY est tombé à **0 %** ; les ~10 800 porteurs sont invités à racheter (*redemption*) sur la plateforme ou à swapper sur les marchés. Le rachat reste soumis aux conditions de clôture et à l'aval réglementaire ; doc de wind-down publiée en **août 2025**.
→ À garder comme **cas d'étude** (cycle de vie d'un stablecoin RWA + poids de la réglementation), pas comme protocole où déposer aujourd'hui.
**Reliée à :** [[RWA]] · [[Stablecoin]] · [[Yield]] · [[T-Bills]] · [[Anchorage Digital]]

### Backed Finance
Émetteur **suisse** de **bTokens** : des valeurs mobilières tokenisées (actions, ETF, obligations) qui répliquent des actifs réels, sous le droit DLT suisse. Produit phare **bIB01** (ETF de T-bills court terme) ; s'appuie sur Chainlink (price feeds, Proof of Reserve). Réservé aux non-US, après KYC.
**Reliée à :** [[RWA]] · [[Tokenisation]] · [[Chainlink]] · [[Stablecoin]] · [[xStocks]]

### Propy
Protocole RWA centré sur l'**immobilier** : transactions de biens on-chain, titres de propriété et séquestre (*escrow*), tokenisation via NFT (PropyKeys). Token **PRO**. Fondé en 2017, partenariats avec Chainlink ; vise un « guichet unique » title + escrow aux US.
**Reliée à :** [[RWA]] · [[Immobilier]] · [[NFT]] · [[Smart Contract]] · [[Chainlink]]

### Chainlink
Réseau d'**oracles** décentralisés : il amène des données off-chain (prix, réserves, événements) vers les smart contracts de façon fiable. Brique critique de la DeFi et des RWA. Produits clés : price feeds, **Proof of Reserve** et **CCIP** (interopérabilité cross-chain). Token **LINK**.
**Reliée à :** [[Oracle]] · [[RWA]] · [[CCIP]] · [[Smart Contract]] · [[Backed Finance]]

### Equito
Protocole de **messagerie cross-chain** (Equito Network) : il fait communiquer des blockchains entre elles, quasi en temps réel, via un réseau de nœuds tiers (routers, verifiers, workers) sans intermédiaire centralisé. Permet le transfert d'actifs tokenisés entre chaînes. À comparer au **CCIP** de [[Chainlink]].
**Reliée à :** [[Cross-chain]] · [[Interopérabilité]] · [[Bridge]] · [[Chainlink]] · [[Message cross-chain]]
