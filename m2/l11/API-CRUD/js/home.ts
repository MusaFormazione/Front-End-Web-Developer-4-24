import { iPizza } from './Models/iPizza';
import { environment } from './environment.js';
import { Loader } from './Loader.js';
async function getPizze(){
    Loader.startLoading()
    const response:Response = await fetch(environment.apiUrl,{
        method: 'GET',
        headers: { 'Content-type': 'application/json'}
    })

    Loader.stopLoading()
    //Controllo che la response non contenga errori 

    return <Promise<iPizza[]>> response.json()
}


async function buildTable():Promise<void>{
    const target = document.querySelector('#target');
    const pizze:iPizza[] = await getPizze();

    pizze.forEach((p,i) => {

        const tr:HTMLTableRowElement = document.createElement('tr');
        const idTd:HTMLTableCellElement = document.createElement('td');
        const gustoTd:HTMLTableCellElement = document.createElement('td');
        const prezzoTd:HTMLTableCellElement = document.createElement('td');
        const azioniTd:HTMLTableCellElement = document.createElement('td');
        const deleteBtn:HTMLButtonElement = document.createElement('button');
        const editLink:HTMLAnchorElement = document.createElement('a');

        deleteBtn.classList.add('btn','btn-danger');
        editLink.classList.add('btn','btn-warning');

        idTd.innerText = String(i + 1);
        gustoTd.innerText = p.gusto;
        prezzoTd.innerText = p.prezzo + '€';
        deleteBtn.innerText = 'Elimina';
        editLink.innerText = 'Modifica';

        editLink.href = `/update.html?id=${p.id}`;
        
        deleteBtn.addEventListener('click',() => {
            deletePizza(p.id)
            .then(() => {
                tr.remove();
            })
        })

        azioniTd.append(editLink, deleteBtn);
        tr.append(idTd, gustoTd, prezzoTd, azioniTd);
        
        target?.append(tr);
    })

}

buildTable();


async function deletePizza(id:number):Promise<void|null> {
    Loader.startLoading()
    try{
        const response:Response = await fetch(`${environment.apiUrl}/${id}`,{
            method:'DELETE'
        });
        //mappatura dei codici d'errore
        return <Promise<void>> response.json()
    }catch(error){
        //gestione dell'errore
        return null;
    }finally{
        Loader.stopLoading()
    }
}