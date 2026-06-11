# 01 – Principe général de la Blockchain

Tags: #blockchain #décentralisation #consensus #semaine1

---

## Problème de départ : le tiers de confiance

- Alice achète du chocolat à Bob chaque jour → chacun tient son propre livre de comptes
- Un jour, leurs livres divergent → **qui a raison ?**
- Solution classique : faire appel à un **tiers de confiance** (banque, notaire...)
  - Il valide et inscrit toutes les transactions
  - Il sauvegarde l'historique
  - Moyennant une **commission**
- Problème : système **centralisé**, nécessite de faire confiance à une entité unique qui doit être infaillible, impartiale, incorruptible

---

## La blockchain : supprimer le tiers de confiance

> **La blockchain remplace le tiers de confiance par un réseau de « validateurs » qui décentralisent la sauvegarde et la vérification des informations.**

### Déroulé d'une transaction

1. Alice envoie une transaction à Bob
2. Un **nœud validateur** est choisi selon le mécanisme de consensus
3. Il inscrit la transaction dans un **bloc**
4. Il propose ce bloc au **réseau de validateurs**
5. La majorité vérifie l'authenticité des transactions
6. Si validé → le nœud est **récompensé** (frais de transaction + émission de nouvelles crypto)
7. Si le bloc contient des transactions falsifiées → le réseau **refuse** et le nœud est **sanctionné**
8. Le bloc validé est ajouté à la **chaîne de blocs**

---

## Structure de la chaîne

- Les blocs sont organisés **chronologiquement et linéairement**
- Chaque bloc est lié au suivant par un **lien cryptographique** (Header → Body)
- Structure : **Génesis → Block 1 → Block 2 → Block 3...**
- Modifier un bloc passé = devoir modifier **tous les blocs suivants** → quasi impossible
- ⚠️ **Les transactions sont définitives** : aucun droit à l'erreur

---

## Types de nœuds

| Type | Description |
|------|-------------|
| **Full node** | Copie complète de la chaîne |
| **Light node** | Version allégée |
| **Archive node** | Historique complet depuis la genèse |

Chaque nœud garde **une copie de l'historique** → décentralisation totale.

---

## Résumé

> **Une blockchain est une base de données infalsifiable, publique et distribuée sur un réseau décentralisé et pseudo-anonyme de nœuds qui vérifient la véracité des données.**

- Consultation via un **block explorer** (ex: Etherscan) : historique des transactions, balance d'un compte...

---

Liens : [[02-POW-et-POS]] | [[03-Scalabilite]] | [[04-Coin-et-Token]] | [[MOC-Alyra-DeFi-V2]]
