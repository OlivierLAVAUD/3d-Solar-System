class SolarSystem {
    constructor() {
        this.sceneManager = new SceneManager();
        this.uiManager = new UIManager(this);
        
        this.planets = new Map();
        this.planetGroups = new Map();
        this.moons = new Map();
        this.animationSpeed = 1;
        this.scaleFactor = 1;
        this.selectedPlanet = null;
        
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        
        this.init();
    }

    init() {
        this.createSolarSystem();
        this.createStars();
        this.setupInteraction();
        this.uiManager.hideLoading();
        this.animate();
    }

    createSolarSystem() {
        // Créer les planètes
        PlanetData.getPlanetsConfig().forEach(config => {
            this.createPlanet(config);
        });

        // Créer les lunes
        PlanetData.getMoonsConfig().forEach(config => {
            this.createMoon(config);
        });

        // Ajouter les anneaux de Saturne
        this.createSaturnRings();
    }

    createPlanet(config) {
        const planet = PlanetFactory.createPlanet(config);
        const orbit = Helpers.createOrbit(config.distance);
        
        this.sceneManager.addToScene(planet.getGroup());
        this.sceneManager.addToScene(orbit);
        
        this.planets.set(config.name, planet.getMesh());
        this.planetGroups.set(config.name, planet.getGroup());
    }

    createMoon(config) {
        const parentPlanet = this.planets.get(config.parent);
        if (!parentPlanet) return;

        const moon = PlanetFactory.createMoon(parentPlanet, config);
        parentPlanet.add(moon);
        this.planets.set(config.name, moon);
    }

    createSaturnRings() {
        const saturn = this.planets.get('saturn');
        if (saturn) {
            PlanetFactory.createSaturnRings(saturn);
        }
    }

    createStars() {
        const stars = Helpers.createStars(2000, 2000);
        this.sceneManager.addToScene(stars);
    }

    setupInteraction() {
        window.addEventListener('resize', () => this.sceneManager.onWindowResize());
        
        this.sceneManager.getRenderer().domElement.addEventListener('click', (event) => this.onPlanetClick(event));
        this.sceneManager.getRenderer().domElement.style.cursor = 'grab';
    }

    onPlanetClick(event) {
        const rect = this.sceneManager.getRenderer().domElement.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.sceneManager.getCamera());

        const allClickableObjects = Array.from(this.planets.values());
        const intersects = this.raycaster.intersectObjects(allClickableObjects);

        if (intersects.length > 0) {
            this.selectPlanet(intersects[0].object);
        }
    }

    selectPlanet(celestialBody) {
        // Désélectionner la planète précédente
        if (this.selectedPlanet) {
            const planet = this.getPlanet(this.selectedPlanet.name);
            if (planet && planet.userData.type === 'planet') {
                // Implémenter la logique de désélection si nécessaire
            }
        }

        this.selectedPlanet = celestialBody;
        this.uiManager.showPlanetInfo(celestialBody.name, celestialBody.userData.info);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Animer les planètes
        this.planets.forEach((celestialBody, name) => {
            const data = celestialBody.userData;
            
            if (data.type === 'moon') {
                celestialBody.rotation.y += data.rotationSpeed * this.animationSpeed;
            } else {
                celestialBody.rotation.y += data.rotationSpeed * this.animationSpeed;
                
                const group = this.planetGroups.get(name);
                if (group && data.revolutionSpeed > 0) {
                    group.rotation.y += data.revolutionSpeed * this.animationSpeed;
                }
            }
        });

        this.sceneManager.updateControls();
        this.sceneManager.render();
    }

    setAnimationSpeed(speed) {
        this.animationSpeed = speed;
    }

    setScaleFactor(scale) {
        this.scaleFactor = scale;
        this.updatePlanetScales();
    }

    updatePlanetScales() {
        this.planets.forEach((planet, name) => {
            if (name !== 'sun') {
                planet.scale.setScalar(this.scaleFactor);
            }
        });
    }

    getPlanet(name) {
        return this.planets.get(name);
    }

    getSceneManager() {
        return this.sceneManager;
    }
}