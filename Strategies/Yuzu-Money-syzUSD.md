---
tags:
  - analyse-risque
  - due-diligence
  - stablecoin
  - yield-bearing
  - yuzu-money
  - syzUSD
---

# Analyse de Risque — Yuzu Money / syzUSD

**Date d'analyse :** 05/06/2026
**Analyste :** Xavier
**Verdict final :** 🟡 Prudence — position limitée, surveillance accrue
**Score global :** 56/100 — Grade **C**

---

## Scorecard

| Composant | Grade | Résumé |
|-----------|-------|--------|
| Actifs | 🟡 C | USDT0 bridgé (LayerZero) + CLOs — double dépendance externe |
| Stratégies | 🟡 C | Leverage loops + crédit institutionnel — rendement réel mais opaque |
| Protocole | 🟡 C | 1 audit Dedaub propre, PSM centralisé, équipe anonyme |
| Dépendances | 🟠 D | 5 dépendances critiques dont Fordefi (custodial) et Euler |
| Liquidité | 🟡 C | TVL $51M — taille correcte mais jeune protocole |
| Sortie | 🟡 C | PSM instantané en théorie, mais pausable unilatéralement |
| Résilience | 🟡 C | Overcollat. 103,3% — coussin de 3,3% seulement |
| Transparence | 🟢 B | PoR on-chain via Accountable, wallets publiés, mises à jour hebdo |
| Rendement | 🟡 C | 13% APY documenté, historique court (<18 mois) |
| **GLOBAL** | **🟡 C** | **56/100 — Prudence, position < 5% du portefeuille stablecoin** |

> Référentiel de notation : [[Scoring-ABCDF]]

---

## Étape 1 — Identification

| Champ | Réponse |
|-------|---------|
| Nom du protocole | Yuzu Money |
| Ticker | yzUSD (stablecoin) / syzUSD (vault de staking) |
| Blockchain | Multi-chain — USDT0 (LayerZero) comme dépôt principal |
| Type de produit | Stablecoin strategy-backed + yield-bearing vault ERC-4626 |
| TVL | ~$51,4M (DefiLlama, juin 2026, +4% semaine) |
| Market Cap | Non applicable (stablecoin) |
| APY actuel | ~13% sur syzUSD / ~26,9% sur yzPP (tranche junior) |
| Juridiction | Non communiquée — équipe Ouroboros Capital (anonyme) |
| Date de lancement | Début 2025 (construit en stealth depuis déc. 2024) |

---

## Étape 2 — Risque des Actifs

### Actif 1 : USDT0 (dépôt principal)

| Dimension | Analyse |
|-----------|---------|
| Risque de dépeg | Faible en temps normal — USDT0 est USDT bridgé via LayerZero. Si LayerZero est exploité ou pausé, USDT0 peut décrocher de l'USDT natif. |
| Risque de contrepartie | Tether (émetteur USDT) + LayerZero (bridge). Double dépendance. |
| Risque réglementaire | Tether opère dans une zone grise réglementaire. Risque de gel d'actifs ou de sanctions ciblées. |
| Risque de garde (custody) | USDT0 géré dans le MPC Fordefi d'Ouroboros Capital — semi-custodial, non entièrement on-chain. |
| Risque de liquidité | Bonne liquidité USDT0 sur les grands DEX, mais moindre que l'USDT natif sur Ethereum. |

### Actif 2 : CLOs AAA / T-Bills (stratégies sous-jacentes)

| Dimension | Analyse |
|-----------|---------|
| Risque de dépeg | N/A — actifs libellés USD. Risque de valeur si les taux remontent violemment. |
| Risque de contrepartie | Contreparties institutionnelles (fonds de crédit, émetteurs CLO). Opaque pour l'utilisateur DeFi. |
| Risque réglementaire | Actifs financiers régulés — potentiellement inaccessibles en cas de choc légal. |
| Risque de garde | Fordefi MPC — Ouroboros Capital conserve le contrôle effectif des clés. |
| Risque de liquidité | CLOs = liquidité limitée en situation de stress. T-Bills = très liquides. |

**Score Actifs : 5/10**

---

## Étape 3 — Risque des Stratégies

### Stratégie 1 : Leveraged Loops sur stablecoins (via Euler Finance)

| Dimension | Analyse |
|-----------|---------|
| Source du rendement | Écart entre taux d'emprunt et taux de lending — organique mais dépendant du marché. |
| Effet de levier | Oui — boucles de levier. Niveau non communiqué publiquement. |
| Risque de liquidation | Présent. Si les taux d'emprunt s'emballent ou si la liquidité Euler se réduit, la boucle peut se dénouer. |
| Dépendance au marché | Fort — ces rendements s'effondrent en bear market ou lors de compressions de taux. |
| Durabilité du rendement | Organique mais cyclique. Pas garanti sur 12 mois. |

### Stratégie 2 : Crédit institutionnel on-chain (T-Bills, CLOs AAA, prêts overcollateralisés)

| Dimension | Analyse |
|-----------|---------|
| Source du rendement | Coupons crédit + carry de taux. Partiellement RWA. |
| Effet de levier | Potentiellement via Pendle pour optimisation du rendement. |
| Risque de liquidation | Faible sur T-Bills, modéré sur CLOs en stress de marché. |
| Dépendance au marché | Modérée — rendements liés aux taux d'intérêt traditionnels. |
| Durabilité du rendement | Plus stable que le leverage DeFi pur, mais opaque pour l'investisseur. |

**Score Stratégies : 5/10**

---

## Étape 4 — Risque Protocole

### Smart Contracts & Audits

- [x] 1 audit réalisé : Dedaub (02–09 février 2026), 2 auditeurs
- [x] Issues trouvées : 2 low, 1 centralization note, 2 advisory — aucune critique
- [x] Code ERC-4626 (standard établi)
- [ ] Bug bounty : non confirmé publiquement
- [ ] 2e audit indépendant : absent à ce jour

| Auditeur | Date | Résultat |
|----------|------|----------|
| Dedaub | Fév. 2026 | 2 low (L1 : pause bypass edge case, L2 : storage gap), 1 note de centralisation (PSM) |

**Alerte audit :** le PSM est décrit comme "inherently centralized" dans le rapport Dedaub.

### Gouvernance & Contrôle

- [ ] Multisig sur fonctions admin : non confirmé publiquement
- [ ] Timelock sur upgrades : non confirmé
- [x] Fordefi MPC avec politique de whitelisting des protocoles
- [x] Sentinel : outil propriétaire de réponse aux hacks (transactions pré-signées)
- [x] Assurance smart contract via tiers (probablement Nexus Mutual)
- [ ] Équipe anonyme — Ouroboros Capital, aucun fondateur nommé publiquement

**Score Protocole : 6/10**

---

## Étape 5 — Risque de Dépendance

| Dépendance | Type | Criticité (1–5) | Remarque |
|------------|------|-----------------|----------|
| USDT0 / LayerZero | Stablecoin + bridge | 5 | Dépôt principal. Exploit ou pause = blocage entrées/sorties |
| Euler Finance | Protocole de lending | 5 | Marché yzUSD/syzUSD. Hack Euler = perte de collatéral |
| Pendle Finance | Yield trading | 3 | Liquidité et yield splitting. Moins critique mais important |
| Fordefi | Custody MPC | 5 | Contrôle effectif des fonds. Faillite ou hack = perte totale |
| Nexus Mutual (ou équivalent) | Assurance SC | 3 | Couverture partielle seulement, plafonnée |
| Accountable | Transparence PoR | 2 | Dashboard uniquement, pas de garde des fonds |

**Dépendance la plus critique :** Fordefi MPC — Ouroboros Capital contrôle les clés.
**Que se passe-t-il si elle disparaît ?** Accès aux fonds potentiellement bloqué. Risque de perte totale si l'équipe disparaît ou est compromise.

**Score Dépendances : 4/10**

---

## Étape 6 — Risque de Liquidité

| Indicateur | Valeur | Source |
|------------|--------|--------|
| Market Cap | N/A (stablecoin) | — |
| TVL | ~$51,4M | DefiLlama |
| Volume quotidien | À vérifier | DefiLlama |
| Liquidité DEX (Euler, Pendle) | Principale liquidité via Euler Finance | — |
| Slippage pour 10k$ | À vérifier | Euler/Pendle |
| Slippage pour 50k$ | Potentiellement significatif | — |
| Nombre de pools actifs | Euler + Pendle (au minimum) | — |
| Nombre de chaînes | Multi-chain via USDT0 | — |
| Concentration de la liquidité | TVL $51M = protocole de taille moyenne | — |

**Score Liquidité : 5/10**

---

## Étape 7 — Risque de Sortie

| Critère | Détail |
|---------|--------|
| Mécanisme de rédemption natif | Oui — PSM permet unstake instantané (syzUSD → yzUSD → USDT0) |
| KYC requis pour sortir | Non (DeFi) |
| Restrictions géographiques | Non confirmé |
| Délai de retrait | Théoriquement instantané via PSM |
| Frais de sortie | Non communiqués |
| Capacité réelle de sortie en stress | **Critique :** PSM est centralisé et peut être pausé par l'équipe |

**Alerte sortie :** le PSM peut être mis en pause par Ouroboros Capital. En situation de bank run, la sortie rapide n'est pas garantie.

**Score Sortie : 6/10**

---

## Étape 8 — Résilience (Stress Tests)

| Scénario | Impact probable | Récupération possible ? |
|----------|----------------|------------------------|
| Dépeg USDT0 (exploit LayerZero) | Dépegging yzUSD potentiel si USDT0 ne vaut plus 1$ | Difficile — dépend de la rapidité de Sentinel |
| Faillite/hack Euler Finance | Perte du collatéral utilisé dans les boucles de leverage | Partielle via assurance SC |
| Retrait simultané 30% des dépôts | PSM potentiellement saturé, liquidité Euler insuffisante | Risque de queue ou de pause du PSM |
| Exploit smart contract yzUSD/syzUSD | Couverture partielle via assurance tiers, réponse Sentinel | Partielle |
| Choc réglementaire (Tether/USDT gelé) | USDT0 inutilisable → yzUSD adossé à rien | Catastrophique |

**Note :** l'overcollateralisation à 103,3% est un coussin de seulement 3,3% au-dessus du peg — extrêmement mince en situation de stress.

**Score Résilience : 5/10**

---

## Étape 9 — Transparence

- [x] Proof of Reserve via Accountable.com — wallets on-chain publiés
- [x] Dashboard de transparence publié par l'équipe
- [x] Documentation GitBook complète
- [x] Répartition des expositions publiée
- [x] Distribution de yield hebdomadaire (tous les mercredis)
- [ ] Identité de l'équipe non divulguée
- [ ] Pas d'audit indépendant des réserves par un cabinet comptable traditionnel

**Score Transparence : 8/10**

---

## Étape 10 — Analyse du Rendement

| Indicateur | Détail |
|------------|--------|
| APY actuel syzUSD | ~13% |
| APY historique | Protocole récent — historique insuffisant |
| Origine du rendement | Leverage loops (Euler) + crédit institutionnel (T-Bills, CLOs) |
| Organique ou subventionné | Principalement organique, mais cycles de marché-dépendant |
| Durabilité estimée | Modérée — viable si taux DeFi restent élevés |
| Conditions d'effondrement | Bear market prolongé, compression des taux DeFi, choc de liquidité |

**Score Rendement : 6/10**

---

## Étape 11 — Score Final

| Catégorie | Score /10 |
|-----------|-----------|
| Actifs | 5 |
| Stratégies | 5 |
| Protocole (smart contracts + gouvernance) | 6 |
| Dépendances | 4 |
| Liquidité | 5 |
| Sortie | 6 |
| Résilience | 5 |
| Transparence | 8 |
| Rendement | 6 |
| **Total** | **50/90** |

**Score global : 56/100**

| Tranche | Verdict |
|---------|---------|
| 75–100 | 🟢 Entrée possible |
| 50–74 | 🟡 Prudence — position limitée, surveillance accrue |
| < 50 | 🔴 Ne pas entrer |

**Verdict : 🟡 Prudence**

**Risques critiques :**
- Fordefi MPC : Ouroboros Capital contrôle effectivement les clés → risque de contrepartie humaine non-nulle
- PSM centralisé et pausable → sortie non garantie en stress
- Overcollateralisation à 103,3% = coussin très mince
- Stack de dépendances lourd : LayerZero + Euler + Pendle + Fordefi
- Protocole jeune (< 18 mois) avec équipe anonyme

**Points forts :**
- Transparence exemplaire (PoR on-chain, dashboard Accountable)
- Audit Dedaub propre (aucune issue critique)
- Sentinel : réponse automatisée aux hacks
- Structure tranches (yzPP absorbe les premières pertes)
- 13% APY significatif pour un stablecoin overcollateralisé

**Montant max recommandé :** <5% du portefeuille stablecoin — à réévaluer après un 2e audit et une meilleure visibilité sur la gouvernance.

---

## 5 Questions Critiques

**1. Que se passe-t-il si le principal collatéral perd son peg ?**
USDT0 est USDT bridgé via LayerZero. Un exploit du bridge ou un gel Tether déclencherait un dépegging d'yzUSD. Le coussin de 3,3% d'overcollateralisation serait insuffisant. La tranche yzPP absorberait les premières pertes, mais les holders syzUSD seraient exposés au-delà.

**2. Que se passe-t-il si la principale dépendance disparaît demain ?**
Si Fordefi (MPC custodian) est hacké ou fait faillite, l'accès aux fonds peut être bloqué. L'équipe Ouroboros Capital est le seul lien entre les fonds et les utilisateurs. C'est le risque de contrepartie central et non-réductible de ce protocole.

**3. Que se passe-t-il si 30 % des investisseurs veulent sortir simultanément ?**
Le PSM peut être saturé ou mis en pause par l'équipe. La liquidité Euler est insuffisante pour absorber un retrait de ~$15M sans slippage majeur. Les sorties seraient ralenties ou bloquées temporairement.

**4. Qui contrôle réellement le protocole ?**
Ouroboros Capital via le wallet Fordefi MPC. L'équipe est anonyme ("OG DeFi yield farmers"). La gouvernance est effective centralisée malgré le token YUZU — aucun timelock ou multisig confirmé publiquement.

**5. Quel est le chemin de sortie le plus fiable en situation de crise ?**
PSM natif (syzUSD → yzUSD → USDT0) si non pausé. Sinon, vendre syzUSD sur Euler Finance contre un stablecoin avec potentiellement du slippage. Il n'existe pas de chemin de sortie garanti si le PSM est pausé.

---

## Sources consultées

- [x] DefiLlama — TVL Yuzu Money (~$51,4M)
- [x] GitBook Yuzu Money — documentation officielle
- [x] Dedaub — rapport d'audit YuzuUSD PSM (fév. 2026)
- [x] Twitter Ouroboros Capital — informations sur l'architecture Fordefi
- [x] IQ.wiki — overview Yuzu Money
- [x] Euler Finance — position syzUSD
- [ ] DeFiSafety — score non disponible (protocole trop récent)
- [ ] DeBank — vérifier l'exposition de son portefeuille

---

## Liens

- [[MOC-Alyra-DeFi-V2]]
- [[DeFi-Strategy-Risk-Analysis]] ← template utilisé
- [[Protocol-Risk-Analysis]]
- [DefiLlama — Yuzu Money](https://defillama.com/protocol/yuzu-money)
- [GitBook Yuzu Money](https://yuzu-money.gitbook.io/yuzu-money)
- [Audit Dedaub](https://dedaub.com/audits/yuzu-money/yuzuusd-psm-february-09-2026/)
