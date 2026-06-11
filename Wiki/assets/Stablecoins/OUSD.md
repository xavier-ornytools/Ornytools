# OUSD — Origin Dollar

**Issuer :** Origin Protocol  
**Type :** Yield-bearing (strategy-backed)  
**Tags :** #stablecoin #yield-bearing #ornytools #origin #morpho #rebase

---

## Identité

**Définition :** Stablecoin yield-bearing qui distribue automatiquement les rendements DeFi aux détenteurs via rebase. Actuellement : 100% USDC déployé dans des stratégies Morpho.

**Famille :** Strategy-backed yield-bearing — le solde augmente automatiquement sans action requise (rebase token).  
**Backing :** 100% USDC → déployé dans des marchés Morpho (collatéraux blue-chip uniquement).

---

## Mécanisme de peg

Peg $1 maintenu par la rédemption USDC sous-jacente. Le rebase distribue le yield directement dans les wallets des détenteurs — chaque holder voit son solde augmenter.

**Origine du yield :** intérêts Morpho issus des emprunteurs. Sustainable (real yield).

---

## Scores OrnyTools

| Axe | Score | Détail |
|-----|-------|--------|
| Stabilité du peg | 62 | Exploit nov. 2020 (-86%), stable depuis — 4+ ans sans incident |
| Contrepartie | 54 | 100% USDC = exposition totale Circle |
| Protocole | 64 | 12+ audits, battle-tested, mais exploit historique pesant |
| Liquidité | 44 | Niche yield-bearing, liquidité modeste |

**Score global : 57 / 100**

**Points forts :** 12+ audits, 4+ ans battle-tested · yield auto-distribué sans action · stratégie Morpho conservative  
**Risques :** exploit nov. 2020 ($7.7M — reentrancy bug dans mint) · 100% USDC = risque Circle total · dépendance à Morpho comme protocole externe

---

## Historique de peg

- **Novembre 2020** : $7.7M volés via flashloan exploitant un bug de reentrancy dans le mint. OUSD chute à $0.14. Protocole reconstruit, 12+ audits depuis.
- **2021–présent** : aucun incident. Migration vers stratégie Morpho plus conservative.

---

## Liens
- [[Stablecoins-INDEX]]
- [[USDe]] · [[USD0]] · [[USDM]] — autres yield-bearing
- [[Yield-bearing USD]]
- [[3-3-2_Familles-Stablecoins]]
