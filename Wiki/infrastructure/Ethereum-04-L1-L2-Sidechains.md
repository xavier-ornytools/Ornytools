# 🔗 L1, L2 et Sidechains

**Module :** [[Ethereum-Index]] > 04  
**Tags :** #ethereum #L1 #L2 #sidechain #scalabilité #bridge #rollup

---

## Ethereum = L1 (Layer 1)

Ethereum est la **blockchain de base** (Layer 1).

**Limitation :** block space + block time → scalabilité limitée à **~13 TPS** (transactions par seconde)

> 💡 Les L2 sont nés pour résoudre ce problème.

---

## Les L2 (Layer 2)

Les L2 sont des **blockchains construites par-dessus Ethereum**.

**Fonctionnement :**
- Les transactions sont exécutées sur le L2
- Elles sont **groupées** (batch) puis validées sur Ethereum L1
- Cela **mutualise les frais** et augmente le débit

> 💡 Analogie : les L2 sont des **vendeurs grossistes de block space** L1.

**Exemples :** Arbitrum, Optimism, Base

### Avantages L2
- Transactions moins chères
- Plus rapides
- Héritent de la sécurité d'Ethereum

### Limite L2 ⚠️
- Dépendent d'un **séquenceur** (souvent centralisé) pour ordonner les tx avant envoi sur L1

---

## Les Sidechains

Une **sidechain** = blockchain **indépendante** à part entière, avec :
- Sa propre sécurité
- Son propre gas token
- Un accès direct au L1 via un bridge

**Exemple :** Polygon, Gnosis Chain

### Différence L2 vs Sidechain
| | L2 | Sidechain |
|---|---|---|
| Sécurité | Héritée d'Ethereum | Propre à la chaîne |
| Gas token | ETH | Token natif (MATIC, xDAI…) |
| Lien avec L1 | Fort (validations L1) | Bridge uniquement |

---

## Les Bridges

### Bridge officiel (L1 → L2)
- Bloque les actifs sur Ethereum
- Émet l'équivalent sur le L2
- **Dépôt :** quelques minutes
- **Retrait L2 → L1 :** **plusieurs jours** (période de contestation)

### Bridges alternatifs
Pour éviter d'attendre ou pour passer d'un L1 à un autre :
- Utilisent des **fournisseurs de liquidité (LP)** pour réaliser l'échange cross-chain
- Plus rapides mais frais variables
- **Exemples :** Jumper Exchange, Li.Fi, Hop Protocol, Connext

### Wrapping cross-chain
Autre solution pour transférer des actifs entre blockchains.

---

## Liens
- [[Ethereum-03-Mempool]]
- [[Ethereum-05-Staking-Restaking]]
- [[Ethereum-Index]]
