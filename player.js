class Player {
    constructor(name, cupmade, shots) {
        this.name = name;
        this.cupmade = cupmade;
        this.shots = shots;
        
    }

    madeShot() {
        this.cupmade++;
        this.shots++;
    }
}