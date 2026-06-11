# ⚠️ Slippage, Frais & Part de Pool

**Cours :** Alyra — Semaine 3 · Session Q&R Paul Rocchi  
**Date :** 04/06/2026  
**MOC :** [[MOC-Alyra-DeFi-V2]]  
**Tags :** #alyra #semaine3 #slippage #frais #LP #pool #QuickSwap #Polygon

---

## 01 — Le piège du slippage trop bas

> ⚠️ Si le slippage est réglé **trop bas** et que la transaction ne passe pas (revert), on paie **quand même les frais de gas** → double peine.

Fréquent quand le réseau est **surchargé** : le prix bouge entre l'envoi et l'exécution, dépasse le slippage max autorisé → la tx est annulée, mais le gas est consommé.

**Bonne pratique :** adapter le slippage au contexte :
- Stablecoins ou réseau calme → 0,1 % suffit
- Altcoins volatils ou réseau chargé → 0,5 à 1 %
- Ne jamais mettre 0,01 % sur un token volatile

---

## 02 — Part de pool & frais

**Règle clé : 1 % de la pool = 1 % des frais**

Ta part des frais générés est strictement proportionnelle à ta part de la TVL totale de la pool.

**Exemple de l'exercice QuickSwap (Polygon) :**
- Max disponible dans la pool : 49,79 POL + 4,516 USDC
- Dépôt → je récupère **0,12 LP tokens**
- Ces LP tokens représentent ma part dans la pool → c'est mon "ticket de caisse"

---

## 03 — Pool Auto-Compound

Sur certaines pools (ex. QuickSwap V2), les frais générés ne sont **pas distribués en tokens séparés** — ils sont **réinvestis automatiquement** dans la pool.

Conséquence :
- Le **nombre de LP tokens** ne change pas
- Mais la **valeur de chaque LP token augmente** avec le temps (il représente plus de tokens sous-jacents)

**Comment suivre sa position :**
- Soit suivre le **nombre de LP tokens** × prix unitaire
- Soit suivre la **valeur totale en USD** sur Revert Finance ou Zerion

> Ce mécanisme ressemble au wstETH de Lido : le nombre de tokens reste fixe, mais chaque token vaut davantage en sous-jacent.

---

## 🔗 Liens connexes

- [[MOC-Alyra-DeFi-V2]]
- [[3-4-2_Liquidite-V2-V3]] — contexte LP V2
- [[3-4-4_Routes-Agregateurs-Composabilite]] — suite
- [[3-5-2_AMM-xyk]] — slippage & price impact expliqués

---

## ❓ À approfondir

- [ ] Quel est le mécanisme exact de l'auto-compound sur QuickSwap V2 ?
- [ ] Comment lire sa position LP sur Polygonscan ?
