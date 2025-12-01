# Fonctionnalité : Pages détaillées de projets

## Vue d'ensemble

Ajout d'un système de routing complet permettant d'afficher des pages détaillées pour chaque projet du portfolio.

## Fichiers créés

### 1. Router (`src/router/index.js`)

- Configuration de Vue Router avec 2 routes principales :
  - `/` : Page d'accueil (Home)
  - `/project/:id` : Page de détail d'un projet
- Comportement de scroll automatique vers le haut lors de la navigation
- Support des ancres (hash) pour revenir à la section projets

### 2. Vues

#### `src/views/Home.vue`

- Contient toutes les sections du portfolio (About, Skills, Education, Projects, Experience, CV, Contact)
- Réutilise les composants existants
- Conserve la structure d'origine du portfolio

#### `src/views/ProjectDetail.vue`

- Page détaillée pour chaque projet avec :
  - **Header fixe** avec bouton "Retour aux projets"
  - **Galerie d'images** avec navigation (prev/next) et indicateurs
  - **Description détaillée** avec HTML formaté
  - **Fonctionnalités principales** (liste à puces avec icônes)
  - **Défis rencontrés** (liste avec icônes Target)
  - **Apprentissages clés** (liste avec icônes Lightbulb)
  - **Sidebar** avec :
    - Technologies utilisées
    - Liens (GitHub, Démo)
    - Informations du projet (catégorie, période, institution)
  - Design responsive avec animations de scroll
  - Thème sombre glassmorphism cohérent

### 3. Données (`src/data/projects.js`)

- Export centralisé des données de projets
- 4 projets détaillés :
  1. **Analyse de Sentiment** (Data Science)
  2. **Deep Learning** (Machine Learning)
  3. **Yowl Community** (Web Development)
  4. **TWP - Task Management** (Web Development)

Chaque projet contient :

- `id` : Identifiant unique
- `title` : Titre du projet
- `category` : Catégorie
- `period` : Période de réalisation
- `institution` : Institution
- `description` : Description courte
- `detailedDescription` : Description longue avec HTML formaté
- `technologies` : Array des technologies utilisées
- `image` : Image principale
- `images` : Array d'images pour la galerie
- `icon` : Nom de l'icône (Database, Code, Globe)
- `github` : Lien GitHub (optionnel)
- `demo` : Lien démo (optionnel)
- `features` : Array des fonctionnalités principales
- `challenges` : Array des défis rencontrés
- `learnings` : Array des apprentissages clés

## Modifications apportées

### `src/main.js`

```javascript
// Avant
createApp(App).mount('#app')

// Après
import router from './router'
createApp(App).use(router).mount('#app')
```

### `src/App.vue`

- Simplifié pour utiliser `<router-view />`
- Gestion du smooth scroll conservée

### `src/components/ProjectsSection.vue`

- Import de `useRouter` et `projectsData`
- Ajout de la fonction `openProjectDetail(projectId)`
- Les cartes de projet sont maintenant cliquables
- Ajout d'un badge "Voir plus" au survol
- Animation de hover améliorée (translation Y, ombre, échelle)
- Changement de couleur du titre au survol
- Limitation à 4 technologies affichées avec indicateur "+X" si plus

## Animations et transitions

### Page de détail

- **Animations d'entrée** : fadeInDown pour le header, fadeInUp pour les sections
- **Galerie d'images** : Transition smooth entre les images, navigation avec effet de hover
- **Scroll animations** : Appliquées sur toutes les sections principales

### Section projets

- **Hover sur carte** :
  - Translation Y de -8px
  - Ombre agrandie avec couleur orange
  - Échelle d'image augmentée (110%)
  - Badge "Voir plus" apparaît
  - Titre change de couleur (blanc → orange)
- **Curseur** : pointer pour indiquer la cliquabilité

## Routing et navigation

### Navigation vers une page de projet

```javascript
// Depuis la section projets
router.push({ name: 'ProjectDetail', params: { id: projectId } })
```

### Retour à la liste des projets

```javascript
// Depuis la page de détail
router.push({ name: 'Home', hash: '#projects' })
```

Le scroll se fait automatiquement vers la section projets grâce au `scrollBehavior` configuré dans le router.

## Design system

### Couleurs par type de contenu

- **Description** : Barre bleue-cyan
- **Fonctionnalités** : Barre verte-emerald + icônes CheckCircle2
- **Défis** : Barre orange-rouge + icônes Target
- **Apprentissages** : Barre purple-pink + icônes Lightbulb

### Layout responsive

- **Mobile** : 1 colonne
- **Large écran** : 2 colonnes (contenu principal + sidebar)
- Sidebar devient sticky sur grand écran

### Cartes glassmorphism

- Background : `rgba(30, 41, 59, 0.5)`
- Backdrop blur : 16px
- Bordures avec opacity
- Ombres subtiles

## Utilisation

1. **Cliquer sur un projet** dans la section Projets
2. **Voir les détails** sur la page dédiée
3. **Naviguer dans la galerie** d'images avec les flèches
4. **Cliquer sur "Retour aux projets"** pour revenir à la liste

## Points techniques

### Gestion des icônes

Les icônes sont stockées comme strings dans `projects.js` et mappées vers les composants Lucide dans `ProjectsSection.vue` :

```javascript
const iconMap = {
  Database: Database,
  Code: Code,
  Globe: Globe,
}
```

### Sécurité des liens

Tous les liens externes utilisent :

```html
target="_blank" rel="noopener noreferrer"
```

### Gestion des images manquantes

Le composant vérifie l'existence des images avant d'afficher la galerie :

```javascript
v-if="project.images && project.images.length > 0"
```

### Projet non trouvé

Si l'ID du projet n'existe pas, un message d'erreur s'affiche avec un bouton de retour.

## Améliorations futures possibles

1. **Transitions de page** : Ajouter des animations lors du changement de route
2. **Lazy loading** : Charger les images à la demande
3. **Partage social** : Boutons de partage sur les réseaux sociaux
4. **Projets similaires** : Suggestions de projets liés
5. **Commentaires** : Section de commentaires ou témoignages
6. **Analytics** : Tracking des vues de projets
7. **SEO** : Métadonnées dynamiques par projet
8. **Mode sombre/clair** : Toggle de thème
9. **Filtres avancés** : Filtrage par technologie, date, etc.
10. **Recherche** : Barre de recherche de projets
