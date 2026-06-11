# FRAX — Frax

**Issuer :** Frax Finance  
**Type :** Hybrid (en transition vers full collateralized)  
**Tags :** #stablecoin #hybrid #ornytools #frax #algorithmic #ethereum

---

## Identité

**Définition :** Stablecoin hybride — partiellement collatéralisé (USDC), partiellement algorithmique (FXS). En transition vers 100% collatéralisé depuis la crise LUNA 2022.

**Famille :** Hybrid/Algorithmic — le ratio collatéral (CR) fluctue entre 85% et 100% selon les conditions de marché.  
**Backing :** USDC principalement + FXS (token de gouvernance Frax). Frax v3 vise 100% de collatéralisation en T-bills.

---

## Mécanisme de peg

À la mint : X% USDC + (1-X)% FXS brûlé. À la rédemption : inverse.  
Le ratio est ajusté algorithmiquement selon le peg. Si FRAX > $1 → CR baisse (plus algo). Si FRAX < $1 → CR monte (plus collatéral).

Frax v3 ajoute des actifs RWA (T-bills) comme backing supplémentaire.

---

## Scores OrnyTools

| Axe | Score | Détail |
|-----|-------|--------|
| Stabilité du peg | 78 | Micro-dépeg mai 2022, en cours de transition vers full collat |
| Contrepartie | 56 | Dépendance USDC + composante FXS algorithmique résiduelle |
| Protocole | 71 | Deep Curve liquidity, mais système multi-token complexe |
| Liquidité | 70 | Bonnes pools Curve, mais moins que DAI/USDC |

**Score global : 69 / 100**

**Points forts :** pools Curve très profondes · évolution vers full collateralization · capital efficient  
**Risques :** composante algorithmique encore active · dépendance USDC · système multi-token complexe (FXS)

---

## Historique de peg

- **Mai 2022 (LUNA)** : micro-dépeg -2%, récupéré rapidement.
- Depuis : stabilisation, transition vers Frax v3 (100% collatéralisé).

---

## Liens
- [[Stablecoins-INDEX]]
- [[USDC]] · [[DAI]]
- [[3-3-2_Familles-Stablecoins]]
