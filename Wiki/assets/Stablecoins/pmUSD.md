1# pmUSD — Precious Metals USD

**Issuer :** RAAC (Real Asset Acquisition Corp)  
**Type :** RWA (or / métaux précieux)  
**Tags :** #stablecoin #RWA #ornytools #RAAC #or #metaux-precieux #grade-D #risque-eleve

---

## Identité

**Définition :** Stablecoin overcollateralisé adossé à des métaux précieux tokenisés (XAU — or). Émis via un CDP contre des tokens ERC-20 représentant de l'or physique. Peg défendu par un PSM via Sky Protocol.

**Famille :** RWA overcollateralized — le collatéral est de l'or physique tokenisé, pas du crypto natif.  
**Backing :** XAU (or tokenisé) avec attestations Chainlink Proof of Reserves en temps réel.

---

## Mécanisme de peg

Deux mécanismes combinés, mais structurellement en tension :
1. **CDP XAU** : dépôt d'or tokenisé → mint pmUSD au ratio cible
2. **PSM Sky Protocol** : échange sUSDS ↔ pmUSD pour défendre le peg

**Problème fondamental** : l'or fluctue en USD → le peg $1 est constamment sous pression. 450+ dépeg events depuis le lancement (mouvements du prix de l'or vs USD).

---

## Scores OrnyTools

| Axe | Score | Détail |
|-----|-------|--------|
| Stabilité du peg | 32 | 450+ dépeg events — structurel, pas accidentel |
| Contrepartie | 40 | RAAC récent + dépendance Sky Protocol pour PSM |
| Protocole | 36 | PSM avec shutoff automatique si sUSDS < 20% des actifs |
| Liquidité | 28 | Supply ~9.5M, très peu de pools profondes |

**Score global : 34 / 100 — Grade D (Pharos Watch)**

**Points forts :** Chainlink Proof of Reserves en temps réel · overcollateralisé contre XAU · attestations authentiques des réserves d'or  
**Risques :** 450+ dépeg events = problème structurel (or ≠ USD) · PSM dépend entièrement de Sky Protocol · shutoff automatique PSM si réserves sUSDS < 20% (peut geler les rachats)

---

## Historique de peg

- Depuis le lancement en 2024 : 450+ épisodes de dépeg liés à la fluctuation du cours de l'or. Ce n'est pas un bug — c'est la nature même du backing.
- **Grade D** sur Pharos Watch, **F** en résilience et décentralisation.

> **À retenir :** pmUSD n'est pas un stablecoin USD au sens classique. C'est une exposition XAU avec un soft-peg USD défendu par une infrastructure externe. L'utiliser comme stable = risque majeur.

---

## Liens
- [[Stablecoins-INDEX]]
- [[Pharos-Watch]] — source principale de l'analyse
- [[4-3_Curve-Convex-Beefy-LP-Avance]] — contexte exercice Convex
- [[3-3-2_Familles-Stablecoins]]
