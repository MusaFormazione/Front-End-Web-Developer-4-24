export class TodoList{

    constructor(selector){

        this.target = document.querySelector(selector);
        this.input = document.createElement('input');
        this.button = document.createElement('button');
        this.list = document.createElement('div')
        this.db = localStorage.getItem(selector);
        this.initHTML();

    }

    initHTML(){
        this.input.placeholder = 'Inserisci un testo';
        this.input.type = 'text';
        this.input.classList.add('form-control');

        this.button.innerText = 'Crea';
        this.button.classList.add('btn','btn-primary');
        this.button.addEventListener('click', () => {
            this.addTodo()
        })

        this.target.append(this.input, this.button, this.list);
    }

    addTodo(){
        const newTodo = document.createElement('div');
        const deleteButton = document.createElement('button');
        
        newTodo.innerText = this.input.value;
        newTodo.classList.add('alert','alert-success');
        
        deleteButton.innerText = 'Elimina';
        deleteButton.classList.add('btn','btn-danger');
        deleteButton.addEventListener('click', ()=>{
            this.deleteTodo(newTodo)
        })

        newTodo.append(deleteButton)
        this.list.append(newTodo)
        this.input.value = '';
    }

    saveTodo(){
        ////AGGIUNGE ALLA LISTA DELLA PROP DB
        //aggiorna il localstorage
    }

    deleteTodo(todoElement){
        todoElement.remove()
    }

}