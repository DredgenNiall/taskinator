var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 




var taskFormHandler = function(event) { 
  event.preventDefault(); 

  //selects the form field and drop down menu
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  //package up data as an object
  var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput 
  };

  //send package as an argument to createTaskEl
  createTaskEl(taskDataObj); 
  };



 
  var createTaskEl = function(taskDataObj){
     //create list item
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 

  //create div to hold task info and add to list item
  var taskTnfoEl = document.createElement("div");
  
  //give it a class
  taskTnfoEl.className ="task-info";
 
  //add HTML content to div
  taskTnfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskTnfoEl);
 
  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
  };





  formEl.addEventListener("submit", taskFormHandler);
