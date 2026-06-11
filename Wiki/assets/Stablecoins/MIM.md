# MIM — Magic Internet Money

**Issuer :** Abracadabra (DAO)  
**Type :** Overcollateralized (Cauldrons)  
**Tags :** #stablecoin #overcollateralized #ornytools #abracadabra #cauldrons #depeg-historique

---

## Identité

**Définition :** Stablecoin overcollateralisé émis par le protocole Abracadabra, en déposant des actifs yield-bearing comme collatéral (yvTokens, cvxTokens, etc.) dans des "cauldrons".

**Famille :** Overcollateralized CDP — spécificité : collatéral = actifs yield-bearing, pas seulement des stables ou ETH.  
**Backing :** Yield-bearing tokens (yVault Yearn, Convex, etc.). Ratio de collatéral variable par cauldron.

---

## Mécanisme de peg

Peg maintenu par arbitrage Curve (pool 3pool MIM) et liquidations des cauldrons sous-collatéralisés. La profondeur des pools Curve est critique pour la stabilité.

---

## Scores OrnyTools

| Axe | Score | Détail |
|-----|-------|--------|
| Stabilité du peg | 68 | Plusieurs dépeg significatifs en 2022 |
| Contrepartie | 62 | Gouvernance DAO, mais incident Wonderland/Sifu très négatif |
| Protocole | 55 | Battle-tested cross-chain mais mécanisme complexe, TVL en déclin |
| Liquidité | 52 | Pools Curve (3pool), moins profondes qu'avant le déclin |

**Score global : 60 / 100**

**Points forts :** déploiement cross-chain · deep Curve pool integration · gouvernance DAO communautaire  
**Risques :** dépeg multiple en 2022 · déclin TVL marqué depuis le pic · mécanisme de liquidation cauldron complexe

---

## Historique de peg

- **Janvier 2022** : -5% depeg suite au scandale Wonderland/Sifu (trésorier impliqué dans des affaires criminelles).
- **Mai 2022 (LUNA)** : dépeg plus significatif, TVL s'effondre.
- Déclin progressif de l'adoption depuis.

---

## Liens
- [[Stablecoins-INDEX]]
- [[DOLA]] · [[crvUSD]]
- [[4-3_Curve-Convex-Beefy-LP-Avance]] — pools Curve/Convex
- [[3-3-2_Familles-Stablecoins]]
