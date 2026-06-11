# Clé Privée

**Tags :** #cryptographie #sécurité #wallet

---

## Définition

Un **nombre aléatoire de 256 bits**, représenté en hexadécimal (base 16).

C'est le **seul secret** d'un compte blockchain. Tout le reste (clé publique, adresse) peut être recalculé à partir d'elle.

## Génération

1. Source d'entropie aléatoire (générée par le wallet)
2. Nombre entre 1 et 2²⁵⁶ − 1
3. Affiché en hexadécimal : `f2d81a260dea8a100dd517984e53c56a...`

## Propriétés essentielles

| Propriété | Valeur |
|---|---|
| Taille | 256 bits |
| Représentation | Hexadécimal (64 caractères) |
| Espace | 2²⁵⁶ combinaisons possibles |
| Probabilité de deviner | 1/2²⁵⁶ ≈ impossible |

## Ce qu'on peut dériver depuis la clé privée

```
Clé privée (k)
   ↓ secp256k1 (sens unique)
Clé publique (K)
   ↓ SHA-256 + RIPEMD-160 (sens unique)
Adresse publique (A)
```

> ⚠️ **Irréversible :** impossible de remonter de l'adresse vers la clé privée.

## Règles de sécurité absolues

- **Ne jamais la partager** → donner la clé privée = donner ses fonds
- **Ne jamais la perdre** → perte définitive et irrécupérable des fonds
- **Jamais en ligne** → pas de photo, pas de copier-coller en ligne, pas de cloud
- **Sauvegarder la [[Mnemonic-Seed]]** → représentation humaine de la clé privée

## Alternative humaine : la [[Mnemonic-Seed]]

Puisque la clé privée brute est difficile à noter/retenir → BIP-39 la transforme en **12 ou 24 mots** anglais.

---

## Liens

- [[Module-5_Wallets-Cles-Cryptographie]]
- [[Mnemonic-Seed]]
- [[Courbe-elliptique]]
- [[EOA]]
