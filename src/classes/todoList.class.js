export class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(task) {
    // const todo = new Todo(task);
    this.todos.push(task);
    // return todo;
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id != id);
    console.log(this.todos);
  }

  toggleTodo(id) {
    for(const todo of this.todos) {
      if(todo.id == id) {

    todo.completed = !todo.completed;
  }
  }}


//   toggleAll() {
//     const areAllMarked = this.todos.every(todo => todo.completed);
//     this.todos.forEach(todo => todo.completed = !areAllMarked);
//   }

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

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