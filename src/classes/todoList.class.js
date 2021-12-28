import { Todo } from ".";

export class TodoList {

  constructor() {
    this.getLocalStorage();
  }

  addTodo(task) {
    this.todos.push(task);

    this.setLocalStorage();
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id != id);
    this.setLocalStorage();
  }

  toggleTodo(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completed = !todo.completed;
        this.setLocalStorage();
        break;
      }
    }
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getLocalStorage() {
    this.todos = localStorage.getItem('todoList') ?
                 JSON.parse(localStorage.getItem('todoList')) 
                 : [];
    this.todos = this.todos.map(todo => {Todo.fromJson(todo)});
  }


  //   toggleAll() {
  //     const areAllMarked = this.todos.every(todo => todo.completed);
  //     this.todos.forEach(todo => todo.completed = !areAllMarked);
  //   }


  //   getActiveTodos() {
  //     return this.todos.filter(todo => !todo.completed);
  //   }

  //   getCompletedTodos() {
  //     return this.todos.filter(todo => todo.completed);
  //   }

  //   getTodos() {
  //     return this.todos;
  //   }
}