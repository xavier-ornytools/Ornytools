# 🔀 Routes, Agrégateurs & Composabilité

**Cours :** Alyra — Semaine 3 · Session Q&R Paul Rocchi  
**Date :** 04/06/2026  
**MOC :** [[MOC-Alyra-DeFi-V2]]  
**Tags :** #alyra #semaine3 #agrégateur #composabilité #ODOS #DEX #route #LP

---

## 01 — Une même pool sur plusieurs protocoles

Une même paire de tokens peut exister sur **différents protocoles** (Uniswap, Curve, QuickSwap…), et sur un même protocole il y a des **paramètres différents** (frais 0,05 % / 0,3 % / 1 %, ranges V3…).

→ C'est pourquoi les **agrégateurs** sont utiles : ils comparent toutes ces sources de liquidité pour trouver la meilleure route.

---

## 02 — Agrégateurs : pourquoi et quand

**Agrégateur** = protocole qui profite de la liquidité de **tous les DEX** simultanément.

**Exemples :** ODOS, Velora, DefiLlama Swap (agrège plusieurs sources)

### Quand l'agrégateur apporte de la valeur

| Taille de transaction | Résultat |
|-----------------------|----------|
| Petite | L'agrégateur n'apporte pas grand-chose — un seul DEX suffit |
| **Grosse** | L'agrégateur fractionne l'ordre sur plusieurs pools → **plus de liquidité, moins de price impact, meilleur prix** |

> La taille de la transaction change la route ! Un swap de 100 USDC et un swap de 100 000 USDC n'empruntent pas les mêmes chemins.

**Test ODOS : ETH → USDC**  
La meilleure route est passée par **Uniswap puis Fluid** — deux protocoles enchaînés pour optimiser le prix final.

---

## 03 — Tracker sa pool

Après avoir déposé en LP, suivre l'activité de sa position sur :
- **Polygonscan** (pour Polygon) → voir les transactions entrantes/sortantes de sa pool
- **Revert Finance** → analyse détaillée (fees générés, IL, rendement réel)
- **Zerion / DeBank** → valeur globale de la position

---

## 04 — Composabilité : emprunter contre son LP token

Grâce à la **composabilité** de la DeFi, les LP tokens ne sont pas bloqués — on peut les utiliser comme **collatéral** pour emprunter.

Stratégie possible :
1. Déposer des tokens dans une pool → recevoir des LP tokens
2. Déposer les LP tokens sur un protocole de lending
3. Emprunter des stablecoins contre ces LP tokens
4. Réinvestir → **amplifier la stratégie**

> C'est le principe de la composabilité DeFi : chaque token issu d'un protocole peut être réutilisé dans un autre.

**Protocole à retenir pour cette stratégie → [[Tangent Finance]]**  
*(ex. Revert Finance propose aussi ça — mais Tangent est la recommandation de la session)*

---

## 🔗 Liens connexes

- [[MOC-Alyra-DeFi-V2]]
- [[3-4-3_Slippage-Frais-Pool]] — contexte frais
- [[3-4-5_Emprunter-contre-LP]] — suite
- [[3-5-4_Devenir-LP]] — guide LP

---

## ❓ À approfondir

- [ ] Tester ODOS sur un gros montant vs un petit et comparer les routes
- [ ] Comprendre comment Tangent Finance évalue les LP tokens comme collatéral
