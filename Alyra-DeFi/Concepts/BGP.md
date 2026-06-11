# 🗺️ BGP
Tags: #concept #réseau #internet

---

## Définition
**BGP** (Border Gateway Protocol) est le protocole de routage qui gère comment les données voyagent entre les grands réseaux (AS — Autonomous Systems) sur Internet.

---

## Analogie
> Si TCP/IP est le langage commun d'Internet, **BGP est le GPS** qui décide par quel chemin les données passent

- Internet = des milliers de réseaux indépendants (AS) interconnectés
- BGP = le protocole qui leur dit comment se parler et se router mutuellement

---

## Autonomous System (AS)
- Un AS = un grand réseau géré par une seule entité (FAI, entreprise, université)
- Chaque AS a un numéro unique (ASN)
- Exemples : Orange AS5511, Cloudflare AS13335

---

## Problème de centralisation
> BGP peut être **détourné** (BGP hijacking)

- Un AS malveillant peut annoncer des routes fausses
- Permet de rediriger du trafic Internet à son profit
- Cela s'est produit avec Bitcoin en 2018 (vol de hashrate)

---

## Lien avec la blockchain
- La blockchain est construite par-dessus Internet → vulnérable aux attaques BGP
- Un nœud blockchain peut être isolé si son trafic est détourné

---

## Liens
- [[TCP-IP]] — BGP opère au niveau de la couche Internet
- [[P2P]] — les réseaux P2P sont résilients face aux attaques BGP
- [[Blockchain]] — vulnérabilité BGP hijacking sur les nœuds
