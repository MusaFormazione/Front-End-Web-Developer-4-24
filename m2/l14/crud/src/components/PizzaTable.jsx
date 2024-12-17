import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const PizzaTable = ({pizze}) => {

  
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Gusto</th>
          <th>Prezzo</th>
          <th>Azioni</th>
        </tr>
      </thead>
      <tbody>
        {
          pizze.map(pizza => {
            const {id, gusto, prezzo} = pizza
              return (
                <tr key={`pizza-${pizza.id}`}>
                  <td>{id}</td>
                  <td>{gusto}</td>
                  <td>{prezzo}</td>
                  <td>
                    <DeleteButton></DeleteButton>
                    <EditButton></EditButton>
                  </td>
                </tr>
              )
          })
        }
      </tbody>
    </table>
  )
}

export default PizzaTable