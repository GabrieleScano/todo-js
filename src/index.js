import './styles.css';
import { Todo, TodoList } from './classes';

const todoList = new TodoList();

const task = new Todo('Learn JavaScript');

todoList.addTodo(task);
console.log(todoList)