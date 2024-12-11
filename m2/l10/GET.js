//Chiamata get senza headers. 
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(console.log)

//Chiamata get con headers. 
fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 987q34f5h8i234y7h5809f234590'
    }
    //Essendo questa una chiamata get, non posso inserire un body. 
})
.then(response => response.json())
.then(console.log)