# Slashing
Tags: #concept #ethereum #POS #sanction #securite

---

## Définition

Le **slashing** est la sanction la plus grave dans le Proof of Stake d'Ethereum. Il s'applique quand un validateur adopte un comportement malveillant ou dangereux pour la sécurité du réseau.

## Les 2 causes de slashing

**En lien avec LMD Ghost :**
- Proposer plus d'un bloc dans le même slot
- Attester deux blocs différents dans la même epoch → **nothing-at-stake attack**

**En lien avec Casper FFG :**
- Faire deux attestations différentes pour le même checkpoint → **nothing-at-stake attack**

## Les 2 phases du slashing

**Phase 1 — Slashing initial (immédiat) :**
- Perte de 1/32e des ETH du validateur (max 1 ETH)
- Exclusion du réseau + 36 jours d'attente avant sortie définitive
- Pendant ces 36 jours : pénalités d'attestation et potentiellement inactivity leak

**Phase 2 — Slashing de corrélation (18 jours après) :**
- Perte supplémentaire entre 0 et 32 ETH
- Plus il y a de slashings simultanés → plus la perte est massive
- Mécanisme anti-attaque coordonnée

## Pourquoi ce mécanisme ?

Rendre une attaque économiquement catastrophique pour l'attaquant. Si 33% des validateurs tentent une attaque coordonnée, ils perdent la quasi-totalité de leur stake.

## Liens
- [[Proof-of-Stake]]
- [[Inactivity-Leak]]
- [[Module-7_Staking-Ethereum-POS]]
- [[Casper-FFG]]
- [[LMD-Ghost]]
