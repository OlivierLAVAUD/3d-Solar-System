class Planet {
    constructor(config) {
        this.name = config.name;
        this.radius = config.radius;
        this.distance = config.distance;
        this.color = config.color;
        this.rotationSpeed = config.rotationSpeed;
        this.revolutionSpeed = config.revolutionSpeed;
        this.emissive = config.emissive || false;
        
        this.mesh = null;
        this.group = null;
        this.originalColor = null;
        
        this.createPlanet();
    }

    createPlanet() {
        const geometry = new THREE.SphereGeometry(this.radius, 32, 32);
        
        let material;
        if (this.emissive) {
            material = new THREE.MeshPhongMaterial({ 
                color: 0xff6600,
                emissive: 0xff3300,
                emissiveIntensity: 1.0,
                shininess: 5,
                specular: 0xff8800
            });
        } else {
            material = new THREE.MeshPhongMaterial({ 
                color: this.color,
                shininess: 30
            });
            this.originalColor = material.color.clone();
        }

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.name = this.name;
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;

        this.group = new THREE.Group();
        this.group.name = `${this.name}Group`;
        this.group.add(this.mesh);
        
        this.mesh.position.x = this.distance;

        this.mesh.userData = {
            type: 'planet',
            radius: this.radius,
            distance: this.distance,
            rotationSpeed: this.rotationSpeed,
            revolutionSpeed: this.revolutionSpeed,
            color: this.color,
            info: PlanetData.getPlanetInfo(this.name)
        };
    }

    update(animationSpeed = 1) {
        this.mesh.rotation.y += this.rotationSpeed * animationSpeed;
        
        if (this.revolutionSpeed > 0) {
            this.group.rotation.y += this.revolutionSpeed * animationSpeed;
        }
    }

    highlight() {
        if (this.name === 'sun') {
            this.mesh.material.emissiveIntensity = 1.5;
        } else if (this.originalColor) {
            const intensifiedColor = this.originalColor.clone();
            intensifiedColor.offsetHSL(0, 0.3, 0.2);
            this.mesh.material.color.copy(intensifiedColor);
            
            if (this.mesh.material.emissive) {
                this.mesh.material.emissive = this.originalColor.clone().multiplyScalar(0.3);
            }
        }
    }

    unhighlight() {
        if (this.name === 'sun') {
            this.mesh.material.emissiveIntensity = 0.8;
        } else if (this.originalColor) {
            this.mesh.material.color.copy(this.originalColor);
            if (this.mesh.material.emissive) {
                this.mesh.material.emissive.set(0x000000);
            }
        }
    }

    getMesh() {
        return this.mesh;
    }

    getGroup() {
        return this.group;
    }
}