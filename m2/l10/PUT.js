const data = {
    id:1,
    nome:'Mario',
    cognome:'Bianchi'
}

fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`,{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(user => {

    console.log(user) //oggetto modificato

})
