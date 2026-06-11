# 03 – Scalabilité (Transactions et frais)

Tags: #blockchain #scalabilité #blocktime #blockspace #frais #TPS #semaine1

---

## Le bloc : unité de base de la chaîne

### Block time
- Chaque bloc est créé à intervalle fixe (**block time**)
- Bitcoin : **~10 minutes** par bloc
- Ethereum : **~12 secondes** par bloc

### Block space
- Chaque bloc a une **limite de taille** (block space)
- → Nombre **limité** de transactions par bloc

---

## Sélection des transactions

Les validateurs choisissent quelles transactions inclure dans leur bloc.
- Ils sont **rationnels** → ils sélectionnent les transactions avec les **frais les plus élevés**

### Marché libre des frais
- Les utilisateurs **choisissent eux-mêmes leurs frais**
- Plus les frais sont élevés → plus de chances d'être inclus dans le **prochain bloc**
- En période de forte demande → **surenchère** (gas wars)

---

## Scalabilité : la limite des blockchains L1

> **Le block time × le block space = débit maximal (TPS)**

| Blockchain | Block time | TPS approximatif |
|-----------|-----------|-----------------|
| Bitcoin | ~10 min | ~7 TPS |
| Ethereum | ~12 sec | ~13 TPS |

À titre de comparaison, **Visa traite ~24 000 TPS**.

→ C'est le **problème de scalabilité** des blockchains L1, résolu en partie par les **Layer 2** (ex: Arbitrum).

---

## Vocabulaire clé

| Terme | Définition |
|-------|-----------|
| **Block time** | Intervalle entre deux blocs |
| **Block space** | Capacité maximale d'un bloc (en données) |
| **TPS** | Transactions Par Seconde |
| **Gas** | Unité de mesure des frais sur Ethereum |
| **Mempool** | File d'attente des transactions non encore confirmées |

---

Liens : [[01-Principe-General]] | [[02-POW-et-POS]] | [[04-Coin-et-Token]] | [[MOC-Alyra-DeFi-V2]]
