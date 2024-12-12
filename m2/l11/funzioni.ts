function somma(a:number, b:number):number{
    return a + b;
}

function concatena(a:string, b:string):string{
    return a + b;
}

console.log(somma(3,4))
console.log(concatena('Ciao ','Mondo'))

function parametriFacolativi(obbligatorio:string, valorePredefinito:string = '', facoltativo?:string):void{
    console.log(obbligatorio);//la stringa inserita
    console.log(valorePredefinito);//Facoltativo ma non possibilmente undefined
    console.log(facoltativo);//Potrebbe essere undefined
}

//Esempio con funzione che lancia un errore e restituisce possibilmente never 
function checkPassword(password:string):{nome:string,cognome:string}|never{
    if(password === 'password'){
        return {
            nome:'Mario',
            cognome: 'Rossi'
        }
    }else{
        throw new Error('Invalid Password')
    }
}

function notEmpty(stringa:string):string|undefined{
    if(stringa.length > 0){
        return 'La stringa non è vuota';
        // Questa funzione restituisce una stringa, ma solo se una determinata condizione si verifica. 
    }
    // In caso contrario, la funzione non restituisce nulla e quindi abbiamo un possibile undefined come risultato. 
}

const dato = notEmpty('sdfsdf');
if(dato){//Per evitare gli errori di tipescript dovrò controllare che il dato esista. 
    //Questa cosa, però, oltre a essere richiesta da toscript, sarebbe necessaria perchè io quando ho un dato, possibilmente annifind, dovrei per creare un codice sicuro, sempre verificare che quel dato esista 
    concatena('Ciao ', dato);
} 

//Esempio con funzione freccia. 
//Funzione che accetta un number chiamato n, e restituisce un number. 
const raddoppia = (n:number):number => n * 2;



//Generics applicati alle funzioni 
function sommaConcatena<T>(a:T, b:T):T{
    return (a as any) + b;
}

console.log( sommaConcatena<string>('Ciao ','Mondo'));
console.log( sommaConcatena<number>(2,2));


/**
 * tipizzazione delle promise
 */


async function getString():Promise<string>{
    return '';
}

