# 🌐 04 — Les wallets Web3
Tags: #alyra #semaine1 #wallets #web3 #DeFi
Lié à: [[S1-Wallets-MOC]] | [[Web3]] | [[DeFi]] | [[Rabby]] | [[MetaMask]]

---

## Web2 vs Web3 login

| Web2 | Web3 |
|------|------|
| "Login with Google / Facebook" (social login) | "Sign in with Ethereum" |
| Un compte = une plateforme | Un wallet = **TOUTES** les apps web3 |
| Identité gérée par un tiers | Identité auto-souveraine |

---

## Qu'est-ce que le Web3 ?

> Web3 = **Internet de la valeur** (*Internet of Money*)
> Fait référence aux applications web **non-custodiales** : [[DeFi]], GameFi, NFTs, etc.

---

## Setup recommandé pour un utilisateur DeFi

Un utilisateur DeFi utilise en général **deux types de wallets** :

### Sur desktop
**Extension navigateur** (Rabby) **+ hardware wallet** (Ledger)
- Extension pour l'interface et l'accès aux dApps
- Ledger pour signer les transactions importantes en cold

### Sur mobile
**Application mobile** (Zerion) **+ navigateur intégré ou WalletConnect**
- WalletConnect = protocole QR code pour connecter l'appli mobile à une dApp desktop

---

## Pourquoi Rabby ? (recommandé Alyra)

**rabby.io** — Extension Chrome

- ✅ **UX** : rapide, multi-chain bien intégré
- ✅ **Fonctionnalités** : gas top-up, gestionnaire d'approvals
- ✅ **Sécurité** : simule les transactions avant signature, alertes
- ✅ **Bonus** : compatible Gnosis Safe (multi-sig)
- ✅ **Open source**, audité par SlowMist

### Fonctionnalité clé : simulation de transaction
Avant de signer, Rabby montre exactement ce qui va se passer (tokens sortants/entrants) → évite les arnaques et erreurs.
