class OrbitControls {
    constructor(object, domElement) {
        this.object = object;
        this.domElement = domElement;

        // Configuration
        this.enableDamping = true;
        this.dampingFactor = 0.05;
        this.screenSpacePanning = true;
        this.minDistance = 5;
        this.maxDistance = 200;
        this.maxPolarAngle = Math.PI;

        // État
        this.target = new THREE.Vector3(0, 0, 0);
        this.spherical = new THREE.Spherical();
        this.sphericalDelta = new THREE.Spherical();
        this.scale = 1;
        this.panOffset = new THREE.Vector3();
        
        // États de la souris
        this.isMouseDown = false;
        this.mouseButton = null;
        this.rotateStart = new THREE.Vector2();
        this.rotateEnd = new THREE.Vector2();
        this.rotateDelta = new THREE.Vector2();
        this.panStart = new THREE.Vector2();
        this.panEnd = new THREE.Vector2();
        this.panDelta = new THREE.Vector2();

        // Vectors temporaires
        this.v = new THREE.Vector3();

        this.updateSpherical();
        this.bindEvents();
    }

    bindEvents() {
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.handleContextMenu = this.handleContextMenu.bind(this);

        this.connect();
    }

    connect() {
        this.domElement.addEventListener('mousedown', this.handleMouseDown);
        this.domElement.addEventListener('wheel', this.handleWheel);
        this.domElement.addEventListener('contextmenu', this.handleContextMenu);
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    }

    updateSpherical() {
        this.v.subVectors(this.object.position, this.target);
        this.spherical.setFromVector3(this.v);
    }

    handleMouseDown(event) {
        event.preventDefault();

        this.isMouseDown = true;
        this.mouseButton = event.button;

        if (event.button === 0) {
            this.rotateStart.set(event.clientX, event.clientY);
        } else if (event.button === 2) {
            this.panStart.set(event.clientX, event.clientY);
        }

        this.domElement.style.cursor = 'grabbing';
    }

    handleMouseMove(event) {
        if (!this.isMouseDown) return;

        if (this.mouseButton === 0) {
            this.rotateEnd.set(event.clientX, event.clientY);
            this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);
            
            this.rotateLeft(6 * Math.PI * this.rotateDelta.x / this.domElement.clientHeight);
            this.rotateUp(6 * Math.PI * this.rotateDelta.y / this.domElement.clientHeight);
            
            this.rotateStart.copy(this.rotateEnd);
        } else if (this.mouseButton === 2) {
            this.panEnd.set(event.clientX, event.clientY);
            this.panDelta.subVectors(this.panEnd, this.panStart);
            
            this.pan(this.panDelta.x, this.panDelta.y);
            
            this.panStart.copy(this.panEnd);
        }
    }

    handleMouseUp() {
        this.isMouseDown = false;
        this.mouseButton = null;
        this.domElement.style.cursor = 'grab';
    }

    handleWheel(event) {
        event.preventDefault();
        
        if (event.deltaY < 0) {
            this.scale /= 1.1;
        } else {
            this.scale *= 1.1;
        }
        
        this.spherical.radius *= this.scale;
        this.spherical.radius = Math.max(this.minDistance, Math.min(this.maxDistance, this.spherical.radius));
        this.scale = 1;
    }

    handleContextMenu(event) {
        event.preventDefault();
    }

    rotateLeft(angle) {
        this.sphericalDelta.theta -= angle;
    }

    rotateUp(angle) {
        this.sphericalDelta.phi -= angle;
    }

    pan(deltaX, deltaY) {
        const offset = new THREE.Vector3();
        offset.copy(this.object.position).sub(this.target);
        const targetDistance = offset.length();

        const panX = deltaX * targetDistance / 800;
        const panY = deltaY * targetDistance / 800;

        this.panLeft(panX);
        this.panUp(panY);
    }

    panLeft(distance) {
        this.v.setFromMatrixColumn(this.object.matrix, 0);
        this.v.multiplyScalar(-distance);
        this.panOffset.add(this.v);
    }

    panUp(distance) {
        this.v.setFromMatrixColumn(this.object.matrix, 1);
        this.v.multiplyScalar(distance);
        this.panOffset.add(this.v);
    }

    update() {
        if (this.enableDamping) {
            this.spherical.theta += this.sphericalDelta.theta * this.dampingFactor;
            this.spherical.phi += this.sphericalDelta.phi * this.dampingFactor;
            
            this.sphericalDelta.theta *= (1 - this.dampingFactor);
            this.sphericalDelta.phi *= (1 - this.dampingFactor);
        } else {
            this.spherical.theta += this.sphericalDelta.theta;
            this.spherical.phi += this.sphericalDelta.phi;
        }

        this.spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, this.spherical.phi));
        this.target.add(this.panOffset);
        
        this.v.setFromSpherical(this.spherical);
        this.object.position.copy(this.target).add(this.v);
        
        this.object.lookAt(this.target);

        this.sphericalDelta.set(0, 0, 0);
        this.panOffset.set(0, 0, 0);
    }
}