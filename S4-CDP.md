---
tags:
  - alyra
  - cours
  - semaine4
  - CDP
  - stablecoin
  - liquidation
  - MakerDAO
  - Liquity
  - actifs-synthetiques
date: 2026-06-06
source: "Les_CDP_Emprunter-via-la-création-monétaire.pdf — Alyra Promo Blaise Pascal"
---

# Semaine 4 — Les CDP : Emprunter via la création monétaire

---

## Sommaire

1. [[#Définitions]]
2. [[#Fonctionnement d'un CDP]]
3. [[#Le maintien du peg]]
4. [[#Les risques]]
5. [[#Cas d'utilisation et stratégies]]

---

## Définitions

### Actif synthétique

Un **actif synthétique** est un produit dérivé qui permet de s'exposer au prix d'un actif sans le détenir physiquement. Il traque le prix de l'actif de référence via un mécanisme de stabilité appelé **peg**.

Exemple : le DAI de MakerDAO traque le dollar depuis 2020 à ~$0.9998, pour une market cap de $4.86B. Le token ne représente pas un dollar en banque — il en reproduit la valeur via des mécanismes on-chain.

**Différence fondamentale :**

| Type | Mécanisme | Exemple |
|------|-----------|---------|
| USD tokenisé | 1 token = 1 USD en banque (collatéral 1:1) | USDC, USDT |
| USD synthétique | 1 token = >1 USD d'actifs (sur-collatéralisé) | DAI, LUSD, crvUSD |

### CDP — Collateral Debt Position

Un **CDP** est une position d'emprunt garanti : on dépose un actif en collatéral supérieur en valeur à la dette obtenue.

La règle fondamentale : **Collatéral > Dette** en permanence.

Pourquoi ? Si le collatéral vaut moins que la dette, l'emprunteur n'a plus aucun intérêt économique à rembourser — il "abandonne" son collatéral. Le protocole se retrouverait alors avec une perte. Pour éviter ce scénario, les CDP intègrent un **seuil de liquidation** qui déclenche une saisie du collatéral avant que ce cas n'arrive.

Dans un CDP :
- Le **prêteur** est le protocole (pas un humain)
- Les **liquidateurs** sont d'autres utilisateurs (robots en général)
- L'actif emprunté est **créé** au moment de l'emprunt — il représente une dette aux yeux du protocole

---

## Fonctionnement d'un CDP

### La ligne de crédit

Un CDP fonctionne comme une **ligne de crédit** : on dépose un actif en garantie (vault), ce qui ouvre une capacité d'emprunt proportionnelle.

**LTV (Loan To Value)** : ratio qui détermine la taille maximale de la ligne.

```
Valeur Collatéral × LTV = Crédit maximum

Exemple : $30,000 × 80% = $24,000 max empruntable
```

L'**utilisation** indique quelle fraction de la ligne est utilisée :
- 50% utilisé → $12,000 empruntés → situation sûre
- 87.5% utilisé → $21,000 → zone de surveillance
- **100%** → $24,000 → **liquidation immédiate**

On n'emprunte donc jamais 100% de sa ligne de crédit — le seuil de liquidation coïncide avec l'utilisation totale.

### Frais et paramètres

Selon les protocoles, les frais peuvent prendre plusieurs formes :
- **Taux d'intérêt** : pourcentage annuel sur la dette (variable ou fixe)
- **Origination fee** : frais à l'ouverture (ex: 0.5% chez Liquity)
- **Repayment fee** : frais à la fermeture (ex: 0.5% chez QiDao)
- **Performance fee** : % sur les rendements générés par le collatéral (actifs productifs)

**Debt ceiling** : plafond total d'émission de l'actif synthétique par type de collatéral — limite la concentration du risque.

### Collateral Ratio (CR)

Le CR mesure à tout moment la santé d'une position :

```
CR = Valeur Collatéral / Valeur Dette

CR de liquidation = 1 / LTV
Exemple : 1 / 0.80 = 125%
```

Si le collatéral monte → CR monte → plus de marge  
Si le collatéral baisse → CR baisse → risque de liquidation  
Si un actif volatile est emprunté → la dette peut aussi augmenter → double pression possible

### Calcul du prix de liquidation

```
Prix de liquidation = Dette / LTV
  Ou équivalent :
Prix de liquidation = Dette × Seuil de liquidation
```

Exemple : dette $12,000, LTV 80% (seuil 125%)  
→ Prix de liquidation = $12,000 / 0.80 = **$15,000**  
→ Si le collatéral descend à $15,000, la position est liquidée

### Mécanisme de liquidation

Le liquidateur **rembourse la dette à la place de l'emprunteur** et reçoit en échange le collatéral + une **pénalité de liquidation**.

```
Pénalité = Dette × %Pénalité

Exemple : $12,000 × 6% = $720
```

Flux complet (vault $15,000, dette $12,000, pénalité 6%) :
- Liquidateur donne : 12,000 DAI (rembourse la dette)
- Liquidateur reçoit : $12,720 de collatéral (dette + pénalité)
- Emprunteur récupère : $15,000 − $12,720 = **$2,280**
- Protocole : dette annulée, 0 perte

### Les 4 modèles de liquidation

**1. Liquidation classique**  
Un liquidateur individuel rembourse la dette et reçoit le collatéral. Simple mais nécessite que le liquidateur ait les fonds disponibles.

**2. Liquidation mutualisée (Stability Pool)**  
Inventé par **Liquity**. Un pool collectif de détenteurs de LUSD absorbe les dettes liquidées. En échange, ils reçoivent le collatéral avec décote. Pas besoin qu'un liquidateur individuel ait les fonds — la liquidation est instantanée si le pool est assez grand.

> Dune Liquity : LUSD Stability Pool APR 4.78% / LQTY Staking APR 3.35% / Total CR 417.6% / Protocol Revenue $33.7M

**3. Liquidation via un swap (DEX)**  
Introduit par **Instadapp** : le collatéral est vendu directement sur un DEX pour rembourser la dette. Fonctionne comme un AMM intégré. N'importe quel trader de n'importe quelle taille peut liquider n'importe quel montant de dette.

**4. Liquidation via le rebalancing (LLAMMA)**  
Inventé par **Curve** pour le **crvUSD**. Algorithme LLAMMA = *Lending-Liquidating AMM Algorithm*.  
Le collatéral est vendu **progressivement**, band par band de prix, à mesure que le prix baisse — et **racheté** si le prix remonte. C'est une **soft liquidation** : pas de saisie totale brutale, mais une conversion graduelle. Le PEGKEEPER veille à maintenir crvUSD proche du $1.

---

## Le maintien du peg

**Rappel :** Les actifs tokenisés maintiennent leur peg via arbitrages entre marché primaire (émission/rédemption) et secondaire. Un actif synthétique est "redeemable" pour son collatéral.

Les actifs synthétiques utilisent **5 stratégies** combinées :

### 1. Arbitrages

Le marché s'auto-régule via les emprunteurs :

**Prix > peg** → les emprunteurs empruntent le token et le vendent (BORROW → SELL)  
→ augmentation de l'offre → prix revient vers le peg

**Prix < peg** → les emprunteurs rachètent le token moins cher pour rembourser leur dette (BUY → REPAY)  
→ réduction de l'offre → prix remonte vers le peg

**Limite :** si le token a été utilisé ailleurs pour générer du rendement ou a servi à acheter un autre actif qui prend de la valeur, l'emprunteur n'a plus de raison de rembourser — l'arbitrage ne fonctionne plus.

### 2. Changement de taux

Mécanisme de pression économique direct :

- **Prix < peg** → taux d'intérêt augmentent → force les emprunteurs à rembourser en rachetant le token → offre baisse → prix remonte
- **Prix > peg** → taux baissent → incite à emprunter davantage → offre augmente → prix baisse

### 3. Module de stabilité (PSM — Price Stability Module)

Permet d'échanger à un **ratio fixe de 1:1** l'actif synthétique contre son équivalent tokenisé. En réalité : un vault public qui émet de l'actif synthétique en échange d'actifs tokenisés.

```
USDC → [Vault PSM] → DAI (à 1:1, sans frais ou avec frais minimaux)
DAI → [Vault PSM] → USDC
```

Permet des arbitrages instantanés sans slippage, ancrant l'actif synthétique à son équivalent tokenisé.

**Limites :**
- La liquidité du PSM peut s'épuiser → rédemptions impossibles
- Risque du collatéral centralisé (USDC = Circle peut le geler)

**Exemple MakerDAO :** La gouvernance a décidé de convertir une partie des USDC du PSM en bons du Trésor américain (+$700M, soit $1.2B total) et d'en déposer une partie chez Coinbase (1.5%/an sur $1.6B) et Gemini (1.25% sur les GUSD dans le PSM). Le PSM devient ainsi un générateur de rendement en plus d'un stabilisateur.

### 4. Stablepools

Les pools de type Curve permettent l'échange à un ratio **proche de 1:1** entre actifs stables. Leur rôle dans le maintien du peg :
- **Price impact** : calculé pour encourager le marché à rebalancer la pool vers son prix cible
- **Bonding curve plate** : la pool peut être paramétrée pour avoir une grande "zone optimale" (ex: 10% à 90%) où le slippage est quasi nul
- Meilleure absorption des ventes — la pression vendeuse se répartit sur la profondeur du pool

### 5. Rédemption du collatéral

Inventé par **Liquity**. Quand le LUSD est sous le peg, n'importe qui peut échanger 1 LUSD contre $1 d'ETH au prix oracle ETH/USD.

**Mécanique :** Liquity considère que 1 LUSD = 1 USD. Si le LUSD vaut $0.99 sur le marché, on peut acheter $1 d'ETH avec $0.99 de LUSD → profit d'arbitrage garanti.

```
Achat 1 LUSD pour $0.99 → REDEMPTION → $1 d'ETH reçu → gain $0.01
```

Les ETH viennent des **vaults avec le CR le plus faible** (les moins collatéralisés). Résultat : ces utilisateurs voient leur dette réduite mais perdent une partie de leur collatéral.

**Effet double tranchant :**
- Crée un **floor à $1** sur le LUSD (plancher de prix garanti par l'arbitrage)
- Mais : plus il y a de rédemptions, plus les vaults à CR même élevé risquent d'être touchés → certains utilisateurs "victimes" malgré une position saine

---

## Les risques

### Risque principal : perdre le peg

Le risque d'un actif synthétique est de ne plus valoir ce qu'il est censé valoir.

**Qui supporte ce risque ?** Ceux qui ont **acheté** l'actif — pas ceux qui l'ont **emprunté**. L'emprunteur bénéficie même d'un depeg : si sa dette en DAI vaut moins en USD, il la rembourse moins cher.

Exemple : Alice a un vault $30K BTC, a emprunté 12,000 DAI.  
Si DAI = $0.97 → sa dette USD = $11,640 → elle gagne $360 sur sa dette.  
Celui qui a acheté 12,000 DAI à $1 perd $360.

### 3 causes de depeg

#### 1. Design du protocole + forces du marché

**En bull market :** les actifs synthétiques sont empruntés pour être vendus et acheter d'autres tokens → pression vendeuse structurelle → peg difficile à tenir.

**Cas MAI de QiDao :**
- Frais : origination fee + repayment fee 0.5%, sans intérêt
- Collatéraux : grande diversité, y compris collatéraux "productifs"
- Problème : le MAI n'a qu'une seule utilité = l'emprunter pour le vendre et acheter du USDC (moins cher que d'emprunter directement du USDC)
- Conséquence : **pas de demande organique** → de-peg structurel depuis sept 2021 → MAI à $0.90 de manière quasi-permanente
- Fix post-depeg : ajout d'intérêts et performance fees sur actifs productifs (ex: staked MATIC: 135% CR min, 1.83% perf fee; WMATIC: 130% CR, 5% interest)

**Cas GHO de Aave :**
- Même problème : seul usage = emprunter + vendre pour acheter un autre stable ou actif volatile
- GHO a longtemps tradé à $0.97–0.98
- Fix : GHO sert maintenant d'**assurance Aave** via le Safety Module (staking GHO: 10.23% APR, max slashing 99%) + comité dédié pour gérer les incentives sur AMM spécialisés

**Cas LUSD de Liquity :**
- MakerDAO a lancé le **sDAI** (épargne sur DAI, 5%/an sans risque smart contract supplémentaire)
- Mécanisme de dépeg : LUSD emprunté (origination fee) → vendu pour DAI → déposé en sDAI pour 5% → LUSD reçoit pression vendeuse → depeg
- Mais : la rédemption crée un **floor à $1** — le LUSD ne peut pas tomber trop loin sans déclencher des arbitrageurs
- Contre-effet : ces rédemptions "victimisent" des vaults avec un CR élevé qui se font prendre leur collatéral

#### 2. Liquidation fautive

La liquidation peut échouer ou ne pas être économiquement réalisable → position sous-collatéralisée → actif synthétique partiellement non garanti.

Ce n'est un problème systémique que si la proportion d'actif sous-collatéralisé est significative par rapport aux positions sur-collatéralisées.

**Causes :**

**Manque de liquidité :** liquider requiert d'acheter le token emprunté et de vendre le collatéral saisi. Si l'un ou l'autre n'a pas de liquidité suffisante → liquidation impossible.

**Volatilité du marché :** une chute brutale du prix du collatéral peut sauter directement sous le seuil de liquidation (110%) et même sous le seuil de sous-collatéralisation (100%) sans laisser le temps aux liquidateurs d'agir. Phénomène de **cascade de liquidations** : les liquidations font baisser le prix → nouvelles positions sous le seuil → nouvelles liquidations → spirale baissière.

**Problème d'oracle :** si l'oracle reporte un mauvais prix ou ne se met pas à jour lors d'une chute, les liquidations ne peuvent pas être déclenchées car le protocole "pense" que le collatéral vaut toujours assez.

**Cas des petites dettes :** si le profit de la liquidation (pénalité) est inférieur au coût en gas de la transaction de liquidation, aucun liquidateur n'a d'intérêt économique à agir.

#### 3. Problème avec le collatéral

Le collatéral utilisé comme garantie est **"toxique"** = les actifs sous-jacents sont eux-mêmes sans valeur réelle ou collatéralisés circulairement par du "vent".

Exemple typique : FTX utilisait FTT (son propre token) comme collatéral principal. Quand FTT s'effondre → tout le système s'effondre en cascade.

---

## Cas d'utilisation et stratégies

Emprunter via un CDP sert deux grandes finalités :

### 1. Accéder à la liquidité

Accéder à la liquidité "bloquée" d'un actif sans le vendre.

```
BTC → [Vault] → DAI → utiliser DAI pour dépenses / investissements
```

Tu gardes ton exposition BTC (si BTC monte, tu en bénéficies) tout en ayant du capital liquide à déployer. C'est le principe fondamental de la position Aave que tu utilises déjà : WBTC en collateral → USDT emprunté.

### 2. Effet levier

**Looping :** emprunter pour racheter le même actif que le collatéral, et re-déposer en vault → effet multiplicateur.

```
BTC → [Vault] → DAI → BTC → [Vault] → DAI → BTC → ...
```

**Yield farming avec exposition maintenue :** emprunter pour déployer dans un pool de rendement tout en gardant l'exposition au collatéral.

```
BTC → [Vault] → DAI → [Pool de rendement] → rendement
```

→ Tu génères du yield sur le DAI tout en restant long BTC via ton vault.

---

## Prochain cours

**Les marchés monétaires** — Aave, Compound, prêts/emprunts classiques via des pools de liquidité.

---

## Liens

- [[MOC-Alyra-DeFi-V2]] ← index de la formation
- [[S4-Oracles]] ← cours oracles (même semaine — les CDP en dépendent pour les prix de liquidation)
- [[Looping-SPYx-Morpho-Blue]] ← exemple concret de looping via CDP (Morpho Blue = marché monétaire isolé, même mécanique)
- [[S2-Stablecoins]] ← contexte stablecoins
- [[Peg]] ← concept du peg
- [[Wiki/mechanics/Aave]] ← protocole actif dans ton portefeuille, même mécanique CDP
