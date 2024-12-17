import {useEffect, useState} from 'react'

const Elemento = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(c => {
            c++
            return c
        })
    }
    
    useEffect(() => {
        //una volta al montaggio dell'elemento
        console.log('Componente montato');
        setCount(1)
    },[])

    useEffect(() => {
        //Ogni volta che una delle dipendenze si aggiorna
        console.log(`Componente aggiornato, il valore di count è: ${count}`);
    },[count])

    useEffect(() => {

        return () => {
            //Funziona che viene eseguita solo in caso di smontaggio del componente 
            console.log('Componente smontato');
            
        }
    },[])
    

  return (<>
    <p>n°click: {count}</p>
    <button onClick={handleClick}>Clicca qui</button>
    <div>Elemento</div>
   </>)
}

export default Elemento