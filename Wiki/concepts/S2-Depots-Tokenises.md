# 🪙 Les Dépôts Tokénisés
**Semaine 2 · Actifs tokenisés**
Tags: #alyra #semaine2 #defi #staking #LSD

---

## 🎯 Objectifs du cours
- Connaître les différents modèles de tokénisation des dépôts
- Comprendre les risques liés à la tokénisation des dépôts
- Comprendre les enjeux et risques du Liquid Staking
- Être capable de tokéniser un dépôt en staking

---

## 01 — Les Dépôts Tokénisés

> Lorsqu'on dépose des tokens dans un protocole, on reçoit une **« preuve de dépôt »** sous forme de token = tokénisation des dépôts.

### Exemple avec [[Aave]]
1. L'utilisateur dépose des **USDC** sur Aave
2. Il reçoit des **aUSDC** en échange
3. Les aUSDC = représentation du dépôt (les USDC sont le [[Collatéral]])
4. Pour récupérer ses USDC + rendement → il renvoie les aUSDC → ils sont **brûlés** 🔥

### Les deux modèles

| Modèle | Nom | Utilisé par | Mécanisme |
|--------|-----|-------------|-----------|
| **a-token** | Rebasing | [[Aave]] | 1 USDC = 1 aUSDC toujours — le nombre de tokens augmente |
| **c-token** | Taux de change variable | Compound | 1 USDC = x cUSDC — le taux s'apprécie, pas la quantité |

> Le taux USDC/cUSDC ne fait que monter = la valeur des cUSDC s'apprécie en USDC

### Avantages
- Rendre les tokens stakés **liquides**
- Rendre les tokens stakés **transférables**
- **Composabilité** → les utiliser ailleurs dans la [[DeFi]]
- On peut les acheter/vendre au lieu de mint/redeem
- Envoyer le token = transférer la propriété du dépôt

---

## 02 — Le Liquid Staking (LSD)

### Rappels [[Ethereum]] / [[Proof-of-Stake]]
- Les validateurs sécurisent le réseau en mettant en jeu leurs ETH
- Ils peuvent perdre des ETH via le **[[Slashing]]** s'ils sont malintentionnés
- Il faut **32 ETH** pour être validateur solo + faire tourner son nœud
- Alternative : rejoindre une pool → [[Lido]], [[RocketPool]]

### Qu'est-ce qu'un LSD ?
> **LSD** (Liquid Staking Derivatives) = tokens représentant des ETH stakés dans des protocoles PoS

```
ETH → Stake → xETH (LSD)
xETH → réutilisable dans la DeFi → rendement supplémentaire
```

- Des dizaines de plateformes existent (non-custodial, décentralisé, CEX)
- Chaque plateforme a son propre LSD → mintable ou achetable sur marchés secondaires

### Retraits
- Chaque protocole a des solutions : ETH en transit, récompenses non distribuées, pools de [[Liquidité]]
- Les **marchés secondaires** ([[Marché-secondaire]]) permettent de retirer immédiatement sans attendre

### Risques LSD
- Smart contract → voir [[Smart-Contracts]]
- [[Slashing]]
- Centralisation / Concentration
- Prix du LSD si vente sur marchés secondaires

---

## 03 — [[Lido]]

> Protocole de Liquid Staking **non-custodial** qui délègue les ETH à un réseau de validateurs partenaires professionnels

### Chiffres clés
- **~75% de part de marché** des LSD
- **~32% de tous les ETH stakés**
- ⚠️ Controverse : mouvement "anti-Lido" car une entité à 33% des stakes peut altérer le réseau
- Réponse : Lido est non-custodial, les validateurs ont intérêt à ne pas tricher (théorie des jeux + slashing)

### Business model
- **10% des récompenses** répartis entre la DAO et les validateurs
- Token **LDO** = gouvernance (voter sur paramètres, validateurs...)
- La DAO récupère une partie des commissions → LDO peut donner droit sur la trésorerie

### Les deux LSD de Lido

| Token | Modèle | Mécanisme |
|-------|--------|-----------|
| **stETH** | a-token | 1 ETH = 1 stETH — le nombre augmente avec les revenus |
| **wstETH** | c-token | 1 stETH = x wstETH — le nombre de wstETH reste fixe, le taux s'apprécie |

---

## 04 — [[RocketPool]]

### Les 3 modes de staking

| Mode | Description |
|------|-------------|
| **Staking illiquide** | 32 ETH, 100% des coûts, nœud solo |
| **Staking liquide** | Moins de 32 ETH, pool mutualisée |
| **Node staking** | RocketPool + Dappnode = participer à la décentralisation |

> Node staking RocketPool = participer activement à la décentralisation d'Ethereum

---

## 05 — Le Liquid Restaking (LRT)

### Rappel Restaking
> Le restaking consiste à sécuriser d'autres protocoles avec les **mêmes validateurs et le même stake**

```
Ethereum (32 ETH validateur)
├── Sécurise Ethereum
├── Sécurise Séquenceur L2
├── Sécurise Bridge cross-chain
└── Sécurise Oracle
```

### LRT = tokénisation du restaking
> Comme l'ETH staké peut être tokenisé en LSD, le restaking dans **EigenLayer** peut être tokenisé en **LRT** (Liquid Restaking Derivatives)

### Protocoles LRT

| Protocole | Token | Modèle | Accepte |
|-----------|-------|--------|---------|
| **Ether.fi** | eETH / weETH | a-model + c-model | ETH uniquement |
| **Swell** | swETH | c-model | ETH uniquement |
| **Kelp DAO** | rsETH | c-model | LST uniquement |

### Avantages LRT
- Liquidité et collatéral
- Protection anti-slashing
- Liste blanche de services/validateurs pour limiter les risques
- Rendement : récompenses restaking + récompenses protocoles LRT

### Airdrop EigenLayer
> EigenLayer n'a pas encore de tokens → beaucoup d'utilisateurs rejoignent les LRT pour espérer un **"dual airdrop"** : airdrop EigenLayer + airdrop du protocole LRT

### Risques LRT
- Mêmes risques que les LST
- Slashing malgré les protections

---

## 🔗 Liens
- [[Aave]] — exemple de dépôt tokenisé (aUSDC)
- [[Lido]] — leader LSD (stETH / wstETH)
- [[RocketPool]] — LSD décentralisé (rETH)
- [[Proof-of-Stake]] — mécanisme sous-jacent
- [[Slashing]] — risque validateur
- [[DeFi]] — composabilité des dépôts tokenisés
- [[Liquidité]] — marchés secondaires LSD
- [[Smart-Contracts]] — risque principal
- [[Ethereum]] — réseau de base
- [[Marché-secondaire]] — achat/vente de LSD
- [[Collatéral]] — les dépôts sont le collatéral des tokens reçus
- [[S2-Tokenisation-actifs]] — contexte du cours
