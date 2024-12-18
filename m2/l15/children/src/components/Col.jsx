import React, {useState} from 'react'

const Col = ({sm, md, lg, children}) => {

    // const [classString, setClassString] = useState('col');

    const getClassString = () => {
        return `col-sm-${sm} col-md-${md} col-lg-${lg}`;
    }


  return (
    <div className={getClassString()}>{children}</div>
  )
}

export default Col