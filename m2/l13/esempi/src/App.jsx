import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import Footer  from './components/footer/Footer'
import Card from './components/card/Card'
import { useState } from 'react';

function App() {

  const data = [
    {
      gusto: 'Margherita',
      prezzo: 5
    },
    {
      gusto: 'Diavola',
      prezzo: 1
    }
  ];

  const [pizze, setPizze] = useState(data)

  const handleDelete = (index) => {
    console.log(index);
    
    setPizze(pizzeArr => {
      return pizzeArr.filter((_, i) => i !== index)
    })
  }

  const handleCreate = () => {
   
    setPizze(pizzeArr => {
      const newPizza = {
        gusto:'Capricciosa',
        prezzo: 8
      }
      return [...pizzeArr, newPizza];
    })
  }

  

  return (
    <>
      <Header></Header>
      <main>
        <button onClick={handleCreate}>Aggiungi</button>
        { pizze.map((p,i) => {

            return (
              <Card 
                key={`pizza-${i}`}  
                onDelete={()=> handleDelete(i)}
                // gusto={p.gusto} 
                // prezzo={p.prezzo}
                {...p}//Passa tutte le proprietà dell'oggetto pizza alla card. 
              ></Card>
            )
          })
        }
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
