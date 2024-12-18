import './App.css'
import Header from './components/header/Header'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <Card titolo={'card1'} testo="Ciao Mondo"></Card>
        <Card titolo={'card2'} testo="Ciao Mondo"></Card>
        <Card titolo={'card3'} testo="Ciao Mondo"></Card>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
