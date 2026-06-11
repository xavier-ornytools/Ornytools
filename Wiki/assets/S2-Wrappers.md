# 🎁 Les Wrappers
**Semaine 2 · Actifs tokenisés**
Tags: #alyra #semaine2 #defi #wrapper #bridge

---

## 🎯 Objectifs du cours
- Connaître les différents cas d'utilisation des wrappers
- Comprendre les risques liés au wrapping

---

## Définition

> **Wrap / Wrapper** = tokenisation d'une cryptomonnaie

Deux cas d'usage principaux :
1. **Nouvelles fonctionnalités** → ex: stETH → wstETH (a-token → c-token)
2. **Transfer cross-chain** → représentation d'un token sur une autre blockchain

---

## 01 — Le Wrap Cross-Chain

### Principe
> Le token original est **bloqué** sur la blockchain de départ, et un token wrappé est **émis** sur la blockchain de destination

```
Bitcoin (BTC natif)
    ↓ envoi au Custodian (BitGo)
Custodian bloque le BTC
    ↓ émet
WBTC sur Ethereum (ERC20)
```

### Exemple WBTC — le plus connu
- **BTC** bloqué sur Bitcoin via un [[Custodian]] (BitGo)
- **WBTC** émis sur [[Ethereum]] → token [[ERC20]]
- Le BTC collatéralise le WBTC (1:1)
- **Proof of Assets** vérifiable on-chain à tout moment

### Comment obtenir du WBTC ?
- Envoyer des BTC à des **vendeurs agréés** → mint de WBTC
- Acheter directement sur les **DEX** ou **CEX**

### Exemple Bridge Polygon
```
Utilisateur → envoie WBTC
    ↓
Bridge (côté Ethereum) → bloque le WBTC 🔒
    ↓
Minter (côté Polygon POS) → émet version wrappée
    ↓
Utilisateur reçoit WBTC wrappé sur Polygon
```

Outils de bridge : **Polygon Portal**, **Arbitrum Bridge**, **Portal (Wormhole)**

### Token natif vs Token wrappé sur la même chain
> Il peut coexister un token wrappé ET un token natif sur la même blockchain

Exemple sur [[Arbitrum]] et Polygon :
- **USDC.e** → version wrappée (bridgée par Polygon/Arbitrum)
- **USDC** → version native déployée directement par Circle

---

## 02 — Le Cas du WETH

### Rappel : tokens et standards
> Les tokens sont des [[Smart-Contracts]], donc du code. Il existe plusieurs standards — le plus répandu est le **[[ERC20]]**.

### Pourquoi le WETH existe-t-il ?
> L'ETH est le **coin natif** d'Ethereum — il n'est PAS un token ERC20 par défaut

Problème : les protocoles DeFi utilisent le standard ERC20 → l'ETH natif n'est pas directement compatible.

Solution : **WETH** (Wrapped ETH)
- Token ERC20 qui "enveloppe" l'ETH natif
- 1 ETH = 1 WETH (toujours, taux fixe)
- Permet d'utiliser l'ETH dans tous les protocoles DeFi

```
ETH natif → Wrap → WETH (ERC20)
WETH → Unwrap → ETH natif
(opération sans frais sauf gas)
```

### Utilisation concrète
- Sur Uniswap : swapper ETH contre un token → le DEX wrap l'ETH automatiquement
- Sur [[Aave]] : déposer de l'ETH → wrappé en WETH en coulisses

---

## ⚠️ Risques du Wrapping

| Risque | Description | Exemple |
|--------|-------------|---------|
| **Centralisation** | Le protocole qui wrap contrôle le token wrappé et le bridge | WBTC dépend de BitGo |
| **Hack du bridge** | Si le bridge est piraté → tokens wrappés non collatéralisés → valeur = 0 | Hack Multichain 126M$ (juillet 2023) |
| **Double wrapping** | Risque de wrapper un token déjà wrappé → confusion | USDC vs USDC.e |

> ⚠️ **Cas réel** : Le bridge Multichain hacké à 126M$ en juillet 2023 — les tokens wrappés ont perdu leur collatéral

---

## Récap — Les types de wrappers

| Type | Exemple | Objectif |
|------|---------|----------|
| Nouvelles fonctionnalités | stETH → wstETH | Passer d'a-token à c-token |
| Cross-chain | BTC → WBTC | Utiliser BTC sur Ethereum |
| Compatibilité standard | ETH → WETH | Rendre ETH compatible ERC20 |
| Bridge L2 | WBTC → WBTC (Polygon) | Utiliser sur L2 moins cher |

---

## 🔗 Liens
- [[WBTC]] — exemple principal de wrapper cross-chain
- [[Ethereum]] — blockchain principale des wrappers
- [[ERC20]] — standard de token utilisé pour les wrappers
- [[Smart-Contracts]] — les tokens/wrappers sont des smart contracts
- [[Custodian]] — garde le collatéral (ex: BitGo pour WBTC)
- [[Collatéral]] — le token original collatéralise le wrapper
- [[Arbitrum]] — exemple de bridge L2
- [[DeFi]] — raison d'être des wrappers (composabilité)
- [[Liquidité]] — les wrappers permettent d'utiliser les actifs dans les pools
- [[S2-Depots-Tokenises]] — cours précédent (stETH → wstETH)
- [[S2-Tokenisation-actifs]] — contexte Semaine 2
