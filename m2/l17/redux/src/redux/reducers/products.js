const initialState = [
    {
      id: 1,
      prezzo: 19.99,
      titolo: "Prodotto 1",
      descrizione: "Questo è un fantastico prodotto di alta qualità.",
      immagine: "https://picsum.photos/200/300?random=1"
    },
    {
      id: 2,
      prezzo: 29.99,
      titolo: "Prodotto 2",
      descrizione: "Un altro incredibile prodotto per le tue esigenze.",
      immagine: "https://picsum.photos/200/300?random=2"
    },
    {
      id: 3,
      prezzo: 39.99,
      titolo: "Prodotto 3",
      descrizione: "Perfetto per ogni occasione, non lasciartelo scappare.",
      immagine: "https://picsum.photos/200/300?random=3"
    },
    {
      id: 4,
      prezzo: 49.99,
      titolo: "Prodotto 4",
      descrizione: "Un prodotto premium per i clienti più esigenti.",
      immagine: "https://picsum.photos/200/300?random=4"
    },
    {
      id: 5,
      prezzo: 59.99,
      titolo: "Prodotto 5",
      descrizione: "Qualità garantita al miglior prezzo sul mercato.",
      immagine: "https://picsum.photos/200/300?random=5"
    }
  ];

const productsReducer = (state = initialState, action)=>{
    switch(action.type){

        default:
            return state
    }
}

export default productsReducer