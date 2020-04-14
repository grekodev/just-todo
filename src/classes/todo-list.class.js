// Va a agrupar toda la lista de todos

import { Todo } from ".";

export class TodoList {
  constructor() {
    // this.todos = [];
    this.cargarLocalStorage();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStore();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardarLocalStore();
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.guardarLocalStore();
        break;
      }
    }
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.guardarLocalStore();
  }

  guardarLocalStore() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  cargarLocalStorage() {
    this.todos = (localStorage.getItem("todo"))
                ? JSON.parse(localStorage.getItem("todo"))
                :[];
    this.todos = this.todos.map(Todo.fromJson);          
  }
}
