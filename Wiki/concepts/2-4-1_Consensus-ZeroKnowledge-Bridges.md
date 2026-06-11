# 2-4-1 — Mécanismes de Consensus, Zero Knowledge & Bridges

> **Source** : Live Alyra — Gaétan — Questions / Réponses + 1h Pratique
> **Semaine 2 · Jour 4 · Page 1**
> **Tags** : #consensus #proof-of-work #proof-of-stake #proof-of-authority #zero-knowledge #bridge #blockchain #scalabilité

---

## 1. Les 3 Mécanismes de Consensus

Un mécanisme de consensus est la façon dont les nœuds d'un réseau blockchain **s'accordent sur la validité des transactions** sans autorité centrale.

### Proof of Work (PoW) — Preuve de Travail
- Les mineurs **résolvent des calculs mathématiques complexes** pour valider un bloc
- Le premier qui trouve la solution gagne la récompense et ajoute le bloc
- **Exemple principal : Bitcoin**
- Très sécurisé mais **consomme énormément d'énergie**
- La sécurité vient de la difficulté computationnelle — attaquer le réseau coûte astronomiquement cher

### Proof of Stake (PoS) — Preuve d'Enjeu
- Les validateurs **bloquent (stakent) des tokens** comme garantie pour valider des blocs
- Plus tu stakes, plus tu as de chances d'être sélectionné pour valider
- **Exemples : Ethereum (depuis The Merge 2022), Solana**
- 99% moins énergivore que le PoW
- Variante : **Delegating PoS** — tu délègues ton stake à un validateur sans gérer l'infrastructure
- La sécurité vient de l'engagement économique — un validateur malveillant perd son stake (slashing)

### Proof of Authority (PoA) — Preuve d'Autorité
- Un nombre **limité de validateurs connus et identifiés** valident les blocs
- Manière **arbitraire et centralisée** de valider — les validateurs sont approuvés par une autorité
- **Exemples : Quorum (JP Morgan), certaines blockchains privées**
- Très rapide et peu coûteux, mais **sacrifice la décentralisation**
- Utilisé surtout dans les consortiums d'entreprises
- Anecdote cours : **"c'est un gadget"** — utile pour des cas spécifiques mais pas pour une vraie blockchain publique
- Autre exemple mentionné : **LayerZero** utilise un modèle proche pour sa messagerie inter-chain

> 💡 **Résumé** : PoW = sécurité par calcul · PoS = sécurité par capital · PoA = sécurité par réputation/identité

---

## 2. Zero Knowledge Proof (ZK) — Preuve à Divulgation Nulle

### Définition
Une **Zero Knowledge Proof** est une preuve mathématique qui permet de **prouver qu'on connaît une information sans jamais révéler cette information**.

Exemple simple : prouver que tu connais le mot de passe d'un coffre sans dire le mot de passe. Le vérificateur peut confirmer que tu le connais sans l'apprendre lui-même.

### Architecture
Le ZK repose sur deux acteurs :
- Le **Prouveur** : celui qui connaît l'information et génère la preuve
- Le **Vérificateur** : celui qui vérifie la preuve sans voir l'information

La preuve est **mathématiquement irréfutable** — impossible à falsifier.

### Application Blockchain — ZK entre 2 Blockchains
- Une blockchain peut **envoyer une ZK Proof à Ethereum** pour prouver la validité de ses transactions
- Ethereum vérifie la preuve sans avoir à traiter toutes les transactions individuellement
- **Résultat** : deux blockchains peuvent "se parler" avec une preuve mathématique
- Applications : **scalabilité** (traiter plus de tx) et **confidentialité** (cacher les données)

### Propriétés du ZK
- **Scalabilité** : compresser des milliers de transactions en une seule preuve → Ethereum vérifie une seule fois
- **Confidentialité** : prouver sans divulguer → idéal pour les données financières sensibles

### Exemples de projets ZK
- **ACROSS / NEAR** : le Layer 0 le plus populaire utilisant des preuves ZK pour la communication inter-chain
- **zkSync, StarkNet, Polygon zkEVM** : L2 Ethereum utilisant des ZK Rollups

---

## 3. Les 4 Technologies de Bridge

Un bridge permet de transférer des actifs entre deux blockchains. Il existe **4 mécanismes techniques** principaux :

### Mécanisme 1 — Mint and Burn (Créer et Détruire)
- Sur la chaîne source : les tokens sont **brûlés** (détruits définitivement)
- Sur la chaîne destination : de nouveaux tokens équivalents sont **mintés** (créés)
- Modèle utilisé par les tokens natifs cross-chain (ex: certains stablecoins officiels)
- Avantage : pas de collatéral bloqué
- Risque : si le mécanisme de mint est piraté → création de tokens ex-nihilo

### Mécanisme 2 — Locked (Verrouillé)
- Sur la chaîne source : les tokens sont **bloqués** dans un smart contract
- Sur la chaîne destination : des tokens wrappés équivalents sont émis
- C'est le modèle classique du **WBTC** (BTC bloqué → WBTC émis sur Ethereum)
- Risque : le contrat de verrouillage est une cible de hack (cf. Ronin Bridge 625M$)

### Mécanisme 3 — Liquidity Pool (Pool de Liquidité)
- Des **pools de liquidité** existent sur chaque chaîne
- L'utilisateur dépose sur la chaîne A → retire depuis le pool de la chaîne B
- Modèle utilisé par **Hop Protocol, Across Protocol**
- Plus rapide que Locked mais nécessite des fournisseurs de liquidité
- Risque : si le pool est vide sur la chaîne destination → délai d'attente

### Mécanisme 4 — Intent / Action Externe
- L'utilisateur exprime une **intention** ("je veux X tokens sur la chaîne B")
- Des **solvers** (acteurs externes) remplissent l'ordre en avance de phase
- Le solver est remboursé ensuite par le protocole
- Modèle utilisé par **Across V3, UniswapX**
- Très rapide car le solver prend le risque de liquidité
- C'est l'esprit du capital qui tourne 

> ⚠️ **Rappel sécurité** : la messagerie inter-chain = principal point de vulnérabilité. Hack Wormhole : 320M$ / Ronin : 625M$ — voir [[2-3-1_Live-DeFi-Exchanges-Bridge-Interchain]]

---

## 4. Une Blockchain Ne Peut Presque Pas Mourir

Point philosophique important du cours :

> **"Une blockchain ne peut presque pas mourir — elle tombe en désuétude."**

Ce que ça signifie :
- Le code d'une blockchain est **immuable et open source** — il continue de tourner tant qu'il y a des nœuds
- Une blockchain "meurt" seulement quand **plus personne ne la fait tourner**
- En pratique elle ne disparaît pas — elle perd juste ses utilisateurs et sa valeur
- Exemples : Ethereum Classic, Bitcoin SV — toujours techniquement vivants mais marginaux

---

## 5. Résumé — Points Clés

| Concept | Essentiel |
|---|---|
| Proof of Work | Sécurité par calcul — Bitcoin — énergivore |
| Proof of Stake | Sécurité par capital staké — Ethereum — efficient |
| Proof of Authority | Sécurité par identité — centralisé — entreprises |
| Zero Knowledge | Preuve sans divulgation — scalabilité + confidentialité |
| Bridge Mint/Burn | Détruire sur A, créer sur B |
| Bridge Locked | Bloquer sur A, wrappé sur B |
| Bridge Liquidity Pool | Pools sur chaque chaîne — rapide |
| Bridge Intent | Solvers prennent le risque — ultra rapide |

---

## Liens vers d'autres fiches
- [[2-3-1_Live-DeFi-Exchanges-Bridge-Interchain]] — Freeze USDC, messagerie inter-chain, hack Wormhole
- [[2-3-2_Bridges-Wrap-Layer2-Sidechain]] — L2 vs Sidechain, compression des données
- [[2-4-2_DePIN-Helium-Hivemapper-Render-Bittensor]] — Projets DePIN
- [[MOC-Alyra-DeFi-V2]]
