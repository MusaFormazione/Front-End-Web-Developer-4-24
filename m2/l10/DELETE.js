const data = {
    id:1,
    nome:'Mario',
    cognome:'Bianchi'
}

fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`,{
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(user => {

    console.log(user) //oggetto modificato

})