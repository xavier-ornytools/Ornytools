# 📜 Smart Contracts & ERC20

**Module :** [[Ethereum-Index]] > 02  
**Tags :** #ethereum #smartcontract #ERC20 #token #solidity

---

## Définition

Un **smart contract** = programme qui tourne sur Ethereum pouvant :
- Recevoir un dépôt de token
- Exécuter des fonctions : dépôt, retrait, envoi, échange, prêt…

> 💡 Un **token** est un smart contract.  
> Un **protocole** (Aave, Uniswap) = un **ensemble de smart contracts**.

---

## Propriétés

| Propriété | Détail |
|-----------|--------|
| Immuable ou upgradable | Le code peut être figé ou modifiable |
| Administrateur | Peut disposer des fonds si le contrat l'autorise ⚠️ |
| Risques | Peut contenir des bugs, failles, backdoors |
| Sécurité | **N'hérite pas** de la sécurité de la blockchain sous-jacente |

---

## Standards de tokens

| Standard | Usage |
|----------|-------|
| **ERC20** | Tokens fongibles (USDC, LINK, UNI…) |
| **ERC721** | NFTs (non fongibles) |

### Particularité ERC20
Le standard ERC20 nécessite **2 transactions** pour interagir avec un smart contract :
1. **Approve** → autoriser un montant à être utilisé
2. **Transaction** → réaliser l'opération

---

## Points de vigilance 🚨

- Un smart contract **ne hérite pas** de la fiabilité d'Ethereum
- L'administrateur peut avoir des droits dangereux sur les fonds
- Les bugs et backdoors sont possibles → toujours vérifier l'audit

---

## Liens
- [[Ethereum-01-EVM]]
- [[Ethereum-03-Mempool]]
- [[Ethereum-Index]]
