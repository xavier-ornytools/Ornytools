# Autonomous System · Couches Réseau · Services Décentralisés
**Semaine 1 · Jour 2 · Page 4**
Tags: #alyra #internet #TCP-IP #BGP #routage #couches-reseau

---

## ④ Internet — Autonomous System

> "Internet est un réseau inter-domaine, hiérarchique et égoïste à routage décentralisé par **commutation de paquets** (BGP)"

- Un réseau = un **Autonomous System (AS)** = un FAI (Fournisseur d'Accès Internet)

---

## Les couches réseau

| Couche | Contenu |
|--------|---------|
| Couche 1 | `01001110` — Pas de sens (binaire brut) |
| Couche 2 | Adresse destination + checksum à l'arrivée |

### Encapsulation des données

```
Ethernet/physique  [  IP  [  TCP  [ données ] ] ]
                   [  IP  [  TCP  [ données ] ] ]
              [IP  [  TCP  [ données ] ]         ]
[lien liaison][IP  [  TCP  [ données ] ]         ]
```

---

## ⑤ Services décentralisés et routage

```
Réseau Ethernet → Table mémoire du routeur → [Réseau A]
                                              [Réseau B]  ← Interconnecté
                                              [Réseau C]
```

- Chaque **AS partage son adresse**
- → C'est le **BGP (Border Gate Protocol)**

---

## Liens
- [[1-2-3_Client-Serveur-P2P-DNS]]
- [[1-2-5_Le-Web]]
