# 🔑 01 — Clé privée, clé publique
Tags: #alyra #semaine1 #wallets #cryptographie
Lié à: [[S1-Wallets-MOC]] | [[S1-Wallets-02-Principe-Wallet]] | [[Block-Explorer]]

---

## 📌 Clé publique = adresse

- Analogie : adresse email, IBAN, identité
- C'est l'adresse qu'on **donne pour recevoir** des cryptos
- Exemple : `0x8b2dc6462eee18b16a530434dff0cf76ee92faea`
- **L'adresse est publique** : via un [[Block-Explorer]], tout le monde peut voir l'historique de transactions et la balance

---

## 🔐 Clé privée = mot de passe + signature

- Analogie : mot de passe, signature, carte d'identité
- On utilise la clé privée pour **envoyer** des cryptos
- Chaque clé publique a **une clé privée correspondante** (paire inséparable)
- La relation est **à sens unique** :
  - clé privée → on peut déduire la clé publique ✅
  - clé publique → on NE PEUT PAS retrouver la clé privée ❌

---

## ⚠️ RÈGLES ABSOLUES — clé privée

> **NE JAMAIS PARTAGER SA CLÉ. PAS DE COPIER-COLLER. PAS DE STOCKAGE DANS LE CLOUD.**

- Le détenteur de la clé privée contrôle les fonds
- Si elle est perdue → **fonds perdus à jamais**, impossible à récupérer
- Contrairement à un mot de passe, **on ne peut pas la réinitialiser**

**Exemple réel :** Le fondateur de LHV Bank a perdu sa clé privée donnant accès à 250 000 ETH.

---

## 🌱 Seed phrase (phrase secrète / mnémonique)

- = **Master Password** de 12, 18 ou 24 mots
- Exemple : `wine model run session oblige clay food orange balance jaguar yard mad`
- Générée à partir d'un dictionnaire de **2048 mots anglais** (standard BIP-39)
- Elle permet de **récupérer ET générer** des clés privées
- **Une seed phrase → infinité de clés privées** (et donc d'adresses)
- Fonctionne sur **différentes blockchains** (Bitcoin, Ethereum, Solana...)

### Hiérarchie des clés
```
Seed phrase (12-24 mots)
    └── Clé privée 1 → Clé publique / Adresse 1
    └── Clé privée 2 → Clé publique / Adresse 2
    └── Clé privée N → Clé publique / Adresse N (infini)
```
