# Mempool — Memory Pool
Tags: #concept #ethereum #transaction #reseau

---

## Définition

La **Mempool** (Memory Pool) est la zone d'attente des transactions sur un nœud Ethereum. Toute transaction signée et diffusée sur le réseau atterrit dans la mempool avant d'être incluse dans un bloc.

## Fonctionnement

1. Tu envoies une transaction → elle entre dans la mempool du nœud local
2. Le nœud la propage à ses pairs → elle se retrouve dans leurs mempools respectives
3. Le proposeur du bloc sélectionne les transactions selon le prix du gas proposé
4. Les transactions non sélectionnées restent en attente dans la mempool

## Point clé

> ⚠️ **Chaque nœud possède sa propre mempool à un instant T**

Il n'existe pas une mempool centralisée unique. C'est une donnée locale à chaque nœud, qui varie selon les transactions qu'il a reçues.

## Mempool et MEV

La mempool est **publique** et visible par tous. C'est ce qui rend le [[MEV]] (Maximal Extractable Value) possible : des bots surveillent les transactions en attente pour s'insérer avant/après elles de manière profitable (front-running, sandwich attacks).

## Liens
- [[Module-6_Gas-Frais-Transaction]]
- [[MEV]]
- [[EIP-1559]]
- [[Ethereum]]
