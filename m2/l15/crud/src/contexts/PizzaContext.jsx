import { useState, createContext } from "react";

export const PizzaContext = createContext();

export function PizzaProvider({children}){

    const [pizzeArr, setPizzeArr] = useState([])

    const apiUrl = 'http://localhost:3000/pizze'
    const headers = {'Content-Type': 'application/json'}

    async function createPizza(newPizza){
        const response = await fetch(apiUrl,{
            method: 'POST',
            headers,
            body: JSON.stringify({
                ...newPizza,
                prezzo: Number(newPizza.prezzo)
            })
        })

        const pizza = await response.json()

        setPizzeArr(pizzeArray => {
            return [...pizzeArray, pizza]
        })
    }
    async function getPizze(){
        const response = await fetch(apiUrl,{
            method: 'GET',
            headers,
        })

        const pizze = await response.json()

        setPizzeArr(pizze)
    }

    // async function getPizzaById(id){}
    async function editPizza(pizza){
        const response = await fetch(`${apiUrl}/${pizza.id}`,{
            method: 'PUT',
            headers,
            body: JSON.stringify(pizza)
        })

        await response.json()

        setPizzeArr(pizzeArray => {

            const index = pizzeArray.findIndex(p => p.id === pizza.id)
            pizzeArray.splice(index, 1, pizza)

            return pizzeArray
        })
    }
    async function deletePizza(id){
        const response = await fetch(`${apiUrl}/${id}`,{
            method: 'DELETE',
            headers
        })

        await response.json()

        setPizzeArr(pizzeArr.filter(p => p.id !== id))
    }

    return (
        <PizzaContext.Provider value={ {pizzeArr, createPizza, getPizze, editPizza, deletePizza} }>
            {children}
        </PizzaContext.Provider>
    )

}