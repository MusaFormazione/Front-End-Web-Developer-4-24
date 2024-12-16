import './App.css';
import Button from './components/Button/Button';

function App() {

  const nome = 'nome';

  return (
    <> 
      <div>{nome.toUpperCase()}</div>
      <img className="classe1 classe2" src="" alt="" />
      <Button testo="Clicca qui"/>
      <Button testo="Secondo bottone"></Button>
    </>
  )
}

export default App
