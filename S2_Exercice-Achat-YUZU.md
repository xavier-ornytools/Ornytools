# 🧪 Exercice — Achat de Stablecoins YUZU
**Formation Alyra · Semaine 2 · Exercice pratique**  
**MOC :** [[MOC-Alyra-DeFi-V2]] | [[YUZU]] | [[Rabby]]  
**Tags :** #alyra #semaine2 #exercice #stablecoin #YUZU #achat #devoir

**Objectif :** maîtriser la procédure complète pour acheter et gérer des stablecoins funds-backed (YUZU), en appliquant la checklist de sécurité et l'analyse des risques de protocole avant tout dépôt.

---

## Avant d'acheter — Due Diligence obligatoire

Avant tout achat d'un stablecoin non-fiat-backed, vérifier les risques de protocole.

- [x] **Consulter [[Pharos-Watch]]** sur YUZU — lire le rapport complet
- [x] **Vérifier les audits** : qui a audité les smart contracts ? Quand ? Résultats ?
- [x] **Vérifier la TVL** sur DefiLlama — est-elle stable ou en baisse ?
- [x] **Vérifier la composition du fonds** : quelles stratégies déploient le capital ?
- [x] **Identifier la tranche choisie** : y7USD (base) / Sy7USD (senior) / PPUSD (junior)
- [x] **Comprendre le mécanisme de rédemption** : peut-on sortir facilement ? Délai ?

> ⚠️ Si une des vérifications échoue → NE PAS déposer. Revenir à [[Pharos-Watch]] pour comprendre le risque.

---

## Phase 1 — Préparer son Wallet

- [x] **Utiliser le Dummy Wallet** (NE PAS utiliser le wallet principal pour un premier test)
- [x] **Vérifier le solde** : avoir assez d'USDC + ETH pour le gas
- [x] **Alimenter le Gas Account Rabby** : 5–10 USDC → Rabby convertit en ETH automatiquement
- [x] **Vérifier la réception des fonds** sur DeBank avant de continuer

---

## Phase 2 — Identifier la Route d'Achat

YUZU peut s'acheter via deux routes selon la disponibilité :

### Route A — Marché Primaire (directement sur le protocole YUZU)
- Aller sur le site officiel YUZU
- Vérifier l'URL exacte (risque phishing)
- Connecter Rabby
- Déposer USDC directement → recevoir y7USD au taux officiel

### Route B — Marché Secondaire (via un DEX)
- Aller sur swap.defillama.com
- Simuler la route USDC → y7USD
- Comparer le prix avec le marché primaire
- Le secondaire donne généralement un léger discount (spread de liquidité)

- [x] **Simuler les deux routes** sur DefiLlama Swap et comparer les prix
- [x] **Choisir la meilleure route** (primaire si spread > 0,5% sur le secondaire)

---

## Phase 3 — Choisir sa Tranche

| Tranche | Token | Rendement | Risque | Recommandé si |
|---------|-------|-----------|--------|---------------|
| Base | y7USD | Moyen (si staké) | Moyen | Test initial |
| Senior | Sy7USD | Plus faible | Minimal | Profil prudent |
| Junior | PPUSD | Plus élevé | Maximum | Connaissance avancée du protocole |

- [x] **Choisir sa tranche** selon son profil de risque
- [x] **Lire les conditions de staking** : durée de lock ? Pénalité de sortie anticipée ?

---

## Phase 4 — Exécuter l'Achat

### Checklist sécurité — Avant chaque transaction

| Contrôle | Quoi vérifier |
|----------|---------------|
| **Approve** | Ne jamais approuver un contrat inconnu. Vérifier l'adresse sur Etherscan. |
| **Contrat YUZU** | Vérifier que l'adresse correspond à celle listée sur le site officiel et Etherscan. |
| **Rabby warning** | Si Rabby indique "Nouvelle interaction" → vérifier l'adresse avant de signer. |
| **Signal d'alarme** | Si warning inattendu → STOP. Ne pas signer. |
| **Validation** | Relire le récapitulatif. Signer. Vérifier sur Etherscan (txHash). |

- [x] **Approve** : autoriser le smart contract YUZU à prélever les USDC
- [x] **Dépôt** : envoyer les USDC → recevoir le token de la tranche choisie
- [x] **Vérifier la réception** du token dans Rabby et sur DeBank
- [x] **Confirmer sur Etherscan** (noter le txHash)

---

## Phase 5 — Staking (si y7USD)

Pour activer le rendement sur y7USD :

- [x] **Aller sur l'interface de staking YUZU**
- [x] **Vérifier la durée de lock** avant de staker
- [x] **Staker les y7USD** → recevoir le token staké (rendement activé)
- [x] **Noter la date de fin de lock** dans le suivi comptable

---

## Phase 6 — Suivi Comptable

Même structure que pour Lido — créer une ligne dans le fichier Excel de suivi :

| Date | Événement | Token | Unité | Valeur EUR | Notes |
|------|-----------|-------|-------|------------|-------|
| | Achat YUZU | USDC → y7USD | | | Tranche : [base/senior/junior] |
| | Staking | y7USD | | | Lock jusqu'au : |
| | Récompenses | | | | |

---

## Analyse des risques post-achat

Une fois la position ouverte, surveiller régulièrement :

| Indicateur | Où vérifier | Fréquence |
|------------|-------------|-----------|
| TVL du fonds YUZU | DefiLlama | Hebdomadaire |
| Rendement réel vs annoncé | Interface YUZU | Hebdomadaire |
| Alerte Pharos Watch | [[Pharos-Watch]] | À chaque mise à jour |
| Spread y7USD/USDC | DEX (Curve/Uniswap) | En cas de sortie |

---

## 🔗 Liens
- [[YUZU]] — mécanisme complet
- [[Pharos-Watch]] — analyse des risques de protocole
- [[3-3-2_Familles-Stablecoins]] — contexte funds-backed stablecoin
- [[S2-J3_Exercice-Staking-Lido]] — exercice similaire (Lido)
- [[Rabby]]
- [[MOC-Alyra-DeFi-V2]]
