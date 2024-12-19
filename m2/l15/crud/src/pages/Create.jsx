import { useState, useContext } from 'react'
import { PizzaContext } from '../contexts/PizzaContext'
const Create = () => {
  const { createPizza } = useContext(PizzaContext);

  const [newPizza, setNewPizza] = useState({
    gusto:'',
    prezzo:''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createPizza(newPizza)
  }

  const handleChange = (e) => {
    const {value, name} = e.target;
    setNewPizza({
      ...newPizza,
      [name] : value
    })

    console.log(newPizza);
    

  }


  return (
    <form onSubmit={handleSubmit}>

      <input type="text" name='gusto' 
      className='form-control'
      value={newPizza.gusto}
      onChange={handleChange}
      />

      <input type="number" name='prezzo'
      className='form-control'
      value={newPizza.prezzo}
      onChange={handleChange}
      />

      <button className="btn btn-success">Crea Pizza</button>

    </form>
  )
}

export default Create