import './Header.css'
const Header = () => {
  return (
    <header> 
        <nav>
            <ul className='menu dark-theme'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Chi siamo</a></li>
                <li><a href="#">Contatti</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header