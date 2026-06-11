# Guide — Système IA & Obsidian
**Formation Alyra · Promo Blaise Pascal 2026 · Référence permanente**  
**Source :** PDF3 v3 — Pascal Tallarida  
**Tags :** #guide #système #claude-code #obsidian #workflow #référence

---

## Architecture — Les 3 Niveaux

| Niveau | Outil | Rôle |
|--------|-------|------|
| 1 — Stockage | Obsidian `~/Bureau/Michel/` | Vault Markdown local. Graphe de connaissances. MOC comme point d'entrée. |
| 2 — Intelligence | Claude (claude.ai ou Claude Code) | Interprète photos/PDFs, génère des fiches enrichies avec définitions, tableaux, liens croisés. |
| 3 — Automatisation | Claude Code (terminal CLI) | Agent autonome avec accès direct au vault. Crée et modifie les fiches sans copier-coller. Lit le profil CLAUDE.md à chaque session. |

> **En une phrase :** claude.ai = moi dans un navigateur, tu fais le pont. Claude Code = moi dans ton terminal avec les mains, je fais le pont. Même intelligence, accès différent.

---

---

## Activité 1 — Prise de Notes (Photos & PDFs → Vault)

**Ce que tu fais :** tu m'envoies tes photos de notes manuscrites ou tes PDFs de cours directement dans Claude Code. Je génère la fiche Markdown enrichie et je l'écris directement dans le vault.

**Flux :**
1. Déposer les contenus bruts dans `Raw/formation/` (PDFs, photos non traitées)
2. M'envoyer le fichier dans le chat
3. Je génère la fiche `.md` avec définitions développées, tableaux, liens croisés
4. La fiche est écrite directement dans le bon dossier du vault
5. Je mets à jour `MOC-Alyra-DeFi-V2.md`

**Convention de nommage :**
- Notes de cours : `S[semaine]-J[jour]_Titre.md` ou `[section]_Titre.md`
- Wiki : dans `Wiki/[catégorie]/NomDuConcept.md`
- Exercices : `S[semaine]-J[jour]_Exercice-Sujet.md`

**Tip — Obsidian Clipper :** extension Chrome à installer depuis obsidian.md/clipper. Un clic sur n'importe quelle page web → article sauvegardé dans `Raw/clippings/` avec URL et date.

---

---

## Activité 2 — Configuration du Système (Claude Code + Skills)

**Ce que c'est :** la mise en place de l'infrastructure qui permet l'Activité 1 de fonctionner en autonomie.

### CLAUDE.md — Ton identité permanente

| Fichier | Emplacement | Rôle |
|---------|-------------|------|
| **CLAUDE.md Global** | `~/.claude/CLAUDE.md` | Profil Xavier : formation Alyra, objectifs Genève, appétence risque, vault Obsidian, langue. Appliqué partout, tout le temps. |
| **CLAUDE.md Vault** | `~/Bureau/Michel/_config/CLAUDE.md` | Contexte spécifique du vault : règles de classement des notes, routing DeFi. |

### Les 6 Skills — Raccourcis permanents

| Skill | Action |
|-------|--------|
| `/save` | Transforme la conversation en cours en fiche propre, rangée dans le bon dossier |
| `/fiche-technique` | Génère une fiche complète HTML ou Markdown sur n'importe quel sujet DeFi |
| `/reflect` | En fin de session, analyse les corrections et propose d'améliorer les SKILL.md |
| `/auto-correct` | Corrige une erreur méthodiquement sans deviner |
| `/git-workflow` | Sauvegarde le code proprement avec Git |
| `/document-release` | Vérifie que la doc reflète le code après une mise à jour |

### Structure du Vault

```
~/Bureau/Michel/
├── _config/          → CLAUDE.md + STYLE.md + README.md + templates/
├── Raw/              → clippings/ formation/ webinaires/ references/ prompts/
├── Wiki/             → mechanics/ concepts/ assets/ protocols/ infrastructure/
│                        onramp/ custody/ frameworks/ theses/ hacks/
│                        comparisons/ events/ regulation/
├── Strategies/       → 1 fichier par stratégie (à plat)
├── Data/             → dex/ lending/ perp/ stablecoin/ l1-l2/ bridge/
│                        yield/ rwa/ hack/ vault/ option/ fixed-income/ staking/
└── MOC-Alyra-DeFi-V2.md  → point d'entrée principal
```

---

## Statut de la Migration — Juin 2026

| Étape                                                  | Statut          |
| ------------------------------------------------------ | --------------- |
| Claude Code installé                                   | ✅ Opérationnel  |
| CLAUDE.md global créé                                  | ✅ En place      |
| 6 skills créés                                         | ✅ Opérationnels |
| Structure vault (_config, Raw, Wiki, Strategies, Data) | ✅ En place      |
| Fiches existantes classées                             | ✅ En cours      |
| Obsidian Clipper (extension Chrome)                    | ⬜ À installer   |

> **Résultat :** tu travailles déjà exactement comme décrit dans le résultat final du guide. Le système est opérationnel.

---

## Liens
- [[MOC-Alyra-DeFi-V2]] — navigation principale du vault
- [[Rabby]] — wallet utilisé en formation
