import {Todo} from './todo.class'; 

export class TodoList{
    constructor() {
        this.loadLocalStorage(); 
    }

    newTodo(todo){
        this.todos.push(todo);
        this.saveLocalStorage();
    }

    removeTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveLocalStorage();
    }

    isDone(id){
        for(const todo of this.todos){
            if(todo.id == id){
                todo.isDone = !this.isDone;
                this.saveLocalStorage();
                break;
            }
        }
    }

    removeDone(){
        this.todos = this.todos.filter(todo => !todo.isDone);
        this.saveLocalStorage();
    }

    saveLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    loadLocalStorage(){

        this.todos = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : [];
        this.todos = this.todos.map(Todo.fromJson);
    }   
}
