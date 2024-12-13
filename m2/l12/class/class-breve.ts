class Pizza2{
   
    constructor(public gusto:string, protected prezzo:number){}

}

const test = new Pizza2('Margherita',5);

console.log(test);
