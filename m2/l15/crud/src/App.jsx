import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/Navbar'
import Lista from './pages/Lista'
import Edit from './pages/Edit'
import Create from './pages/Create'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <main className="container">
          <Routes>
            <Route path='/' element={<Lista/>}></Route>
            <Route path='/new-pizza' element={<Create/>}></Route>
            <Route path='/edit-pizza/:id' element={<Edit/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>      
    </>
  )
}

export default App
