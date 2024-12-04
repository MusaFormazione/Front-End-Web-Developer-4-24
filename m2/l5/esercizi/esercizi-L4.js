const prodotti = [
    { nome: "Laptop", prezzo: 1200, disponibile: true },
    { nome: "Smartphone", prezzo: 800, disponibile: false },
    { nome: "Tablet", prezzo: 400, disponibile: true },
    { nome: "Auricolari", prezzo: 50, disponibile: true },
    { nome: "Monitor", prezzo: 300, disponibile: false },
    { nome: "Mouse", prezzo: 25, disponibile: true }
];

        /* Esercizio 1
            Crea un nuovo array chiamato prodottiDisponibili contenente solo i prodotti che sono disponibili.
        */

        const prodottiDisponibili = prodotti.filter(p => p.disponibile);
        console.log(prodottiDisponibili);


        /* Esercizio 2
            Crea un nuovo array chiamato prodottiCostosi contenente solo i prodotti che costano più di 500 euro.
        */
       const prodottiCostosi = prodotti.filter(p => p.prezzo > 500);
       console.log(prodottiCostosi);
       

        /* Esercizio 3
            Crea un nuovo array aggiungendo ad ogni oggetto la proprietà prezzoScontato contenente il prezzo scontato del 20%
        */

        const prodottiScontati = prodotti.map(p => {

            p.prezzoScontato = p.prezzo * 0.8

            return p
        })

        console.log(prodottiScontati);
        

        /* Esercizio 4
            Elimina dall'array il prodotto "auricolari"
        */

        //soluzione 1
        const indice = prodotti.findIndex(p => p.nome.toLowerCase() === 'auricolari')
        const prodottiCopy = [...prodotti];
        prodottiCopy.splice(indice,1)
        console.log(prodotti, prodottiCopy);
        
        //soluzione 2
        const risultato = [];

        prodotti.forEach(p => {
            if(p.nome.toLowerCase() !== 'auricolari'){
                risultato.push(p)
            }
        })

        console.log(risultato);

        //soluzione 3
        const prodottiSenzaAuricolari = prodotti.filter(p => p.nome.toLowerCase() !== 'auricolari' )
        console.log(prodottiSenzaAuricolari);
        


        // Se assegniamo una variabile contenente un array ad una nuova variabile, non stiamo generando una copia di questo array perché entrambe le variabili si riferiranno allo stesso array salvato in memoria. Quindi, modificando una variabile, starai modificando anche i dati presenti nell'altra. 
        const prodotti2 = prodotti;
        prodotti2[0].nome = 'Prova'

        console.log(prodotti2, prodotti);
        