import {useState} from 'react'

const Contatore = () => {
    
    let [count, setCount] = useState(0);
    
    function incrementa(){
        setCount(c=>{
            c++;
            return c
        })
    }

    function decrementa(){
        setCount(c=>{
            if(c > 0){
                c--;
            }
            return c
        })
    }

    return (<>
        <div>Numero di click: {count}</div>
        <button onClick={decrementa}>-</button>
        <button onClick={incrementa}>+</button>
    </>)
}

export default Contatore