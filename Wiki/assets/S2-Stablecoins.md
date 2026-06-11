# 💵 Les Stablecoins
**Semaine 2 — Actifs tokénisés | Alyra DeFi 2026**
Tags: #alyra #semaine2 #stablecoins #actifs-tokenises #DeFi

Lié à : [[MOC-Alyra-DeFi-V2]] | [[S2-Tokenisation-actifs]] | [[Ecosysteme-DeFi]]
Prochain cours : [[S2-RWA]]

---

## 🎯 Objectifs du cours
- Connaître les business models et les modèles de distribution des émetteurs de stablecoins
- Comprendre les risques associés à chaque business model
- Comprendre la valeur ajoutée des stablecoins pour une entreprise

---

## 01 — Des devises tokenisées

> **Stablecoin** = devise tokenisée. Une devise réelle conservée par un **custodian** (tiers de confiance) → représentation émise sur la Blockchain.

### Devises disponibles
Il existe des stablecoins pour la quasi-totalité des devises mondiales :
USD, EUR, CHF, CAD, MXN, SGD, JPY, NGN, ZAR, ARS, GBP, INR…

Exemples de protocoles :
- **USDT** (Tether) — USD
- **USDC** (Circle) — USD
- **EURS** (Stasis) — EUR
- **XCHF** (Bitcoin Suisse) — CHF, classifié comme payment token par la FINMA
- **XSGD** (StraitsX) — SGD
- **PYUSD** (PayPal / Paxos) — USD

### Dominance USD
> ⚡ Les stablecoins USD représentent **99,7%** de tous les stablecoins.

- **USDT** (Tether) : dominance **~70%** — le plus répandu
- **USDC** (Circle) : #2
- Réseaux principaux : **Ethereum** (51,98%) et **Tron** (37,52%)
- Réseaux les plus utilisés (volume) : Solana, Ethereum, Tron, BNB Chain

### Différences entre stablecoins
Les stablecoins se différencient sur 6 axes :
1. **Transparence** — attestations mensuelles (Circle/USDC), temps réel (TrueUSD/LedgerLens), quotidiennes (BRZ)
2. **Business model**
3. **Modèle de distribution** (direct vs indirect)
4. **Risque**
5. **Audience et utilisation**
6. **Liquidité et intégration**

### Régulation
Tout émetteur doit disposer d'une **licence ou autorisation** :
- KYC obligatoire pour les émissions et rédemptions
- Surveillance du réseau
- Peut **geler une adresse** ou **brûler des tokens** (ex : Tether a gelé ~$870k liés à des financements illicites)
- Exemple : **Monerium** a obtenu une licence EMI européenne → peut émettre de la monnaie et générer des **IBAN Web3**

---

## 02 — Les Business Models

### Modèles de distribution
- **Distribution indirecte** : via des exchanges ou partenaires
- **Distribution directe** : l'émetteur vend directement aux utilisateurs

### Modèles de rémunération

#### 🔹 Frais d'opération
L'émetteur prélève une commission à chaque **émission** et/ou **rédemption** de stablecoin.

#### 🔹 Investir le collatéral ⭐ (le plus courant)
Processus :
1. L'utilisateur dépose des devises → le custodian émet des tokens sur la Blockchain
2. L'émetteur **investit ~70% du collatéral** (ex : obligations US) et garde ~30% en cash pour les rédemptions
3. L'émetteur conserve les **intérêts** générés (ex : Circle → **1,2 Mds$ d'intérêts** avec 5,30% yield sur le Circle Reserve Fund)

**Rédemption :**
1. L'utilisateur renvoie ses tokens → ils sont **brûlés**
2. Le custodian paie avec le cash de réserve (30%)
3. Si réserve épuisée → vente du collatéral investi au prix du marché

> 💡 Le collatéral est investi en **obligations d'État à court terme, peu risquées et liquides** (Treasury Bills, repo tri-partites avec BNP, Citigroup, Wells Fargo…)

> ⚠️ Certains émetteurs prennent plus de risques : Tether achetait du BTC et de l'immobilier chinois ; Stasis (EURS) prêtait les euros à des traders.

#### 🔹 Yield-bearing stablecoins (modèle émergent)
L'émetteur **redistribue le rendement aux détenteurs** du stablecoin :
- **Rebasing (a-token)** : le nombre de tokens sur l'adresse augmente automatiquement (ex : aTokens Aave)
- **C-token** : le taux de change entre le token et l'actif sous-jacent augmente (1 token = de plus en plus d'$)

Exemples :
- **Mountain Protocol (USDM)** — 5% APY
- **Ondo (USDY)** — 5,10% APY, garanti par dépôts bancaires + Treasury US

Un **buffer** (matelas de sécurité) est maintenu pour faciliter les rédemptions sans liquider le collatéral.

> 🤑 Avantage concurrentiel : une banque doit payer des intérêts et créer des services pour attirer les dépôts. Un émetteur de stablecoin attire les dépôts "sans rien faire".

---

## 03 — Les Risques

### Risques communs (tous les modèles)
| Risque | Exemple |
|--------|---------|
| **Faillite de la banque** | Circle (USDC) avait 3,3 Mds$ chez Silicon Valley Bank → USDC est tombé à $0,87 |
| **Fraude ou mauvais management** | Fluid Finance (Genève) — dépôts bloqués, procédure du Ministère public |
| **Hack / centralisation** | Tether a blacklisté un validateur ayant drainé des MEV bots pour $25M |

### Risques spécifiques (modèle "investir le collatéral")
- **Pertes sur l'investissement** : si le collatéral perd de la valeur
- **Bank run** : ruée massive sur les rédemptions

**Déroulement d'un bank run :**
1. L'émetteur utilise d'abord la **réserve cash** (30%)
2. Si insuffisant → vend les **obligations** au prix du marché
3. Risque de vendre à perte si les obligations sont dépréciées (ex : obligation émise à $1, revendue à $0,98 avant maturité)
4. → Le stablecoin se **dépeg**

**Mitigation :**
- Présence d'un **buffer** (capital de sécurité supplémentaire)
- Investissement uniquement dans des produits **très liquides et très court terme**

---

## 04 — Les Cas d'Utilisation

> **Les stablecoins sont à ce jour la meilleure application de la Blockchain, et la seule qui ait vraiment réussi.** Utilisés aussi bien par des utilisateurs crypto que non-crypto.

### Avantages généraux
- Opérationnel **24/7**
- **Accès global** sans frontières
- **Transparence et traçabilité** on-chain
- **Facilité des transferts**

### Pour les utilisateurs crypto / DeFi
- On-ramp et off-ramp
- Vendre sans déclencher un événement fiscal immédiat (selon juridiction)
- Spéculation (positions short, levier)
- Générer du rendement (lending, LP)
- Envoyer de l'argent sans frais bancaires

### Pour les entreprises et utilisateurs hors crypto
- **Paiements et transferts de fonds** plus efficients
- L'entreprise gère la complexité en back-end → l'utilisateur final ne sait pas qu'il utilise des stablecoins
- Exemple : **Circle (USDC)** — solutions de paiement cross-border pour institutions
- Exemple : **Purpl** — transferts de fonds vers le Liban

> 📌 Conclusion du rapport sur les CBDC : les stablecoins rendent les transferts internationaux et domestiques plus efficients.

---

## 🔬 Analyses détaillées — OrnyTools (20 stablecoins)

Chaque stablecoin ci-dessous a une note dédiée avec mécanisme, scores de risque et historique de peg.  
→ **[[Stablecoins-INDEX]]** — tableau de bord complet avec scores globaux

| Catégorie | Notes |
|-----------|-------|
| Fiat-backed | [[USDC]] · [[USDT]] · [[PYUSD]] · [[FDUSD]] · [[USDM]] · [[RLUSD]] · [[TUSD]] · [[USDD]] |
| Overcollateralized | [[LUSD]] · [[DAI]] · [[USDS]] · [[GHO]] · [[crvUSD]] · [[MIM]] · [[DOLA]] |
| Synthetic / Yield | [[FRAX]] · [[USDe]] · [[USD0]] · [[OUSD]] |
| RWA | [[pmUSD]] |

---

## 🔗 Liens utiles
- [DeFiLlama Stablecoins](https://defillama.com/stablecoins)
- [Circle Transparency](https://www.circle.com/en/transparency)
- [Tether](https://tether.to)
- [Mountain Protocol](https://mountainprotocol.com)
- [Ondo Finance](https://ondo.finance)
- [Monerium](https://monerium.com)
