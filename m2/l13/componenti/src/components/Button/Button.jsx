import React from 'react'

const Button = (props) => {

  console.log(props);
  

  return (
    <button>{props.testo}</button>
  )
}

export default Button