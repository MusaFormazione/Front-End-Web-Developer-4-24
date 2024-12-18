import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import './Header.css'
const Header = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);  

  const handleThemeChange = () => {
    toggleTheme();
  }

  return (
    <header> 
        <nav>
            <ul className={`menu ${theme}-theme`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Chi siamo</a></li>
                <li><a href="#">Contatti</a></li>
            </ul>
        </nav>

        <button 
        style={ {
          backgroundColor: theme === 'light' ? '#262626' : '#fff',
          color: theme === 'light' ? '#fff' : '#262626',
        }}
        onClick={handleThemeChange}>Cambia tema</button>
    </header>
  )
}

export default Header