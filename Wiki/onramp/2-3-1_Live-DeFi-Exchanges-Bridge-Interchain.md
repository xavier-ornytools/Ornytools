# 2-3-1 — Live DeFi : Exchanges Non-Custodial, USDC Freeze & Bridges Inter-Chain

> **Source** : Live DeFi — Pascal Tallavde — Questions / Réponses
> **Semaine 2 · Jour 3 · Page 1**
> **Tags** : #defi #exchange #non-custodial #bridge #USDC #interchain #sécurité

---

## 1. Exchanges Non-Custodial — Définition & Enjeux

Un **exchange non-custodial** est une plateforme d'échange de crypto où **l'utilisateur garde le contrôle de ses clés privées** à tout moment. Contrairement à un exchange centralisé (CEX) comme Binance ou Coinbase, personne d'autre ne détient tes fonds à ta place.

### Pourquoi utiliser un exchange non-custodial ?
- **Souveraineté totale** sur tes actifs : pas de risque de faillite de plateforme (cf. FTX 2022)
- **Pas de KYC obligatoire** selon les protocoles
- **Résistance à la censure** : personne ne peut bloquer ton accès

### Exemples cités & points d'attention

| Exchange | Type | Remarque |
|---|---|---|
| **Changelly** | Non-custodial | Fees élevés — à surveiller avant chaque swap |
| **Exodus** | Wallet + swap intégré | Fees potentiellement élevés aussi |

> ⚠️ **Sécurité numérique** : sur ces plateformes, **ne jamais divulguer son identité** au-delà du strict nécessaire. Risque d'être "panaméen" — c'est-à-dire exposé dans des leaks de données (allusion aux Panama Papers : fuites massives d'identités liées à des structures offshore).

---

## 2. Geler (Freeze) des USDC sur un Wallet Non-Custodial — Est-ce Possible ?

### Oui — et c'est un point critique souvent mal compris.

Même si tu détiens des USDC dans un **wallet non-custodial** (MetaMask, Ledger, etc.), **Circle (l'émetteur de l'USDC) conserve un droit de freeze** sur les tokens.

### Mécanisme du Freeze
- L'USDC est un **stablecoin centralisé** : Circle peut inscrire une adresse sur une **blacklist**
- Une fois blacklistée, **aucun validateur ne va valider tes transactions** impliquant ces USDC
- Résultat : tes fonds sont techniquement dans ton wallet, mais **totalement inutilisables**

### Pourquoi Circle peut-il faire ça ?
- Conformité réglementaire (OFAC, sanctions internationales)
- Lutte contre le blanchiment (AML)
- Décision judiciaire ou pression gouvernementale

> 💡 **Alternative décentralisée** : DAI (MakerDAO) ou LUSD (Liquity) ne peuvent pas être freezés car ils sont gouvernés par des smart contracts sans autorité centrale.

---

## 3. Les Bridges — Pont de Vulnérabilité

### Définition
Un **bridge** (pont) est un protocole permettant de **transférer des actifs d'une blockchain à une autre**. Il "connecte" deux chaînes indépendantes.

**Schéma de fonctionnement :**
```
[Blockchain 1]  ──bridge──►  [Blockchain 2]
   (Chain 1)   messagerie      (Chain 2)
               inter-chain
```

### Les 2 étapes d'un transfert via bridge

**Étape 1 — Le token est "mis en attente" sur la Chain 1 (lock/burn)**
- Le token original est **bloqué** dans un smart contract sur la chaîne source
- Ou il est **brûlé** (burn) selon le modèle du bridge

**Étape 2 — Passage par un Wrap / Tokenisation sur la Chain 2**
- Un **token wrappé** est émis sur la blockchain de destination
- Ex : passer du BTC natif vers Ethereum → on obtient du **WBTC** (Wrapped BTC)
- Ce WBTC est un token ERC-20 qui *représente* 1 BTC, mais n'est pas du BTC natif
- C'est ce qu'on appelle la **tokenisation inter-chain**

---

## 4. Messagerie Inter-Chain — Principal Point de Vulnérabilité

### Pourquoi les bridges sont dangereux ?

La communication entre deux blockchains passe par un **système de messagerie inter-chain**. C'est là que se concentrent les risques.

> ⚠️ **Le message inter-chain = point de vulnérabilité / hack**

### Exemple historique : Hack Layer 0 (Wormhole / Ronin)
- **Wormhole (2022)** : hack de **320M$** — exploitation d'une faille dans la validation des messages entre Solana et Ethereum
- Le hack a exploité le fait que **1 seule validation suffisait** (au lieu de plusieurs) pour forcer le bridge à émettre des tokens sans que le collatéral correspondant soit réellement bloqué
- Résultat : création de tokens ex-nihilo, fonds volés

### Pourquoi c'est structurellement risqué ?
- Le bridge doit **faire confiance à un message externe** pour déclencher une action on-chain
- Si ce message est falsifié ou si la validation est contournée → fonds perdus
- Plus le bridge est utilisé, plus le TVL (Total Value Locked) est élevé → cible attractive

### Les 2 familles de bridges (voir fiche 2-3-2)
- **Bridge custom** : développé spécifiquement pour un protocole
- **Bridge canonique** (blockchain natif / multi-chain) : intégré directement dans la blockchain

---

## 5. Résumé — Points Clés à Retenir

| Concept | Essentiel |
|---|---|
| Exchange non-custodial | Tu gardes tes clés, mais fees parfois élevés |
| USDC freeze | Possible même en non-custodial — Circle a un droit de blacklist |
| Bridge | Transfert inter-chain via wrap/tokenisation |
| Messagerie inter-chain | Principal vecteur de hack (ex: Wormhole 320M$) |
| Sécurité numérique | Ne jamais divulguer son identité sur ces plateformes |

---

## Liens vers d'autres fiches
- [[2-3-2_Bridges-Wrap-Layer2-Sidechain]] — Les 2 familles de bridges, L2 vs Sidechain
- [[MOC-Alyra-DeFi-V2]]
