# 🧪 Exercice — Staking ETH via Lido
**Formation Alyra · Semaine 2 · Jour 3 · Devoir à rendre**  
**MOC :** [[MOC-Alyra-DeFi-V2]] | [[Lido]] | [[Rabby]]  
**Tags :** #alyra #semaine2 #et voilaexercice #staking #lido #rabby #devoir

**Objectif :** maîtriser le cycle complet Achat ETH → Staking via Lido → Marché Primaire / Secondaire → Conversion wstETH.  
**Budget recommandé :** 400 USDC + ~10 USDC pour le gas.

---

## Phase 1 — Setup du Wallet Rabby

- [x] **1 · Installer Rabby.io**  
  Télécharger l'extension Chrome sur rabby.io. Vérifier que l'URL est exacte (risque phishing élevé sur les extensions wallet). Vérifier nombre d'installations + avis avant d'installer.

- [x] **2 · Créer un Dummy Wallet**  
  Créer un wallet de test dédié — NE PAS utiliser le wallet principal. Noter la seed phrase sur papier. Usage unique : tests de formation.

- [x] **3 · Déposer USDC et ETH**  
  Transférer depuis exchange (Coinbase, Binance, Mt Pelerin) : ~400 USDC + ~0,05 ETH pour le gas. Vérifier la réception sur DeBank ou Zerion avant de continuer.

- [x] **4 · Alimenter le Gas Account Rabby**  
  Dans Rabby, déposer 5 à 10 USDC sur le Gas Account intégré. Rabby convertit automatiquement en ETH pour payer les frais. Avantage : toutes les dépenses de gas apparaissent en USDC → plus facile à tracer en comptabilité.

---

## Phase 2 — Staker l'ETH via Lido (Marché Primaire)

Le **marché primaire** de Lido = interagir directement avec le smart contract Lido. Taux officiel 1:1 (moins les frais de gas). APY actuel : ~8,40%.

- [x] **5 · Simuler les routes sur DefiLlama Swap**  
  Aller sur swap.defillama.com. Simuler la route ETH → stETH via marché primaire (Lido) ET via marché secondaire. Comparer les prix : le secondaire donne légèrement moins de stETH (spread de liquidité).

- [x] **6 · Acheter de l'ETH — Swap USDC → ETH**  
  Sur DefiLlama Swap, acheter de l'ETH. Exemple : 50 USDC → ~0,024 ETH. Cliquer sur Approve (autorisation du smart contract à prélever les USDC) puis Swap. **Attention : deux transactions successives.**

- [x] **7 · Staker l'ETH sur Lido.fi**  
  Aller sur lido.fi. Connecter Rabby. Déposer l'ETH → recevoir du stETH au taux 1:1 (moins gas).

- [x] **8 · Convertir stETH → wstETH**  
  Sur Lido, wrapper le stETH en wstETH (Wrapped stETH). Le wstETH est un **c-token à taux fixe** : son prix en ETH augmente avec le temps. Avantage : compatible avec plus de protocoles DeFi (Aave, Uniswap, Pendle…).

---

## Checklist Sécurité — Avant Chaque Transaction

| Contrôle | Quoi vérifier |
|----------|---------------|
| **Approve** | Ne jamais approuver un contrat inconnu. Vérifier l'adresse sur Etherscan. Confirmer que c'est bien DefiLlama / Lido. |
| **Swap** | Relire le récapitulatif dans Rabby. Vérifier le label de sécurité du protocole. Si Rabby indique "Nouvelle interaction" → DANGER, stopper. |
| **Signal d'alarme** | Si tu as déjà interagi avec ce contrat ET que Rabby dit NON ou affiche un warning → NE PAS SIGNER. |
| **Validation** | Relire une dernière fois. Signer. Vérifier la confirmation sur Etherscan (txHash). |

---

## Phase 3 — Suivi Comptable Excel

Créer une feuille Excel / Google Sheets dédiée à la position Lido.

| Colonne | Type | Exemple | Notes |
|---------|------|---------|-------|
| Date | Date | 21/05/2026 | Format JJ/MM/AAAA |
| Événement | Texte | Gas account / Stake / Swap | Type d'opération |
| Token | Texte | USDC / ETH / stETH / wstETH | Actif concerné |
| Unité | Nombre | -10 / +0.9627 | Négatif = sortie, positif = entrée |
| Valeur EUR | Nombre | -10€ / +1 892€ | Prix au moment de l'opération |
| Prix ETH | Nombre | 2 000€ | Prix ETH du jour |

**Données observées lors de l'exercice :**

| Date | wstETH | ETH équivalent | Total position |
|------|--------|---------------|----------------|
| 21/05/2026 | 0.9627 | 0.1010 | 1.0637 ETH eq. |
| 22/05/2026 | 0.00618 | 0.007448 | 1.2352 ETH eq. |

**Récapitulatif protocole :**

| Protocole | Actif déposé | Token reçu | Yield APY | Valeur position |
|-----------|-------------|-----------|-----------|-----------------|
| Lido | ETH | stETH / wstETH | ~8.40% | nb wstETH × prix ETH |

---

## 🔗 Liens
- [[Lido]] — fonctionnement détaillé
- [[Rabby]] — wallet utilisé
- [[Marché-primaire]]
- [[MOC-Alyra-DeFi-V2]]
