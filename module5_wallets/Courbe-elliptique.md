# Courbe Elliptique (secp256k1)

**Tags :** #cryptographie #mathématiques #asymétrique

---

## Définition

Fonction mathématique utilisée pour dériver la **clé publique** depuis la **clé privée**.

**Équation :** `y² = x³ + 7` (sur un corps fini)

**Nom complet :** secp256k1 — utilisée par Bitcoin et Ethereum.

## Propriété fondamentale : sens unique

```
Clé privée → [Multiplication sur courbe elliptique] → Clé publique  ✅
Clé publique → [???] → Clé privée  ❌ mathématiquement impossible
```

C'est ce qu'on appelle la **cryptographie asymétrique** : facile dans un sens, infaisable dans l'autre.

## Pourquoi c'est sécurisé

Le problème du "logarithme discret sur courbe elliptique" (ECDLP) n'a pas de solution algorithmique connue en temps raisonnable, même avec les ordinateurs les plus puissants.

## Rôle dans la blockchain

1. **Génération de compte :** clé privée → clé publique via secp256k1
2. **Signature de transaction :** ECDSA (Elliptic Curve Digital Signature Algorithm)
   - Alice signe sa transaction avec sa clé privée
   - N'importe qui peut vérifier la signature avec la clé publique d'Alice
   - Impossible de forger la signature sans la clé privée

## Algorithme de signature : ECDSA

```
Signer :    transaction + clé_privée → signature
Vérifier :  signature + clé_publique → vrai/faux
```

## Lien avec [[SHA-256]]

Après secp256k1 (privée → publique), on applique SHA-256 + RIPEMD-160 pour obtenir l'**adresse**.

---

## Liens

- [[Cle-privee]]
- [[SHA-256]]
- [[Module-5_Wallets-Cles-Cryptographie]]
