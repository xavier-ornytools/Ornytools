---
tags:
  - alyra
  - cours
  - semaine4
  - oracles
  - chainlink
  - pyth
  - UMA
date: 2026-06-06
source: "Les oracles.pdf — Alyra Promo Blaise Pascal"
---

# Semaine 4 — Les Oracles

---

## Sommaire

1. [[#Rôle d'un oracle]]
2. [[#Modèles économiques]]
3. [[#Oracles off-chain]]
4. [[#Oracles on-chain]]
5. [[#Cas d'utilisation]]
6. [[#Les sans-oracles]]

---

## Rôle d'un oracle

Les blockchains sont **isolées du monde extérieur** : elles ne peuvent accéder qu'aux données déjà présentes on-chain. Un smart contract ne peut pas, par lui-même, aller chercher le prix du BTC ou le résultat d'un match de foot.

Un oracle remplit deux rôles distincts :

**1. Transformer la donnée** — amener une information off-chain vers la blockchain (prix d'un actif, résultat d'un événement, données météo…).

**2. Créer de la confiance** — garantir que la donnée est exacte, non altérée, et continuellement mise à jour. C'est le cœur du problème : n'importe qui peut publier n'importe quoi on-chain. L'oracle doit créer un mécanisme de consensus pour que la donnée soit fiable.

---

## Modèles économiques

### Distribution de la donnée

Les data providers (fournisseurs de données brutes) vendent leurs API aux oracles. Exemples avec leurs tarifs :
- **CurrencyFreaks** — free tier à custom enterprise
- **OANDA** — à partir de 425$/mois
- **TraderMade** — free à £799/mois custom

Deux modèles de distribution existent :

**Distribution indirecte centralisée** : Data provider → Oracle provider (centralisé agrège et distribue) → Smart contracts

**Distribution directe** : Data provider → Oracle → Smart contracts (sans intermédiaire supplémentaire)

Dans les deux cas, des **Node Operators** font tourner les nœuds — un logiciel sur une machine dédiée qui récupère, vérifie et pousse la donnée.

La version décentralisée passe par un groupe de node operators indépendants plutôt qu'une entité centrale.

### Qui paye quoi ?

En théorie : les protocoles paient pour utiliser la donnée on-chain.

En réalité : comme tout est permissionless sur une blockchain, n'importe qui peut lire la donnée une fois qu'elle est publiée. L'équipe derrière l'oracle **sponsorise souvent les flux via son propre token** pour attirer les protocoles. Les frais de gas des transactions de mise à jour sont en général à la charge du protocole qui intègre le flux (modèle push).

---

## Oracles off-chain

Trois approches pour résoudre le problème de confiance.

### Approche unilatérale

Une seule entité de confiance publie la donnée. Trois variantes :
- **Entreprise reconnue** : une grande marque qui met son nom en jeu
- **Entreprise spécialisée** : expert dont c'est le métier
- **Équipe du protocole** : le protocole lui-même gère son oracle

**Exemples :**
- Coinbase Price Oracle (avril 2020)
- Binance Oracle sur BNB Chain (2022)
- API3 — Airnode, oracle "first-party" opéré par le data provider lui-même
- Backed Finance — oracle du prix SPYx/USD pour Morpho

**Risques :** source unique = single point of failure.
> Compound exploit — le prix du DAI a été manipulé sur Coinbase Pro, permettant un emprunt de $89M à un prix erroné.

**Mitigation :** combiner plusieurs sources, monitoring 24/7 (pratique de Binance Oracle), circuit breakers automatiques.

| Avantages | Inconvénients |
|-----------|---------------|
| Facile et rapide à mettre en place | Infrastructure lourde |
| Scalable | Équipe dédiée requise |
| Contrôle total | Single point of failure |

---

### Approche collégiale

Plusieurs entités indépendantes reportent chacune une valeur. Le résultat est la médiane ou moyenne pondérée. Les écarts extrêmes sont exclus.

**Exemple :** Chainlink EUR/USD — 15 nœuds sur 16 répondent. La valeur agrégée est calculée, les outliers sont rejetés. Le calcul peut se faire on-chain ou off-chain selon les implémentations.

**Sécurité des node operators :** Staking + slashing (Chainlink Economics 2.0). Les opérateurs stakent du LINK et le perdent s'ils reportent des valeurs aberrantes. La rémunération vient de l'usage, pas du sponsoring → pas de conflit d'intérêt.

**Risques réels documentés :**
- **Synthetix XAG** (fév 2020) — erreur de prix sur l'argent, utilisateurs arbitrés massivement
- **Chainlink ETH** (13 mars 2020) — retard de 6h sur le flux ETH/USD pendant le crash COVID
- **LUNA exploit** — Chainlink avait mis en pause l'oracle LUNA avant effondrement total. Venus Protocol et Blizz Finance continuaient à utiliser un prix de référence déprécié → liquidations catastrophiques

| Avantages | Inconvénients |
|-----------|---------------|
| Robuste | Infrastructure lourde |
| Décentralisé | Peu scalable |
| Track record solide | Coût élevé |

---

### Approche optimiste

On part du principe que la donnée publiée est correcte. N'importe qui peut contester pendant une fenêtre de temps avant validation définitive.

**Mécanisme (exemple match France 0–3 Brésil) :**

1. Alice publie le score → met en jeu ses tokens (bond)
2. L'information est en attente de validation (délai)
3. Si personne ne conteste → information validée → Alice récupère ses tokens
4. Si Bob conteste (il prétend 0–2) → Bob met en jeu ses tokens
5. Une assemblée de jurés vote → le gagnant remporte les tokens du perdant

**Sécurité du jury :** les membres stakent des tokens. Ceux qui votent avec la majorité sont récompensés (émission). Ceux qui votent contre la majorité, ne votent pas, ou ne stakent pas, sont dilués. Cette mécanique incite à voter honnêtement.

**Risques :** manque de participation, décentralisation insuffisante, Staking TVL < Protocol TVL (un attaquant avec assez de capital peut corrompre le vote).

| Avantages | Inconvénients |
|-----------|---------------|
| Très robuste | Faible fréquence de mise à jour |
| Très scalable | Lent si dispute |
| Peu cher | |

---

## Oracles on-chain

L'oracle on-chain récupère la donnée **déjà présente sur la blockchain** — typiquement le prix d'un actif calculé à partir des transactions dans un AMM (Uniswap, Curve…).

Pas besoin de mécanisme de consensus : la sécurité est identique à celle de la blockchain elle-même.

### TWAP — Time-Weighted Average Price

Pour éviter la manipulation sur un seul bloc, on calcule une moyenne pondérée dans le temps :

```
TWAP = (Prix T-4 + Prix T-3 + Prix T-2 + Prix T-1 + Prix T0) / 5
```

L'attaquant devrait maintenir le prix manipulé pendant plusieurs blocs pour influencer le TWAP, ce qui devient coûteux.

**Limite :** le prix est lissé → moins précis. Acceptable pour certains protocoles, insuffisant pour d'autres (trading de perps).

### Exploits documentés

**bZx (fév 2020)** — attaquant achète tout le sUSD sur Kyber → prix gonflé → emprunte le maximum d'ETH avec sUSD en collatéral → revend → $600k de profit.

**Harvest Finance (26 oct 2020)** — attaquant déprime le prix USDC dans le pool Curve → entre dans le vault Harvest à prix bas → reverse la transaction → sort à prix haut → $33M de pertes utilisateurs.

**Rari Capital Fuse Pool #23** — prix VUSD manipulé sur Uniswap V3 → pool drainée.

**Levana Protocol (27 déc 2023)** — oracle attack, ~10% des LP impactés.

| Avantages | Inconvénients |
|-----------|---------------|
| Scalable | Prix lissé, moins précis |
| Universel | Manipulable en théorie |
| Gratuit | Dépend de la liquidité du pool |

---

## Comparatif des 4 types

| Critère | Unilatéral | Collégial | Optimiste | On-chain |
|---------|-----------|-----------|-----------|----------|
| Mise en place | ★★★★★ | ★★☆☆☆ | ★★★☆☆ | ★★★★☆ |
| Sécurité | ★☆☆☆☆ | ★★★★☆ | ★★★★★ | ★★☆☆☆ |
| Coût | ★★☆☆☆ | ★★★★☆ | ★★☆☆☆ | ★★☆☆☆ |
| Infrastructure | ★★★★☆ | ★★★★☆ | ★☆☆☆☆ | ★☆☆☆☆ |
| Maintenance | ★★★★★ | ★★★★☆ | ★★☆☆☆ | ★☆☆☆☆ |
| Décentralisation | ★☆☆☆☆ | ★★☆☆☆ | ★★★★★ | ★★★★★ |

> **Attention :** tous les oracles, quelle que soit leur approche, restent exposés aux risques de la blockchain elle-même — congestion, arrêt de chaîne, réorgs.

Un type d'oracle n'est pas universellement supérieur : le choix dépend du besoin (fréquence, coût, décentralisation, scalabilité).

---

## Cas d'utilisation

### 1. Flux de prix

Donner le **prix en continu** d'un actif : crypto, floor NFT, actions, obligations, immobilier.

**Principaux fournisseurs :**
- **Pyth Network** — 388 price feeds, toutes chaînes (ETH, Arbitrum, Solana…)
- **Chainlink** — référence du marché, price feeds + Proof of Reserve
- **DIA** — 3000+ tokens, multi-chain
- **API3** — dAPIs, 133 data feeds, premier-party

#### Modèle Push

L'oracle met à jour le prix en publiant des transactions on-chain à fréquence régulière. Le plus répandu.

Deux variantes :
- **Heartbeat (temps)** : mise à jour toutes les X secondes/minutes (ex. toutes les 10 min)
- **Deviation threshold (mouvement)** : mise à jour si le prix bouge de ±X% (ex. ±0.5% ou ±1%)
- **Combinaison** : mise à jour si ±0.5% OU si 10 min se sont écoulées (le plus courant)

Exemple Chainlink réel :

| Chaîne | Paire | Deviation | Heartbeat |
|--------|-------|-----------|-----------|
| Ethereum | AAVE/USD | 1% | 3600s |
| Polygon | AAVE/USD | N/A | 27s |
| BNB Chain | AAVE/USD | 0.2% | 600s |
| Optimism | EUR/USD | 0.1% | 3600s |

**4 limites du modèle push :**

1. **Pas de temps réel** — limité par la vitesse de la blockchain (12s par bloc sur Ethereum)
2. **Coût** — chaque mise à jour = une transaction. Plus on augmente la granularité, plus c'est cher.
3. **Lag** — retard structurel par rapport au vrai prix de marché
   > HypernativeBOT, 15 déc 2023 : Chainlink EUR/USD sur Optimism = 0.2% sous le vrai prix (au-dessus du threshold de 0.1%) → alerte critique
4. **Sécurité** — pour un flux fiable, l'actif doit être très liquide et agréger plusieurs sources. Les délais + mempool créent une **surface d'attaque sandwich**.

Conclusion push → la **granularité coûte cher** et reste imprécise. Cela pousse certains protocoles vers leur propre oracle ou le modèle pull.

> Exemple : **MUX Dark Oracle** — oracle privé qui agrège depuis Binance et d'autres CEX, ne publie pas les prix publiquement → prévient le front-running et élimine le toxic arbitrage.

#### Modèle Pull

L'oracle met à jour le prix **quand on le demande**. Le coût de gas est à la charge du demandeur, pas du protocole.

Les data sources restent off-chain et signent les prix. Quand un utilisateur fait une transaction, il inclut le prix signé dans sa propre tx → la blockchain valide la signature → prix accepté.

Avantage : latence proche de zéro, prix quasi temps réel.

**Exemples de protocoles utilisant le pull :**
- **Synthetix** → Pyth (low-latency, trading de perps haute performance)
- **gTrade** (Gains Network) → custom oracle Chainlink
- **GMX** → Chainlink Low-Latency Oracles (depuis vote communautaire, avr 2023)

#### On-chain (TWAP pour les price feeds)

Mis à jour à chaque bloc. Prix calculé via TWAP sur les données AMM. Utilisé par des protocoles qui créent des isolated pools avec oracle au choix (ex: Rari Capital Fuse — chaque pool creator choisit son propre oracle).

---

### 2. Preuve et audit

**Prouver l'existence** de quelque chose off-chain → Blockchain.

Usage principal : **Proof of Reserve (PoR)** pour les actifs tokenisés (WBTC, stablecoins, RWA).

**Processus :**
```
Émetteur → Auditeur certifié → vérifie les fonds → Blockchain
```

**Chainlink Proof of Reserve sur Ethereum :**

| Feed | Valeur | Ajouté |
|------|--------|--------|
| WBTC PoR | 158,187 BTC | Sep 2021 |
| eFIL Reserves | 126,366 FIL | Nov 2021 |
| CACHE Gold | 12,698.73 g | Avr 2022 |
| GBPT PoR | £1,383,908 | Oct 2022 |
| HBTC PoR | 8,970.81 BTC | Nov 2022 |
| TUSD Reserves | $2.4B | Fév 2023 |

Exemple CACHE Gold : 16/16 nœuds ont répondu, deviation threshold 0.1%, heartbeat 18h52, source = GramChain (Custodian API).

**Limite fondamentale :** le PoR ne prouve que ce que l'auditeur dit. Si l'auditeur ment ou est compromis, la blockchain ne peut pas le détecter.
> CoinDesk, juil 2023 : *"Chainlink Proof of Reserve proves little beyond data going in, coming out"* — TrueUSD et Paxos utilisent Chainlink PoR, mais les chiffres restent difficiles à vérifier indépendamment.

---

### 3. Hasard

Générer des **nombres aléatoires vérifiables** on-chain.

**Utilisateurs :** Casino (BetSwirl: roulette, dés, coin toss), Lotterie (PoolTogether), Jeux vidéo (Aavegotchi), NFT mint (attribution aléatoire de traits).

**Deux limites fondamentales :**

1. **Données publiques** — tout est visible sur la blockchain. Impossible de garder un secret pour plusieurs tours. Usage limité aux jeux à **un seul tirage** (lotterie, mint NFT).

2. **Pas de vrai hasard algorithmique** — tout algorithme produit du **pseudo-hasard** déterministe. Si quelqu'un connaît le seed, il peut prédire le résultat.

**Solution : VRF (Verifiable Random Function)**

Fonction cryptographique qui prend en entrée une paire clé publique/privée + un seed, et produit :
- Un nombre pseudo-aléatoire imprévisible (pour qui ne connaît pas la clé privée)
- Une **preuve** vérifiable par n'importe qui avec la clé publique

Propriétés : Verifiable + Random + Function

**Alternative physique :** Australian National University Quantum Random Numbers API — mesure des fluctuations quantiques du vide électromagnétique → entropie réellement aléatoire. Disponible via API3 Airnode, gratuit (hors gas).

---

### 4. Répondre à une question

Donner une **réponse précise** à une question :
- Quel est le prix d'un actif à un instant T précis ?
- Est-ce qu'un événement a eu lieu ?
- Quel est le résultat d'un événement ?

**Protocoles utilisant ce cas d'usage :**

| Protocole | Type | Usage |
|-----------|------|-------|
| **Kleros** | Optimiste (jury) | Arbitrage décentralisé, 185M PNK stakés, 740 jurés actifs |
| **UMA** | Optimiste | "Decentralized truth machine", $228M TVS |
| **Polymarket** | Optimiste | Marchés de prédiction (politique, sport, élections) |
| **Across** | UMA oracle | Bridge cross-chain sécurisé ($4.2B+ de volume) |
| **UMA oSnap** | Optimiste | Gouvernance off-chain → exécution on-chain |
| **Sherlock** | Optimiste | Compétitions d'audit avant mainnet |
| **Hats Finance** | Optimiste | Bug bounties on-chain |

Mais aussi : produits dérivés avec maturité (Futures, prêts/emprunts à terme).

---

## Les sans-oracles

De plus en plus de protocoles cherchent à **éliminer complètement la dépendance aux oracles**.

Pourquoi ? Parce que chaque oracle introduit une dépendance externe — un vecteur d'attaque, un point de centralisation, un coût.

**Approches oracle-less :**
- Utiliser le prix implicite de la blockchain elle-même (AMM interne)
- Demander aux utilisateurs de proposer un prix (comme dans une enchère)
- S'appuyer sur les mécanismes d'arbitrage naturels pour corriger les prix

**Exemples :**
- **Timeswap** — protocole de prêt oracle-less : les emprunteurs et prêteurs négocient directement un taux et un prix de liquidation. Pas d'oracle → pas de risque de manipulation de prix.
- **Oracleless Lending Protocol sur Uniswap v4** (InstaApp, juil 2023) — utilise les hooks Uniswap v4 pour faire du lending sans oracle.

**Limite :** les protocoles oracle-less sont souvent moins capital-efficient ou plus complexes à utiliser. Trade-off entre sécurité (pas d'oracle) et efficacité (oracle nécessaire pour optimiser le collatéral).

---

## Prochain cours

**Les actifs synthétiques** — comment créer un token qui réplique le comportement d'un actif réel (action, devise, matière première) sans en détenir le sous-jacent.

---

## Liens

- [[Oracle]] ← fiche concept courte
- [[MOC-Alyra-DeFi-V2]] ← index de la formation
- [[Looping-SPYx-Morpho-Blue]] ← stratégie qui dépend de Chainlink (oracle SPYx/USD)
- [[S2-Depots-Tokenises]] ← lien avec Proof of Reserve (WBTC, stETH)
- [[Wiki/mechanics/MEV]] ← surface d'attaque liée aux oracles (sandwich, front-running)
