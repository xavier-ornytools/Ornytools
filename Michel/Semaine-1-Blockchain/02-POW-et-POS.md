# 02 – POW et POS (Mécanismes de consensus)

Tags: #blockchain #POW #POS #consensus #minage #staking #semaine1

---

## Le consensus : pourquoi ?

Le **consensus** permet au réseau de fonctionner en étant **décentralisé** — sans autorité centrale unique qui valide tout.

Deux grands types :
- **Proof of Work (POW)** – Preuve de Travail → utilisé par **Bitcoin**
- **Proof of Stake (POS)** – Preuve d'Enjeu → utilisé par **Ethereum**

---

## Proof of Work (POW)

### Devenir validateur (mineur)
- Acheter et entretenir du **matériel de minage**
- Louer de la puissance de calcul sur le **cloud**
- Rejoindre une **pool** de mineurs

### Comment ça marche ?
1. Les mineurs s'affrontent pour **résoudre un puzzle cryptographique complexe**
2. Le **premier** à le résoudre propose le bloc
3. Le réseau valide le bloc
4. Le mineur gagnant est **récompensé** : émission de nouvelles crypto + frais des transactions du bloc

### Sécurité par le coût énergétique
- Résoudre le puzzle nécessite **beaucoup de calculs** → machines puissantes → **haute consommation d'énergie**
- Fraude découragée : gaspiller de l'énergie pour voir son bloc refusé = perte sèche
- ⚡ Principal reproche : **impact environnemental**

---

## Proof of Stake (POS)

### Devenir validateur (staker)
- Acheter des cryptomonnaies et les **staker** (bloquer en garantie pour une durée)
- Rejoindre une **pool** de staking

### Comment ça marche ?
1. Le validateur est **choisi au hasard** — proportionnellement à son stake
2. Il propose un bloc
3. Le réseau valide (les autres validateurs attestent)
4. Le validateur + les attestateurs sont **récompensés** (nouvelles crypto + frais)

### Sécurité par le slashing
- Comportement frauduleux ou sous-performance → **slashing** :
  - Confiscation de tout ou partie du stake
  - Éviction du réseau
- Les récompenses + le slashing = incitation à participer **honnêtement et activement**

---

## Comparaison rapide

| Critère | POW | POS |
|--------|-----|-----|
| Sécurité via | Puissance de calcul (énergie) | Capital mis en jeu |
| Validateur choisi par | Course au calcul | Tirage au sort pondéré |
| Sanction fraude | Perte d'énergie + pas de récompense | Slashing (perte de stake) |
| Exemple | Bitcoin | Ethereum |
| Consommation énergie | Élevée | Faible |

---

Liens : [[01-Principe-General]] | [[03-Scalabilite]] | [[MOC-Alyra-DeFi-V2]]
