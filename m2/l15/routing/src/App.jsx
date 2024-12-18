import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import NotFound from './pages/NotFound'
import Post from './pages/Post'
import LocationInfo from './pages/LocationInfo';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <main>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/chi-siamo' element={<ChiSiamo/>}></Route>
              <Route path='/post/:id' element={<Post/>}></Route>
              <Route path='/*' element={<NotFound/>}></Route>
          </Routes>
        </main>
        <LocationInfo></LocationInfo>
        <footer></footer>
      </BrowserRouter>
    </>
  )
}

export default App
