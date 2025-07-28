# Serveur Node.js avec API Google Gemini

Ce projet est un serveur minimal en Node.js qui utilise l'API Google Gemini (Generative Language API) pour générer du texte à partir d'un prompt.

## Pré-requis

- Node.js installé (version 14+ recommandée)
- Une clé API Google Gemini valide

## Installation

1. Cloner ce dépôt ou télécharger les fichiers.
2. Installer les dépendances :

```bash
npm install
```

3. Configurer la clé API Gemini :

- Soit modifier directement la variable `GOOGLE_API_KEY` dans `server.js` (non recommandé en production)
- Soit exporter la variable d'environnement avant de lancer le serveur :

```bash
export GOOGLE_API_KEY=ta_clef_gemini
```

## Lancement du serveur

```bash
npm start
```

Le serveur écoute par défaut sur le port 3000 (modifiable via la variable d'environnement `PORT`).

## Utilisation

Faire une requête POST sur l’endpoint `/generate` avec un JSON contenant le prompt :

```json
{
  "prompt": "Bonjour, comment ça va ?"
}
```

Exemple avec `curl` :

```bash
curl -X POST http://localhost:3000/generate -H "Content-Type: application/json" -d '{"prompt":"Bonjour, comment ça va ?"}'
```

La réponse JSON contiendra le texte généré :

```json
{
  "response": "Salut ! Je vais bien, merci."
}
```

## Déploiement

Ce serveur peut être déployé sur Render, Heroku, ou tout autre service supportant Node.js.

---

**Attention :** Ne jamais exposer directement ta clé API en production dans le code source.
Privilégie toujours les variables d’environnement.