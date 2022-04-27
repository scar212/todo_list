let boton = document.querySelector(".btn-add");
let task = document.querySelector(".add-list");
let lista = document.getElementById("content-list-p");

boton.addEventListener('click', ()=>{
    errorTask();
    const addTask = ()=>{
        const newDiv = document.createElement("div");
         newDiv.classList.add("items","border");
         document.body.appendChild(newDiv);
         newDiv.textContent =  task.value;
         newDiv.addEventListener('click', ()=>{
            newDiv.classList.toggle("done");
            newDiv.classList.toggle("ubicacion");
         })
    }
    addTask();
    task.value = "";
})
const errorTask = ()=>{
    if(task.value == ""){
        alert("No puedes ingresar una tarea con texto vacío");
    }
}
