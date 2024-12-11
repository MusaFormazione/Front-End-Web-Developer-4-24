const data = {
    nome:'Mario',
    cognome:'Rossi'
}

fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(user => {

    console.log(user) 
    /**
    {
        id:1,
        nome:'Mario',
        cognome:'Rossi'
    }
     */

})
