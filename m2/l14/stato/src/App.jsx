import { useState } from 'react'
import Count from './components/Count'
import CountButton from './components/CountButton'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

    const handleClick = (number) => {
        setCount(number);
    }


  return (
    <>
      <Count number={count}></Count>
      <CountButton increment={true} count={count} onClick={handleClick}></CountButton>
      <CountButton increment={false} count={count} onClick={handleClick}></CountButton>
      
    </>
  )
}

export default App
