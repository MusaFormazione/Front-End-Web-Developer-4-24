import { useState } from 'react'

const Input = ({type, placeholder, dataHandler}) => {

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        // console.log(e);
        setValue(e.target.value)
        dataHandler(e.target.value)
    }




  return (
    <>
    <input 
    value={value}
    type={type || 'text'} 
    placeholder={placeholder}
    onChange={handleChange}
    />
<hr />
    {value}
<hr />
    </>
  )
}

export default Input