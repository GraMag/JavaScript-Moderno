export class Todo{
    static fromJson({id, tarea, status, creationDate}) {
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.status = status;
        tempTodo.creationDate = creationDate;
        return tempTodo;
    }
    constructor (tarea){
        this.id = new Date().getTime();
        this.tarea = tarea;
        this.status = false;
        this.creationDate = new Date();
    }

    printClass(){
        console.log(`${this.tarea} - ${this.id}`);
    }
}