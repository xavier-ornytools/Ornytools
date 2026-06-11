# 🏦 Emprunter contre son LP token

**Cours :** Alyra — Semaine 3 · Session Q&R Paul Rocchi  
**Date :** 04/06/2026  
**MOC :** [[MOC-Alyra-DeFi-V2]]  
**Tags :** #alyra #semaine3 #LP #emprunt #composabilité #TangentFinance #Morpho #lending

---

## 01 — Le principe

Un LP token représente une **part d'une pool de liquidité**. Grâce à la composabilité DeFi, ce token peut servir de **collatéral** pour emprunter.

**Tangent Finance** est le protocole recommandé pour cette stratégie : il permet d'**emprunter des stablecoins contre des LP tokens**.

---

## 02 — Schéma de la stratégie

```
Tokens A + B
     ↓  déposer sur AMM (QuickSwap, Uniswap…)
LP tokens
     ↓  déposer sur Tangent Finance
Emprunt stablecoin
     ↓  réinvestir (re-LP, yield farming…)
Rendement amplifié
```

**Risques additionnels :**
- Si le prix des tokens A/B baisse → valeur du LP baisse → risque de liquidation
- Double exposition à l'impermanent loss ET au risque de liquidation
- Levier = amplification dans les deux sens (gains ET pertes)

---

## 03 — Définition : Protocole

> **Protocole** = quelque chose de **construit sur la blockchain** et qui propose un **service**.

C'est la définition minimale posée en cours. Tout DEX, plateforme de lending, agrégateur est un protocole.

---

## 04 — À explorer

**Morpho** — protocole de lending optimisé, à explorer comme alternative ou complément à Aave pour les stratégies LP + emprunt.

---

## 🔗 Liens connexes

- [[MOC-Alyra-DeFi-V2]]
- [[3-4-4_Routes-Agregateurs-Composabilite]] — contexte composabilité
- [[Aave]] — lending de référence
- [[3-5-4_Devenir-LP]] — devenir LP

---

## ❓ À approfondir

- [ ] Tester Tangent Finance — quel collatéral accepté ? Quel LTV ?
- [ ] Explorer Morpho — différence avec Aave V3 ?
