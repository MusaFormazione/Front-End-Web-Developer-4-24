import { iPizza } from './Models/iPizza';
import { environment } from './environment';

const form =  document.getElementById('edit-form');
const gusto =  <HTMLInputElement> document.getElementById('gusto');
const prezzo = <HTMLInputElement> document.getElementById('prezzo');

async function init(){

    //Grazie ad URL search parames posso gestire i query params in maniera strutturata e controllata. 
    const url = new URLSearchParams(location.search);//Search è la proprietà di location che contiene i query params. 
    
    const id:string|null = url.get('id')
    if(!id){
        location.href = '/index.html'
        return
    }

    const pizza = await getPizzaById(Number(id));

    gusto.value = pizza.gusto;
    prezzo.value = String(pizza.prezzo);


    form?.addEventListener('submit', e => {
        e.preventDefault();

        const pizza:iPizza = {
            id: Number(id),
            gusto: gusto.value,
            prezzo: Number(prezzo.value)
        }

        updatePizza(pizza)
        .then(()=>{
            alert('pizza modificata con successo');
        })

    })


}

init()

async function getPizzaById(id:number):Promise<iPizza> {
    const response:Response = await fetch(`${environment.apiUrl}/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return <Promise<iPizza>> response.json();
}

async function updatePizza(pizza:iPizza):Promise<iPizza> {
    const response:Response = await fetch(`${environment.apiUrl}/${pizza.id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pizza)
    })

    return <Promise<iPizza>> response.json();
}
