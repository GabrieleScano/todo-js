import './styles.css';
import { TodoList } from './classes';
import { createTodoHtml } from './js/components';

export const todoList = new TodoList();
console.log(todoList);

todoList.todos.forEach(todo => createTodoHtml(todo));