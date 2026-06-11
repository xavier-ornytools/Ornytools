# 🥩 Staking & Restaking

**Module :** [[Ethereum-Index]] > 05  
**Tags :** #ethereum #staking #PoS #validateur #restaking #EigenLayer #slashing

---

## Le Staking Ethereum (Proof of Stake)

Les **validateurs** sécurisent le réseau en **stakant leurs ETH**.

### Options de staking

| Mode | Détail | Requis |
|------|--------|--------|
| **Solo staking** | Propre nœud validateur | Min. **32 ETH** + matériel (ex: Dappnode) |
| **Staking pool** | Délégation à une pool | N'importe quel montant |

**Exemples de pools :** Lido (stETH), Rocket Pool (rETH), Binance (WBETH)

### Récompenses
Les validateurs reçoivent :
- Les **frais de transaction** générés sur le réseau
- De **nouveaux ETH** émis (inflation contrôlée)

### Le Slashing ⚠️
Le slashing = **pénalité** infligée aux validateurs qui :
- Se comportent mal (ex: double signature)
- Ont de faibles performances

> Stat : seulement **0,04% des nœuds** ont été slashés depuis 2020.

**Risque pool :** rejoindre une pool expose au risque de slashing des nœuds de la pool.

---

## Le Restaking (EigenLayer)

**Inventé par EigenLayer**, le restaking consiste à **réutiliser les validateurs Ethereum** pour sécuriser d'autres protocoles et services.

### Principe
Les validateurs et leur stake sécurisent simultanément :
- Ethereum L1
- D'autres services : bridges cross-chain, séquenceurs L2, oracles…

Le slashing est **personnalisé pour chaque service**.

### Avantages ✅

| Avantage | Détail |
|----------|--------|
| **Efficience** | Même stake et matériel pour plusieurs protocoles |
| **Rendement** | Récompenses Ethereum + récompenses des autres protocoles |
| **Sécurité** | Les développeurs empruntent la sécurité d'Ethereum |
| **Go-to-market** | Utilisation directe d'un réseau existant |

### Risques ⚠️

| Risque | Détail |
|--------|--------|
| **Slashing multiplié** | Staker dans plusieurs protocoles = risques cumulés |
| **Vulnérabilités tierces** | Un protocole tiers peut déclencher un slashing injuste |
| **Cascade** | Un slashing peut déclencher une réaction en chaîne |
| **Performance** | Ressources divisées → risque de dégradation sur Ethereum |
| **Risque systémique** | Effet levier : tous les protocoles s'imbriquent → contagion possible |

> 🎯 Le Restaking peut être **la meilleure comme la pire chose** qui puisse arriver à Ethereum.  
> Même Vitalik et les core devs ont exprimé des inquiétudes.

---

## Liens
- [[Ethereum-04-L1-L2-Sidechains]]
- [[Ethereum-Index]]
