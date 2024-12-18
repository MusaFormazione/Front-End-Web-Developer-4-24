import './Card.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react'
const Card = ({titolo, testo}) => {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`card ${theme}-theme`}>
        <h3>{titolo}</h3>
        <p>{testo}</p>
    </div>
  )
}

export default Card