

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
    
    const taskText = inputBox.value.trim();

    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

   
    const listItem = document.createElement("li");
    listItem.innerText = taskText;

    
    listItem.addEventListener("click", function () {
        this.classList.toggle("checked");
    });

   
    const deleteButton = document.createElement("span");
    deleteButton.innerText = "\u00D7"; 
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function () {
        this.parentElement.remove();
    });

    
    listItem.appendChild(deleteButton);

    
    listContainer.appendChild(listItem);

   
    inputBox.value = "";
}
