# 📦 03 — Types de wallets
Tags: #alyra #semaine1 #wallets #sécurité
Lié à: [[S1-Wallets-MOC]] | [[S1-Wallets-02-Principe-Wallet]] | [[S1-Wallets-04-Wallets-Web3]]

---

## Axe 1 : Custodial vs Non-custodial

| Type | Qui détient la clé privée ? | Exemple |
|------|---------------------------|---------|
| **Custodial** | Un tiers (exchange, plateforme) | Coinbase, Binance |
| **Non-custodial** | Vous-même | MetaMask, Rabby, Ledger |

> "Not your keys, not your coins"

---

## Axe 2 : Hot vs Cold

| Type | Connexion Internet | Sécurité |
|------|-------------------|---------|
| **Hot wallet** | Connecté | ⚠️ Plus vulnérable |
| **Cold wallet** | Déconnecté | ✅ Plus sécurisé |

---

## Formes possibles

### Application mobile (hot)
- Zerion, Trust Wallet, Coinbase Wallet, Crypto.com
- Pratique pour l'usage quotidien

### Extension de navigateur (hot)
- **MetaMask** (le plus connu)
- **Rabby Wallet** (recommandé Alyra)
- Accès direct aux dApps depuis le navigateur

### Hardware wallet / clé USB (cold)
- **Ledger**, **Trezor**
- La clé privée ne quitte jamais le device physique
- Le plus sécurisé

### Autres
- Paper wallet (clé imprimée sur papier)
- Wallet intégré dans le navigateur

---

## Tableau sécurité / praticité

```
                 Sécurité ↑
Extension        Faible
Application      Moyenne
Hardware         Élevée

                 Praticité ↑
Extension        Élevée
Application      Moyenne
Hardware         Faible
```

> **Note :** Pour combiner sécurité + praticité → importer un hardware wallet dans une extension comme Rabby.
