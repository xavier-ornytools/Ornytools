# Lido — Staking ETH / wstETH
**Protocole :** [[Lido]]  
**Réseau :** Ethereum  
**Statut :** 🟡 En cours (exercice formation)  
**Ouverture :** 21/05/2026  
**Dernière mise à jour :** 04/06/2026  
**Tags :** #stratégie #lido #staking #stETH #wstETH #LST #formation

---

## Résumé en une phrase

> Staker de l'ETH via Lido pour recevoir du wstETH, un token porteur de rendement utilisable comme collatéral en DeFi.

---

## Structure de la Position

| Paramètre | Valeur |
|-----------|--------|
| Actif déposé | ETH (~0,024 ETH d'exercice) |
| Token reçu | stETH → converti en wstETH |
| wstETH détenu | ~0.9627 |
| ETH équivalent | ~1.0637 ETH eq. (au 21/05/2026) |
| APY | ~8,40% (variable) |
| Réseau | Ethereum mainnet |

---

## Logique de la Stratégie

**Objectif :** générer un rendement passif sur ETH via le staking liquid, tout en conservant la liquidité (contrairement au staking solo qui bloque les fonds).

**wstETH vs stETH :**
- **stETH** = rebase quotidien (le solde augmente automatiquement dans le wallet)
- **wstETH** = c-token (le taux de change stETH/wstETH augmente, le solde reste fixe) → plus simple à utiliser dans la DeFi et moins de problèmes comptables

**Utilisation avancée possible :** déposer le wstETH comme collatéral sur Aave pour emprunter des stablecoins → levier sur le rendement ETH.

---

## Suivi du Risque

### Indicateurs à surveiller

| Indicateur | Valeur cible | Seuil d'alerte |
|------------|-------------|----------------|
| APY Lido staking | > 3% | < 2% (réduire l'intérêt) |
| Spread stETH/ETH | < 0,5% | > 2% (dépegging) |
| Part Lido dans le staking ETH total | < 33% | > 33% (risque de centralisation) |
| Nb de validateurs actifs | stable | baisses soudaines |

### Scénarios de stress

**Dépegging stETH :**
En cas de panique (comme en juin 2022 lors de l'effondrement de Terra), le stETH peut se négocier avec un discount par rapport à l'ETH sur les marchés secondaires. Le wstETH suit le même mouvement. Position pas liquidée mais valeur temporairement réduite.

**Slashing d'un node operator :**
Si un node operator opéré par Lido est slashé sur le réseau Ethereum, une petite fraction des récompenses peut être réduite. Lido dispose d'un fonds de couverture.

**Risque de centralisation Ethereum :**
Lido contrôle ~28% du staking ETH total. Si la part dépasse 33%, cela représente un risque systémique pour Ethereum. Surveiller via rated.network.

---

## Plan d'action

| Condition | Action |
|-----------|--------|
| APY < 2% | Évaluer alternatives (rETH/Rocket Pool, EigenLayer restaking) |
| Spread stETH > 2% | Conserver, ne pas vendre dans la panique |
| Besoin de liquidités | Vendre le wstETH sur le marché secondaire (Curve, Uniswap) |
| Opportunité collatéral | Déposer wstETH sur Aave pour emprunter stables |

---

## Travail à faire avec Claude

- [ ] Calculer la valeur actuelle de la position (nb wstETH × prix ETH du jour)
- [ ] Comparer Lido vs Rocket Pool (rETH) sur les métriques risque/rendement
- [ ] Étudier l'utilisation du wstETH comme collatéral Aave (stratégie avancée)
- [ ] Suivre l'évolution de la part de marché Lido

---

## Historique des ajustements

| Date | wstETH | ETH eq. | Action |
|------|--------|---------|--------|
| 21/05/2026 | 0.9627 | 1.0637 ETH | Exercice formation Alyra S2 J3 |
| 22/05/2026 | +0.00618 | 1.2352 ETH | Accumulation de récompenses |

---

## Liens
- [[Lido]]
- [[S2-J3_Exercice-Staking-Lido]]
- [[Aave-WBTC-USDT-Arbitrum]]
- [[Risques-DeFi]]
- [[MOC-Alyra-DeFi-V2]]
