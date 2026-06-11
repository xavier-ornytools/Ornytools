# crvUSD — Curve USD

**Issuer :** Curve Finance  
**Type :** Overcollateralized (LLAMMA)  
**Tags :** #stablecoin #overcollateralized #ornytools #curve #LLAMMA #ethereum

---

## Identité

**Définition :** Stablecoin overcollateralisé natif de Curve Finance, utilisant le mécanisme LLAMMA (Lending-Liquidating AMM Algorithm) — une liquidation douce continue au lieu de liquidations brutales.

**Famille :** Overcollateralized CDP avec mécanisme de liquidation unique.  
**Backing :** ETH, wstETH, WBTC, sfrxETH. Ratio de collatéral élevé.

---

## Mécanisme de peg

**LLAMMA** : au lieu de liquider brutalement quand le ratio tombe, le système convertit progressivement le collatéral en crvUSD (et inversement). Cela amortit les liquidations et stabilise le peg.

Deux courbes de prix encadrent la zone de liquidation douce. Le peg est soutenu par des arbitrageurs Curve natifs.

---

## Scores OrnyTools

| Axe | Score | Détail |
|-----|-------|--------|
| Stabilité du peg | 82 | Conçu pour l'auto-stabilisation via LLAMMA, tient bien |
| Contrepartie | 78 | Gouvernance Curve DAO, décentralisée mais concentration veCRV |
| Protocole | 74 | Mécanisme innovant, moins battle-tested que DAI |
| Liquidité | 60 | Profond sur Curve, moins présent sur autres DEX |

**Score global : 75 / 100**

**Points forts :** mécanisme LLAMMA (liquidation douce) · liquidité native Curve très profonde · collatéral ETH/WBTC/wstETH  
**Risques :** protocole plus récent, moins battle-tested · mécanisme complexe · dépendance concentrée à l'écosystème Curve

---

## Historique de peg

- Lancé mai 2023. Aucun dépeg significatif. LLAMMA a absorbé plusieurs volatilités sans incident.

---

## Liens
- [[Stablecoins-INDEX]]
- [[4-3_Curve-Convex-Beefy-LP-Avance]] — cours pratique Curve
- [[DAI]] · [[GHO]] · [[LUSD]]
- [[3-3-2_Familles-Stablecoins]]
