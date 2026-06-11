---
tags:
  - strategie
  - analyse-risque
  - morpho-blue
  - levier
  - equite-tokenisee
  - backed-finance
  - spyx
date: 2026-06-05
statut: analysé
verdict: "🟠 Déconseillé — conditions d'entrée non réunies en juin 2026"
score: 52
grade: D
---

# Looping SPYx / Morpho Blue

**Date d'analyse :** 05/06/2026
**Analyste :** Xavier
**Verdict final :** 🟠 D — Déconseillé
**Score global :** 52/100

---

## Scorecard

```
┌─────────────────────────────────────────────────────┐
│  PROTOCOLE : Looping SPYx / Morpho Blue             │
│  DATE : 05/06/2026                                  │
├──────────────────────┬──────────────────────────────┤
│  Actifs              │  C                           │
│  Stratégies          │  D                           │
│  Protocole           │  B                           │
│  Dépendances         │  D                           │
│  Liquidité           │  C                           │
│  Sortie              │  C                           │
│  Résilience          │  E                           │
│  Transparence        │  B                           │
│  Rendement           │  D                           │
├──────────────────────┴──────────────────────────────┤
│  SCORE GLOBAL : 52/100    VERDICT : D Déconseillé   │
└─────────────────────────────────────────────────────┘
```

---

## Présentation rapide

| Champ | Réponse |
|-------|---------|
| Protocole principal | Morpho Blue (Ethereum) |
| Actif collatéral | SPYx — ERC-20 adossé 1:1 au SPY physique (Backed Finance) |
| Actif emprunté | USDC |
| Mécanisme | Looping ×3 : dépôt → emprunt → rachat → re-dépôt |
| Levier effectif | ×2.53 (LTV 60% / 3 boucles) |
| Seuil de liquidation | −29% S&P 500 (LTV 85%) |
| Capital de référence | 10 000$ → 25 330$ collat / 15 330$ dette |
| Taux d'emprunt | 4–8%/an (6% estimé) |
| Break-even réel | S&P > ~9%/an après frais |
| Coût aller-retour | 185–415$ (1.9–4.2% du capital) |

---

## Mécanique des 3 boucles

| Boucle | Emprunt USDC | Collatéral total | Dette totale | LTV |
|--------|-------------|-----------------|-------------|-----|
| Départ | — | 10 000$ | 0$ | 0% |
| Boucle 1 | 7 000$ | 17 000$ | 7 000$ | 41% |
| Boucle 2 | 4 900$ | 21 900$ | 11 900$ | 51% |
| Boucle 3 | 3 430$ | 25 330$ | 15 330$ | 60% |

---

## Analyse composant par composant

### Actifs — C (6/10)

SPYx est un token ERC-20 wrappé avec custodian centralisé (Backed Finance, Suisse). Le sous-jacent est solide (BlackRock SPY) mais la couche de garde introduit un risque réel : faillite du custodian, gel réglementaire, décorrélation SPYx/SPY. KYC obligatoire (3–7 jours) — exposition réglementaire supérieure à la DeFi standard.

### Stratégies — D (4/10)

×2.53 de levier sur actif volatile. Le rendement n'est pas organique : c'est de la spéculation amplifiée sur la direction du S&P 500. Break-even à >9%/an = quasi identique à la moyenne historique S&P (~10%/an). En dessous de 7%/an de performance S&P, sous-performe un ETF simple. Le backtesting repose sur 3 années exceptionnelles non représentatives du cycle moyen.

### Protocole — B (7/10)

Point fort de la stratégie. Morpho Blue : marchés isolés, immutables, plusieurs audits propres. Une fois déployé, personne ne peut modifier les paramètres. Pas de risque de gouvernance post-déploiement. Architecture solide.

### Dépendances — D (4/10)

Trois dépendances critiques en cascade :
- **Backed Finance** — custodian du SPY physique (faillite ou gel = SPYx sans valeur)
- **Chainlink** — oracle du prix SPY/USD pour Morpho
- **Circle/USDC** — actif emprunté, centralisé et freezable

Si l'une lâche, la position s'effondre. Ce ne sont pas des risques de code — ce sont des risques institutionnels réels.

### Liquidité — C (6/10)

TVL SPYx ~$8M. Position de $25k = 0.3% du marché, gérable en conditions normales. En stress (vente panique), slippage potentiel de 1.5–5%. Pas rédhibitoire pour la taille envisagée mais à surveiller.

### Sortie — C (6/10)

Exit possible mais coûteux : 185–415$ aller-retour = jusqu'à 4.2% du capital sur $10k. Pour un break-even à 9%/an, ces frais représentent presque 6 mois de rendement attendu. La méthode rééquilibrage (vs reset annuel) réduit significativement ce coût (~200–400$ économisés par cycle).

### Résilience — E (3/10)

Point faible critique. **3 des 5 grandes crises historiques auraient liquidé la position** :

| Crise | Drawdown S&P | Résultat |
|-------|-------------|---------|
| Dot-com 2000–2002 | −49% | 🔴 LIQUIDÉ |
| Crise 2008 | −57% | 🔴 LIQUIDÉ |
| COVID 2020 | −34% | 🔴 LIQUIDÉ |
| Bear 2022 | −25% | 🟡 SURVÉCU (4% de marge) |
| Hausse 2023–2025 | — | 🟢 SÉCURISÉ |

Le seuil −29% est dans la plage de n'importe quelle récession sérieuse. Aucun mécanisme de stop-loss automatique — survie conditionnelle à une tendance haussière structurelle continue.

### Transparence — B (7/10)

Morpho Blue : entièrement on-chain, vérifiable en temps réel via Morpho App. Backed Finance : attestations régulières des réserves. DeFi Saver disponible pour alertes automatiques. Documentation de la stratégie complète et honnête sur les risques.

### Rendement — D (4/10)

Backtesting 2023–2025 (+203%) basé sur 3 années exceptionnelles. Moyenne S&P historique : ~10%/an. Avec borrow rate à 6%, marge au-dessus du break-even : ~1%/an seulement. Si taux Morpho monte à 8% (fourchette haute), break-even passe à >11%/an — au-dessus de la moyenne historique.

---

## Ce que l'analyse interne ne dit pas

**Timing d'entrée défavorable (juin 2026)** — S&P sous pression (tarifs douaniers, craintes de récession). Entrer avec ×2.53 de levier dans un marché incertain amplifie un mauvais timing.

**Corrélation portefeuille** — WBTC en collateral sur Aave V3 déjà en place. Une crise macro (scénario −29% S&P) fait aussi chuter BTC. Deux positions sous pression simultanées = liquidation SPYx ET dégradation du ratio LTV Aave en même temps.

**Charge opérationnelle** — 2 min/jour minimum, réserve 1 500 USDC immobilisée, DeFi Saver configuré, capacité d'action en <1h si S&P −5% en séance. Niveau de monitoring élevé pour un profil en apprentissage.

---

## Conditions d'entrée recommandées

Pour envisager cette stratégie :
- S&P 500 en tendance haussière confirmée (pas de signe de retournement macro)
- Taux d'emprunt Morpho ≤ 6%/an
- Position Aave V3 confortable (LTV < 50%)
- Aucune des 3 conditions réunies en juin 2026

---

## 5 Questions critiques

**1. Que se passe-t-il si le S&P chute de 29% ?**
Liquidation totale. Tu perds l'essentiel de ta position, le liquidateur récupère ton collat avec décote. Perte proche de 100% du capital engagé.

**2. Que se passe-t-il si Backed Finance fait faillite ?**
SPYx perd son adossement au SPY physique. Valeur potentiellement nulle ou décote importante. Position Morpho liquidée ou insoluble.

**3. Que se passe-t-il si le taux d'emprunt Morpho monte à 8% ?**
Break-even passe à >11%/an S&P. La stratégie devient statistiquement perdante sur le long terme par rapport à un ETF simple.

**4. Qui contrôle réellement la position ?**
Morpho Blue est immutable (personne). Backed Finance contrôle le SPY physique. Circle contrôle l'USDC. Toi tu contrôles quand rembourser — mais dans un crash rapide, la fenêtre d'action est courte.

**5. Quel est le chemin de sortie en situation de crise ?**
Rembourser de l'USDC (depuis la réserve de 1 500$) pour repasser sous LTV 75%, puis réduire la position progressivement. Si le S&P chute −5%/jour, la fenêtre est de 5–6 jours avant liquidation. DeFi Saver peut automatiser le remboursement partiel.

---

## Sources / Document de référence

- [[Looping_etf_Morpho_blue.pdf]] — Guide complet produit par Xavier (Formation Alyra 2026)
- Morpho Blue : app.morpho.org
- Backed Finance : backed.fi
- DeFi Saver : defisaver.com

---

## Liens

- [[Scoring-ABCDF]] ← grille de notation utilisée
- [[DeFi-Strategy-Risk-Analysis]] ← template d'analyse
- [[Yuzu-Money-syzUSD]] ← autre analyse pour comparaison
- [[MOC-Alyra-DeFi-V2]]
