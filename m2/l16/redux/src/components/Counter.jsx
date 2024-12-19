import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  //Utilizzato per la lettura 
  const count = useSelector((state)=>{
    return state.main.count
  })

  //Utilizzato per la scrittura
  const dispatch = useDispatch()

  return (
    <>
     <p>Il valore di count nello store è {count} </p>
     <button onClick={()=>dispatch({
        type: 'DECREMENT',
        payload: 1
     })}>Decrementa</button>
     
     <button onClick={()=>dispatch({
        type: 'DECREMENT',
        payload: 3
     })}>Decrementa -3</button>

    <button onClick={()=>dispatch({
        type: 'INCREMENT',
        payload: 1
     })}>Incrementa</button>
     
     <button onClick={()=>dispatch({
        type: 'INCREMENT',
        payload: 3
     })}>Incrementa +3</button>
    </>
  )
}

export default Counter