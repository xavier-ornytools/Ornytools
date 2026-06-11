# USDe — Ethena USD

**Issuer :** Ethena Labs  
**Type :** Synthetic (delta-neutral)  
**Tags :** #stablecoin #synthetic #yield-bearing #ornytools #ethena #delta-neutral

---

## Identité

**Définition :** Stablecoin synthétique créé par Ethena Labs, maintenu par une position delta-neutre : collatéral ETH/BTC long + short perpétuel équivalent sur CEX. Le peg dépend des funding rates.

**Famille :** Synthetic — pas de réserve fiat, pas de CDP. Le peg est mécanique via le delta-hedge.  
**Backing :** ETH/stETH/BTC (long) + positions short perpetual sur Binance, Bybit, OKX, Deribit. Ratio collatéral ~100% après couverture.

---

## Mécanisme de peg

La valeur est maintenue car les positions long et short s'annulent. Le yield vient des funding rates positifs (les traders long paient les traders short). Si les funding rates deviennent négatifs durablement, le backing se dégrade.

**sUSDe** = version stakée d'USDe qui capture le yield (~15–30% APY en période de bull).

---

## Scores OrnyTools

| Axe | Score | Détail |
|-----|-------|--------|
| Stabilité du peg | 72 | Aucun dépeg depuis lancement fév. 2024 — mécanisme non testé bear market |
| Contrepartie | 38 | Exposition directe Binance, Bybit, OKX (risque CEX) |
| Protocole | 52 | Mécanisme innovant, audité, mais complexe et nouveau |
| Liquidité | 68 | Bonne croissance TVL, Curve pools profondes |

**Score global : 58 / 100**

**Points forts :** yield élevé via sUSDe · mécanisme delta-neutral élégant · TVL en forte croissance  
**Risques :** funding rates négatifs prolongés = compression du backing · risque CEX (Binance/Bybit) · mécanisme non testé en bear market prolongé

---

## Historique de peg

- **Fév. 2024 → présent** : aucun dépeg significatif. TVL passé de 0 à plusieurs milliards en quelques mois.
- **Risque théorique** : si les 3 CEX principaux font défaut simultanément, le delta-hedge n'est plus efficace.

---

## Liens
- [[Stablecoins-INDEX]]
- [[Ethena]] — note protocole
- [[3-3-2_Familles-Stablecoins]]
- [[Yield-bearing USD]]
