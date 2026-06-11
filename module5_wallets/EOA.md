# EOA — Externally Owned Account

**Tags :** #ethereum #compte #wallet #nonce

---

## Définition

**EOA (Externally Owned Account)** = compte utilisateur standard sur Ethereum.

Contrôlé par une **clé privée** détenue par un être humain (ou une entité externe).

S'oppose aux **Contract Accounts** ([[Smart-Contract]]) qui sont contrôlés par du code.

## Structure d'un EOA (Account State)

Chaque adresse Ethereum contient 4 champs :

| Champ | Description | Valeur initiale |
|---|---|---|
| `address` | L'adresse publique (identifiant) | — |
| `nonce` | Compteur de transactions envoyées | 0 |
| `balance` | Solde en ETH (en Wei) | 0 |
| `storage hash` | Hash du stockage (vide pour EOA) | hash vide |
| `code hash` | Hash du code (vide pour EOA) | hash du code vide |

## Le Nonce : anti-double-dépense

Le **nonce** est crucial : il empêche la **réutilisation d'une transaction** (attaque replay).

- Commence à **0** pour chaque nouveau compte
- **Incrémenté de +1** à chaque transaction **envoyée** (pas reçue)
- Chaque transaction doit avoir le nonce suivant → ordre garanti

### Exemple : Alice envoie 3 ETH à Bob

| Compte | Balance avant | Balance après | Nonce avant | Nonce après |
|---|---|---|---|---|
| Alice | 10 ETH | 7 ETH | 0 | **1** |
| Bob | 2 ETH | 5 ETH | 0 | **0** (inchangé) |

> Le nonce de Bob ne change pas car il **reçoit** la transaction, il ne l'envoie pas.

## EOA vs Contract Account

| | EOA | Contract Account |
|---|---|---|
| Contrôlé par | Clé privée (humain) | Code (smart contract) |
| Peut initier une tx | ✅ Oui | ❌ Non (réagit seulement) |
| A du code | ❌ Non | ✅ Oui |
| A du storage | ❌ Non (en principe) | ✅ Oui |
| Exemples | MetaMask, Ledger | Uniswap, Aave, Lido |

## Lien avec le Gas

Chaque transaction EOA consomme du [[Gas]]. Le nonce garantit l'ordre de traitement des transactions dans la [[Mempool]].

---

## Liens

- [[Module-5_Wallets-Cles-Cryptographie]]
- [[Smart-Contract]]
- [[Module-6_Gas-Frais-Transaction]]
- [[Cle-privee]]
