var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 
  event.preventDefault(); 


  //gets the values entered in the from field and drop down menu
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  //create list item
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 

  //create div to hold task info and add to list item
  var taskTnfoEl = document.createElement("div");
  
  //give it a class
  taskTnfoEl.className ="task-info";
 
  //add HTML content to div
  taskTnfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild(taskTnfoEl);
 
  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl); 
  }; 

  formEl.addEventListener("submit", createTaskHandler);
