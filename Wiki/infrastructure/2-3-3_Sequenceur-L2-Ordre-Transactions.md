# 2-3-3 — Le Séquenceur L2 : Ordre des Transactions vers L1

> **Source** : Live DeFi — Pascal Tallavde — Questions / Réponses
> **Semaine 2 · Jour 3 · Page 3**
> **Tags** : #layer2 #séquenceur #sequencer #L1 #L2 #orderflow #MEV #décentralisation

---

## 1. Le Séquenceur — Définition

Quand un Layer 2 collecte des transactions pour les envoyer vers la L1 (Ethereum), il ne les envoie pas dans n'importe quel ordre. C'est le **séquenceur** (sequencer) qui décide.

> 🔑 **Quand un L2 "transmet" vers L1 — c'est le L2 qui choisit l'ordre, avec un séquenceur.**

Le séquenceur est un composant (souvent un serveur centralisé) qui :
1. **Reçoit toutes les transactions** soumises par les utilisateurs du L2
2. **Décide de l'ordre** dans lequel elles seront traitées et regroupées
3. **Construit le batch** (le paquet compressé) qui sera envoyé sur Ethereum
4. **Publie ce batch sur L1**

---

## 2. Pourquoi l'Ordre des Transactions Compte ?

L'ordre dans lequel les transactions sont exécutées a des **conséquences financières directes**.

### Exemple simple : un swap sur un DEX
- Alice veut acheter 100 ETH sur Uniswap → son achat va faire monter le prix
- Si quelqu'un voit la transaction d'Alice *avant* qu'elle soit exécutée et place la sienne en premier → il achète moins cher, Alice achète plus cher
- Ce phénomène s'appelle le **MEV** (Maximal Extractable Value) — valeur extraite en manipulant l'ordre des tx

Le séquenceur a donc un **pouvoir énorme** : il peut favoriser certaines transactions (les siennes, ou celles qui lui paient plus) au détriment des autres.

---

## 3. Le Séquenceur est Centralisé — Un Problème Majeur

### Situation actuelle (2025)
Sur la plupart des L2 majeurs (Arbitrum, Optimism, Base…), **le séquenceur est centralisé** :
- Arbitrum → séquenceur géré par **Offchain Labs**
- Optimism → séquenceur géré par **Optimism Foundation**
- Base → séquenceur géré par **Coinbase**

C'est-à-dire qu'**une seule entité contrôle l'ordre de toutes les transactions** du réseau.

### Risques associés
- **Censure** : le séquenceur peut refuser d'inclure certaines transactions (ex : transactions d'un wallet blacklisté)
- **Front-running** : le séquenceur peut s'enrichir en se plaçant avant les gros trades
- **Point de défaillance unique** : si le séquenceur tombe en panne → plus de transactions sur le L2
- **Pression réglementaire** : un gouvernement peut forcer Coinbase (Base) à censurer certaines adresses

---

## 4. La Solution : Le Séquenceur Décentralisé

Pour résoudre ces problèmes, les L2 travaillent sur la **décentralisation du séquenceur**.

### Comment ça fonctionne ?
- Au lieu d'un seul opérateur, **plusieurs séquenceurs indépendants** participent à un consensus
- L'ordre des transactions est déterminé de façon **décentralisée et transparente**
- Plus personne ne peut censurer ou front-runner unilatéralement

### Avec un "séquenceur" = avec un sequencer décentralisé
Le terme noté sur ta feuille *"avec un séquenceur"* fait référence à ce modèle où le L2 choisit l'ordre **via un mécanisme de consensus décentralisé** — et non via une entité unique.

### État d'avancement (2025)
- **Arbitrum** : travaille sur un séquenceur décentralisé (projet "Timeboost")
- **Espresso Systems** : protocole dédié à la décentralisation des séquenceurs, compatible avec plusieurs L2
- **Astria** : shared sequencer (séquenceur partagé entre plusieurs L2)

---

## 5. Flux Complet : De la Transaction L2 à L1

```
Utilisateur soumet une tx sur le L2
        ↓
Séquenceur reçoit la tx
        ↓
Séquenceur ordonne les transactions (ordre = pouvoir !)
        ↓
Séquenceur regroupe en batch et compresse
        ↓
Batch publié sur Ethereum (L1)
        ↓
Ethereum valide et ancre définitivement les données
```

---

## 6. Résumé — Points Clés

| Concept | Essentiel |
|---|---|
| Séquenceur | Composant du L2 qui choisit l'ordre des transactions |
| Pouvoir du séquenceur | Détermine qui passe en premier → impact MEV, censure |
| Séquenceur centralisé | Situation actuelle sur Arbitrum, Base, Optimism |
| Risques | Censure, front-running, point de défaillance unique |
| Séquenceur décentralisé | Solution en cours de développement — Espresso, Astria |
| Lien avec L1 | Le batch ordonné par le séquenceur est publié sur Ethereum |

---

## Liens vers d'autres fiches
- [[2-3-2_Bridges-Wrap-Layer2-Sidechain]] — L2 vs Sidechain, compression des données, modèle économique
- [[2-3-1_Live-DeFi-Exchanges-Bridge-Interchain]] — Freeze USDC, bridges, messagerie inter-chain
- [[MOC-Alyra-DeFi-V2]]
