import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/reducers/count-slice"

const CounterSlice = () => {

  const count = useSelector(state => {
    return state.count
  })
  const dispatch = useDispatch()


  return (<>
    <h3>Contatore: {count} </h3>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
  </>
  )
}

export default CounterSlice