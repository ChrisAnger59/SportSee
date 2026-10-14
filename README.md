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
- [Routage et authentification](#routage-et-authentification)
- [Gestion de l'état](#gestion-de-létat)
- [Gestion des erreurs](#gestion-des-erreurs)
- [Qualité et accessibilité](#qualité-et-accessibilité)
- [Limites connues](#limites-connues)
- [Pistes d'amélioration](#pistes-damélioration)

---

## Fonctionnalités

| Route | Page | Accès | Contenu |
|---|---|---|---|
| `/` | Connexion | publique | Formulaire de connexion, gestion des erreurs |
| `/dashboard` | Dashboard | connecté | Bandeau utilisateur, distance sur 4 semaines, fréquence cardiaque de la semaine, résumé « Cette semaine » |
| `/profile` | Mon profil | connecté | Identité, caractéristiques, statistiques globales |
| `/conditions` | Conditions générales | connecté | Texte des conditions d'utilisation |
| `/contact` | Contact | connecté | Coordonnées et horaires |
| `*` | Erreur 404 | connecté | Page affichée pour toute URL inconnue |

Les graphiques du dashboard sont réalisés avec **Recharts** :

- **Distance** : barres par semaine, navigation par blocs de 4 semaines ;
- **Fréquence cardiaque** : minimum, maximum et moyenne par jour, navigation
  semaine par semaine, avec un état vide quand aucune séance n'a eu lieu ;
- **Cette semaine** : anneau de l'objectif hebdomadaire, durée et distance.

L'application est prévue pour le **desktop uniquement**, et reste lisible à
partir de **1024 px** de large.

## Stack technique

- **React 19** — composants en fonction, hooks et Context API
- **React Router 7** — navigation, routes imbriquées et routes protégées
- **Recharts 3** — graphiques
- **Vite 8** — serveur de développement et build
- **ESLint** — qualité du code
- **CSS natif** — variables CSS et convention de nommage BEM, sans framework

## Prérequis

- [Node.js](https://nodejs.org/) **20.19 ou supérieur** (ou 22.12 et plus),
  version exigée par Vite 8 et ESLint 10
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
> fonctionne sans lui, **à une exception près** : les photos de profil sont
> servies par le backend (`/images/<fichier>`). Sans lui, une image par défaut
> est affichée.

### Endpoints utilisés

| Méthode | Endpoint | Réponse |
|---|---|---|
| `POST` | `/api/login` | `{ token, userId }` |
| `GET` | `/api/user-info` | `{ profile, statistics }` |
| `GET` | `/api/user-activity?startWeek=&endWeek=` | `[{ date, distance, duration, heartRate, caloriesBurned }]` |

Les deux derniers exigent l'en-tête `Authorization: Bearer <token>`. Les dates
sont au format ISO (`AAAA-MM-JJ`) et les séances postérieures à la date du jour
sont exclues de `user-activity`.

## Configuration : mock ou API

L'application peut fonctionner avec des **données mockées** ou avec l'**API
réelle**. Le choix se fait avec une seule variable d'environnement.

Copier le fichier d'exemple :

```bash
cp .env.example .env.local
```

Puis choisir la source dans `.env.local` :

```
VITE_USE_MOCK=true    # données mockées, aucun backend nécessaire
VITE_USE_MOCK=false   # API réelle (backend requis)
```

> **Redémarrer `npm run dev` après chaque modification du fichier `.env`** :
> Vite ne lit les variables d'environnement qu'au démarrage, et seules les
> variables préfixées par `VITE_` sont exposées au navigateur.

La source active est affichée dans la console du navigateur en développement :
`[dataService] source des données : mock`.

Les mocks (`src/mocks/data.js`) ont été **capturés sur l'API réelle** : ce sont
les réponses des trois endpoints, sans retouche. Les deux modes sont
interchangeables pour les composants, avec quelques écarts documentés dans
[Limites connues](#limites-connues).

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
├── assets/             Visuel de connexion, photo de profil par défaut,
│                       pictogramme
├── components/
│   ├── atoms/          Button, Card, ErrorMessage, Input, Label,
│   │                   Logo, NavItem, ProfilePicture, TextLink
│   ├── molecules/      FormField, HighlightStat, SectionHeader,
│   │                   StatCard, UserIdentity
│   ├── organisms/      ConnectForm, DistanceChart, Footer, Header,
│   │                   HeartRateChart, ProfileCard, ProfileDetails,
│   │                   UserBanner, WeekSummary
│   └── templates/      AuthLayout, MainLayout
├── contexts/           UserContext et UserProvider
├── hooks/              useUser
├── mocks/              Réponses de l'API capturées
├── pages/              Connexion, Dashboard, Profile, Conditions,
│                       Contact, Error
├── routes/             AppRoutes et ProtectedRoute
├── services/           Accès aux données (voir ci-dessous)
├── utils/              date, activity, duration, distance
└── index.css           Reset, variables de design, typographie
```

| Niveau | Rôle |
|---|---|
| **Atome** | Le plus petit élément réutilisable : un bouton, un champ |
| **Molécule** | Quelques atomes assemblés pour une fonction : un label et son champ |
| **Organisme** | Une section autonome : un formulaire, un graphique, un header |
| **Template** | La mise en page, sans contenu réel |
| **Page** | Le template rempli avec les données |

Règles de construction :

- chaque composant vit dans son dossier, avec son JSX (`index.jsx`) et son CSS ;
- les atomes et les molécules ne contiennent **ni état, ni appel de service** :
  toute la logique est dans les organismes, les pages et le Provider ;
- chaque atome accepte `className` et transmet le reste de ses props à sa balise ;
- les couleurs, rayons et ombres proviennent des variables CSS définies dans
  `src/index.css`, sans couleur en dur ailleurs.

### Utilitaires

| Fichier | Rôle |
|---|---|
| `date.js` | Formatage et calculs de dates (`getWeekStart`, `addDays`, `countDays`…) |
| `activity.js` | Transformation des séances pour les graphiques ; objectif hebdomadaire `WEEKLY_GOAL` |
| `duration.js` | Mise en forme des durées |
| `distance.js` | Mise en forme des distances |

## Architecture des données

Les composants n'appellent **qu'un seul fichier**, `dataService.js`. Celui-ci
choisit la source des données et gère la session : changer de source ne demande
aucune modification dans les composants.

```
Composant
   └─ services/dataService.js        point d'entrée unique + switch
        ├─ services/mockService.js   lit src/mocks/data.js
        ├─ services/apiService.js    appelle l'API avec fetch
        ├─ services/session.js       token et userId (sessionStorage)
        └─ services/httpErrors.js    erreurs portant un statut HTTP
```

| Fichier | Rôle |
|---|---|
| `dataService.js` | Choisit mock ou API, enregistre la session après connexion |
| `mockService.js` | Reproduit l'API à partir des données mockées |
| `apiService.js` | Requêtes HTTP, en-têtes d'authentification, conversion des réponses d'erreur en exceptions |
| `session.js` | Seul fichier à connaître le `sessionStorage` |
| `httpErrors.js` | Fabrique des erreurs portant un statut HTTP |

Les deux services exposent **les mêmes fonctions**, avec les mêmes paramètres et
les mêmes réponses :

```js
login(username, password)          // -> { token, userId }
getUserInfo()                      // -> { profile, statistics }
getUserActivity(startWeek, endWeek) // -> [sessions]
```

Toutes sont asynchrones. `fetch` ne rejette que lorsqu'il n'obtient **aucune
réponse** (réseau coupé, serveur arrêté) : une réponse 401, 403 ou 500 est une
réponse. `apiService` la convertit donc en erreur portant un `status`, ce qui
permet de traiter tous les échecs de la même façon avec `try / catch`.

## Routage et authentification

```
/                Connexion (publique)
ProtectedRoute
  └─ UserProvider      charge user-info, le diffuse par Context
       └─ MainLayout   Header + Outlet + Footer
            ├─ /dashboard
            ├─ /profile
            ├─ /conditions
            ├─ /contact
            └─ *            page 404
```

L'API utilise une authentification par **JWT** :

1. `POST /api/login` renvoie un token valable **24 heures** ainsi que le `userId`.
2. Les autres requêtes envoient ce token dans l'en-tête `Authorization`.
3. Le serveur lit l'identifiant de l'utilisateur **dans le token** : aucun
   endpoint ne prend d'identifiant en paramètre.

Le token et le `userId` sont conservés dans le `sessionStorage` : la session ne
survit pas à la fermeture de l'onglet, et aucun cookie n'est déposé.

**Protection des routes.** `ProtectedRoute` redirige vers `/` quand aucun token
n'est présent, et se réévalue à chaque changement de route. En plus, le
`UserProvider` **relance `user-info` à chaque changement de page** : un token
expiré ou refusé par le serveur (401, 403) déconnecte l'utilisateur et le
renvoie à la connexion, sans recharger la page.

## Gestion de l'état

- **Context API** : seul le profil (`user`) est partagé. `UserProvider` charge
  les données, gère le chargement et l'erreur, et ne rend ses pages que lorsque
  `user` est disponible. Les pages le lisent avec le hook `useUser`.
- **Activité** : chaque graphique charge **sa propre activité** (période,
  navigation et état indépendants). Chacun possède trois états (`sessions`,
  `isLoading`, `error`), un `useEffect` qui dépend de la période, et un drapeau
  `ignore` qui écarte les réponses devenues obsolètes lors d'une navigation
  rapide.
- **Valeurs calculées** : les bornes de période (fin de semaine, semaine
  courante) sont recalculées à chaque rendu plutôt que stockées.

## Gestion des erreurs

| Situation | Comportement |
|---|---|
| 400 à la connexion | « Veuillez remplir les deux champs » |
| 401 à la connexion | « Identifiant ou mot de passe incorrect » |
| Aucun statut (serveur arrêté) à la connexion | « Serveur injoignable, réessayez plus tard » |
| 401 ou 403 en cours de session | Déconnexion et retour à la page de connexion |
| Autre erreur au chargement du profil ou à un changement de page (500, API injoignable) | Page d'erreur serveur, avec un bouton de retour à la connexion |
| Erreur de chargement de l'activité d'un graphique | Message affiché dans la carte concernée |
| URL inconnue | Page 404 avec lien vers le dashboard |

## Qualité et accessibilité

- Les images portent un attribut `alt` (vide pour les images décoratives).
- L'animation du logo est désactivée pour les personnes qui ont demandé de
  réduire les animations (`prefers-reduced-motion`).
- Le HTML des pages a été passé au validateur W3C : les avertissements restants
  concernent des attributs SVG ajoutés par la bibliothèque Recharts.
- `npm run lint` et `npm run build` s'exécutent sans erreur.

## Limites connues

Certaines données présentes sur les maquettes ne sont **pas fournies par
l'API** : elles sont donc calculées ou fixées côté application.

- **Calories brûlées (total)** : somme des calories des séances sur la période.
- **Nombre de jours de repos** : nombre de jours depuis l'inscription moins
  les jours avec séance.
- **Objectif hebdomadaire** : constante `WEEKLY_GOAL` (6 séances), car la base
  le présente sous trois formes différentes selon l'utilisateur et aucun
  endpoint ne l'expose.
- **Genre** : présent en base, mais absent de la réponse de `/api/user-info`.

À noter également : `/api/user-info` calcule ses totaux sur **toutes** les
séances, y compris celles postérieures à la date du jour, alors que
`/api/user-activity` les exclut. Les totaux affichés ne correspondent donc pas
à la somme des séances listées.

**Écarts entre le mode mock et le mode API :**

- les séances mockées couvrent du **9 juillet au 30 novembre 2026**, alors que
  les comptes datent de janvier 2025 : calories et jours de repos du profil
  diffèrent selon la source, et après le 30 novembre 2026 la semaine en cours
  sera vide en mode mock ;
- le mock ne simule pas l'erreur 403 (token invalide) ;
- les photos de profil exigent le backend (voir plus haut).

**Autres limites :**

- le token est dans le `sessionStorage`, donc lisible par du JavaScript : il
  serait exposé à une faille XSS. Un cookie `httpOnly` posé par le backend
  serait plus sûr, mais ne relève pas du front-end ;
- une erreur survenant **à l'intérieur d'une page** (par exemple en cliquant sur
  la flèche d'un graphique) affiche un message local dans la carte au lieu de
  rediriger : seule la revalidation à chaque changement de route déconnecte
  sur un 401 ou un 403 ;
- le build signale un fichier JavaScript de plus de 500 Ko (la bibliothèque
  Recharts) : c'est un avertissement, pas une erreur ;
- les pages « Conditions générales » et « Contact » contiennent un texte et une
  adresse de démonstration (domaine `.example`), et ne sont accessibles qu'une
  fois connecté ;
- aucun test automatisé.

## Pistes d'amélioration

- [ ] Extraire le chargement de l'activité dans un hook `useActivity`, aujourd'hui
      recopié dans quatre composants
- [ ] Tests automatisés (composants et fonctions de transformation)
- [ ] Rendre les conditions générales accessibles avant la connexion

## Auteur

Christophe Anger — [@ChrisAnger59](https://github.com/ChrisAnger59)
