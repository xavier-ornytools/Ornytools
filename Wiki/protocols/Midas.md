# Midas — RWA Yield Tokens
Tags: #protocole #RWA #tokenisation #rendement #institutionnel #funds-backed

---

## Définition

**Midas** est un protocole qui **tokenise des produits financiers institutionnels** (bons du Trésor US, stratégies de rendement…) pour les rendre accessibles on-chain sous forme de **RWA yield tokens**.

Concrètement : des actifs financiers réels (T-bills, stratégies hedge fund) sont détenus par une structure juridique off-chain, et leur valeur est représentée par un token on-chain que n'importe quel wallet peut détenir.

---

## Produits principaux

| Token | Sous-jacent | Rendement indicatif |
|-------|-------------|---------------------|
| **mTBILL** | Bons du Trésor US (3 mois) | ~4–5% APY (selon les taux Fed) |
| **mBASIS** | Stratégie basis trading (spot/futures) | ~15–20% APY variable |
| **mEDGE** | Stratégie de couverture delta neutral | variable |

---

## Fonctionnement

1. L'investisseur dépose des USDC (KYC obligatoire)
2. Midas investit le capital dans le produit financier via un véhicule légal (SPV)
3. L'investisseur reçoit un token (ex : mTBILL) dans son wallet
4. Le token **prend de la valeur** au fil du temps — c'est un **c-token** : 1 mTBILL vaut progressivement plus d'USDC
5. À la rédemption, l'investisseur récupère ses USDC + rendement accumulé

---

## RWA Yield Token — Pourquoi c'est important

Un RWA yield token, c'est la jonction entre la finance traditionnelle et la DeFi :
- Le rendement vient d'actifs **réels et régulés** (pas d'émission algorithmique)
- Le token est **utilisable en DeFi** : collatéral sur Aave, dans des LP, etc.
- La valeur nette d'actif (NAV) est consultable on-chain → plus de transparence qu'un fonds classique

> C'est l'infrastructure qui permet aux rendements institutionnels d'entrer dans la DeFi sans passer par une banque.

---

## Avantages vs banque traditionnelle

- Rédemption plus rapide (heures vs jours ouvrés)
- Pas de minimum d'investissement bancaire imposé
- Token composable dans d'autres protocoles DeFi
- NAV transparente on-chain

---

## Risques

| Risque | Détail |
|--------|--------|
| **Risque légal** | Structure SPV entre actif réel et token → si le SPV fait faillite, que se passe-t-il ? |
| **Risque de contrepartie** | Dépend du broker/custodian qui détient les actifs réels |
| **Risque de liquidité** | Rédemption parfois soumise à un préavis (pas instantanée) |
| **Risque réglementaire** | KYC obligatoire, accès potentiellement restreint selon juridiction |

---

## Liens
- [[3-3-3_Stablecoins-Ressources]]
- [[DeFi-RWA — Concepts et Protocoles]]
- [[2-RWA-3_Produits-Financiers]]
- [[S2-Stablecoins]]
- [[Aave]]
