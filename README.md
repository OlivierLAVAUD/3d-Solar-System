# 🌌 Système Solaire 3D - Three.js

[![Three.js](https://img.shields.io/badge/Three.js-r128-000000.svg?style=flat-square&logo=three.js)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg?style=flat-square&logo=javascript)](https://developer.mozilla.org/fr/docs/Web/JavaScript)

Une simulation immersive et éducative de notre système solaire en 3D, développée avec Three.js. Explorez les planètes, leurs lunes et découvrez des informations fascinantes sur chaque corps céleste !

!["Système Solaire 3D"](/img/image1.png)
!["Le système solaire"](/img/image3.png)

*Vue d'ensemble du système solaire*

## ✨ Fonctionnalités

- 🪐 **Planètes réalistes** : Les 8 planètes principales avec leurs caractéristiques physiques
- 🌙 **Lunes détaillées** : Satellites naturels incluant la Lune, les lunes de Mars et les principales lunes de Jupiter et Saturne
- ☀️ **Soleil radiant** : Étoile centrale avec effet d'émission lumineuse
- 🎮 **Contrôles intuitifs** : Navigation fluide avec OrbitControls
- 📊 **Informations détaillées** : Fiches techniques complètes pour chaque corps céleste
- ⚡ **Paramètres en temps réel** : Ajustement de la vitesse et de l'échelle
- 🌟 **Ciel étoilé** : Fond réaliste avec des milliers d'étoiles
- 📱 **Interface responsive** : Compatible desktop et mobile

## 🚀 Démo en Ligne

[![Démo Live](https://img.shields.io/badge/Démo_Live-Visiter_le_système_solaire-4fc3f7?style=for-the-badge)](https://votre-nom-utilisateur.github.io/olivierlavaud-3d-solar-system/)

*✨ Explorez le système solaire depuis votre navigateur !*

## 🗂️ Structure du Projet

```bash
olivierlavaud-3d-solar-system/
├── 📄 index.html              # Page principale
├── 🎨 css/
│   └── style.css             # Styles et design responsive
└── ⚙️ js/
    ├── 🚀 main.js            # Point d'entrée de l'application
    ├── 🪐 celestial/         # Gestion des corps célestes
    │   ├── Planet.js         # Classe Planète
    │   ├── PlanetData.js     # Données astronomiques
    │   └── PlanetFactory.js  # Usine de création
    ├── 🎮 controls/
    │   └── OrbitControls.js  # Contrôles de navigation
    ├── 🔧 core/
    │   ├── SceneManager.js   # Gestion de la scène 3D
    │   └── SolarSystem.js    # Cœur de l'application
    ├── 💻 ui/
    │   └── UIManager.js      # Gestion de l'interface
    └── 🛠️ utils/
        └── Helpers.js        # Fonctions utilitaires
```



## 🛠️ Installation & Utilisation
### Méthode 1 : Serveur HTTP Simple (Recommandé pour débuter)
```bash

# Avec Python 3
python -m http.server 8000

# Avec Python 2
python -m SimpleHTTPServer 8000

# Avec Node.js (si installé)
npx http-server

Puis ouvrez votre navigateur sur : http://localhost:8000
```

### Méthode 2 : Avec Vite (Développement moderne)
```bash

# Initialiser le projet
npm init -y

# Installer les dépendances
npm install --save three
npm install --save-dev vite

# Lancer le serveur de développement
npm run dev
```

Ajoutez ce script dans votre package.json :
```bash
json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## 🎮 Contrôles

 -   Action	Effet
 -   Clic gauche + glisser	Rotation autour de la scène
 -   Molette de souris	Zoom avant/arrière
 -   Clic droit + glisser	Déplacement de la caméra
 -   Clic sur une planète	Afficher les informations détaillées
 -   Slider Vitesse	Contrôle la vitesse des orbites
 -   Slider Taille	Ajuste l'échelle des planètes



## 🪐 Corps Célestes Disponibles

### Planètes Principales

 -   ☀️ Soleil - Notre étoile naine jaune
 -   ☿ Mercure - La plus petite et rapide
 -   ♀ Vénus - L'étoile du berger
 -   ♁ Terre - Notre planète bleue
 -   ♂ Mars - La planète rouge
 -   ♃ Jupiter - La géante gazeuse
 -   ♄ Saturne - Reine des anneaux
 -   ♅ Uranus - La géante de glace inclinée
 -   ♆ Neptune - La planète aux vents supersoniques

###  Lunes et Satellites

 -   🌙 Lune - Notre satellite naturel
 -   🪐 Phobos & Deimos - Lunes de Mars
 -   🔴 Io, Europe, Ganymède, Callisto - Lunes galiléennes de Jupiter
 -   🟠 Titan - Lune de Saturne avec atmosphère

## 🔧 Personnalisation
### Ajouter une nouvelle planète

Dans js/celestial/PlanetData.js, ajoutez une configuration :

```bash

static getPlanetsConfig() {
    return [
        // ... configurations existantes
        { 
            name: 'nouvelle-planete', 
            radius: 0.8, 
            color: 0x45b7d1, 
            distance: 45, 
            rotationSpeed: 0.008, 
            revolutionSpeed: 0.0001 
        }
    ];
}
```

### Modifier les informations

Ajoutez les données dans PlanetData.getPlanetInfo() :
```bash

static getPlanetInfo(planetName) {
    const info = {
        // ... informations existantes
        'nouvelle-planete': `
            <span class="highlight">🪐 NOUVELLE PLANÈTE</span><br>
            <strong>Type:</strong> Planète tellurique<br>
            <strong>Diamètre:</strong> 12 000 km<br>
            // ... autres données
        `
    };
    return info[planetName];
}
```

## 🌟 Fonctionnalités Techniques

-    Moteur 3D :     Three.js r128
-    Rendu :         WebGL avec antialiasing
-    Lumières :      PointLight, AmbientLight, DirectionalLight
-    Ombres :        PCFSoftShadowMap activé
-    Performance :   Optimisé pour 60 FPS
-    Responsive :    Adaptation automatique aux écrans

## 🐛 Dépannage

Problèmes Courants

    Page blanche:    
    -    Vérifiez que vous utilisez un serveur HTTP
    -    Consultez la console navigateur (F12)

    Textures manquantes:
    -    Toutes les planètes utilisent des couleurs simples
    -    Aucune texture externe requise

    Performances médiocres
    -    Réduisez le nombre d'étoiles dans Helpers.createStars()
    -    Diminuez la qualité des géométries

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

-    Fork le projet
-    Créer une branche feature (git checkout -b feature/AmazingFeature)
-    Commit vos changements (git commit -m 'Add some AmazingFeature')
-    Push sur la branche (git push origin feature/AmazingFeature)
-    Ouvrir une Pull Request

## 📜 Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.
- 👨‍💻 Auteur: Olivier Lavaud

    -    GitHub: @olivierLAVAUD
    -    Projet: Système Solaire 3D

#🙏 Remerciements

-    Three.js - L'incroyable bibliothèque 3D
-    NASA et le CNES - Pour les données astronomiques
-    La communauté open source

## ✨ Explorez l'infini depuis votre navigateur ! ✨
Si vous aimez ce projet, n'hésitez pas à lui donner une ⭐ sur GitHub !