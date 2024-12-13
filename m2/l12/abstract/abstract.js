"use strict";
class Veicolo {
    constructor(velMax) {
        this.vel = 0;
        this.velMax = velMax;
    }
    ferma() {
        this.vel = 0;
    }
}
class Auto extends Veicolo {
    accelera() {
        throw new Error("Method not implemented.");
    }
    frena() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=abstract.js.map