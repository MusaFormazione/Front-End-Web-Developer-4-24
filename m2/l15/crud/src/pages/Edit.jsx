import { useContext, useEffect, useState } from 'react'
import { PizzaContext } from '../contexts/PizzaContext'
import { useParams } from 'react-router'
import Lista from './Lista'

const Edit = () => {

  const { id } = useParams()

  const {pizzeArr, editPizza} = useContext(PizzaContext)

  const [pizza, setPizza] = useState({
    id,
    gusto:'',
    prezzo:''
  })

  useEffect(() => {

    const foundPizza = pizzeArr.find(p => p.id === Number(id));
    setPizza(foundPizza);

  },[id])

  const handleSubmit = (e) => {
    e.preventDefault()
    editPizza(pizza)
  }

  const handleChange = (e) => {
    const {value, name} = e.target;
    setPizza({
      ...pizza,
      [name] : value
    })    

  }


  return (<>
    <form onSubmit={handleSubmit}>

      <input type="text" name='gusto' 
      className='form-control'
      value={pizza.gusto}
      onChange={handleChange}
      />

      <input type="number" name='prezzo'
      className='form-control'
      value={pizza.prezzo}
      onChange={handleChange}
      />

      <button className="btn btn-success">Modifica Pizza</button>

    </form>
    <Lista></Lista>
    </>
  )
}

export default Edit