# 💧 Fournir de la liquidité : V2 vs V3

**Cours :** Alyra — Semaine 3 · Session Q&R Paul Rocchi  
**Date :** 04/06/2026  
**MOC :** [[MOC-Alyra-DeFi-V2]]  
**Tags :** #alyra #semaine3 #AMM #V2 #V3 #LP #liquidité #DEX #QuickSwap #Polygon

---

## 01 — V2 vs V3 : la différence clé

| | V2 | V3 |
|--|----|----|
| **Range de prix** | Infinie — liquidité sur toute la courbe | Choisie par le LP — concentrée sur une plage |
| **Efficience du capital** | Faible — capital dispersé hors zone active | Élevée — capital concentré autour du prix actuel |
| **Gestion** | Passive | Active — surveiller que le prix reste dans la range |
| **Risque IL** | Standard | Amplifié si le prix sort de la range |

> La V3 est née parce que la V2 est inefficiente : la majorité de la liquidité reste inactive, hors de la zone de prix où les swaps ont lieu.

---

## 02 — Exercice pratique : devenir LP en V2 sur Polygon

**Terrain de jeu :** blockchain **Polygon** (sidechain) — token natif **POL** pour payer le gas.

### Étapes

1. **Trouver la meilleure pool** → aller sur **Dex Screener**
   - Chercher la paire **POL / USDC**
   - Repérer la pool avec **le plus de liquidité** (= moins de price impact sur les swaps)

2. **Acheter du POL** → swapper sur **QuickSwap**
   - Vérifier le prix sur **CoinGecko** avant le swap
   - Contrôler le slippage (tester un slippage faible : ex. 0,01 %)
   - Plus de liquidité dans la pool = moins de price impact sur ton swap

3. **Déposer la liquidité** → QuickSwap → Pool → V2
   - Déposer les deux tokens simultanément (POL + USDC) dans la proportion du prix actuel
   - Vérifier la transaction sur **Polygonscan** (réseau POL)

4. **Vérifier dans Rabby** que les LP tokens sont bien reçus

---

## 03 — Plus de liquidité = moins de price impact

C'est la règle fondamentale : une pool **profonde** absorbe les ordres sans bouger le prix.
Une pool **peu liquide** → price impact élevé → le trader perd sur l'exécution.

> Quand tu choisis une pool pour swapper : toujours regarder la TVL et le volume. Une pool avec 50k de TVL et 1M de volume génère beaucoup de frais → bonne cible LP.

---

## 🔗 Liens connexes

- [[MOC-Alyra-DeFi-V2]]
- [[3-4-1_Chaines-Layer2-TVL]] — contexte chaînes
- [[3-4-3_Slippage-Frais-Pool]] — suite
- [[3-5-2_AMM-xyk]] — formule x*y=k
- [[3-5-4_Devenir-LP]] — guide complet LP

---

## ❓ À approfondir

- [ ] Faire l'exercice sur QuickSwap / Polygon
- [ ] Comprendre pourquoi le slippage à 0,01% peut faire rater une transaction
