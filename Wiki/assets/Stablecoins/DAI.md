# DAI — DAI

**Issuer :** MakerDAO (décentralisé)  
**Type :** Overcollateralized (CDP)  
**Tags :** #stablecoin #overcollateralized #CDP #ornytools #MakerDAO #ethereum

---

## Identité

**Définition :** Premier stablecoin décentralisé à grande échelle, émis via le protocole Maker depuis 2017. Généré en déposant du collatéral (ETH, WBTC, USDC...) dans des vaults CDP.

**Famille :** Overcollateralized CDP — tu déposes plus que tu n'empruntes (ex. 150%+ de collatéral pour 100 DAI).  
**Backing :** Mix ETH, WBTC, USDC (environ 50%), RWA. La dépendance à USDC est le principal risque systémique.

---

## Mécanisme de peg

Le peg est maintenu par trois mécanismes combinés :
1. **CDP liquidations** : si le ratio de collatéral tombe trop bas, le vault est liquidé → DAI rachetés
2. **PSM (Peg Stability Module)** : échange USDC ↔ DAI à 1:1 sans slippage
3. **DSR (DAI Savings Rate)** : taux d'intérêt ajustable pour moduler la demande

---

## Scores OrnyTools

| Axe | Score | Détail |
|-----|-------|--------|
| Stabilité du peg | 85 | Historique solide depuis 2017, seuls micro-dépeg |
| Contrepartie | 74 | DAO décentralisée mais 50% USDC = risque Circle hérité |
| Protocole | 80 | Battle-tested 7 ans, contrats complexes mais audités |
| Liquidité | 83 | Très profondes sur Curve, Uniswap, Aave |

**Score global : 81 / 100**

**Points forts :** gouvernance décentralisée · battle-tested depuis 2017 · aucun point de défaillance unique  
**Risques :** ~50% backing USDC (risque Circle hérité) · gouvernance peut changer le collatéral · complexité des smart contracts

---

## Historique de peg

- **Marzo 2023 (SVB)** : -0.3% depeg dû au backing USDC — récupération immédiate.
- **Black Thursday mars 2020** : -15% lors du crash ETH, liquidations en cascade. Point de rupture du protocole, corrigé.

---

## Liens
- [[Stablecoins-INDEX]]
- [[USDS]] ← successeur de DAI
- [[crvUSD]] · [[GHO]] · [[LUSD]]
- [[S4-CDP]] — mécanisme CDP cours Alyra
