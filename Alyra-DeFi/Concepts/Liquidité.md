# 💧 Liquidité
Tags: #concept #defi #amm

---

## Définition
La **liquidité** désigne la facilité avec laquelle un actif peut être acheté ou vendu sans impacter significativement son prix.

> Haute liquidité = beaucoup d'acheteurs et vendeurs → prix stable
> Faible liquidité = peu d'acteurs → prix volatile, slippage élevé

---

## Liquidité en DeFi — Les Pools

### AMM (Automated Market Maker)
Les DEX comme Uniswap n'ont pas de carnet d'ordres classique. Ils utilisent des **pools de liquidité** :

```
Pool ETH/USDC
├── 100 ETH
└── 200,000 USDC
→ Prix = 200,000 / 100 = 2,000 USDC/ETH
```

La formule de base : **x × y = k** (Uniswap V2)

---

## Liquidity Provider (LP)

- Un **LP** dépose des actifs dans un pool (ex: ETH + USDC)
- Il reçoit des **LP tokens** représentant sa part du pool
- Il gagne des **frais** sur chaque échange dans le pool
- Risque : **impermanent loss**

---

## Impermanent Loss
> Quand le ratio de prix entre les deux actifs change, le LP perd par rapport à un simple HODLing.

Exemple :
- Tu déposes 1 ETH + 2000 USDC (ETH = 2000$)
- ETH monte à 4000$
- Le pool rééquilibre → tu te retrouves avec moins d'ETH
- Tu aurais gagné plus en gardant simplement tes ETH

---

## Liquidité concentrée (Uniswap V3)
- Les LPs choisissent une **fourchette de prix** pour concentrer leur liquidité
- Rendements plus élevés, mais gestion active requise

---

## Health Rate (Aave)
Sur [[Aave]], le **Health Rate** mesure la sécurité d'une position de prêt :
- HR > 1 = position sûre
- HR < 1 = **liquidation** déclenchée automatiquement

---

## Liens
- [[DeFi]] — la liquidité est le cœur des protocoles DeFi
- [[Ethereum]] — la plupart des pools tournent sur Ethereum
- [[Smart-Contracts]] — les pools sont des smart contracts
- [[Arbitrum]] — pools DeFi moins chères sur L2
- [[Aave]] — lending avec Health Rate basé sur la liquidité
