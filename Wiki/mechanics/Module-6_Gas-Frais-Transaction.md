# Le Gas et les Frais de Transaction
**Module 6 | Semaine 1 Alyra**
Tags: #alyra #ethereum #gas #transaction #EIP1559 #fees

---

## Structure d'une transaction Ethereum

| Champ | Contenu |
|-------|---------|
| **nonce** | Numéro de transaction (1ère = 0) |
| **gasPrice** | Prix du gas proposé |
| **gasLimit** | Gas max autorisé |
| **to** | Adresse destinataire (160 bits) |
| **value** | Montant en Wei |
| **v, r, s** | Signature digitale |
| **data** | Data pour smart contract (vide si simple envoi) |

> **TxID** = hash de tous ces paramètres → identifiant unique de la transaction

---

## Unités d'Ethereum

| Unité | Valeur |
|-------|--------|
| **Wei** | Plus petite unité (10⁻¹⁸ ETH) |
| **Gwei** | 10⁻⁹ ETH = 1 milliard de Wei — unité courante pour le gas |
| **ETH** | 10¹⁸ Wei |

→ Pratique : https://eth-converter.com/

---

## Cycle de vie d'une transaction

1. Utilisateur signe et envoie la transaction à un nœud
2. Le nœud la propage au réseau → elle entre dans la **[[Mempool]]**
3. Un validateur (proposeur) sélectionne les transactions et les inclut dans un bloc
4. Le bloc est propagé → transaction confirmée

> ⚠️ Chaque nœud possède **sa propre mempool** à un instant T

---

## Qu'est-ce que le Gas ?

> Le gas est une **unité fictive** représentant la consommation computationnelle, mémoire et bande passante d'une transaction sur Ethereum.

**Comparaison :**
- Bitcoin : 1 bloc = 1 Mo max
- Ethereum : 1 bloc = **60 millions de gas max** (2026) / objectif 30 millions

**Exemples de coûts en gas :**
- Addition = 3 gas
- Stocker 1 octet = 16 gas
- **Transaction simple ETH A → B = 21 000 gas minimum**

→ 60 000 000 / 21 000 = **2 856 transactions simples max par bloc** (toutes les 12s)

---

## Coût d'une transaction

> **Frais = Nombre de gas × Prix du gas**

Exemple : 21 000 gas × 10 Gwei = 210 000 Gwei = 0,00021 ETH ≈ 0,63$

---

## [[EIP-1559]] — Le système post-Août 2021

### Base Fee (frais de base)
- Prix minimum du gas fixé **algorithmiquement** par le protocole
- Varie selon l'occupation des blocs
- **Bloc > 30M gas** → base fee monte (max +12,5% par bloc)
- **Bloc < 30M gas** → base fee descend (max -12,5% par bloc)
- **Brûlée** (burned) → jamais donnée au validateur

### Priority Fee / Tip (frais de priorité)
- Pourboire optionnel donné **au proposeur du bloc**
- Permet d'être prioritaire dans la mempool

### Réglage utilisateur
1. Tu fixes ton **max fee** (prix max que tu acceptes payer)
2. Ta transaction est incluse dès qu'un bloc a une base fee ≤ ton max fee
3. Tu es remboursé de la différence

> Dans un bloc, **toutes les transactions payent le même base fee**

---

## Pourquoi brûler la base fee ?

Avant EIP-1559, tous les frais allaient aux mineurs → ils pouvaient gonfler artificiellement le gas. Solution : brûler la base fee = aucune incitation à manipuler.

> Le burn de l'ETH n'était **pas l'objectif** de l'EIP-1559, c'est une conséquence "heureuse" → ETH potentiellement déflationniste

---

## Outils

- Block explorer : https://etherscan.io
- Convertisseur : https://eth-converter.com/
- EVM opcodes : https://ethereum.org/en/developers/docs/evm/opcodes/

---

## Liens
- [[EIP-1559]]
- [[Mempool]]
- [[MEV]]
- [[Module-7_Staking-Ethereum-POS]]
- [[Ethereum]]
- [[Smart-Contracts]]
- [[DeFi]]
- [[Aave]]
