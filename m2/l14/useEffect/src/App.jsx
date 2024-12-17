import { useState } from 'react'
import Elemento from './components/Elemento'

import './App.css'

function App() {

  const [visibile, setVisibile] = useState(true)

  return (
    <>
      <button onClick={()=> setVisibile(!visibile) }>
        {visibile ? 'Nascondi' : 'Mostra'}
      </button>
      
      {visibile && <Elemento></Elemento>}
    </>
  )
}

export default App
