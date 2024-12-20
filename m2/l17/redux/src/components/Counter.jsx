import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions/countAction'

const Counter = () => {
  //Utilizzato per la lettura 
  const count = useSelector((state)=>{
    return state.count
  })

  //Utilizzato per la scrittura
  const dispatch = useDispatch()

  return (
    <>
     <p>Il valore di count nello store è {count} </p>
     <button onClick={()=>dispatch(increment())}>+</button>

    <button onClick={()=>dispatch(decrement())}>-</button>
     </>
  )
}

export default Counter