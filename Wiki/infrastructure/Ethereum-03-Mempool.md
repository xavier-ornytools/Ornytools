# 🌊 La Mempool & MEV

**Module :** [[Ethereum-Index]] > 03  
**Tags :** #ethereum #mempool #MEV #frontrunning #transaction

---

## La Mempool

**Mempool** = zone d'attente des transactions **en attente de validation**

- Toutes les transactions passent par la mempool avant d'être incluses dans un bloc
- La mempool est **publique** → tout le monde peut voir les transactions en attente et leurs détails

---

## Ce que ça implique

La transparence de la mempool crée des opportunités pour des acteurs malveillants :

### 1. Front-running
→ Faire passer sa transaction **avant** celle d'un autre utilisateur  
→ En payant plus de gas pour passer devant

### 2. Copying
→ Recopier une transaction profitable (ex: liquidation de prêt)

### 3. Replacing
→ Recopier ET remplacer une transaction profitable  
→ La transaction originale est évincée ❌

---

## MEV Bots

**MEV = Maximum Extractable Value**

Ces opérations sont réalisées par des **robots automatisés** (MEV bots) qui :
- Scannent la mempool en continu
- Détectent les transactions profitables
- Les **front-run** automatiquement pour en tirer profit

> ⚠️ Le MEV est une réalité du DeFi — il peut augmenter le coût effectif de tes transactions (slippage invisible).

---

## Liens
- [[Ethereum-02-SmartContracts]]
- [[Ethereum-04-L1-L2-Sidechains]]
- [[Ethereum-Index]]
