import { todoList } from "..";
import { Todo, TodoList } from "../classes";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnClearCompleted = document.querySelector('.clear-completed');

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
});

divTodoList.addEventListener('click', (e) => {
    const elementName = e.target.localName;
    const elementTodo = e.target.parentElement.parentElement;
    const todoId = elementTodo.getAttribute('data-id');

    if (elementName === 'input') {
        todoList.toggleTodo(todoId);
        elementTodo.classList.toggle('completed');
    } else if (elementName === 'button') {
        todoList.removeTodo(todoId);
        elementTodo.remove();
    }
}
);

btnClearCompleted.addEventListener('click', () => {
    todoList.clearCompleted();
    for(let i = divTodoList.children.length - 1; i >= 0; i--) {

        const element = divTodoList.children[i];
        if (element.classList.contains('completed')) {
            divTodoList.removeChild(element);
        }
    }
}
);