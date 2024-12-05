
/* Esercizio
    Ciclando l'array popola la pagina di card html.
    Puoi utilizzare Bootstrap per essere più valoce.
    Assegna colori diversi ai prodotti non disponibili.
*/
const prodotti = [
    { nome: "Laptop", prezzo: 1200, disponibile: true },
    { nome: "Smartphone", prezzo: 800, disponibile: false },
    { nome: "Tablet", prezzo: 400, disponibile: true },
    { nome: "Auricolari", prezzo: 50, disponibile: true },
    { nome: "Monitor", prezzo: 300, disponibile: false },
    { nome: "Mouse", prezzo: 25, disponibile: true },
];

const target = document.querySelector('.container .row')

prodotti.forEach(prodotto => {

    const template = document.querySelector('#card-template');
    const clone = template.content.cloneNode(true);
    
    clone.querySelector('.card-title').innerText = prodotto.nome;
    clone.querySelector('.card-text').innerText = prodotto.prezzo + '€';
    clone.querySelector('.card-link').innerText = 'Mostra';
    clone.querySelector('.card-link').href = '/index.html';

    const classe = prodotto.disponibile ? 'bg-secondary' : 'bg-info';
    clone.querySelector('.card').classList.add(classe);

    target.append(clone);
})



