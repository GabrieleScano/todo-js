import { todoList } from "..";
import { Todo, TodoList } from "../classes";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const createTodoHtml = (todo) => {

    const htmlTodo = `
        <li class="${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
                <label>${todo.task}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

txtInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && txtInput.value.trim() !== '') {
        const task = txtInput.value;
        console.log(task)
        const newTodo = new Todo(task);
        todoList.addTodo(newTodo);
        createTodoHtml(newTodo);
        
    txtInput.value = '';
    }
}  
);