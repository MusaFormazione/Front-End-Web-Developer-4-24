class Persona{
    private nome : string
    cognome = 'rossi'

    constructor(nome : string){
        this.nome = nome
    }

    mostraNome(){
        return `Il nome è ${this.nome}`
    }
}

class Studente extends Persona{
    materie:string[];
    constructor(nome : string, materie:string[] = []){
        super(nome);
        this.materie = materie;
    }

    mostraDettagliStudente(){
        //this.nome //Property 'nome' is private and only accessible within class 'Persona'
        return this.mostraNome() + `, e studia  ${this.materie.join(', ')}`
    }
}

const marioStudente = new Studente('Mario', ['HTML','CSS'])
const luciaStudente = new Studente('Lucia', ['JS'])
 
console.table([marioStudente, luciaStudente]);

console.log(marioStudente.mostraDettagliStudente())
