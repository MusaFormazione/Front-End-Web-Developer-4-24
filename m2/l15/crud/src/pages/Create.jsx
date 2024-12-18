import { useState } from 'react'
import { PizzaContext } from '../contexts/PizzaContext'
import { useContext } from 'react'
const Create = () => {
  const { createPizza } = useContext(PizzaContext);

  const [newPizza, setNewPizza] = useState({
    gusto:'',
    prezzo:0
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createPizza(newPizza)
  }


  return (
    <form onSubmit={handleSubmit}>

      <input type="text" name='gusto' 
      className='form-control'
      value={newPizza.gusto}
      />
      <input type="text" name='prezzo'
      className='form-control'
      value={newPizza.prezzo}
      />

      <button className="btn btn-success">Crea Pizza</button>

    </form>
  )
}

export default Create