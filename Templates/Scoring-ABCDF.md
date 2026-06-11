---
tags:
  - template
  - scoring
  - analyse-risque
  - référentiel
---

# Système de Scoring DeFi — A à F

Référentiel de notation pour l'évaluation des stratégies DeFi.
Utilisé conjointement avec [[DeFi-Strategy-Risk-Analysis]].

---

## Échelle générale

| Grade | Score /10 | Score /100 | Signification | Verdict |
|-------|-----------|------------|---------------|---------|
| 🟢 A | 8,5 – 10 | 85 – 100 | Risque faible, standard institutionnel | Entrée possible |
| 🟢 B | 7 – 8,4 | 70 – 84 | Risque maîtrisé, points de vigilance mineurs | Entrée possible |
| 🟡 C | 5,5 – 6,9 | 55 – 69 | Risque modéré, surveillance active requise | Prudence |
| 🟠 D | 3,5 – 5,4 | 40 – 54 | Risque élevé, position très limitée | Déconseillé |
| 🔴 E | 2 – 3,4 | 25 – 39 | Risque très élevé, exposition dangereuse | À éviter |
| ⛔ F | 0 – 1,9 | 0 – 24 | Risque critique / rédhibitoire | Ne pas entrer |

> **Règle des F et E :** un seul composant noté F ou deux composants notés E suffisent à reclasser le score global en D minimum, indépendamment des autres notes.

---

## Grille par composant

### 1. Actifs sous-jacents

| Grade | Critères |
|-------|----------|
| 🟢 A | Actifs natifs on-chain (USDC, ETH, WBTC). Pas de bridge, pas de dépendance custodiale. Liquidité profonde. |
| 🟢 B | Actifs réputés avec légère dépendance externe. Ex : stETH, USDT natif Ethereum. |
| 🟡 C | Actifs bridgés ou wrappés (USDT0, wBTC). Dépendance à un bridge ou un custodian. |
| 🟠 D | Actifs avec risque de dépeg documenté ou collatéral opaque (CLOs, crédit privé on-chain). |
| 🔴 E | Actifs à liquidité faible ou historique de dépeg. |
| ⛔ F | Actifs non auditables, collatéral fictif ou non vérifiable. |

### 2. Stratégies de rendement

| Grade | Critères |
|-------|----------|
| 🟢 A | Rendement 100% organique, pas de levier, source simple et vérifiable (fees DEX, staking natif). |
| 🟢 B | Rendement organique avec levier faible (<2x), stratégie documentée et comprise. |
| 🟡 C | Levier modéré ou rendement partiellement subventionné. Stratégie compréhensible mais complexe. |
| 🟠 D | Levier élevé, rendement dépendant de conditions de marché spécifiques, ou crédit institutionnel opaque. |
| 🔴 E | Rendement non expliqué, stratégie boîte noire, levier >5x. |
| ⛔ F | Rendement insoutenable ou ponzi évident. |

### 3. Protocole (smart contracts + gouvernance)

| Grade | Critères |
|-------|----------|
| 🟢 A | 2+ audits majeurs (Trail of Bits, OpenZeppelin, Certik), 0 critique, multisig + timelock ≥72h, équipe publique, 0 incident. |
| 🟢 B | 1-2 audits propres, multisig confirmé, timelock présent, équipe partiellement publique. |
| 🟡 C | 1 audit propre, PSM ou fonction admin centralisée, équipe anonyme mais track record positif. |
| 🟠 D | Audit avec findings majeurs non tous résolus, pas de timelock confirmé, ou équipe inconnue sans historique. |
| 🔴 E | Pas d'audit, ou exploit passé non entièrement résolu. |
| ⛔ F | Code non vérifié, clé admin unique, ou rug pull possible. |

### 4. Dépendances

| Grade | Critères |
|-------|----------|
| 🟢 A | ≤2 dépendances externes, toutes de premier rang (Chainlink, Aave, Uniswap). Aucune dépendance custodiale. |
| 🟢 B | 2-3 dépendances, protocoles établis, criticité modérée. |
| 🟡 C | 3-4 dépendances incluant une de criticité élevée (bridge, stablecoin tiers). |
| 🟠 D | 4-5 dépendances dont plusieurs critiques, ou une dépendance custodiale centralisée. |
| 🔴 E | Stack de dépendances complexe avec des maillons fragiles ou peu audités. |
| ⛔ F | Dépendance unique à un tiers inconnu ou opaque contrôlant les fonds. |

### 5. Liquidité

| Grade | Critères |
|-------|----------|
| 🟢 A | TVL >$500M, présence sur ≥3 chaînes, slippage <0,1% pour $100k. |
| 🟢 B | TVL $100M–$500M, slippage <0,5% pour $50k, plusieurs pools actifs. |
| 🟡 C | TVL $20M–$100M, slippage acceptable pour <$20k, liquidité concentrée sur 1-2 pools. |
| 🟠 D | TVL <$20M ou liquidité fortement concentrée, slippage >1% pour $10k. |
| 🔴 E | Liquidité insuffisante, sortie difficile hors conditions normales. |
| ⛔ F | Pas de liquidité secondaire, sortie uniquement via le protocole. |

### 6. Sortie (rédemption)

| Grade | Critères |
|-------|----------|
| 🟢 A | Rédemption natale instantanée, non censurable, pas de KYC, pas de frais. |
| 🟢 B | Rédemption rapide (<24h), mécanisme décentralisé, frais minimes. |
| 🟡 C | Rédemption possible mais délai ou frais notables, mécanisme centralisé mais opérationnel. |
| 🟠 D | Rédemption pausable par l'équipe, délai potentiellement long en stress. |
| 🔴 E | KYC requis, restrictions géographiques, ou historique de blocage des retraits. |
| ⛔ F | Fonds bloqués, rédemption impossible ou conditionnelle. |

### 7. Résilience (stress tests)

| Grade | Critères |
|-------|----------|
| 🟢 A | Overcollateralisation >150%, résiste à tous les stress tests, isolation des pertes prouvée. |
| 🟢 B | Overcollateralisation >120%, mécanismes de protection actifs, historique solide. |
| 🟡 C | Overcollateralisation 105-120%, tranche junior absorbe les pertes, résilience limitée en stress extrême. |
| 🟠 D | Overcollateralisation <105%, ou mécanismes de protection non testés en conditions réelles. |
| 🔴 E | Pas d'overcollateralisation, ou protocole qui a subi un bank run partiel. |
| ⛔ F | Protocole qui a perdu des fonds utilisateurs ou fait défaut. |

### 8. Transparence

| Grade | Critères |
|-------|----------|
| 🟢 A | PoR en temps réel on-chain, équipe publique, dashboard complet, attestations comptables régulières. |
| 🟢 B | PoR on-chain, wallets publiés, documentation complète, mises à jour régulières. |
| 🟡 C | PoR via tiers (Accountable, Chainlink), documentation correcte, équipe partiellement transparente. |
| 🟠 D | Réserves déclarées mais non vérifiables on-chain, documentation incomplète. |
| 🔴 E | Pas de PoR, équipe totalement anonyme, pas de dashboards publics. |
| ⛔ F | Opacité totale, aucune information vérifiable. |

### 9. Rendement (qualité et durabilité)

| Grade | Critères |
|-------|----------|
| 🟢 A | Rendement stable sur ≥2 ans, 100% organique, source simple, APY prévisible. |
| 🟢 B | Rendement stable sur ≥1 an, majoritairement organique, historique solide. |
| 🟡 C | Rendement variable mais documenté, partiellement organique, historique court (<18 mois). |
| 🟠 D | Rendement instable, dépendant de conditions spécifiques, ou partiellement subventionné. |
| 🔴 E | Rendement élevé sans explication claire, ou effondrement historique documenté. |
| ⛔ F | Rendement insoutenable, promesses non tenues, ou source inconnue. |

---

## Scorecard visuelle (format Obsidian)

```
┌─────────────────────────────────────────────────────┐
│  PROTOCOLE : _______________     DATE : JJ/MM/AAAA  │
├──────────────────────┬──────────────────────────────┤
│  Actifs              │  ___                         │
│  Stratégies          │  ___                         │
│  Protocole           │  ___                         │
│  Dépendances         │  ___                         │
│  Liquidité           │  ___                         │
│  Sortie              │  ___                         │
│  Résilience          │  ___                         │
│  Transparence        │  ___                         │
│  Rendement           │  ___                         │
├──────────────────────┴──────────────────────────────┤
│  SCORE GLOBAL : ___    VERDICT : ___                │
└─────────────────────────────────────────────────────┘
```

---

## Conversion score numérique → grade

| Score /10 | Grade |
|-----------|-------|
| 9 – 10 | 🟢 A |
| 7 – 8 | 🟢 B |
| 6 | 🟡 C |
| 5 | 🟡 C |
| 4 | 🟠 D |
| 3 | 🔴 E |
| 1 – 2 | 🔴 E |
| 0 | ⛔ F |

> Le score /10 de l'analyse numérique et le grade lettre sont interchangeables.
> La grille par composant ci-dessus prime sur la conversion mécanique : un critère peut justifier un D même à 5/10 si un risque rédhibitoire est identifié.

---

## Liens

- [[DeFi-Strategy-Risk-Analysis]] ← template d'analyse complet
- [[MOC-Alyra-DeFi-V2]]
