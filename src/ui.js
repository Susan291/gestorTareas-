import { getTasks } from "./task";

//Funcion para mostrarle al usuario las tareas 
export const renderTasks = () =>{
 const taskList = document.getElementById("task-list");    
 taskList.innerHTML = "";
const task = getTasks();
taskList.forEach ((tasks) =>{
  const li = document.createElement("li");


// añadir clase solo si la tarea esta completada 
if (task.completed === true) {
    li.classList.add("completed");
}

li.innerHTML = `
${task.text }
<button class="delete"> Eliminar </button>
<button class="toggle"> ${task.completed === true ? " Deshacer" : " completar"}</button>
`;
 
tasklist.appendChild (li);
); 
};