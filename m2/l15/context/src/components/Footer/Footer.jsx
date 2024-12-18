import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react'
const Footer = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <footer className={`${theme}-theme`}>
        Website by <a href="#">MusaFormazione</a> | P.iva 0123456789
    </footer>
  )
}

export default Footer