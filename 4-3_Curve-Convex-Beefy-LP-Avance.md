# 🌊 Curve, Convex & Beefy — LP Avancé sur Stablecoins

**Cours :** Alyra — Semaine 4 · Sessions 4.3.1 / 4.3.2 / 4.3.3  
**MOC :** [[MOC-Alyra-DeFi-V2]]  
**Tags :** #alyra #semaine4 #Curve #Convex #Beefy #LP #stablecoins #yield #AMM #exercice-pratique

---

## 01 — Pourquoi les stablecoins en LP ?

Dans une pool stablecoin (ex. USDT/USDC), la paire est censée rester à 1:1. L'impermanent loss est quasi nul — le risque de prix est éliminé. Ce qu'on capture à la place : les **frais de swap** entre stablecoins, amplifiés par les **récompenses de mining de liquidité**.

Le danger n'est plus le price impact entre les deux actifs, mais la **qualité des stablecoins eux-mêmes**. Si un stablecoin dépeg, la pool se déséquilibre et tu te retrouves avec le moins bon des deux.

> **Phanos Watch** : outil de due diligence sur la qualité et les risques des stablecoins. À consulter avant de choisir une pool — voir [[Pharos-Watch]].

---

## 02 — Architecture Curve Finance

**Curve** est le DEX spécialisé dans les swaps entre actifs de même valeur (stablecoins, ETH/stETH, BTC wrappés). Son AMM StableSwap concentre la liquidité autour du ratio 1:1, ce qui donne un slippage minimal sur ces paires.

### La pool stable : comment ça s'équilibre

```
Pool : USD1 (50%) / USD2 (50%) — état initial équilibré

Si USD1 dépeg → les arbitrageurs l'achètent pas cher dans la pool
→ stock de USD1 s'épuise, stock de USD2 monte
→ pool devient 80% USD2 / 20% USD1
→ les LPs se retrouvent surpondérés en USD2 (le bon stablecoin)
→ mais exposés en mark-to-market à la chute de USD1
```

Règle d'or : ne jamais entrer dans une pool avec un stablecoin dont tu n'as pas analysé le mécanisme.

### Volumes V2 vs Curve

Les volumes DeFi passent encore majoritairement par des AMM V2 (Uniswap V2 forks) pour les paires classiques. Curve domine sur les swaps stablecoins et les paires corrigées.

---

## 03 — Convex Finance : le booster de Curve

**Convex** est construit au-dessus de Curve. Son rôle : maximiser les récompenses CRV pour les LPs sans qu'ils aient besoin de locker du CRV eux-mêmes.

### Mécanisme en 3 étapes

```
1. Tu déposes 2 stablecoins sur Curve
         ↓
2. Curve te donne un LP token (ex. 3CRV, crvUSDT-USDC...)
         ↓
3. Tu déposes ce LP token sur Convex
         ↓
   Convex le stake dans Curve via ses propres veCRV lockés
         ↓
   Tu reçois : frais Curve + récompenses CRV boostées + CVX tokens
```

Convex détient une immense quantité de veCRV (CRV locké), ce qui lui permet d'obtenir le boost maximum pour tous ses déposants. Tu bénéficies du boost collectif sans immobiliser de CRV pendant 4 ans.

> **xLP token** : le token que Convex te donne en échange de ton LP token. Il représente ta part dans le pool Convex et accumule les récompenses.

### Interface pratique
- **Double approve** nécessaire : d'abord approuver Curve pour dépenser tes stables, ensuite approuver Convex pour dépenser ton LP token.
- **Mieux passer par Pharos** (interface simplifiée) si disponible — réduit les étapes et le risque d'erreur.

---

## 04 — Exercice pratique : dépôt sur Convex

### Contexte de l'exercice
- Pool testée : USDT + USDe (ou sonUSD + sUSDe)
- Interface : directement sur Convex.finance
- Gas estimé : ~5$ sur Ethereum mainnet

### Pools observées
- **OUSD / PHUSD** — à analyser (voir devoir ci-dessous)
- **LarraSwap** — 500 USD de test
- **USDT + USDe** — paire Ethena

### Résultat obtenu
- Total Claimable / Total Deposits : **$38.88** après exécution
- Dépôt confirmé ✓

### Points d'attention
1. Vérifier que les deux stablecoins sont de qualité avant d'entrer
2. Le double approve augmente les frais de gas — grouper les opérations si possible
3. Surveiller le ratio pool régulièrement (déséquilibre = signal de risque)

---

## 05 — Beefy Finance : l'autocompounder

**Beefy** est un **yield optimizer** — un bot automatique qui fait ce que tu ferais manuellement mais sans y penser.

### Ce que Beefy fait pour toi

```
Tu déposes 2 tokens dans Beefy
      ↓
Beefy les dépose dans Convex (ou Curve directement)
      ↓
Beefy récolte les rewards CRV périodiquement
      ↓
Beefy revend les CRV et réinvestit le produit dans la pool
      ↓
Ta position grossit en capital (compound automatique)
```

**Beefy = Bot LD = COMPOUND** : c'est exactement ça. Il compound les rendements à ta place.

### APY ≠ APR

| Métrique | Définition | Usage |
|----------|-----------|-------|
| **APR** | Taux annuel sans réinvestissement | Comparaison de base entre protocoles |
| **APY** | Taux avec réinvestissement des intérêts | Rendement réel si tu compoundes |

Beefy affiche l'**APY** parce qu'il compound automatiquement. Un APY de 12% avec compound quotidien correspond à un APR d'environ 11.3%. La différence est faible sur les rendements bas, mais peut être significative sur des APR >30%.

### Fonction ZAP

La fonction **ZAP** permet de déposer un seul token et Beefy se charge de tout : swap vers les bonnes proportions, dépôt dans la pool, stake sur Convex.

**Condition impérative : la pool doit être équilibrée.**
Si la pool est déséquilibrée (ex. 70/30 au lieu de 50/50), le ZAP va swapper dans de mauvaises conditions et tu perds sur le slippage. Toujours vérifier le ratio avant.

- Gas ZAP : ~5$ sur mainnet (mutualisé avec le dépôt)
- Avantage : une seule transaction au lieu de 4–5 étapes manuelles

---

## 06 — Récap : quelle couche utiliser ?

| Objectif | Protocole | Pourquoi |
|----------|-----------|---------|
| Swap stablecoins | **Curve** | Slippage minimal, AMM optimisé |
| LP manuel avec boost | **Convex** | Boost CRV sans locker pendant 4 ans |
| LP automatique sans gestion | **Beefy** | Autocompound, une seule entrée |
| Due diligence sur les stables | **Pharos Watch** | Analyse de risque protocole |

---

## 🔗 Liens connexes

- [[MOC-Alyra-DeFi-V2]]
- [[4-3-4_IA-Claude-Obsidian-Outillage]] — suite : utiliser l'IA pour Curve/Convex
- [[3-3-2_Familles-Stablecoins]] — types de stablecoins et mécanismes
- [[3-4-2_Liquidite-V2-V3]] — comparaison V2 vs V3
- [[3-5-2_AMM-xyk]] — formule AMM de base
- [[Pharos-Watch]] — outil d'analyse des stablecoins
- [[S4-CDP]] — création monétaire et stablecoins CDP (DAI, crvUSD, GHO)
- [[Ethena]] — USDe, un des stablecoins utilisés dans les pools

---

## ❓ Devoirs & À approfondir

- [ ] **Analyser le risque OUSD + panVSD** : mécanisme, risques de dépegging, composition des réserves
- [ ] **Créer un template ChatGPT + Claude pour analyse de pool** : inputs (paire, TVL, APY, ratio, audits), outputs (synthèse de risque + recommandation)
- [ ] Vérifier les ratios des pools avant tout nouveau dépôt (Curve → Pool Stats)
- [ ] Comprendre la différence Convex direct vs Beefy sur la fiscalité (compound = événement taxable ?)
