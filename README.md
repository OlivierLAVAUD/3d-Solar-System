# 3d Solar System

Le systeme solaire en 3 dimensions
!["Le système solaire"](/img/image1.png)
!["Le système solaire"](/img/image3.png)

# Structure

```bash
Solar-system-3D/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── core/
│   │   ├── SolarSystem.js
│   │   └── SceneManager.js
│   ├── controls/
│   │   └── OrbitControls.js
│   ├── celestial/
│   │   ├── Planet.js
│   │   ├── PlanetFactory.js
│   │   └── PlanetData.js
│   ├── ui/
│   │   └── UIManager.js
│   └── utils/
│       └── Helpers.js

```

# Installation & Utilisation

## avec votre navigateur web et serveur Http
```bash
python -m http.server 8000

# Ouvrez votre navigateur avec l'adressse: http://localhost:8000
```

## avec Build des packages three.js et montage du serveur http
```bash
#    Initialiser npm :
npm init -y

# Installer les dépendances :

npm install --save three
npm install --save-dev vite

# lancer le serveur Http
npm run dev

```

