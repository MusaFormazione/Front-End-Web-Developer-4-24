const button = document.querySelector('#myForm button')

button.addEventListener('click', function(e){
    e.preventDefault();//Prevengo l'invio del Form 

    const requiredFields = document.querySelectorAll('#myForm input[required]');
    const [email, password] = requiredFields

    let valid = true

    for(let field of requiredFields){
        
        if(!field.checkValidity()){
            valid = false
            field.nextElementSibling.innerText = field.validationMessage;
        }else{
            field.nextElementSibling.innerText = '';
        }

    }


    console.log(
        email.checkValidity(),
        email.validationMessage,
        email.validity
    );
    
    

    if(valid){
        //invia il form
        alert('Form inviato')
    }

})