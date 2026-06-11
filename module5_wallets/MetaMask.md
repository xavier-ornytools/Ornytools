# MetaMask

**Tags :** #wallet #hot-wallet #ethereum #DeFi

---

## Présentation

Le **hot wallet** le plus utilisé dans l'écosystème Ethereum et EVM.

- Disponible en **extension navigateur** (Chrome, Firefox, Brave) et **app mobile**
- Compatible avec tous les **réseaux EVM** (Ethereum, Arbitrum, Polygon, Base...)
- Interface standard pour interagir avec les [[Smart-Contract]] et la [[DeFi]]

## Caractéristiques

| | |
|---|---|
| Type | Hot wallet (clé privée en ligne) |
| Seed | 12 mots (BIP-39, 128 bits) |
| Coût | Gratuit |
| Réseaux | Multi-EVM |
| Sécurité | Faible (navigateur exposé) |

## Fonctionnement

1. Génère une [[Mnemonic-Seed]] de 12 mots à l'installation
2. Dérive la [[Cle-privee]] → [[Courbe-elliptique]] → clé publique → adresse
3. Stocke la clé privée chiffrée localement (dans le navigateur)
4. Signe les transactions avec la clé privée au moment de l'envoi

## Utilisation DeFi

MetaMask est le point d'entrée standard pour :
- Interagir avec Uniswap, Aave, Lido...
- Connecter un wallet à une dApp ("Connect Wallet")
- Signer des transactions on-chain

## Risques

- Vulnérable aux extensions malveillantes
- Risque de phishing (faux sites MetaMask)
- Clé privée dans le navigateur → exposition aux hacks
- **Solution :** coupler MetaMask avec un hardware wallet (Ledger)

## Alternative : Rabby Wallet

[[Rabby-Wallet]] — même usage, interface plus moderne, simulation de transaction avant signature.

---

## Liens

- [[Module-5_Wallets-Cles-Cryptographie]]
- [[Mnemonic-Seed]]
- [[EOA]]
- [[Module-6_Gas-Frais-Transaction]]
