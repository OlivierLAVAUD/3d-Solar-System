class PlanetFactory {
    static createPlanet(config) {
        return new Planet(config);
    }

    static createMoon(parentPlanet, config) {
        const geometry = new THREE.SphereGeometry(config.radius, 16, 16);
        const material = new THREE.MeshPhongMaterial({ 
            color: config.color
        });
        const moon = new THREE.Mesh(geometry, material);
        moon.name = config.name;
        moon.position.x = config.distance;
        moon.castShadow = true;
        moon.receiveShadow = true;
        
        moon.userData = {
            type: 'moon',
            parent: config.parent,
            radius: config.radius,
            distance: config.distance,
            color: config.color,
            rotationSpeed: 0.005,
            revolutionSpeed: 0.02,
            info: PlanetData.getPlanetInfo(config.name)
        };

        return moon;
    }

    static createSaturnRings(planet) {
        const rings = Helpers.createRings(1.8, 3.0, 0xf0e6d2, 0.7);
        rings.name = "saturnRings";
        planet.add(rings);
        return rings;
    }
}