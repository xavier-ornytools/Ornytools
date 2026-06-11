# Risques DeFi

**Tags :** #DeFi #risques #sécurité #hacks

---

## Les deux familles de risques

### 1. Risques Techniques

**Code (smart contracts)**
- Bugs de programmation → exploits
- Exemple : Radiant Capital ($4.5M, jan 2024), ZKSwap ($41M)
- Ressource de suivi : [rekt.news](https://rekt.news) + [DefiLlama/Hacks](https://defillama.com)

**Systémiques (interdépendance)**
- Les protocoles DeFi s'emboîtent comme des Lego
- Effondrement d'un protocole → contagion aux autres
- Ex : collapse de Terra/Luna → propagation à Celsius, 3AC, etc.

**Blockchain**
- Attaque 51% (sur petites blockchains)
- Congestion réseau → [[Gas]] excessif
- Erreur humaine (mauvaise adresse, mauvais montant)
- Self-custody : perdre sa [[Mnemonic-Seed]] = perdre ses fonds

**[[MEV]] (Maximal Extractable Value)**
- Validators/bots qui réorganisent les transactions pour extraire de la valeur
- Front-running, sandwich attacks → lien avec [[Mempool]]

### 2. Risques de Marché

**Fausse décentralisation**
- Projet "DeFi" mais avec admin keys → l'équipe peut rugpull
- Vérifier : multisig, timelock, audit

**Attaques de gouvernance**
- Flash loan → emprunt massif → vote malveillant → remboursement
- Exemple : Beanstalk ($182M volés via vote de gouvernance)
- Exemple : Tornado Cash (prise de contrôle de la DAO)

**Oracle manipulation**
- L'oracle fournit le prix des actifs au smart contract
- Manipulation du prix → liquidations artificielles ou emprunt excessif
- Exemple : Mango Markets ($117M via manipulation MNGO)
- Solution : [[Chainlink]] (oracle décentralisé)

**Risque de liquidité**
- Pool trop petit → slippage important
- Fuite de liquidité lors des crises (bank run DeFi)

**Réhypothécation**
- Collatéral réutilisé plusieurs fois dans différents protocoles
- Fragile en cas de baisse des prix

## Chiffres clés (référence DefiLlama)

- Total hacké depuis les débuts : **$7.68 milliards**
- Dont DeFi protocols : **$5.82 milliards**
- Dont bridges : **$2.83 milliards**

## Règles de sécurité personnelle

- 2FA partout (hardware si possible : YubiKey)
- Mots de passe uniques + gestionnaire (Bitwarden)
- Vigilance phishing : bookmark les dApps, vérifier l'URL
- Séparer hot wallet (dépenses) et cold wallet (épargne)
- Ne jamais signer une transaction sans comprendre ce qu'elle fait

---

## Liens

- [[Intro-DeFi_Semaine1]]
- [[MEV]]
- [[Mempool]]
- [[Smart-Contract]]
- [[Aave]] — gestion du risque de liquidation (Health Rate)
