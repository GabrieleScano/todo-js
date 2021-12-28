import './styles.css';
import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/components';

export const todoList = new TodoList();

const task = new Todo('Learn JavaScript');

todoList.addTodo(task);
console.log(todoList)

createTodoHtml (task);