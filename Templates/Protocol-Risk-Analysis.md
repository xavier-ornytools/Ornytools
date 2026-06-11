# Analyse de Risque — [Nom du Protocole]
**Date d'analyse :** JJ/MM/AAAA  
**Analyste :** Xavier  
**Verdict final :** 🟢 OK / 🟡 Prudence / 🔴 Ne pas entrer  
**Tags :** #analyse-risque #due-diligence #protocole

---

## 1 — Présentation rapide

| Champ | Réponse |
|-------|---------|
| Nom du protocole | |
| Type | Stablecoin / Lending / DEX / Staking / Autre |
| Famille | Fiat-backed / Crypto-backed / Strategy-backed / Funds-backed |
| Réseau | Ethereum / Arbitrum / Autre |
| TVL actuelle | (DefiLlama) |
| Date de lancement | |
| Token principal | |

---

## 2 — Risque de Mécanisme

> Comment le protocole maintient-il la stabilité / le rendement ?

- [ ] Le mécanisme est-il documenté et compréhensible ?
- [ ] Dans quelles conditions le peg / le rendement peut-il s'effondrer ?
- [ ] Y a-t-il des précédents de dépegging ou de perte de rendement ?
- [ ] Le mécanisme dépend-il d'un actif volatil ?

**Notes :**

---

## 3 — Risque Smart Contract

> Le code est-il sûr ?

- [ ] Audits réalisés ? Combien ? Par qui ?
- [ ] Date du dernier audit
- [ ] Résultats : vulnérabilités critiques trouvées et corrigées ?
- [ ] Le code est-il open source (vérifiable) ?
- [ ] Y a-t-il eu des exploits ou incidents passés ?

| Auditeur | Date | Résultat |
|----------|------|----------|
| | | |

**Source :** Etherscan / site officiel / DeFiSafety

---

## 4 — Risque de Gouvernance

> Qui contrôle le protocole ?

- [ ] Contrôle centralisé (équipe) ou décentralisé (DAO) ?
- [ ] Présence d'un multisig sur les fonctions admin ?
- [ ] Timelock sur les upgrades ? (délai minimum : 48h recommandé)
- [ ] Possibilité de mint illimité ou de drain des fonds par l'équipe ?
- [ ] Historique de décisions de gouvernance controversées ?

**Score de décentralisation :** /10

---

## 5 — Risque de Liquidité

> Peut-on sortir facilement ?

- [ ] Volume quotidien sur les DEX (Curve, Uniswap…)
- [ ] Profondeur du pool (slippage pour 10k$ / 50k$ / 100k$)
- [ ] Mécanisme de rédemption natif (via le protocole) ?
- [ ] Délai de rédemption ? Préavis requis ?
- [ ] Que se passe-t-il en cas de bank run ?

**Liquidité estimée pour sortir sans slippage majeur :** $

---

## 6 — Risque de Contrepartie

> À qui fait-on confiance hors du smart contract ?

- [ ] Custodian des réserves identifié ?
- [ ] Banque dépositaire connue et régulée ?
- [ ] Attestations des réserves : fréquence ? Auditeur ?
- [ ] Exposition à un tiers centralisé (CEX, broker, gestionnaire de fonds) ?

---

## 7 — Risque Systémique

> Le protocole peut-il contaminer d'autres positions ?

- [ ] Est-il utilisé comme collatéral sur Aave, Compound… ?
- [ ] Si ce protocole s'effondre, quelles positions seraient impactées dans mon portefeuille ?
- [ ] Corrélation avec d'autres actifs détenus ?

**Impact sur mon portefeuille si défaut :**

---

## 8 — Sources consultées

- [ ] [[Pharos-Watch]]
- [ ] DefiLlama — TVL et historique
- [ ] Etherscan — contrats vérifiés
- [ ] Site officiel — documentation
- [ ] Rapport d'audit
- [ ] Autre :

---

## Verdict Final

| Critère | Score (1–5) | Commentaire |
|---------|-------------|-------------|
| Mécanisme | | |
| Smart contract | | |
| Gouvernance | | |
| Liquidité | | |
| Contrepartie | | |
| **Total** | **/25** | |

**Décision :**
- 20–25 → 🟢 Entrée possible
- 12–19 → 🟡 Prudence — position petite, surveillance accrue
- < 12  → 🔴 Ne pas entrer

**Montant max recommandé pour ce protocole :**

---

## Liens
- [[Pharos-Watch]]
- [[Risques-DeFi]]
- [[MOC-Alyra-DeFi-V2]]
