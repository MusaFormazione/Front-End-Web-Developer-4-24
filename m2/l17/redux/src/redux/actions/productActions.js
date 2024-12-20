import { GET_PRODUCTS } from "../reducers/products"

//redux-thunk è un middleware Già integrato nel nostro E redux toolkit
//Puoi adoperarlo per creare degli action creator che restituiscono anche più di una sola action. 


//Non solo, puoi quindi restituire una funzione sincrona, ma anche una asincrona 
const apiUrl = 'http://localhost:3000/Products'

export const getProdutsAction = () => {

    return async (dispatch) => {
        try{
            const response = await fetch(apiUrl)

            if(!response.ok){
                throw new Error('Errore nella richiesta')
            }

            const resProducts = await response.json();
            
            dispatch({
                type: GET_PRODUCTS,
                payload: resProducts
            })

        }catch(error){
            console.log(error);
            
        }
    }

}