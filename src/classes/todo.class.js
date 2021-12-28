export class Todo {

  static fromJson({ id, task, completed, createdAt }) {
    const todo = new Todo(task);

    todo.id = id;
    todo.completed = completed;
    todo.createdAt = createdAt;

    return todo;
  }
  
  constructor(task) {
    this.task = task;

    this.id = new Date().getTime();
    this.completed = false;
    this.createdAt = new Date();
  }
}

