abstract class Veicolo{
    protected vel:number = 0;
    velMax:number;
    abstract test:string;
     
    constructor(velMax:number){
        this.velMax = velMax
    }

    abstract accelera():void

    abstract frena():void

    ferma(){
        this.vel = 0
    }
}

class Auto extends Veicolo{
    test!: string;
    accelera(): void {
        throw new Error("Method not implemented.");
    }
    frena(): void {
        throw new Error("Method not implemented.");
    }
}