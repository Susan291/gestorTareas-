// Traernos la lista de tareas del almacenamiento local
let task = JSON.parse(localStorage.getItem("tasks"))||[];

// Funcionnpara agregar tarea 
export const addTask = (task) => {
    const newTask = {
id: Date.now(),
text: task, 
completed: false,
 };
 tasks.push(newTask);
 localStorage.setItem("tasks", JSON.stringify(task));
};

//Funcion eliminar una tarea 
export const deleteTask =(id) =>{
tasks = tasks.filter(("tasks") => task.id !== parseInt (id) );
localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Funcion para actualizar la tarea 
export const toggleTask = (id) =>{
tasks = tasks.map((task) => {
 if (tasks.id === parseInt(id)){
    task.completed = !task.completed;
 }  
 return task; 
});
localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Funcion para llevar las tareas 
export const getTasks = () => tasks;