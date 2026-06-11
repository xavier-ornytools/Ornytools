# YUZU — Funds-Backed Stablecoin
Tags: #protocole #stablecoin #fonds #tranches #rendement #funds-backed

---

## Définition

**YUZU** est un exemple de **funds-backed stablecoin** : le stablecoin est émis par un fonds d'investissement qui déploie le capital sur plusieurs stratégies simultanément. La stabilité du token est garantie par les actifs sous gestion du fonds.

C'est une approche hybride entre finance traditionnelle (titrisation structurée) et DeFi.

---

## Structure des tokens

| Token | Tranche | Profil risque/rendement |
|-------|---------|------------------------|
| **y7USD** | Token de base | Génère du rendement si staké |
| **Sy7USD** | Senior | Remboursement prioritaire, rendement plus faible, risque minimal |
| **PPUSD** | Junior | Absorbe les premières pertes, rendement plus élevé |

---

## Logique des tranches (titrisation)

Ce système reprend la logique des **CDO (Collateralized Debt Obligations)** de la finance traditionnelle, adapté à la DeFi :

- Le fonds génère un rendement global avec ses stratégies
- Ce rendement est distribué aux tranches **dans l'ordre** : junior d'abord, puis senior
- En cas de **perte**, c'est la tranche junior (PPUSD) qui l'absorbe en premier
- La tranche senior (Sy7USD) est protégée : elle ne perd que si le junior est entièrement liquidé

> Analogie : dans un immeuble avec deux étages, l'inondation touche le rez-de-chaussée (junior) avant le premier étage (senior). Les habitants du premier (senior) ne sont exposés que si le rez-de-chaussée est complètement noyé.

---

## Stratégies du fonds

Le fonds déploie le capital sur plusieurs axes pour générer du rendement :
- Lending (prêt on-chain)
- Basis trading (arbitrage spot/futures)
- Market making / liquidité
- Arbitrage de taux

---

## Risques de protocole

| Risque | Détail |
|--------|--------|
| **Risque de stratégie** | Une stratégie du fonds peut perdre de l'argent |
| **Risque junior** | Les holders PPUSD subissent les pertes en premier |
| **Risque de contrepartie** | Dépend des protocoles sur lesquels le fonds est déployé |
| **Risque de gouvernance** | Décisions de gestion du fonds pas toujours transparentes |
| **Risque de liquidité** | Rédemption possible uniquement si le fonds a des actifs suffisants |
| **Risque smart contract** | Les stratégies sont exécutées on-chain → vulnérabilité aux exploits |

> Pour analyser les risques de protocole sur YUZU et d'autres stablecoins → utiliser [[Pharos-Watch]]

---

## Liens
- [[3-3-2_Familles-Stablecoins]]
- [[S2-Stablecoins]]
- [[Pharos-Watch]] — due diligence protocoles stablecoins
- [[Ethena]] — autre exemple de strategy-backed stablecoin
