# Module 5 — Wallets : Adresses, Clés & Cryptographie

**Formation :** Alyra — Le fonctionnement d'une blockchain et des wallets (05)
**Tags :** #alyra #wallets #cryptographie #clé-privée #clé-publique #adresse #mnemonic #EOA

---

## 🔑 Un compte blockchain = 2 clés

Toute transaction sur une blockchain est réalisée depuis un **Wallet** (portefeuille).

| Finance traditionnelle | Blockchain |
|---|---|
| Mot de passe | [[Clé-privée]] |
| Numéro de compte (RIB) | [[Clé-publique]] |

- **Clé privée** → signe (chiffre) les transactions
- **Clé publique** → vérifie l'auteur + reçoit les transactions

> ⚠️ **Règle d'or :** On peut tout retrouver depuis la clé privée. C'est le **seul élément à sauvegarder**.

---

## 🔐 Clé privée : qu'est-ce que c'est ?

Un **nombre aléatoire de 256 bits**, converti en hexadécimal (base 16) pour être manipulable.

```
Base 2  → 1101000110110111000101110... (256 chiffres)
Base 10 → 115792089237316195423570985008687907852837...
Base 16 → 68DB8BAC710CB4000000000000...
```

**Rappel binaire :**
`11001010` (base 2) = `202` (base 10) = `CA` (base 16)

---

## 🟢 Clé publique : comment ça marche ?

La clé publique est **dérivée de la clé privée** via une [[Courbe-elliptique]] (secp256k1 : y²=x³+7).

```
Clé privée → [secp256k1] → Clé publique
```

⚡ **Sens unique** : clé privée → clé publique, mais **jamais l'inverse**.

---

## 📍 Adresse publique (Ethereum)

Dérivée de la clé publique via double hachage :

```
Clé privée
   ↓ secp256k1
Clé publique
   ↓ SHA-256
Hash intermédiaire
   ↓ RIPEMD-160
Adresse : 0xdee2da8f404a59947a57bd3bdffce180246683e3
```

> ℹ️ Contrairement à Bitcoin (base 58), l'adresse Ethereum **reste en hexadécimal** avec préfixe `0x`.

---

## #️⃣ Qu'est-ce qu'un [[Hash]] ?

Fonction à **sens unique** qui transforme n'importe quelle entrée en sortie de taille fixe.

**[[SHA-256]]** (Secure Hash Algorithm 256 bits) — créé par la NSA début 2000 :
- Sortie toujours sur **256 bits**, peu importe la taille de l'entrée
- **Asymétrique** (sens unique)
- **Résistant à la falsification** : 1 bit modifié → sortie totalement différente
- **Résistance forte aux collisions** (impossible de trouver 2 entrées avec le même hash)

Exemple :
```
Hash("je suis bitcoin")  → 2d71550cf737f431...
Hash("je suis bitcoin.") → 62e28e5a21fcf90f...  ← totalement différent !
```

---

## 🌱 Mnemonic Seed (phrase de récupération)

**Problème de la clé privée brute :** difficile à retenir, à écrire, risque d'erreur.

**Solution : la Mnemonic Seed** — transformer ce grand nombre en une suite de mots.

### Processus de génération :
1. Clé privée de **256 bits**
2. On lui ajoute les **8 premiers bits** de son propre SHA-256 (checksum)
3. → Nombre de **264 bits**
4. Divisé en groupes de **11 bits** → chaque groupe = 1 mot dans une liste de 2048 mots ([BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md))
5. → **24 mots** (264 / 11 = 24)

| Entropie (bits) | Checksum (bits) | Phrase (mots) |
|---|---|---|
| 128 | 4 | **12** |
| 160 | 5 | **15** |
| 192 | 6 | **18** |
| 224 | 7 | **21** |
| 256 | 8 | **24** |

> 📝 **En pratique :** on note 24 mots sur papier, dans l'ordre. C'est notre sauvegarde complète.

---

## 🔒 Sécurité : peut-on deviner une clé privée ?

**Non.** La probabilité est de **1 sur 2²⁵⁶**.

Pour comparer :
- Gagner au Powerball → 1/292,000,000 (28 bits)
- Deviner une clé privée "utilisée" → 1/2²³⁰
- Deviner une clé spécifique → 1/2²⁵⁶

**Un ordinateur ne peut pas trouver une clé privée.** Même tous les ordinateurs de la planète pendant des milliards d'années.

---

## 👤 Que se cache-t-il derrière une adresse ? (EOA)

**EOA = Externally Owned Account** (compte utilisateur classique)

Chaque adresse stocke un **état (Account State)** avec :
- `address` → l'adresse publique (identifiant)
- `nonce` → compteur de transactions (commence à 0, +1 à chaque tx envoyée)
- `balance` → solde en ETH
- `storage hash` → (vide pour les EOA, utilisé par les smart contracts)
- `code hash` → (vide pour les EOA)

**Exemple : Alice envoie 3 ETH à Bob**

| | Avant | Après |
|---|---|---|
| Alice balance | 10 ETH | 7 ETH |
| Alice nonce | 0 | 1 |
| Bob balance | 2 ETH | 5 ETH |
| Bob nonce | 0 | 0 (inchangé) |

> Le nonce n'augmente que pour **l'émetteur** de la transaction, jamais pour le destinataire.

---

## 📂 Deux types de comptes Ethereum

```
┌─────────────────────────────┐
│  EOA (Externally Owned      │   ← compte utilisateur (clé privée)
│  Account)                   │
└─────────────────────────────┘
┌─────────────────────────────┐
│  Contract Account           │   ← [[Smart-Contract]] (code)
│  (Smart Contract)           │
└─────────────────────────────┘
```

---

## 🌡️ Hot Wallet vs Cold Wallet

| | **Hot Wallet** | **Cold Wallet** |
|---|---|---|
| Définition | Clé privée créée/stockée sur appareil **connecté** à Internet | Clé privée créée/stockée sur appareil **NON connecté** |
| Exemples | MetaMask, Rabby (extension PC ou mobile) | Ledger, Trezor, Paper wallet |
| Configuration | Facile | Plus ou moins difficile |
| Transactions | Rapides, peu vérifiables | Plus lentes, vérifiables |
| Sécurité | Vulnérable aux hacks/virus | Très faible exposition |
| Coût | Gratuit | 70–500$ |

### Matrice Sécurité / Complexité

```
         Sécurité ↑
              │  Multi-Sig HW
              │  Hardware wallets
  Paper wallets│         MPC wallets ──────→ Complexité
              │
  Mobile wallets
  PC wallets  │
```

### Hot wallets leaders : [[MetaMask]] & [[Rabby-Wallet]]

**Faucets Testnet (Sepolia ETH gratuit pour tester) :**
- https://cloud.google.com/application/web3/faucet/ethereum
- https://faucet.quicknode.com/ethereum
- https://www.alchemy.com/faucets

---

## 🔗 Liens connexes

- [[Clé-privée]] — fiche détaillée
- [[Courbe-elliptique]] — secp256k1, ECDSA
- [[SHA-256]] — fonction de hachage
- [[Mnemonic-Seed]] — BIP-39
- [[EOA]] — Externally Owned Account
- [[Smart-Contract]] — deuxième type de compte
- [[MetaMask]] — hot wallet leader
- [[Module-6_Gas-Frais-Transaction]] — lien avec les tx et le nonce
- [[Module-7_Staking-Ethereum-POS]] — validateurs et clés de staking

