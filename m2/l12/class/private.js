"use strict";
class Persona {
    constructor(nome) {
        this.cognome = 'rossi';
        this.nome = nome;
    }
    mostraNome() {
        return `Il nome è ${this.nome}`;
    }
}
class Studente extends Persona {
    constructor(nome, materie = []) {
        super(nome);
        this.materie = materie;
    }
    mostraDettagliStudente() {
        //this.nome //Property 'nome' is private and only accessible within class 'Persona'
        return this.mostraNome() + `, e studia  ${this.materie.join(', ')}`;
    }
}
const marioStudente = new Studente('Mario', ['HTML', 'CSS']);
const luciaStudente = new Studente('Lucia', ['JS']);
console.table([marioStudente, luciaStudente]);
console.log(marioStudente.mostraDettagliStudente());
//# sourceMappingURL=private.js.map