
const CountButton = ({increment, count, onClick}) => {

    const handleClick = () => {

        if(increment){
            count++
        }else{
            count--
        }
        onClick(count)

    }


  return (<>
    <button onClick={handleClick}>Incrementa</button>
  </>)
}

export default CountButton