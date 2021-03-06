import { todoList } from "..";
import { Todo } from "../classes";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnClearCompleted = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const aFilters = document.querySelectorAll('.filter');

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
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {

        const element = divTodoList.children[i];
        if (element.classList.contains('completed')) {
            divTodoList.removeChild(element);
        }
    }
}
);

ulFilters.addEventListener('click', (e) => {
    const filter = e.target.text;
    if (!filter) {
        return;
    }

    aFilters.forEach(a => a.classList.remove('selected'));
    e.target.classList.add('selected');

    for (const element of divTodoList.children) {
        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');
        switch (filter) {
            case 'Pending':
                if (completed) {
                    element.classList.add('hidden');
                }
                break;
            case 'Completed':
                if (!completed) {
                    element.classList.add('hidden');
                }
                break;

        }
    }
});
