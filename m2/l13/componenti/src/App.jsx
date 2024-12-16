import './App.css';
import Button from './components/Button/Button';
import Contatore from './components/contatore/Contatore';

function App() {

  const nome = 'nome';

  return (
    <> 
      <Contatore></Contatore>

      <hr />
      <div>{nome.toUpperCase()}</div>
      <img className="classe1 classe2" src="" alt="" />
      <Button testo="Clicca qui"/>
      <Button testo="Secondo bottone"></Button>
    </>
  )
}

export default App
