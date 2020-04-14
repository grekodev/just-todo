import './styles.css'
import {Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
todoList.todos.forEach(crearTodoHtml);

console.log(todoList.todos)






// const tarea = new Todo('Aprender js !!');
// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

/*localStorage.setItem('mi-key', 'awbc123');
sessionStorage.setItem('mi-key', 'awbc123');

//Eliminar de localstore
setTimeout(()=>{
    localStorage.removeItem('mi-key')
},1500)
*/