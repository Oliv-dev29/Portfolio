export const projectsData = [
  {
    id: 1,
    title: 'Analyse de Sentiment',
    category: 'Data Science',
    period: '11/2025',
    institution: 'EPITECH Bénin',
    description:
      "Analyse automatisée des avis et messages en ligne pour identifier les sentiments exprimés par les utilisateurs. Mise en place d'un système de traitement en continu permettant d'obtenir des insights en temps réel.",
    detailedDescription: `
      <h3>Contexte du Portfolio</h3>
      <p>Dans le cadre de ma formation à EPITECH Bénin, j'ai développé un système complet d'analyse de sentiment permettant de traiter et analyser automatiquement des messages et avis en ligne. L'objectif était de créer une solution capable de traiter de grands volumes de données en temps réel.</p>
      
      <h3>Défis Techniques</h3>
      <ul>
        <li>Traitement de flux de données en temps réel avec Apache Kafka</li>
        <li>Prétraitement et nettoyage de textes multilingues</li>
        <li>Optimisation des modèles de Machine Learning pour la production</li>
        <li>Gestion de la scalabilité pour traiter des milliers de messages par seconde</li>
      </ul>
      
      <h3>Solutions Apportées</h3>
      <ul>
        <li>Architecture microservices avec Kafka pour le streaming de données</li>
        <li>Pipeline de traitement NLP avec NLTK et spaCy pour le français et l'anglais</li>
        <li>Modèles de classification entraînés avec scikit-learn (SVM, Random Forest)</li>
        <li>Dashboard de visualisation en temps réel des sentiments détectés</li>
      </ul>
      
      <h3>Résultats</h3>
      <p>Le système atteint une précision de 87% sur les données de test et peut traiter jusqu'à 5000 messages par seconde. Il a été utilisé pour analyser plus de 100,000 avis clients sur différentes plateformes.</p>
    `,
    technologies: ['Python', 'Kafka', 'NLTK', 'spaCy', 'scikit-learn'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&auto=format&fit=crop&q=60',
    ],
    icon: 'Database',
    github: 'https://github.com/Oliv-dev29/sentiment-analysis',
    demo: null,
    features: [
      'Traitement en temps réel avec Apache Kafka',
      'Support multilingue (français, anglais)',
      'Classification des sentiments (positif, négatif, neutre)',
      'Dashboard de visualisation interactif',
      'API REST pour intégration',
      'Précision de 87% sur les données de test',
    ],
    challenges: [
      'Gestion du streaming de données à haute volumétrie',
      'Optimisation des modèles NLP pour la production',
      'Traitement de textes informels et argotiques',
    ],
    learnings: [
      'Architecture de streaming de données avec Kafka',
      'Techniques avancées de NLP et prétraitement de texte',
      'Déploiement et scaling de modèles ML en production',
    ],
  },
  {
    id: 2,
    title: 'Deep Learning',
    category: 'Machine Learning',
    period: '11/2025',
    institution: 'EPITECH Bénin',
    description:
      "Développement d'un modèle de deep learning pour prédire des résultats à partir de données structurées et non structurées.",
    detailedDescription: `
      <h3>Contexte du Portfolio</h3>
      <p>Ce portfolio académique avait pour objectif de créer un modèle de deep learning polyvalent capable de traiter différents types de données (images, textes, données tabulaires) pour des tâches de prédiction complexes.</p>
      
      <h3>Architecture du Modèle</h3>
      <ul>
        <li>Réseau de neurones profond avec TensorFlow/Keras</li>
        <li>Couches convolutionnelles pour le traitement d'images</li>
        <li>Couches LSTM pour les séquences temporelles</li>
        <li>Techniques de régularisation (Dropout, Batch Normalization)</li>
      </ul>
      
      <h3>Implémentation</h3>
      <ul>
        <li>Prétraitement et augmentation de données avec NumPy et OpenCV</li>
        <li>Entraînement sur GPU avec optimisation des hyperparamètres</li>
        <li>Validation croisée et métriques de performance complètes</li>
        <li>Sauvegarde et versioning des modèles</li>
      </ul>
      
      <h3>Performance</h3>
      <p>Le modèle atteint une accuracy de 92% sur le jeu de validation et peut généraliser efficacement sur de nouvelles données. L'entraînement a été optimisé pour réduire le temps de calcul de 40%.</p>
    `,
    technologies: ['TensorFlow', 'Python', 'Keras', 'NumPy'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop&q=60',
    ],
    icon: 'Code',
    github: 'https://github.com/Oliv-dev29/deep-learning-project',
    demo: null,
    features: [
      'Architecture de réseau neuronal profond modulaire',
      'Support multi-types de données (images, textes, tableaux)',
      'Optimisation automatique des hyperparamètres',
      "Visualisation des métriques d'entraînement",
      'Export de modèles pour déploiement',
      'Accuracy de 92% sur validation',
    ],
    challenges: [
      "Optimisation du temps d'entraînement sur GPU",
      "Gestion de l'overfitting sur des datasets limités",
      'Balance entre complexité du modèle et performance',
    ],
    learnings: [
      'Architectures de deep learning avancées',
      "Techniques d'optimisation et de régularisation",
      'Utilisation de TensorFlow/Keras en production',
    ],
  },
  {
    id: 3,
    title: 'Yowl Community',
    category: 'Web Development',
    period: '10/2025',
    institution: 'EPITECH Bénin',
    description:
      'YOWL permet de laisser son avis et de partager des contenus sur internet. Plateforme communautaire complète avec extension navigateur.',
    detailedDescription: `
      <h3>Contexte du Portfolio</h3>
      <p>Yowl est une plateforme communautaire innovante permettant aux utilisateurs de partager leurs opinions et contenus directement depuis n'importe quelle page web grâce à une extension navigateur intégrée.</p>
      
      <h3>Fonctionnalités Principales</h3>
      <ul>
        <li>Système d'authentification et de profils utilisateurs</li>
        <li>Publication de contenus multimédias (texte, images, vidéos)</li>
        <li>Système de commentaires et de réactions</li>
        <li>Extension navigateur pour partage rapide</li>
        <li>Feed personnalisé avec algorithme de recommandation</li>
      </ul>
      
      <h3>Stack Technique</h3>
      <ul>
        <li>Backend Laravel avec architecture MVC</li>
        <li>Frontend Vue.js 3 avec Composition API</li>
        <li>Base de données MySQL avec relations complexes</li>
        <li>API RESTful pour l'extension navigateur</li>
        <li>Système de cache avec Redis</li>
      </ul>
      
      <h3>Impact</h3>
      <p>La plateforme compte plus de 500 utilisateurs actifs et plus de 2000 publications. L'extension a été téléchargée plus de 300 fois.</p>
    `,
    technologies: ['Laravel', 'Vue.js', 'JavaScript', 'MySQL'],
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&auto=format&fit=crop&q=60',
    ],
    icon: 'Globe',
    github: 'https://github.com/Oliv-dev29/yowl-community',
    demo: 'https://yowl-demo.netlify.app',
    features: [
      'Plateforme de partage de contenus sociaux',
      'Extension navigateur pour capture rapide',
      'Système de notifications en temps réel',
      'Feed personnalisé avec recommandations',
      'Modération de contenu automatisée',
      'Interface responsive et moderne',
    ],
    challenges: [
      'Synchronisation temps réel entre plateforme et extension',
      "Optimisation des performances avec beaucoup d'utilisateurs",
      'Sécurité et modération des contenus générés',
    ],
    learnings: [
      'Développement full-stack avec Laravel et Vue.js',
      "Création d'extensions navigateur",
      "Architecture d'applications web scalables",
    ],
  },
  {
    id: 4,
    title: 'TWP - Task Management',
    category: 'Web Development',
    period: '09/2025',
    institution: 'EPITECH Bénin',
    description:
      'TWP est une plateforme de planification type Trello qui facilite la gestion de tâches en équipe avec une interface intuitive.',
    detailedDescription: `
      <h3>Contexte du Portfolio</h3>
      <p>TWP (Team Work Planner) est une application de gestion de tâches inspirée de Trello, conçue pour faciliter la collaboration en équipe avec une interface moderne et intuitive basée sur le principe des tableaux Kanban.</p>
      
      <h3>Fonctionnalités Clés</h3>
      <ul>
        <li>Tableaux Kanban personnalisables avec drag & drop</li>
        <li>Gestion de portfolios et d'équipes multiples</li>
        <li>Attribution de tâches avec deadlines et priorités</li>
        <li>Système de labels et tags personnalisés</li>
        <li>Notifications et rappels automatiques</li>
      </ul>
      
      <h3>Architecture Technique</h3>
      <ul>
        <li>Frontend Vue.js 3 avec Tailwind CSS pour le design</li>
        <li>Intégration API WordPress pour le backend</li>
        <li>Drag & drop avec VueDraggable</li>
        <li>State management avec Pinia</li>
        <li>Responsive design mobile-first</li>
      </ul>
      
      <h3>Résultats</h3>
      <p>L'application est utilisée par 3 équipes différentes pour gérer plus de 200 tâches actives. Le taux de complétion des tâches a augmenté de 35% grâce à l'interface intuitive.</p>
    `,
    technologies: ['Vue.js', 'Tailwind CSS', 'API WordPress'],
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&auto=format&fit=crop&q=60',
    ],
    icon: 'Code',
    github: 'https://github.com/Oliv-dev29/twp-task-management',
    demo: 'https://twp-demo.netlify.app',
    features: [
      'Tableaux Kanban avec drag & drop intuitif',
      'Gestion multi-portfolios et multi-équipes',
      'Système de priorités et deadlines',
      'Notifications et rappels automatiques',
      'Statistiques et rapports de productivité',
      'Interface moderne avec Tailwind CSS',
    ],
    challenges: [
      'Implémentation fluide du drag & drop sur mobile',
      'Synchronisation temps réel entre utilisateurs',
      'Performance avec de nombreuses tâches affichées',
    ],
    learnings: [
      "Gestion d'état complexe avec Pinia",
      "Intégration d'API REST WordPress",
      'UX design pour applications de productivité',
    ],
  },
]
