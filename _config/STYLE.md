# STYLE.md — Conventions d'écriture du vault

## Langue
Français pour le corps des notes. Termes techniques DeFi en anglais (ex : liquidity pool,
collateral, slippage, yield). Pas de mélange dans une même phrase si évitable.

## Structure d'une note Wiki
```
---
title:
category: [protocol | concept | asset | mechanism | hack | infrastructure]
tags: []
date:
---

## Vue d'ensemble
## Fonctionnement
## Risques
## Cas d'usage
## Sources
```

## Structure d'une note Strategies
```
---
title:
status: [active | en-analyse | archivée]
protocoles: []
actifs: []
date-ouverture:
date-fermeture:
---

## Objectif
## Setup
## Suivi
## Clôture / Bilan
```

## Titres
- H1 (`#`) : titre de la note uniquement
- H2 (`##`) : sections principales
- H3 (`###`) : sous-sections si nécessaire

## Liens
- `[[Note cible]]` pour les liens internes
- `[Texte](URL)` pour les liens externes

## Tags recommandés
`#defi` `#protocol` `#risk` `#formation` `#strategie` `#aave` `#arbitrum`
`#stablecoin` `#lst` `#rwa` `#yield` `#hack` `#on-chain`
