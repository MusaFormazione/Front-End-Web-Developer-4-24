import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../redux/actions/cartActions"

const Cart = () => {

  const cart = useSelector(state => {
    return state.shop.cart
  })

  const dispatch = useDispatch()

  return (
    <>
      <p>Prodotti nel carrello: {cart.length}</p>
      <div>
        {cart.map((cartItem) => {
          return (<>
          <div className="d-flex">
            <h4>{cartItem.titolo}</h4>
            <button onClick={()=>dispatch(removeFromCart(cartItem.id))} className="btn btn-danger">X</button>
          </div>
          </>)
        })}
      </div>
    </>
  )
}

export default Cart