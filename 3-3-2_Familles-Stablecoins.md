# 💵 3.3.2 — Les Familles de Stablecoins
**Cours :** Alyra — Semaine 2 · Actifs Tokénisés & Stablecoins  
**MOC :** [[MOC-Alyra-DeFi-V2]] | [[S2-Stablecoins]]  
**Tags :** #alyra #semaine2 #stablecoins #familles #DeFi

---

## 01 — Fiat-Backed Stablecoin

Stablecoin garanti par une réserve de monnaie fiduciaire (USD, EUR, CHF…) détenue par un custodian régulé.

Risque faible : la garantie repose sur un État ou une banque centrale. La valeur est directement ancrée à la devise sous-jacente au ratio 1:1.

Exemples : USDC, USDT, EURC, XCHF.

---

## 02 — Crypto-Backed Stablecoin

Stablecoin garanti par des actifs crypto en **over-collateral**, via un **CDP (Collateralized Debt Position)**.

**Mécanisme :** tu déposes 150$ d'ETH → tu mines 100$ de DAI. Si le collatéral chute sous un seuil → liquidation automatique de la position.

> ⚠️ Peut être fragilisé si le collatéral est lui-même un stablecoin fiat (boucle circulaire). L'effondrement de Terra/UST (2022) illustre ce risque : une boucle algorithmique adossée à des stables a spiralé jusqu'à zéro.

Exemples : **DAI** (MakerDAO), **LUSD** (Liquity).

---

## 03 — Strategy-Backed Stablecoin

Stablecoin dont le peg est maintenu par une **stratégie financière active** plutôt que par un collatéral statique.

Exemple phare : **[[Ethena]]** → USDe

Ethena fonctionne comme un **fonds Delta Neutral** :
- Dépôt USDC → Ethena achète de l'ETH spot et ouvre simultanément une position short de même taille sur les futures
- Exposition nette à ETH = zéro (delta neutre)
- Le rendement vient des **funding rates** perçus sur la position short
- Pour percevoir le rendement : staker l'USDe **7 jours minimum** → sUSDe
- Sans staking : l'USDe ne génère rien et peut être vendu sur le marché secondaire

---

## 04 — Funds-Backed Stablecoin

Stablecoin émis par un **fonds d'investissement multi-stratégies**. Le peg est garanti par les actifs sous gestion.

Exemple : **[[YUZU]]**

Structure par **tranches** (logique de titrisation) :
- **y7USD** → token de base, génère du rendement si staké
- **Sy7USD** → tranche senior (remboursement prioritaire, moindre risque, rendement plus faible)
- **PPUSD** → tranche junior (supporte les premières pertes, rendement plus élevé)

> La tranche junior protège la tranche senior : en cas de perte, c'est le junior qui absorbe en premier.

---

## 🔗 Liens
- [[S2-Stablecoins]] — vue générale des stablecoins
- [[Ethena]] — mécanisme Delta Neutral détaillé
- [[YUZU]] — fonds multi-stratégies
- [[3-3-3_Stablecoins-Ressources]]
- [[MOC-Alyra-DeFi-V2]]
