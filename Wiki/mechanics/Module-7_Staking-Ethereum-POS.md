# Staking Ethereum — Proof of Stake
**Module 7 | Semaine 1 Alyra**
Tags: #alyra #ethereum #POS #staking #validateur

---

## POW vs POS

| | [[Proof-of-Work]] (Bitcoin) | [[Proof-of-Stake]] (Ethereum) |
|--|--|--|
| Acteur | Mineur | Validateur |
| Mise en jeu | Puissance de calcul | Capital financier (ETH) |
| Proposer un bloc | Nécessite du hashrate | Lotterie |
| Validation | Pas de validation spécifique | Attestation des autres validateurs |

---

## Timeline du passage en POS

- **Déc 2020** → Lancement de la [[Beacon Chain]] (blockchain temporaire POS)
- **Sept 2022** → [[The Merge]] : fusion avec Ethereum → POS définitif

---

## Fonctionnement du POS

> Pour créer un bloc : bloquer du capital → être tiré au sort

- Tirage au sort **linéaire** : 10% du capital staké = 10% de chances
- **1 validateur = 32 ETH minimum** (max 2048 ETH depuis Pectra 2025)
- Nouveau bloc toutes les **12 secondes** (= 1 slot)
- **1 Epoch = 32 slots = ~6min24**

### Résolution des conflits → [[LMD Ghost]]
- Les validateurs non-proposeurs **attestent** le bon bloc
- Le bloc avec le plus d'attestations = bloc **canonique**
- 1 validateur = 1 attestation

### Finalité → [[Casper FFG]]
- 66% des validateurs doivent attester pour **justifier** une epoch
- Deux epochs justifiées consécutives → epoch **finalisée** = **irréversible**

---

## Chiffres clés

- ~35,9 millions ETH stakés
- ~1,1 million de validateurs (mais ~5000-10000 nœuds réels)
- **Lido** = 28,6% du staking total ⚠️ risque de centralisation

---

## Récompenses du validateur

**2 types de récompenses :**

1. **Attestations** (continue) → new ETH
   - Vote LMD-Ghost
   - Vote Casper FFG (2 votes)

2. **Proposition de blocs** (aléatoire) → new ETH + Execution Layer rewards (frais priorité + [[MEV]])

→ À 500 000 validateurs : **~1,3 ETH/an** pour 32 ETH stakés

---

## Sanctions

### Pénalités (les plus fréquentes)
- Attestation absente/en retard/incorrecte
- 1 jour d'absence = 1 jour de présence pour récupérer
- Présent +43% du temps → en bénéfice

### [[Slashing]] (grave)
- Proposer 2 blocs dans le même slot
- Attester 2 blocs différents dans la même epoch ([[Nothing-at-stake attack]])
- Perte initiale : 1/32e des ETH → exclu 36 jours
- Slashing de corrélation (18j après) : jusqu'à 32 ETH de perte !

### [[Inactivity Leak]]
- Si la Beacon Chain ne finalise pas pendant 4 epochs
- Pénalité croissante pour les hors-ligne
- Éjection si < 16,75 ETH
- Durée max : **3 semaines** pour retrouver la finalité

---

## Les 4 types de staking

| Type | Capital requis | Garde des clés | Décentralisation |
|------|---------------|----------------|-----------------|
| **Solo home staker** | 32 ETH min | Self-custody ✅ | Maximum ✅ |
| **Staking as a service** | 32 ETH min | Signing key partagée | Moyenne |
| **Pooled staking** (LST) | Dès 1 Wei | Non | Risque centralisation ⚠️ |
| **CEX** | Dès 1 Wei | Aucune ❌ | Minimum ❌ |

### Pooled staking — LST principaux
- [[Lido]] → stETH (28,6% du marché)
- [[RocketPool]] → rETH
- Swell → swETH
- Ether.finance → eETH
- Renzo → ezETH

### CEX staking
- Coinbase → cbETH
- Binance → bETH
- Kraken → swETH

---

## Outils pour explorer la Beacon Chain
- https://beaconcha.in/
- https://beaconscan.com/

---

## Liens
- [[Proof-of-Stake]]
- [[Proof-of-Work]]
- [[Beacon Chain]]
- [[The Merge]]
- [[LMD-Ghost]]
- [[Casper-FFG]]
- [[Slashing]]
- [[Inactivity-Leak]]
- [[MEV]]
- [[Lido]]
- [[Liquidite]]
- [[DeFi]]
- [[1-2-5_Le-Web]]
