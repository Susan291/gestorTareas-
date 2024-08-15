import "./styles.css";
import { addTask, deleteTask, toggleTask } from "./task"; 
import { renderTasks } from "./ui";

document.addEventListener ("DOMContentLoaded",()=>{
renderTasks();

document.getElementById("task-form").addEventListener("submit", (e) =>{
e.preventDefault();
const taskImput = document.getElementById("task-input").Value;
});
});