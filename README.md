# SportSee

Tableau de bord d'analytics sportif : profil, statistiques et suivi des
performances de course à pied.

Projet front-end réalisé avec React et React Router, dans le cadre de la
formation Développeur d'application Full-Stack (OpenClassrooms).

---

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Stack technique](#stack-technique)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Le backend](#le-backend)
- [Configuration : mock ou API](#configuration--mock-ou-api)
- [Scripts disponibles](#scripts-disponibles)
- [Comptes de démonstration](#comptes-de-démonstration)
- [Structure du projet](#structure-du-projet)
- [Architecture des données](#architecture-des-données)
- [Authentification](#authentification)
- [Limites connues](#limites-connues)
- [Reste à faire](#reste-à-faire)

---

## Fonctionnalités

| Route | Page | Contenu |
|---|---|---|
| `/` | Connexion | Formulaire de connexion, gestion des erreurs |
| `/dashboard` | Dashboard | Bandeau utilisateur, emplacements des graphiques, résumé de la semaine |
| `/profile` | Mon profil | Identité, caractéristiques, statistiques globales |
| `*` | Erreur 404 | Page affichée pour toute URL inconnue |

L'application est prévue pour le **desktop uniquement**, et reste lisible à
partir de **1024 × 768 px**.

## Stack technique

- **React 19** — composants en fonction et hooks
- **React Router 7** — navigation et routes imbriquées
- **Vite 8** — serveur de développement et build
- **ESLint** — qualité du code
- **CSS natif** — variables CSS et convention de nommage BEM, sans framework

## Prérequis

- [Node.js](https://nodejs.org/) 20 ou supérieur
- npm (installé avec Node.js)

## Installation

```bash
git clone https://github.com/ChrisAnger59/SportSee.git
cd SportSee
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

L'application est disponible sur http://localhost:5173.

## Le backend

Les données proviennent d'une micro-API fournie séparément
(`sportsee_back-end`), qui tourne sur le **port 8000**.

```bash
cd ../sportsee_back-end
npm install
npm start
```

Le message `Magic happens on port 8000` confirme que l'API est prête.

> Le backend n'est nécessaire qu'en mode API. En mode mock, l'application
> fonctionne sans lui.

### Endpoints utilisés

| Méthode | Endpoint | Réponse |
|---|---|---|
| `POST` | `/api/login` | `{ token, userId }` |
| `GET` | `/api/user-info` | `{ profile, statistics }` |
| `GET` | `/api/user-activity?startWeek=&endWeek=` | `[{ date, distance, duration, heartRate, caloriesBurned }]` |

Les deux derniers exigent l'en-tête `Authorization: Bearer <token>`.

## Configuration : mock ou API

L'application peut fonctionner avec des **données mockées** ou avec l'**API
réelle**. Le choix se fait avec une seule variable d'environnement.

Copier le fichier d'exemple :

```bash
cp .env.example .env.local
```

Puis choisir la source dans `.env.local` :

```
USE_MOCK=true    # données mockées, aucun backend nécessaire
USE_MOCK=false   # API réelle (backend requis)
```

> **Redémarrer `npm run dev` après chaque modification du fichier `.env`** :
> Vite ne lit les variables d'environnement qu'au démarrage.

La source active est affichée dans la console du navigateur :
`[dataService] source des données : mock`.

Les mocks (`src/mocks/data.js`) ont été **capturés sur l'API réelle** : ce sont
les réponses exactes des trois endpoints, sans retouche. Les deux modes sont
donc strictement interchangeables.

## Scripts disponibles

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement avec rechargement à chaud |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Sert le build de production en local |
| `npm run lint` | Analyse du code avec ESLint |

## Comptes de démonstration

Ces comptes fonctionnent dans les deux modes.

| Identifiant | Mot de passe |
|---|---|
| `sophiemartin` | `password123` |
| `emmaleroy` | `password789` |
| `marcdubois` | `password456` |

## Structure du projet

Les composants suivent le découpage **atomic design**.

```
src/
├── components/
│   ├── atoms/          Button, Card, ErrorMessage, Input, Label,
│   │                   Logo, NavItem, ProfilePicture, TextLink
│   ├── molecules/      FormField, HighlightStat, SectionHeader,
│   │                   StatCard, UserIdentity
│   ├── organisms/      ConnectForm, Footer, Header, ProfileCard,
│   │                   ProfileDetails, UserBanner
│   └── templates/      AuthLayout, MainLayout
├── pages/              Connexion, Dashboard, Profile, Error
├── services/           Accès aux données (voir ci-dessous)
├── mocks/              Réponses de l'API capturées
├── utils/              Mise en forme des dates et des durées
└── index.css           Reset, variables de design, typographie
```

| Niveau | Rôle |
|---|---|
| **Atome** | Le plus petit élément réutilisable : un bouton, un champ |
| **Molécule** | Quelques atomes assemblés pour une fonction : un label et son champ |
| **Organisme** | Une section autonome : un formulaire, un header |
| **Template** | La mise en page, sans contenu réel |
| **Page** | Le template rempli avec les données |

Chaque composant vit dans son dossier, avec son JSX et son CSS. Les couleurs,
rayons et ombres proviennent des variables CSS définies dans `src/index.css`.

## Architecture des données

Les composants n'appellent **qu'un seul fichier**, `dataService.js`. Celui-ci
choisit la source des données et gère la session : changer de source ne demande
aucune modification dans les composants.

```
Composant
   └─ services/dataService.js        point d'entrée unique + switch
        ├─ services/mockService.js   lit src/mocks/data.js
        ├─ services/apiService.js    appelle l'API avec fetch
        └─ services/session.js       token et userId (sessionStorage)
```

| Fichier | Rôle |
|---|---|
| `dataService.js` | Choisit mock ou API, enregistre la session après connexion |
| `mockService.js` | Reproduit l'API à partir des données mockées, erreurs comprises |
| `apiService.js` | Requêtes HTTP, en-têtes d'authentification, gestion des statuts |
| `session.js` | Seul fichier à connaître le `sessionStorage` |
| `httpErrors.js` | Fabrique des erreurs portant un statut HTTP |

Les deux services exposent **les mêmes fonctions**, avec les mêmes paramètres,
les mêmes réponses et les mêmes erreurs :

```js
login(username, password)          // -> { token, userId }
getUserInfo()                      // -> { profile, statistics }
getUserActivity(startWeek, endWeek) // -> [sessions]
```

## Authentification

L'API utilise une authentification par **JWT** :

1. `POST /api/login` renvoie un token valable **24 heures** ainsi que le `userId`.
2. Les autres requêtes envoient ce token dans l'en-tête `Authorization`.
3. Le serveur lit l'identifiant de l'utilisateur **dans le token** : aucun
   endpoint ne prend d'identifiant en paramètre.

Le token et le `userId` sont conservés dans le `sessionStorage`, choisi plutôt
que le `localStorage` parce que le token expire au bout d'une journée : la
session ne survit pas à la fermeture de l'onglet.

Les erreurs sont traduites en messages lisibles par l'utilisateur :

| Statut | Message affiché |
|---|---|
| 400 | Veuillez remplir les deux champs |
| 401 | Identifiant ou mot de passe incorrect |
| aucun statut | Serveur injoignable, réessayez plus tard |

## Limites connues

Certaines données présentes sur les maquettes ne sont **pas fournies par
l'API** :

- **Genre** : présent en base, mais absent de la réponse de `/api/user-info`.
- **Calories brûlées (total)** : disponible par séance seulement.
- **Nombre de jours de repos** : aucune donnée.
- **Objectif hebdomadaire** : présent en base sous trois formes différentes
  selon l'utilisateur, exposé par aucun endpoint.

À noter également : `/api/user-info` calcule ses totaux sur **toutes** les
séances, y compris celles postérieures à la date du jour, alors que
`/api/user-activity` les exclut. Les totaux affichés ne correspondent donc pas
à la somme des séances listées.

Enfin, les ressources graphiques (logo, photos de profil, visuel de la page de
connexion, pictogrammes) n'ayant pas été fournies, elles sont représentées par
des emplacements réservés, signalés par un commentaire `PLACEHOLDER` dans le
code.

## Reste à faire

- [ ] Brancher les pages sur `dataService` (`useState` / `useEffect`)
- [ ] Route protégée : rediriger vers `/` si aucune session n'est active
- [ ] Graphiques : distance hebdomadaire, fréquence cardiaque, objectif
- [ ] Bloc « Cette semaine » alimenté par `getUserActivity`
- [ ] Tests automatisés

## Auteur

Christophe Anger — [@ChrisAnger59](https://github.com/ChrisAnger59)
