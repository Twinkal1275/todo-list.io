function addtask()
{
    var task1 = document.getElementById("nm");
    var task2 = task1.value.trim();

    if(task2 !== ""){
        var task3 = document.getElementById("todo-list")
        var taskitem = document.createElement("li");
        taskitem.className = "task"
        taskitem.textContent = task2;
        task3.appendChild(taskitem);
        task1.value = "";


        // delete button

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function()
        {
            task3.removeChild(taskitem);
        }
          taskitem.appendChild(deleteButton);



        // edit button
         var editButton = document.createElement("button");
         editButton.textContent = "Edit";
         editButton.onclick = function()
         {
            var newText = prompt("Edit task:", task2);
            if(newText !== null && newText.trim() !== ""){
                taskitem.textContent = newText;

            }

         };
         taskitem.appendChild(editButton);
         task3.appendChild(taskitem);
         task1.value = "";  

    }
    else{
        alert("please enter you name")
    }
}