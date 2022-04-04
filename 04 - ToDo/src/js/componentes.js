import {Todo} from '../classes/';
import { todoList } from '../index';
//Referencias en HTML
const divTodoList  = document.querySelector('.todo-list');
const txtInput     = document.querySelector('.new-todo');
const btnBorrar    = document.querySelector('.clear-completed');
const ulFiltors    = document.querySelector('.filters');
const anchorFilter = document.querySelectorAll('.filtro');

export const createTodoHTML = (todo) => {
    const htmlTodo = `
    <li class="${(todo.status) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.status) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);
    
    return div.firstElementChild;
}

//Eventos
txtInput.addEventListener('keyup', ( event ) => {
    if ( event.keyCode === 13 && txtInput.value.length > 0){
        const newTodo = new Todo(txtInput.value);
        todoList.newTodo(newTodo) ;
        console.log(todoList);
        createTodoHTML(newTodo);
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', (event) => {
    const elementName = event.target.localName;
    const todoElement =  event.target.parentElement.parentElement;
    const todoId =  todoElement.getAttribute('data-id');
    if(elementName.includes('input')){
        todoList.isDone(todoId);
        todoElement.classList.toggle('completed');
    } else if (elementName.includes('button')){
        todoList.removeTodo(todoId);
        divTodoList.removeChild(todoElement);
    }
    
});

btnBorrar.addEventListener('click', () => {
    todoList.removeDone();
    for(let i = divTodoList.children.length-1; i >= 0; i--){
         const elemento = divTodoList.children[i];
         if(elemento.classList.contains('completed')){
             divTodoList.removeChild(elemento);
         }
    }
});

ulFiltors.addEventListener('click', (event) => {
    const filter = event.target.text;
    if(!filter){return;}
    
    anchorFilter.forEach(element => element.classList.remove('selected') );
    event.target.classList.add('selected');

    for (const element of divTodoList.children) {
        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');
        switch(filter){
            case 'Pendientes':
                if(completed){
                    element.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!completed){
                    element.classList.add('hidden');
                }
                break;
        }
    }
});