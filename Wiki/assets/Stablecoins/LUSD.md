# LUSD — Liquity USD

**Issuer :** Liquity Protocol (immutable)  
**Type :** Overcollateralized  
**Tags :** #stablecoin #overcollateralized #ornytools #liquity #immutable #ethereum

---

## Identité

**Définition :** Stablecoin overcollateralisé émis exclusivement contre ETH, sur un protocole aux contrats immuables — aucune clé admin, aucune gouvernance. Mécanisme le plus décentralisé du marché.

**Famille :** Overcollateralized CDP — collatéral ETH uniquement, ratio min. 110%.  
**Backing :** ETH pur. Ratio de collatéralisation moyen du système bien au-dessus de 150%.

---

## Mécanisme de peg

Deux mécanismes hard :
1. **Floor $1** : les détenteurs peuvent toujours racheter 1 LUSD contre $1 d'ETH directement dans le protocole → plancher dur à $1
2. **Ceiling ~$1.10** : au-dessus de $1.10, il devient rentable d'ouvrir un trove et vendre du LUSD

LUSD trade donc souvent légèrement au-dessus de $1 (entre $1.00 et $1.05), ce qui est normal et prévu.

---

## Scores OrnyTools

| Axe | Score | Détail |
|-----|-------|--------|
| Stabilité du peg | 90 | Jamais passé sous $1 — floor dur via rédemption |
| Contrepartie | 92 | Contrats immuables, aucune équipe avec accès admin |
| Protocole | 84 | Audité, simple, 0 gouvernance = 0 risque de gouvernance |
| Liquidité | 52 | Moins profond que USDC/DAI — intégrations DeFi limitées |

**Score global : 81 / 100**

**Points forts :** contrats immuables (aucune clé admin) · collatéral ETH pur, totalement transparent · floor $1 dur via rédemptions  
**Risques :** intégrations DeFi moins nombreuses que USDC/DAI · peut trader au-dessus de $1 (plafond ~$1.10) · concentration ETH comme seul collatéral

---

## Historique de peg

- Jamais passé sous $1 depuis le lancement.
- Episodes de trading à $1.03–$1.06 lors de forte demande — normal, pas un risque.

---

## Liens
- [[Stablecoins-INDEX]]
- [[DAI]] · [[crvUSD]] · [[GHO]]
- [[3-3-2_Familles-Stablecoins]]
