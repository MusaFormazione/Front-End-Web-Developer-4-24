class Pizza{

    public gusto:string;
    //La proprietà prezzo non deve essere accessibile dall'esterno, ne blocchiamo l'accesso attraverso il modificatore protected. 
    protected prezzo:number;

    constructor(gusto:string, prezzo:number) {
        this.gusto = gusto;
        this.prezzo = prezzo;
    }

    get mostraPrezzo(){
        //La proprietà prezzo doveva subire delle modifiche prima di poter essere mostrata all'utente finale. Ecco perché l'abbiamo settata come protected e abbiamo creato il metodo mostra prezzo che aggiunge la valuta prima di restituire la proprietà. 
        //Quindi, nonostante le proprietà protected non siano leggibili dall'esterno di una classe Si possono predisporre dei metodi che ne mostrino il valore 
        return this.prezzo + '€';
    }

    //Dato che la proprietà prezzo è protetta, predispongo metodi che ne modifichino eventualmente il valore in maniera controllata 
    //Il metodo SET diventa una proprietà di sola scrittura 
    set couponSconto(coupon:boolean){
        this.prezzo = coupon ? this.prezzo * 0.9 : this.prezzo;
    }

}

const margherita = new Pizza('Margherita',5)

console.log(margherita.gusto);
console.log(margherita.mostraPrezzo);

margherita.couponSconto = true;
console.log(margherita.mostraPrezzo);
