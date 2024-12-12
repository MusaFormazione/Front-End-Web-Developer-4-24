let object:{prop1:string, prop2:number, prop3?:string} = {
    prop1 : '',
    prop2: 2
}

//Dopo aver tipizzato correttamente l'oggetto, posso accedere alla proprietà esistenti nel suo tipo 
object.prop2
//Ma nel caso io stessi provando ad accedere ad una proprietà che è facoltativa, quindi possibilmente undefined
//Typescript potrebbe mostrare degli errori
if(object.prop3){
    //Osserva il tipo suggerito da Tipscript, noterai che all'interno dell'if la prop tre non risulta più possibilmente undiefined. Ci siamo di fatto accertati che questo dato esista prima di utilizzarlo. 
    object.prop3
}


//Posso adoperare una classe per descrivere un tipo 
//Attenzione, le classi possono avere anche dei metodi, assicurati che gli oggetti che devi tipizzare siano compatibili con questo 
class Pizza{
    gusto:string = 'Margherita';
    prezzo:number = 5
}

const margherita:Pizza = {
    gusto: "",
    prezzo: 0
}


//Per la tipizzazione di un oggetto posso però anche creare un custom Type. 
type pizzaType = {
    gusto:string,
    prezzo:number
}

const capricciosa:pizzaType = {
    gusto: "",
    prezzo: 0
}

//È possibile anche utilizzare un'interfaccia per tipizzare con il vantaggio che poi successivamente questa interfaccia potrà essere anche implementata in una classe. 
interface iPizza{
    gusto:string;
    prezzo:number;
}

const diavola:iPizza = {
    gusto: "",
    prezzo: 0
}


/**
 * Tipizzare array di oggetti 
 */

const arrayPizze:iPizza[] = [
    {
        gusto: "Margherita",
        prezzo: 5
    },
    {
        gusto: "Diavola",
        prezzo: 1
    },
    {
        gusto: "Capricciosa",
        prezzo: 7
    }
]