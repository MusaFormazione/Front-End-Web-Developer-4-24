import {useState} from 'react'
import Input from './Input'

const Form = () => {

    const [form, setForm] = useState({
        name:'',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        console.dir(e.target);        
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: value
        })

        console.log(form);
    }

    const sendData = (e) => {
        e.preventDefault()//Per prevenire l'invio del Form. 

        //Qui puoi eventualmente fare una chiamata post per inviare i dati del Form ad un endpoint.
        
        console.log(form);        
    }


  return (
    <div>
        <h1>Inserisci i dati</h1>

        <Input 
        type="email" 
        placeholder='La tua email'
        dataHandler={console.log}></Input>

        <form onSubmit={sendData}>

            <input 
            type="text" 
            name="name" 
            onChange={handleChange}
            value={form.name} />

            {/*Utilizzo <br/> solo per un discorso di velocità non andrebbe mai utilizzato in un progetto per mandare a capo i campi, utilizza gli elementi blocco e il CSS */}
            <br />
            
            <input 
            type="email" 
            name="email" 
            onChange={handleChange}
            value={form.email} />
            
            <br />
            
            <input 
            type="password" 
            name="password" 
            onChange={handleChange}
            value={form.password} />

            <button>Invia</button>

        </form>

    </div>
  )
}

export default Form