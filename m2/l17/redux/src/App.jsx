import { useDispatch, useSelector } from 'react-redux'
// import Counter from './components/Counter'
import Cart from './components/Cart'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  //Utilizzato per la lettura 
  const products = useSelector((state)=>{
    return state.shop.products
  })

  //Utilizzato per la scrittura
  const dispatch = useDispatch()

  return (
    <>
      <header>Nome shop <Cart/></header>
      <h1>Shop</h1>

      <div className="container">

        <div className="row">
          {
            products.map((product)=>{
              const {id, titolo, descrizione, immagine, prezzo} = product
              return <div key={`product-${id}`} className="col-12 col-md-6 col-lg-3">
                        <div className="card">
                          <img src={immagine} alt={titolo} />
                          <div className="card-body">
                              <h3>{titolo}</h3>
                              <p>{descrizione}</p>  
                              <p>{prezzo}€</p>

                              <button onClick={()=>dispatch({
                                type:'ADD_TO_CART',
                                payload: product
                              })} className="btn btn-primary">
                                Aggiungi al carrello
                              </button>
                          </div>
                        </div>
                      </div>
            })
          }
        </div>

      </div>


    {/* <Counter/> */}
     
    </>
  )
}

export default App
