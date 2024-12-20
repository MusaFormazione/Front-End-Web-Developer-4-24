import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
  //Accedendo allo store restituisci qualcosa
  //Che salverai nella variabile count. 
  const count = useSelector(state => {
    return state.count
  })
  
  const dispatch = useDispatch()
  
  return (
    <>
        <h2>Valore contatore: {count}</h2>
        <button onClick={()=> dispatch({
            type: "INCREMENT",
            payload:2
        })}>+</button>

        <button onClick={()=> dispatch({
            type: "DECREMENT",
            payload:2
        })}>-</button>
    </>
  )
}

export default Counter