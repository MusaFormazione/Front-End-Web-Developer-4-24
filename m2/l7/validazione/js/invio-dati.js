const button = document.querySelector('#myForm button')

button.addEventListener('click', function(e){
    e.preventDefault();//Prevengo l'invio del Form 

    const requiredFields = document.querySelectorAll('#myForm input[required]');
    const [gusto, prezzo] = requiredFields
  

    let valid = true

    for(let field of requiredFields){
        
        if(!field.checkValidity()){
            valid = false
            field.nextElementSibling.innerText = field.validationMessage;
        }else{
            field.nextElementSibling.innerText = '';
        }

    }

    

    if(valid){

        const pizza = {
            gusto: gusto.value,
            prezzo: prezzo.value
        }

        fetch('http://prova.test/', {
            method: 'POST',//Richiesta di inserimento
            headers: {
                //Comunico che invio i dati in formato json. 
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(pizza),
        })
            .then(response => response.json())
            .then(data => {
                //Testo la risposta del server
                console.log(data)
            });
    }

})