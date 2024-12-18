import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Wrapper = ({children}) => {

    const {theme} = useContext(ThemeContext)

  return (
    <div style={{
        backgroundColor: theme === 'light' ? '#fff' : '#262626'
    }}>{children}</div>
  )
}

export default Wrapper