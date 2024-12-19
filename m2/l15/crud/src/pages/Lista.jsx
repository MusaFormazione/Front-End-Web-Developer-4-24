import { useContext, useEffect } from 'react'
import { PizzaContext } from '../contexts/PizzaContext'
import { Link } from 'react-router'

const Lista = () => {

  const {pizzeArr, getPizze} = useContext(PizzaContext)

  useEffect(() => {

    getPizze()

  },[])

  return (<>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>gusto</th>
            <th>prezzo</th>
            <th>azioni</th>
          </tr>
        </thead>
        <tbody>
            { 
              pizzeArr.map(p => {
                return <tr key={`pizza-tr-${p.id}`}>
                  <td>{p.id}</td>
                  <td>{p.gusto}</td>
                  <td>{p.prezzo}</td>
                  <td>
                    <button className="btn btn-danger">Elimina</button>
                    <Link 
                    to={`/edit-pizza/${p.id}`} 
                    className="btn btn-warning"
                    >modifica</Link>
                  </td>
                </tr>
              })
            }
        </tbody>
          
      </table>
    </>)
}

export default Lista