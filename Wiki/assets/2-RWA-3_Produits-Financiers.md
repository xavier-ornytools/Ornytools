# 📈 La Tokenisation de Produits Financiers
**Semaine 2 · Actifs tokenisés**
Tags: #alyra #rwa #produits-financiers #obligations #etf #semaine2

---

## Le constat

- La tokenisation d'**actions** fait beaucoup parler d'elle
- Mais c'est la tokenisation d'**obligations et d'ETFs d'obligations** qui a trouvé son **product market fit** réel

---

## Rappel — Obligations vs ETF

| Critère | Obligation | ETF d'obligations |
|---------|-----------|-------------------|
| **Maturité** | Variable (durée de vie définie) | Aucune (le gérant remplace les obligations à maturité) |
| **Rendement** | Fixe | Variable |
| **Prix à maturité** | Connu à l'avance | Variable, peut sous-performer |
| **Achat** | Marché primaire (émetteur) ou secondaire (bourse/courtier) | Idem |

---

## Les Yield-Bearing USD (produit market fit actuel)

> Un **yield-bearing USD** = token adossé à des obligations US + rendement distribué
> → C'est une sorte d'ETF d'obligations, mais plus accessible et plus liquide.

### Comparatif des 3 produits

| | Obligation | ETF d'obligations | Yield-bearing USD |
|--|-----------|-------------------|-------------------|
| Maturité | Variable | Aucune | Aucune |
| Rendement | Fixe | Variable | Variable |
| Exposition | Obligation | Obligation + gérant | USD |
| Risque | Défaut | Défaut + gestion | Défaut |
| Frais | Aucun | De gestion | De performance |
| Liquidité | Faible | Faible | **Importante** |
| Accessibilité | Difficile | Difficile | **Facile** |

---

## Exemples de protocoles

### Ondo Finance — OUSG / USDY
- **OUSG** = Ondo Short-Term US Government Treasuries
- Investissement minimum : 100,000 USDC
- ~4.76% APY — noté AAA
- Exposé à l'ETF iShares Short Treasury Bond (NASDAQ:SHV)

### Backed Finance
- bIBO1 (Treasury Bond 0-1yr), bIBTA (1-3yr), bHIGH (High Yield Corp), **bCSPX** (S&P 500)
- Tokenisation "fully backed" de RWA → achat avec stablecoins

### Mountain Protocol — USDM
- Stablecoin adossé à des obligations US
- Rend le rendement obligataire accessible à tous

### Mimo Capital (Suisse 🇨🇭)
- Bridge entre TradFi et blockchain
- Tokenise obligations souveraines et corporate

---

## Le modèle technique : Broker + Custodian + Blockchain

```
Broker (détient Bonds/ETF)
  → Custodian (garde les actifs)
    → Blockchain (émet les tokens)
      ↕ (émission/rédemption à la demande)
    Investisseur (stablecoins ou fiat)
```

L'émission et la rédemption se font **en stablecoins ou en fiat**, à la demande de l'utilisateur ou de partenaires agréés.

---

## ⚠️ Permissioned vs Permissionless

La plupart des plateformes RWA sont **permissioned** :
- Les tokens ne peuvent circuler que vers des adresses **whitelisted** (KYC)
- Le smart contract vérifie les autorisations à chaque transfert

### Vers du permissionless : Centrifuge Pools + Ondo Flux

> **Centrifuge Pools** et **Ondo Flux** permettent de prêter des stablecoins de manière **permissionless** aux détenteurs de RWA qui les mettent en **collatéral**.

→ On accède au rendement et à la liquidité **sans KYC** en passant par ces couches intermédiaires.

Exemple sur Flux Markets :
- OUSG comme collatéral (factor 92%)
- Emprunt de USDC/USDT/DAI/FRAX à ~4.95%

---

## ⚠️ Risques des RWA financiers

- **Centralisation** : dépendance au broker/custodian
- **Confiance/transparence** : l'actif réel est détenu off-chain
- **Risque systémique** : importe les crises TradFi dans la DeFi
  → Exemple : MakerDAO a dû stopper un prêt après un défaut de 2M$ sur un pool Centrifuge (Harbor Trade, juillet 2023)

---

## Liens
- [[2-RWA-INDEX]]
- [[2-RWA-2_Immobilier]]
- [[2-RWA-4_Cas-Utilisation]]
- [[MOC-Alyra-DeFi-V2]]
