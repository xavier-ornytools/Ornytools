# 👻 Aave
Tags: #concept #defi #lending #ethereum

---

## Définition
**Aave** est le principal protocole de **lending/borrowing décentralisé** sur [[Ethereum]]. Il permet de déposer des cryptos pour générer des intérêts, ou d'emprunter en déposant un collatéral.

> Aave = banque décentralisée, sans KYC, disponible 24h/24

---

## Mécanisme de base

```
Déposant → dépose ETH/WBTC/USDC
              ↓
         Pool Aave (smart contract)
              ↓
Emprunteur ← emprunte USDT/DAI/USDC
             (avec collatéral > emprunt)
```

- Le déposant reçoit des **aTokens** (ex: aUSDC) qui s'apprécient automatiquement
- L'emprunteur paie des intérêts variables ou stables

---

## Health Rate (HR)

> Le ratio de sécurité de ta position

```
HR = (Valeur collatéral × LTV) / Valeur dette
```

| HR | Situation |
|----|-----------|
| > 2.0 | ✅ Sûr |
| 1.5–2.0 | ⚠️ À surveiller |
| 1.0–1.5 | 🔴 Danger |
| < 1.0 | 💀 Liquidation automatique |

**Règle** : si HR descend sous 1.0 → le smart contract liquide automatiquement ton collatéral

---

## Versions

| Version | Réseau | Particularité |
|---------|--------|---------------|
| Aave V2 | Ethereum | Version classique |
| **Aave V3** | Multi-chain | Efficiency mode, isolation mode |
| Aave V3 | [[Arbitrum]], Polygon, etc. | Gas fees réduits |

---

## WBTC — Wrapped Bitcoin
- Bitcoin "emballé" pour fonctionner sur Ethereum
- 1 WBTC = 1 BTC (collatéral le plus populaire sur Aave)
- Permet d'utiliser ses BTC dans la DeFi sans les vendre

---

## Risques principaux
- **Liquidation** si HR < 1
- **Risque smart contract** (Aave a été audité mais...)
- **Risque oracle** (si le prix du collatéral est mal rapporté)

---

## Liens
- [[DeFi]] — Aave est un protocole DeFi fondamental
- [[Ethereum]] — déployé sur Ethereum et L2
- [[Smart-Contracts]] — Aave est un ensemble de smart contracts
- [[Liquidité]] — concept central : Health Rate et liquidation
- [[Arbitrum]] — Aave V3 disponible sur Arbitrum
