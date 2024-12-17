import { useState, useEffect } from 'react'
import Pizzaform from './components/PizzaForm'
import PizzaTable from './components/PizzaTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  const [pizze, setPizze] = useState([])


  const apiUrl = 'http://localhost:3000/pizze';


  const getPizze = async () => {
    const response = await fetch(apiUrl,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    
    const data = await response.json()
    setPizze(data)
  }

  useEffect(() => {

    getPizze()

  },[])

  return (
    <>

      <div className="container">
          <h1>Gestione pizze</h1>
      

          <div>
            <h2>Crea Pizza</h2>
            <Pizzaform></Pizzaform>
          </div>

          <div>
            <h2>Modifica Pizza</h2>
            <Pizzaform></Pizzaform>
          </div>

          <div>
            <h2>Lista pizze</h2>
            <PizzaTable pizze={pizze}></PizzaTable>
          </div>

      </div>


    </>
  )
}

export default App
