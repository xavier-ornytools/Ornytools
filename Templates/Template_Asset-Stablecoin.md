---
type: template
usage: analyse d'un actif DeFi — stablecoin, LST, LRT, RWA, vault-token
tags: [template, asset, stablecoin, analyse]
---

# {{title}}

> Règle : ne jamais laisser une section vide. Si l'info n'est pas dans les sources, écrire `à rechercher`.

---

## Bloc 1 — Identité

### Définition
- **Définition** *(1 à 2 phrases)* : à rechercher

### Famille d'actif
- **Famille** (LST / LRT / PT-YT / stablecoin / RWA / wrapped / vault-token) : à rechercher
- **Ce que la famille implique** : à rechercher

### Fonction économique
- **À quoi il sert économiquement** : à rechercher
- **Quel besoin il adresse** : à rechercher

### Backing / Exposition
- **Qu'est-ce qui back l'actif** (collatéral, réserve, sous-jacent) : à rechercher
- **Réhypothécation / effet de levier caché** (le collatéral est-il réutilisé ailleurs ?) : à rechercher
- **Sur/sous-collatéralisation, ratio** : à rechercher

---

## Bloc 2 — Marché & liquidité

### Mécanisme d'émission / rédemption
- **Émission** (process de mint, qui peut mint) : à rechercher
- **Rédemption** (qui peut redeem, primary redemption ou market exit only) : à rechercher
- **KYC requis** : à rechercher
- **Permissioned / permissionless** : à rechercher
- **Cooldown · file d'attente · instant vs delayed** : à rechercher
- **Frais & minimum size** : à rechercher

### Market structure (marché secondaire)
- **Main liquidity venues** (DEX + CEX) : à rechercher
- **Main liquidity pairs** (USDC, ETH, BTC…) : à rechercher
- **Liquidity concentration** (1 pool ? multi-chain ? CEX dominant ?) : à rechercher
- **Liquidity risks** (profondeur, dépendance incentives, LP concentration, migration) : à rechercher

### Price / peg mechanism
- **Mécanisme de prix / peg** (arbitrage / redemption / oracle / AMM / NAV-based / auction / secondary-only) : à rechercher

---

## Bloc 3 — Architecture & dépendances

### Multi-chain / On-chain footprint
- **Modèle** (native-mint / bridged / wrapped / canonical) : à rechercher
- **Chaîne(s) d'origine + mécanisme cross-chain** (bridge officiel, LayerZero OFT, CCIP…) : à rechercher
- **Main chains · TVL · holders · daily volume · velocity · concentration** : à rechercher

### Contract architecture
- **Core contracts** (token, vault, oracle, redemption) : à rechercher
- **Upgradeability · proxy pattern** : à rechercher
- **Audit status · bug bounty** : à rechercher

### Key dependencies
- **Infrastructure** (Chainlink, LayerZero, Wormhole…) : à rechercher
- **Custody** (Coinbase, Fireblocks, Anchorage…) : à rechercher
- **Issuer** (Circle, BlackRock, Securitize…) : à rechercher
- **Critical protocols** (Aave, Curve, Morpho…) : à rechercher

---

## Bloc 4 — Contrôle & risque

### Centralization / Governance profile
- **Mint control** (centralized / DAO / permissionless) + qui peut mint/burn : à rechercher
- **Freeze / blacklist** (yes/no) : à rechercher
- **Upgradeability** (upgradeable contracts ? timelock ?) : à rechercher
- **Multisig** (2/3, 4/7, Safe ?) : à rechercher
- **Custodial dependencies** (bank, custodian, off-chain assets) : à rechercher

### Regulatory profile
- **Issuer jurisdiction · MiCA compliant ?** : à rechercher
- **Securities exposure ? accredited investors only ?** : à rechercher
- **Transfer restrictions · KYC · bankruptcy exposure** : à rechercher

### Profil de risque + Failure scenarios
- **Risques** (depeg, slashing, liquidité, contrepartie, SC, oracle, régulation) : à rechercher
- **Failure scenarios** (custodian failure, oracle attack, liquidity crisis, governance attack, SC exploit, depeg, regulatory shutdown) : à rechercher
- **Incidents passés** : [[...]] *(lier vers WIKI/Hacks)* ou à rechercher

### Reflexivity
- **Boucles réflexives** (looping / yield amplification / governance incentives / liquidity mining dependence / peg reflexivity) : à rechercher

---

## Bloc 5 — Rendement & usage

### Yield profile + sustainability
- **Yield source** (real yield / inflation / borrow demand / funding / staking / t-bills) : à rechercher
- **Sustainability** (sustainable / incentivized / temporary / reflexive) : à rechercher
- **Risk of yield compression** (oui/non) : à rechercher

### Ecosystem integration
- **Used as collateral on** (Aave, Morpho…) : à rechercher
- **Integrated in** (Pendle, Curve, Balancer…) : à rechercher
- **Used by** (institutions, DAOs, market makers) : à rechercher

### Cas d'usage typiques
- **Cas d'usage typiques** (collatéral / looping / yield / hedging…) : à rechercher

### Métriques clés
- **Métriques clés** (supply / peg / ratio collatéral / APY — chiffres on-chain en Bloc 3) : à rechercher

---

## Spécifique Stablecoin

### Mécanisme de peg (détaillé)
- **Type** (fiat-backed / CDP / algo) : à rechercher
- **Comment le peg tient** : à rechercher
- **Bandes d'arbitrage** : à rechercher

### Réserves
- **Composition** (cash / T-bills / crypto) : à rechercher
- **Ratio de collatéralisation** : à rechercher
- **Lieu de garde** : à rechercher

### Attestation / audit des réserves
- **Qui atteste** : à rechercher
- **Fréquence** : à rechercher
- **Dernier rapport** : à rechercher

### Historique de peg / depeg
- **Épisodes de depeg** (ampleur / durée / résolution) : à rechercher

---

## Bloc 6 — Contexte

### Actifs comparables
- **Actifs proches** : à rechercher
- **En quoi celui-ci diffère** : à rechercher

### Événements / Historique
*(chronologique inverse)*
- **{{date}}** — à rechercher

### Mécaniques liées · Protocoles liés
- **Mécaniques** : [[...]]
- **Protocoles** : [[...]]

### Liens & Sources
- **Site officiel** : à rechercher
- **Docs** : à rechercher
- **DefiLlama** : à rechercher
- **CoinGecko** : à rechercher
- **Sources** : [[...]]
