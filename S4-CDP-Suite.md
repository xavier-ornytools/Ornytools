---
tags:
  - cours
  - alyra
  - semaine4
  - CDP
  - stablecoin
  - liquidation
  - DeFi
---

# S4 — CDP Suite : Approfondissements & Cas Réels

**Formation Alyra · Promo Blaise Pascal · Semaine 4**
Cours précédent : [[S4-CDP]]
Prochain cours : [[S5-Marches-Monetaires]] *(marchés monétaires)*

---

## 01 — Rappels : fonctionnement d'un CDP

Un CDP (Collateral Debt Position) fonctionne comme une ligne de crédit : on dépose un actif dans un vault, le protocole ouvre une ligne de crédit en actif synthétique. La valeur du collatéral doit toujours dépasser la dette.

**Paramètres clés :**
- **LTV** (Loan-To-Value) : pourcentage max empruntable. Ex : LTV 80% sur $30 000 de WBTC = ligne de crédit max $24 000.
- **Utilisation** : pourcentage de la ligne utilisé. À 100% = liquidation déclenchée.
- **CR** (Collateral Ratio) = Valeur Collatéral / Valeur Dette. Descend si le collatéral baisse ou la dette monte.
- **Debt Ceiling** : limite d'emprunt par type de collatéral, fixée par gouvernance.

**Formules de liquidation :**

```
Dette / LTV = prix de liquidation
```
ou

```
Dette × seuil de liquidation = prix de liquidation
```

Le seuil de liquidation est l'inverse du LTV. Ex : LTV 80% → seuil CR 125%.

**Qui supporte le risque de depeg ?** Ceux qui ont *acheté* l'actif synthétique plutôt que de l'emprunter. Si 12 000 DAI valent $11 640 lors d'un depeg, l'emprunteur est indifférent (sa dette est en DAI), mais le détenteur perd.

---

## 02 — Les 4 modèles de liquidation

Quand un vault passe sous le seuil de liquidation, un liquidateur doit rembourser la dette à la place de l'emprunteur et récupère le collatéral + une pénalité.

**Formule de la pénalité :**
```
$Pénalité = Dette × %Pénalité
Exemple : 12 000 × 6% = 720 $
```
Le liquidateur reçoit : $12 000 de collatéral + $720 de pénalité. L'emprunteur récupère le solde restant ($2 280 dans l'exemple).

### Liquidation classique
Un liquidateur externe repaye la dette et reçoit le collatéral + la pénalité. Nécessite des capitaux propres.

### Liquidation mutualisée — Stability Pool (Liquity)
Inventé par **Liquity**. Les déposants de LUSD dans le Stability Pool absorbent collectivement les liquidations et reçoivent le collatéral (ETH) en échange. Plus besoin de liquidateurs individuels avec des capitaux.

Données Dune Liquity (début 2024) :
- APR Stability Pool LUSD : ~4,78%
- APR LQTY Staking : ~3,35%
- Total Collateral Ratio : 417,6%
- Supply LUSD circulante : 95 040 257

### Liquidation via swap (Instadapp)
Introduit par **Instadapp**. La liquidation fonctionne comme un swap AMM : n'importe quel trader peut liquider n'importe quelle taille de dette sans avoir à détenir la totalité des fonds. Intégrable directement dans les agrégateurs DEX.

### Liquidation via rebalancing — LLAMMA (Curve/crvUSD)
Porté à grande échelle par **Curve** avec **crvUSD**. Le collatéral est vendu *progressivement* (band par band) lorsque le prix chute, et racheté si le prix remonte. Pas de liquidation brutale : le **LLAMMA** (Lending-Liquidating AMM Algorithm) gère une transition continue entre collatéral et crvUSD dans des "bands" de prix. Le **PegKeeper** maintient le peg du crvUSD.

---

## 03 — Le maintien du peg : 5 stratégies

Les actifs synthétiques n'ont pas de mécanisme de rédemption directe sur le collatéral (contrairement aux actifs tokenisés). Ils utilisent 5 stratégies combinées :

### 1. Arbitrages
- **Prix > peg** → emprunteurs: BORROW + SELL → pression baissière → retour au peg.
- **Prix < peg** → emprunteurs: BUY + REPAY → remboursent leur dette à prix réduit → pression haussière.
- **Limite** : si le token a été utilisé pour générer du rendement ailleurs, il n'y a pas d'intérêt à le racheter pour rembourser.

### 2. Changement de taux
- **Prix < peg** → taux d'intérêt *augmentent* → force le remboursement → rachat du token.
- **Prix > peg** → taux *baissent* → incite à emprunter plus → vente du token.

### 3. PSM — Price Stability Module (Module de stabilité)
Vault public permettant d'échanger l'actif synthétique contre son équivalent tokenisé à un ratio **1:1**. Exemple : DAI ↔ USDC via le PSM de MakerDAO.

En pratique : le PSM émet de l'actif synthétique collatéralisé par un actif tokenisé (dépôt USDC → émission DAI). Permet des arbitrages instantanés quand le prix dévie.

**Risques du PSM :**
- La liquidité du PSM peut s'épuiser → rédemptions impossibles.
- Utilisation d'un collatéral *centralisé* (USDC) → risque de contrepartie.

**Cas MakerDAO :** La gouvernance a voté pour diversifier le collatéral USDC du PSM :
- Achat de $700M d'obligations US Treasuries (total $1,2 milliard).
- Dépôt d'une partie sur **Coinbase** (1,5%/an = $24M/an).
- Dépôt d'une partie sur **Gemini** (1,25% APR sur GUSD).

### 4. Stablepools (Curve)
Les stablepools maintiennent le peg en offrant une liquidité concentrée autour de $1. La bonding curve plate crée une **zone optimale** (ex : 10% → 90%) où les échanges ont un price impact minimal. Quand la pool se déséquilibre, le price impact incite le marché à la rebalancer vers le prix cible.

### 5. Rédemption du collatéral (Liquity)
Inventé par **Liquity**. Quand le LUSD est sous le peg, n'importe qui peut échanger 1 LUSD contre $1 d'ETH au prix oracle. Liquity considère 1 LUSD = 1 USD en interne.

Mécanisme : acheter LUSD à $0,99 → rédemption → récupérer $1 d'ETH. Profit de $0,01 par LUSD. Les ETH proviennent des vaults au **plus faible CR** en priorité.

**Effet secondaire** : plus il y a de rédemptions, plus les vaults avec un CR *élevé* risquent d'être touchés à leur tour (car les plus risqués sont rédimés en premier, laissant ensuite les CR élevés exposés lors de vagues répétées).

---

## 04 — Les risques de depeg

Le risque central d'un actif synthétique est de perdre son peg. Trois causes :

### 1. Design du protocole + forces du marché

En **bull market**, les utilisateurs empruntent l'actif synthétique pour le vendre et acheter d'autres tokens plus volatils → pression vendeuse permanente.

**Cas MAI (QiDao) :**
- Emprunt avec origination fee + repayment fee de 0,5%, sans intérêt.
- Grande diversité de collatéraux, y compris des actifs productifs.
- Seule utilité réelle du MAI : l'emprunter, le vendre pour de l'USDC (moins cher qu'emprunter de l'USDC directement).
- Résultat : **pas de demande organique** pour le MAI → depeg permanent depuis 2022, prix autour de $0,90.
- MakerDAO : prix ~$0,9014, market cap $24,8M, supply 27,5M.
- Après le depeg, QiDao a changé son modèle : ajout de taux d'intérêts et performance fee sur les actifs productifs.

**Cas GHO (Aave) :**
- Similaire au MAI : seul cas d'usage = emprunter + vendre pour acheter un autre stablecoin ou actif volatile.
- GHO a longtemps tradé sous $1 (jusqu'à ~$0,96 en 2023).
- Aave a trouvé une utilité : GHO comme **assurance du protocole** via le Safety Module (Stake GHO = 10,23% APR, max slashing 99%).
- La DAO Aave a mandaté un comité pour rétablir le peg via des incentives calibrées sur des AMM spécialisés.
- GHO price actuel : ~$0,996, en voie de re-pegging.

**Cas LUSD (Liquity) :**
- Emprunt avec origination fee uniquement.
- Concurrent apparu : sDAI de MakerDAO (5% APR sans risque smart contract supplémentaire).
- Comportement observé : LUSD emprunté → vendu pour DAI → déposé sur MakerDAO pour du sDAI → pression vendeuse sur LUSD → depeg.
- Le mécanisme de rédemption crée une résistance sur le prix (plancher ~$1), mais provoque des rédemptions répétées qui touchent les vaults à CR élevé.
- LUSD : ~$0,997 | Market cap $153M | Supply 153,7M.

### 2. Liquidation fautive

La liquidation peut échouer ou ne pas être possible → actif synthétique sous-collatéralisé. Risque systémique uniquement si la proportion d'actifs sous-collatéralisés est élevée par rapport aux sur-collatéralisés.

**3 sous-causes :**

**Manque de liquidité** : liquider nécessite d'acheter le token emprunté ET de vendre le collatéral saisi. Si la liquidité disponible est insuffisante pour l'un ou l'autre → liquidation impossible.

**Volatilité du marché** : une chute brutale du prix peut :
- Rendre la liquidation non viable économiquement (pénalité < coût de la transaction).
- Déclencher une **cascade de liquidations** : les liquidations font baisser le prix du collatéral → déclenchent de nouvelles liquidations → spirale.
- Si le seuil de liquidation est trop bas et la chute trop brusque, le CR peut passer directement sous 100% (sous-collatéralisé) sans passer par le seuil de liquidation.

**Problème d'oracle** : si l'oracle reporte un mauvais prix ou ne met pas à jour lors d'une chute → le protocole ne "voit" pas le problème → liquidations impossibles.

**Cas bonus** : si les profits de la liquidation sont inférieurs au coût en gas, personne ne liquide. Fréquent sur les *petites* dettes.

### 3. Problème avec le collatéral

Le collatéral est "toxique" : les actifs synthétiques sont collatéralisés par du "vent" (token sans valeur fondamentale). Si le collatéral s'effondre, la dette ne peut pas être recouvrée.

---

## 05 — Cas d'utilisation et stratégies

Emprunter via CDP sert deux objectifs principaux :

### Accéder à la liquidité sans vendre
Déposer un actif (ex : BTC) dans un vault → emprunter un stablecoin liquide → utiliser ce stablecoin ailleurs (payer des dépenses, DeFi, etc.) tout en gardant l'exposition à l'actif initial.

Cas direct : ta position Aave [[Aave-WBTC-USDT-Arbitrum]] — WBTC en collatéral, emprunt USDT, conservation de l'exposition BTC.

### Effet levier (looping)
**Levier directionnel** : BTC → vault → DAI → racheter du BTC → vault → DAI → etc. Augmente l'exposition au BTC sans capitaux supplémentaires. Amplifie les gains *et* les pertes.

**Génération de rendement** : BTC → vault → DAI → déploiement dans une pool de rendement (ex : stablepool Curve). Conserve l'exposition BTC tout en générant du yield sur la dette.

---

## Tableau comparatif — Protocoles CDP

| Protocole | Token | Collatéral | Taux | Mécanisme peg | Liquidation |
|-----------|-------|-----------|------|---------------|-------------|
| MakerDAO | DAI | Multi (ETH, WBTC, RWA, USDC via PSM) | Variable + Stability Fee | PSM + Arbitrages + Stablepools | Classique |
| Liquity | LUSD | ETH uniquement | 0% (origination fee seul) | Rédemption collatéral + Stability Pool | Mutualisée |
| QiDao | MAI | Multi + actifs productifs | 0% → intérêts + perf fee | Arbitrages + Stablepools | Classique |
| Aave | GHO | Multi (collatéral Aave) | Variable | Arbitrages + Safety Module | Via Aave |
| Curve | crvUSD | Multi crypto | Variable | PegKeeper + Stablepools | LLAMMA (rebalancing) |

---

## Points de vigilance pour ta position

Ta position [[Aave-WBTC-USDT-Arbitrum]] est un CDP classique :
- L'USDT emprunté est un actif tokenisé (pas synthétique) → pas de risque de depeg du token lui-même.
- Risque principal : chute de WBTC → ton CR baisse → liquidation si le prix de WBTC descend sous ton prix de liquidation.
- Surveillance : utilise Aave directement ou DeBank pour voir ton CR en temps réel.

---

*Cours suivant : Marchés Monétaires (Aave, Compound, Euler — prêt/emprunt sur collatéral)*
