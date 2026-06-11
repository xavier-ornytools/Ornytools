# 🤖 IA & Outillage — Claude, ChatGPT, Obsidian pour DeFi

**Cours :** Alyra — Semaine 4 · Session 4.3.4  
**MOC :** [[MOC-Alyra-DeFi-V2]]  
**Tags :** #alyra #semaine4 #IA #claude #ChatGPT #Obsidian #outillage #Curve #Convex #alors on est tou bnotemplates #workflow

---

## 01 — L'IA comme interface vers les protocoles complexes

Curve et Convex ont des interfaces techniques qui peuvent intimider. L'approche enseignée en cours : **utiliser ChatGPT ou Claude comme couche d'explication** avant d'interagir avec les protocoles directement.

### Workflow type

```
1. EXPLIQUER : "Explique-moi comment déposer dans la pool USDT/USDe sur Convex"
           ↓
2. INTERFACE : ChatGPT génère une description pas-à-pas de l'interface
           ↓
3. VISUALISATION : Demander un schéma textuel ou une description visuelle
           ↓
4. EXÉCUTION : Tu exécutes en sachant exactement ce que tu fais
```

Le but n'est pas de déléguer la décision à l'IA — c'est de **comprendre avant d'agir**. L'IA t'économise le temps de déchiffrer une interface inconnue.

---

## 02 — Claude Code + Obsidian : le duo de production

**Claude Code** (CLI) + **Obsidian** est la stack recommandée pour structurer la connaissance DeFi et automatiser les workflows d'analyse.

### Ce que fait Claude Code dans ce contexte
- Génère des scripts d'analyse (prix, APY, ratios de pool)
- Crée des templates Obsidian structurés
- Automatise la veille (fetch data → formatter → insérer dans vault)
- Met du code sur GitHub si on crée un projet Vault dédié

### Workflow recommandé
```
Question DeFi complexe
        ↓
Claude Code → analyse + code
        ↓
Résultat formaté → Obsidian (note structurée)
        ↓
Archivé dans le vault pour référence future
```

> **Important :** Claude Code voudra des clés API (CoinGecko, DefiLlama, GitHub...) pour les tâches automatisées. Préparer ces clés avant de commencer une session de travail.

---

## 03 — Créer un Vault Projet dédié

L'idée : avoir un vault Obsidian séparé **par projet** plutôt que tout mettre dans le vault principal.

**Exemple concret :** un Vault Projet "Curve-Convex" qui contient :
- Les pools analysées avec leurs métriques
- Les templates d'analyse de risque
- Les scripts Claude Code associés
- Le code déployé sur GitHub (lien)

**Template Claude = zéro** : Claude peut générer le template de départ pour n'importe quelle note structurée. Tu n'as pas besoin de partir de rien — tu définis le format une fois, Claude l'applique à chaque nouvelle pool.

---

## 04 — Conditions d'utilisation de la fonction ZAP

La fonction ZAP (vue en [[4-3_Curve-Convex-Beefy-LP-Avance]]) ne s'utilise pas à l'aveugle.

**Règle :** ZAP uniquement si la pool est équilibrée (ratio proche de 50/50).

### Comment vérifier avant de ZAP

```
Demander à Claude/ChatGPT :
"Donne-moi le ratio actuel entre les tokens de la pool [nom de la pool] sur Curve.
Si le ratio dépasse X% de déséquilibre, je ne fais pas de ZAP."
```

Ou directement sur l'interface Curve : Pool Stats → voir la composition actuelle.

Un déséquilibre de pool indique soit :
- Un stablecoin sous pression (les gens fuient vers l'autre)
- Une opportunité d'arbitrage (les arbitrageurs vont rééquilibrer)

Dans les deux cas, entrer en ZAP dans ce contexte = subir le slippage.

---

## 05 — Template d'analyse de pool : structure suggérée

Pour chaque pool analysée, documenter systématiquement :

```markdown
## Pool : [NOM] sur [Curve / Convex / Beefy]

**Tokens :** Token A / Token B  
**TVL :** $xxx  
**APY :** xx% (APR : xx%)  
**Ratio actuel :** A: xx% / B: xx%  
**Audits :** [liste]  
**Risques identifiés :**  
- Token A : [type, mécanisme, score Pharos Watch]  
- Token B : [type, mécanisme, score Pharos Watch]  
**Décision :** ENTRER / ÉVITER / SURVEILLER  
**Raison :**  
```

Ce template peut être généré par Claude une fois, puis réutilisé pour chaque nouvelle pool.

---

## 06 — Retour sur la "Batton Chain" et visualisation

Dans la session, l'exemple de discussion ChatGPT montrait comment partir d'une question abstraite ("explique Convex") vers une visualisation concrète de l'interface, puis vers une description de la chaîne de transactions.

Le terme **"Batton Chain"** (baton chain?) fait référence à la chaîne de délégation : Toi → Beefy → Convex → Curve → veCRV. Chaque maillon délègue au suivant pour optimiser le rendement. Comprendre cette chaîne permet de savoir où se situe le risque à chaque niveau.

---

## 🔗 Liens connexes

- [[MOC-Alyra-DeFi-V2]]
- [[4-3_Curve-Convex-Beefy-LP-Avance]] — le cours pratique LP
- [[4-2-1_Gestion-Projet-Veille-Active]] — méthodologie veille et templates
- [[Guide-Systeme-IA-Obsidian]] — guide système IA/Obsidian déjà dans le vault
- [[Pharos-Watch]] — analyse de risque stablecoins
- [[S4-CDP]] — stablecoins CDP (crvUSD, GHO...)

---

## ❓ À approfondir

- [x] Créer le template d'analyse de pool dans Obsidian → [[Template_Pool-Analyse]]
- [ ] Tester un workflow Claude Code → Obsidian sur une vraie pool Convex
- [ ] Vérifier les clés API disponibles (CoinGecko, DefiLlama) pour les scripts
- [ ] Créer un Vault Projet "DeFi-Strategies" séparé du vault cours
