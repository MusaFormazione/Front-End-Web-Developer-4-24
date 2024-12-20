//Per migliorare la solidità del reducer, puoi creare delle costanti che abbiano lo stesso nome delle azioni. In questo modo avrai la guida di vsCode e gli errori di javascript se dovessi sbagliare la scrittura un'azione 
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

//Questo oggetto è lo Stato iniziale, ossia il valore di default da fornire al redicer. Siccome non può mai avere un undefined
//Definisci lo stato iniziale impostando già la struttura dei dati che utilizzerai durante l'esecuzione dei tuoi script. 
const initialState = {
    main:{
        count: 0
    },
    shop : {
        cart: [],
        products: [//Sto sfruttando l'Incial state per fornire alla mia applicazione dei valori di partenza statici. 
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
          ]
    }
}

//Funzione che gestirà i dispatch e aggiornerà in base al "messaggio" ricevuto, in che modo deve essere aggiornato lo store
const mainReducer = (state = initialState, action)=>{
    //action.payload = Valore inviato col dispaccio. 
    //action.type =  Il tipo di azione richiesta 
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                shop: {
                    ...state.shop,
                    cart: [...state.shop.cart, action.payload]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                shop: {
                    ...state.shop,
                    cart: state.shop.cart.filter(p => p.id !== action.payload)
                }
            }
        case INCREMENT:
            return {
                ...state,
                main:{
                    ...state.main,
                    count: state.main.count + action.payload
                }
            }
        case DECREMENT:
            return {
                ...state,
                main:{
                    ...state.main,
                    count: state.main.count - action.payload
                }
            }
        default:
            return state
    }

}

export default mainReducer