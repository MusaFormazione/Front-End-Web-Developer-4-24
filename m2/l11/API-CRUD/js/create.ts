import { iPizza } from './Models/iPizza';
import { environment } from './environment.js';

const form = <HTMLFormElement | null> document.getElementById('create-form');

if(form){


    form.addEventListener('submit', e => {
        e.preventDefault();

        const fields = document.querySelectorAll<HTMLInputElement>('#create-form input');
        const [gusto, prezzo] = fields

        const newPizza:Partial<iPizza> = {
            gusto: gusto.value,
            prezzo: Number(prezzo.value)
        }

        createPizza(newPizza).then(pizzaResponse=>{
  
            console.log(pizzaResponse.prezzo);
        })
        


    })


    async function createPizza(newPizza:Partial<iPizza>):Promise<iPizza> {
        const response:Response = await fetch(environment.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPizza)
        })
        //fare controlli sulle response

        return <Promise<iPizza>> response.json()
    }


}