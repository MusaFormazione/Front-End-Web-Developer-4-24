const form = document.getElementById('myForm')

form.addEventListener('submit', function(e){
    e.preventDefault();//Prevengo l'invio del Form 

    // const nome = document.getElementById('nome')
    // const email = document.getElementById('email')
    // const password = document.getElementById('password')
    const requiredFields = document.querySelectorAll('#myForm input.required');
    const [nome, email, password] = requiredFields

    let valid = true

    for(let field of requiredFields){
        if(!field.value){
            valid = false
            field.nextElementSibling.innerText = 'Valore mancante'
            field.classList.add('border-danger')
        }else{
            field.nextElementSibling.innerText = ''
            field.classList.remove('border-danger')
        }
    }

    if(valid){
        //invia il form
        alert('Form inviato')
    }

})