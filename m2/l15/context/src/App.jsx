import './App.css'
import ThemeProvider from './contexts/ThemeContext'
import Wrapper from './components/Wrapper'
import Header from './components/header/Header'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <ThemeProvider>
      <Wrapper>
        <Header></Header>
        <main>
          <Card titolo={'card1'} testo="Ciao Mondo"></Card>
          <Card titolo={'card2'} testo="Ciao Mondo"></Card>
          <Card titolo={'card3'} testo="Ciao Mondo"></Card>
        </main>
        <Footer></Footer>
      </Wrapper>
    </ThemeProvider>
    </>
  )
}

export default App
