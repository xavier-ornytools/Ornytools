# Ethena — USDe / sUSDe
Tags: #protocole #stablecoin #delta-neutral #DeFi #strategy-backed #rendement

---

## Définition

**Ethena** est un protocole DeFi qui émet **USDe**, un stablecoin synthétique dont le peg n'est pas garanti par un custodian fiat, mais par une **stratégie de couverture Delta Neutral** exécutée on-chain et sur des exchanges centralisés.

Ethena fonctionne en pratique comme un **hedge fund on-chain** : il prend des positions financières actives pour maintenir la stabilité de l'USDe tout en générant du rendement.

---

## Le Delta Neutral — Concept clé

Une position **Delta Neutral** est une position dont la valeur totale ne change pas quand le prix de l'actif sous-jacent bouge.

**Exemple simple :**
- Tu achètes 1 ETH à 3 000$ (position longue, exposure = +1 ETH)
- Tu ouvres un short de 1 ETH sur les futures perpétuels (exposure = -1 ETH)
- Ton exposition nette = 0 → si ETH monte ou baisse, tes gains et pertes s'annulent

Le portefeuille ne vaut pas plus ou moins selon le prix de l'ETH. En revanche, il génère du rendement via les **funding rates** payés par les positions longues.

---

## Comment Ethena crée l'USDe

1. L'utilisateur dépose des **USDC** (ou stETH, ETH, BTC)
2. Ethena achète de l'**ETH au comptant** (spot) avec ce dépôt
3. Simultanément, Ethena ouvre une **position short sur les futures perpétuels ETH** de taille équivalente — sur des CEX : Binance, Bybit, OKX, Deribit
4. Résultat : long ETH spot + short ETH futures → delta = zéro
5. L'USDe est émis à hauteur du dépôt (1 USDC déposé → ~1 USDe émis)

> La valeur du portefeuille d'Ethena reste stable en dollar quoi que fasse le marché.

---

## Source du rendement

Le rendement provient de deux sources :

**1. Funding rates sur les futures perpétuels**
Les marchés haussiers génèrent une demande de positions longues avec levier. Pour attirer les shorts, les exchanges paient des **funding rates** aux vendeurs à découvert.
- Ethena est short → Ethena perçoit ces paiements
- En phase haussière : 15 à 30% APY historique
- En phase baissière : le funding peut devenir négatif → Ethena paie

**2. Rendement du stETH**
Si l'utilisateur dépose du stETH plutôt que de l'USDC, Ethena perçoit en plus le rendement du staking Ethereum (~3-4% APY).

---

## sUSDe — Staked USDe

Pour percevoir le rendement généré par la stratégie, il faut **staker son USDe** :

| Étape | Détail |
|-------|--------|
| Dépôt | Déposer USDe dans le contrat de staking Ethena |
| Lock | **7 jours minimum** avant de pouvoir retirer |
| Token reçu | **sUSDe** — token à taux croissant (c-token) |
| Mécanisme | 1 sUSDe vaut progressivement plus d'USDe au fil du temps |

Sans staking, l'USDe ne génère aucun rendement. Il peut être utilisé en DeFi ou vendu sur le marché secondaire.

---

## Risques

| Risque | Description |
|--------|-------------|
| **Funding négatif** | En marché baissier prolongé, Ethena paie les longs → érosion du collatéral |
| **Risque de contrepartie CEX** | Les positions short sont sur Binance, Bybit… → risque d'exchange (hack, faillite) |
| **Dépegging temporaire** | En cas de panique ou rush de retraits, USDe peut se négocier sous $1 |
| **Risque de liquidation** | Si ETH chute brutalement avant que la couverture soit ajustée |

**Mitigation :** Ethena maintient un **fonds d'assurance** capitalisé pour absorber les périodes de funding négatif.

---

## Chiffres clés

- Lancement : début 2024
- TVL atteint : plusieurs milliards de dollars (top 3 stablecoin DeFi en 2024-2025)
- Chains : Ethereum, Arbitrum, BNB Chain, Mantle
- Rendement sUSDe : très variable selon les conditions de marché

---

## Liens
- [[3-3-2_Familles-Stablecoins]]
- [[S2-Stablecoins]]
- [[Marché-primaire]]
- [[Lido]] — stETH utilisé comme collatéral chez Ethena
- [[Aave]] — intégration de sUSDe comme collatéral
