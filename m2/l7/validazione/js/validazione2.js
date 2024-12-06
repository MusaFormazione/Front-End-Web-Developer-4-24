const requiredFields = document.querySelectorAll('#myForm input.required');

//Un'altro modo di operare per la validazione potrebbe essere quello di registrare direttamente gli eventi da tastiera sui campi e attivare una validazione singola per ogni campo 

//In questo esempio, avendo selezionato tutti i campi richiesti, vado a ciclarli EA ed attivare una validazione su ognuno 
requiredFields.forEach(field => {

    field.addEventListener('keypress', () => {
    
        if(!field.value){
            field.nextElementSibling.innerText = 'Devi compilare questo campo';
        }else{
            field.nextElementSibling.innerText = '';
        }
        
    })

})


//Potresti pensare di accedere alla proprietà disabled del bottone che invia il Form per abilitare o disabilitare l'invio dei dati 
document.querySelector('#myForm button').disabled = false//abilita il bottone
document.querySelector('#myForm button').disabled = true//disabilita il bottone
