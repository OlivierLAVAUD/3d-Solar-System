class Helpers {
    static createStars(count = 2000, range = 2000) {
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.7,
            sizeAttenuation: true
        });

        const vertices = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * range;
            const y = (Math.random() - 0.5) * range;
            const z = (Math.random() - 0.5) * range;
            vertices.push(x, y, z);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        return new THREE.Points(geometry, material);
    }

    static createOrbit(distance, segments = 64) {
        const geometry = new THREE.RingGeometry(distance - 0.05, distance + 0.05, segments);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0xffffff, 
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.1
        });
        const orbit = new THREE.Mesh(geometry, material);
        orbit.rotation.x = Math.PI / 2;
        return orbit;
    }

    static createRings(innerRadius, outerRadius, color = 0xf0e6d2, opacity = 0.7) {
        const geometry = new THREE.RingGeometry(innerRadius, outerRadius, 32);
        const material = new THREE.MeshPhongMaterial({ 
            color: color, 
            side: THREE.DoubleSide,
            transparent: true,
            opacity: opacity
        });
        const rings = new THREE.Mesh(geometry, material);
        rings.rotation.x = Math.PI / 2;
        return rings;
    }

    static hideElement(id) {
        const element = document.getElementById(id);
        if (element) element.style.display = 'none';
    }

    static showElement(id) {
        const element = document.getElementById(id);
        if (element) element.style.display = 'block';
    }
}