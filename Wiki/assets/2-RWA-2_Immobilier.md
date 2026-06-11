# 🏠 L'Immobilier Tokenisé
**Semaine 2 · Actifs tokenisés**
Tags: #alyra #rwa #immobilier #semaine2

---

## Les 2 modèles de tokenisation immobilière

La tokenisation immobilière se fait toujours via une **société intermédiaire (LLC)** qui détient le bien.
On tokenise les **parts de cette société**, pas le bien directement.

| Modèle | Standard | Caractéristique |
|--------|----------|-----------------|
| Tokens fongibles | **ERC20** | Fractionnement → plusieurs investisseurs |
| Token unique | **ERC721 (NFT)** | Un seul propriétaire |

---

## Exemple clé : RealT

> **RealT** = projet le plus orienté DeFi dans l'immobilier tokenisé.

### Comment ça marche
1. RealT détient un bien US via une **LLC**
2. Les parts de la LLC sont tokenisées sur blockchain (Gnosis Chain / xDai)
3. L'investisseur achète des tokens → il reçoit des **loyers en crypto** directement sur son wallet

### Flux des loyers
```
Locataire → Loyers $ → Société de gestion
  → RealT → Converti en crypto (xDai) → Investisseur wallet
```

### Acheter sur RealT (5 étapes)
1. Créer un compte
2. Vérifier son identité (KYC)
3. Signer un contrat
4. Lier son adresse wallet (signature)
5. Procéder à l'achat (si disponible)

### ⚠️ Security Token + Whitelist
Les tokens RealT sont des **security tokens** — seules les adresses **whitelisted** (autorisées) peuvent les recevoir.
→ C'est du **permissioned** : pas de libre circulation.

### Ce qui rend RealT "DeFi-native"
- Achat depuis un **wallet web3** (pas de banque)
- Loyers envoyés directement sur l'adresse investisseur
- **Interopérabilité** : les tokens peuvent être mis en collatéral sur Aave (Gnosis Market)

---

## Autres projets immobilier tokenisé (moins DeFi, plutôt B2C)

| Projet | Marché | Particularité |
|--------|--------|---------------|
| **Equito** | Espagne | Immobilier locatif, dès 100€ |
| **ATOA** | France | Immobilier locatif français, parts via fiducie |
| **Aspen Digital** | USA | Hotel de luxe (St. Regis Aspen), security token |
| **Propy** | USA | NFT marketplace pour faciliter les transactions |

---

## ⚠️ Risques

- **Centralisation** : dépend de RealT comme tiers de confiance
- **Confiance/transparence** : la LLC et la société de gestion doivent être fiables

---

## Liens
- [[2-RWA-INDEX]]
- [[2-RWA-1_Definition]]
- [[2-RWA-3_Produits-Financiers]]
- [[MOC-Alyra-DeFi-V2]]
