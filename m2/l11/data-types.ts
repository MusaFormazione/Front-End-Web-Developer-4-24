let stringa:string = '';
stringa = 'Ciao'; //funziona
// stringa = 5; non funziona
let numero:number = 4;
let booleano:boolean = false;

let union:(string|boolean) = true;
union = '';//accettato

let qualsiasi:any = 'Qualsiasi valore';
let sconosciuto:unknown = 'Sconosciuto';

let nonDefinito:undefined;
let nullo:null = null;

let array:number[] = [1,2,3,4,5];//Array di numeri 
let array2:string[] = ['1', '2', '3'];//Array di stringhe 
let array3:(string|number)[] = ['a', 2];//Array che accetta sia stringhe che numeri. 
let array4:string[]|number[] = ['a'];//Un array di sole stringhe oppure un array di soli numeri 

let array5:Array<number> = [];



