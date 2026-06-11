# Mnemonic Seed (Phrase de Récupération)

**Tags :** #wallet #sécurité #BIP-39 #seed

---

## Pourquoi ça existe

La clé privée brute (256 bits en hexadécimal) est :
- Difficile à retenir
- Difficile à écrire
- Source d'erreurs possibles à la copie

**Solution BIP-39 :** transformer ce nombre en une suite de mots humainement compréhensibles.

## Processus de génération

```
1. Clé privée (256 bits)
        ↓
2. SHA-256 de la clé privée
        ↓ on prend les 8 premiers bits (checksum)
3. Concaténation : 256 + 8 = 264 bits
        ↓
4. Division en 24 groupes de 11 bits
        ↓
5. Chaque groupe → 1 mot dans une liste de 2048 mots
        ↓
6. → Phrase de 24 mots
```

## Tableau entropie / nombre de mots

| Entropie (bits) | Checksum (bits) | Nombre de mots |
|---|---|---|
| 128 | 4 | **12 mots** |
| 160 | 5 | **15 mots** |
| 192 | 6 | **18 mots** |
| 224 | 7 | **21 mots** |
| 256 | 8 | **24 mots** |

> MetaMask utilise 12 mots (128 bits). Les hardware wallets comme Ledger proposent 24 mots (256 bits).

## Exemple visuel

```
11 bits → mot #1390 → "punch"
11 bits → mot #1586 → "shock"
11 bits → mot #604  → "entire"
11 bits → mot #1202 → "north"
...
```

## Wordlist BIP-39

Liste standardisée de 2048 mots anglais (chaque mot représente 11 bits).
👉 https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md

## Règles de sécurité

- ✅ Écrire les mots sur **papier physique**, dans l'ordre
- ✅ Vérifier l'orthographe de chaque mot
- ✅ Stocker en lieu sûr (coffre, endroit sec, à l'abri du feu)
- ❌ Jamais en photo, jamais dans un email, jamais dans le cloud
- ❌ Jamais taper sur un PC connecté si possible

## Important : Seed ≠ clé privée exactement

La seed est une **représentation mémorisable** de la clé privée (ou de la master key pour les wallets HD). Elle permet de **régénérer** toutes les clés et adresses du wallet.

---

## Liens

- [[Cle-privee]]
- [[SHA-256]]
- [[Module-5_Wallets-Cles-Cryptographie]]
- [[MetaMask]]
