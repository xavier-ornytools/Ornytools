# 🏷️ La Tokenisation d'Actifs
**Semaine 2 — Actifs tokénisés | Alyra DeFi 2026**
Tags: #alyra #semaine2 #tokenisation #actifs-tokenises #DeFi

Lié à : [[MOC-Alyra-DeFi-V2]] | [[Ecosysteme-DeFi]] | [[S2-Stablecoins]]

---

## 🎯 Objectifs du cours
- Définir les étapes nécessaires à la tokenisation d'un actif
- Connaître les différents modèles d'émission et de distribution
- Comprendre les risques liés à la tokenisation

---

## 01 — La Tokenisation

### Définition
> **Tokenisation** = transfert d'un actif « réel » sur la Blockchain sous forme de token.

Actifs tokenisables : immobilier, devises, brevets, dettes, actions.

### Le rôle du Custodian (tiers de confiance)
Le processus nécessite un **tiers de confiance** (custodian) qui :
1. **Conserve** l'actif réel (lui-même, via une banque, ou via une société spécialisée)
2. **Émet** la représentation digitale sur la Blockchain sous forme de token

> 💡 Analogie : comme PayPal — PayPal reçoit de l'argent réel et crédite de l'argent virtuel sur votre compte.

Chaque token est **collatéralisé** par un actif détenu par le custodian.
- **Collatéral** = actif sous-jacent conservé par le tiers

---

### ⚠️ Risques de contrepartie (Conservation)

| Risque | Description | Exemple |
|--------|-------------|---------|
| Faillite / appropriation | Le custodian disparaît → token vaut 0€, actif réel vaut 0€ | |
| Mensonge / erreur | Custodian déclare 300k€ d'actifs mais n'en a que 150k€ → token vaut 300k€ mais actif réel vaut 150k€ | |

### ✅ Mitigations
- **Droit de propriété** : le détenteur du token reste propriétaire légal de l'actif réel
- **Comptes ségrégués** : les actifs clients sont séparés des actifs du custodian
- **Audit et transparence** : le tiers publie ses réserves (ex: Deloitte audite Circle/USDC)
- **Mécanisme anti-bank run**

> Exemple concret : Circle (USDC) publie une composition de réserves mensuelle, auditée par Deloitte.

---

### Modèles d'émission et de distribution

Il existe 4 combinaisons possibles :

#### 1️⃣ Émission synchrone + Distribution directe
- Émission à **l'initiative de l'utilisateur final**
- Flux : Utilisateur → envoie devises au Custodian (1) → Custodian émet token sur Blockchain (2) → Utilisateur reçoit token (3)
- Exemple : **Monerium** (fiat onchain)

#### 2️⃣ Émission synchrone + Distribution indirecte
- Émission à l'initiative d'un **partenaire** qui redistribue ensuite à l'utilisateur
- Flux en 5 étapes via OTC ou DEX
- Exemple : **Lugh** (stablecoin EUR)

#### 3️⃣ Émission asynchrone + Distribution directe
- Émission à **l'initiative de l'émetteur**, puis distribution via OTC/DEX
- Le custodian tokénise d'abord, l'utilisateur achète ensuite sur le marché
- Exemple : **RealT** (immobilier fractionné US)

#### 4️⃣ Émission asynchrone + Distribution indirecte
*(variante de 3 avec intermédiaire)*

### Rédemption
L'utilisateur final ou un partenaire agréé peut demander d'**échanger le token contre l'actif réel** (ou son équivalent monétaire).

### Marchés primaire vs secondaire
| Marché | Description |
|--------|-------------|
| **Primaire** | Achat directement auprès de l'émetteur (mint) |
| **Secondaire** | Achat sur un DEX ou auprès d'un revendeur |

---

## 02 — Le Peg d'un Token

### Rappel de base
- Plus d'acheteurs que de vendeurs → prix montent
- Plus de vendeurs que d'acheteurs → prix descendent

### Le problème du peg
Le prix de l'actif réel varie sur les marchés **traditionnels**.
Le prix du token varie sur les marchés **crypto**.
→ Il peut y avoir des **différences de prix** entre les deux.

### Les arbitrageurs maintiennent le peg
La différence entre le prix du token et celui de l'actif sous-jacent reste minime grâce aux **arbitrageurs**.

#### Si token > actif (au-dessus du peg) :
→ MINT sur le marché primaire à 1,00$ + SELL sur le marché secondaire à 1,01$ = **profit de 0,1$**
→ La vente fait **baisser** le prix du token vers le peg

#### Si token < actif (en-dessous du peg) :
→ BUY sur le marché secondaire à 0,99$ + REDEEM sur le marché primaire à 1,00$ = **profit de 0,1$**
→ L'achat fait **monter** le prix du token vers le peg

> 🔴 Exemple USDC : Zone d'émission + vente au-dessus de 1$, zone d'achat + rédemption en-dessous de 1$

### ⚠️ Le Depeg
Si l'émission ou la rédemption **cesse** (problème custodian, régulation...) → le token ne suit plus l'actif sous-jacent = **depeg**.

#### Arbitrage actif stable vs actif volatile
- **Actif stable** (stablecoin) : écarts minimes autour de 1,00$
- **Actif volatile** (ex: action) : mêmes mécanismes mais avec des spreads plus importants (ex: +20$)

---

## 03 — Pourquoi Tokeniser ?

| Avantage | Description | Impact |
|----------|-------------|--------|
| **Traçabilité** | Historique complet des échanges sur la blockchain | Plus transparent, plus sécurisé |
| **Fraction d'actif** | Acheter des parties d'un actif (ex: 50$ d'immo US via RealT) | Plus accessible |
| **Transfert facile** | Envoyer à n'importe qui, n'importe où, 24h/24 | Liberté de mouvement des capitaux |
| **Interopérabilité** | Utiliser dans la DeFi (collatéral Aave, yield farming...) | Nouveaux cas d'usage, rendement |
| **Liquidité on-chain** | Accès à la liquidité et aux opportunités DeFi | Plus facile de diversifier |

---

## 📌 Concepts clés à retenir

- [[Custodian]] — tiers de confiance qui conserve les actifs réels
- [[Collatéral]] — actif sous-jacent qui garantit le token
- [[Peg]] — ancrage du prix du token à l'actif sous-jacent
- [[Depeg]] — rupture de l'ancrage
- [[Arbitrageur]] — acteur qui maintient le peg via mint/redeem
- [[Marché-primaire]] — émission directe (mint/redeem)
- [[Marché-secondaire]] — échange via DEX ou OTC
- [[WBTC]] — exemple de BTC tokenisé sur Ethereum
- [[USDC]] — stablecoin USD tokenisé par Circle
- [[RealT]] — immobilier tokenisé fractionné
- [[Monerium]] — fiat onchain (EUR/GBP)
- [[Lugh]] — stablecoin EUR (distribution indirecte)

---

## 🔗 Cours suivant
[[S2-Stablecoins]] — Les stablecoins
