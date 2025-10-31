class UIManager {
    constructor(solarSystem) {
        this.solarSystem = solarSystem;
        this.setupEventListeners();
    }

    setupEventListeners() {
        const speedSlider = document.getElementById('speed-slider');
        const speedValue = document.getElementById('speed-value');
        const scaleSlider = document.getElementById('scale-slider');
        const scaleValue = document.getElementById('scale-value');

        speedSlider.addEventListener('input', (e) => {
            this.solarSystem.setAnimationSpeed(parseFloat(e.target.value));
            speedValue.textContent = this.solarSystem.animationSpeed.toFixed(1) + 'x';
        });

        scaleSlider.addEventListener('input', (e) => {
            this.solarSystem.setScaleFactor(parseFloat(e.target.value));
            scaleValue.textContent = this.solarSystem.scaleFactor.toFixed(1) + 'x';
        });
    }

    showPlanetInfo(name, info) {
        const planetInfo = document.getElementById('planetInfo');
        const displayName = name.charAt(0).toUpperCase() + name.slice(1);
        
        const celestialBody = this.solarSystem.getPlanet(name);
        const radius = celestialBody ? celestialBody.userData.radius : 'N/A';
        const distance = celestialBody ? celestialBody.userData.distance : 'N/A';
        
        planetInfo.innerHTML = `
            <h3>${name === 'sun' ? '☀️' : '🪐'} ${displayName}</h3>
            <div>${info}</div>
            <p style="margin-top: 10px; color: #ffcc80;">
                Rayon: ${radius} unités | Distance: ${distance} unités
            </p>
        `;
    }

    hideLoading() {
        Helpers.hideElement('loading');
    }

    showError(message) {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.innerHTML = `<p style="color: #ff6b6b;">${message}</p>`;
        }
    }
}