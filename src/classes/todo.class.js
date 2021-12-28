export class Todo {

  constructor(task) {
    this.task = task;

    this.id = new Date().getTime();
    this.completed = true;
    this.createdAt = new Date();
  }
}

