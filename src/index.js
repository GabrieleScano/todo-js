import './styles.css';
import { TodoList } from './classes';
import { createTodoHtml } from './js/components';

export const todoList = new TodoList();

todoList.todos.forEach(todo => createTodoHtml(todo));

console.log(todoList.todos);