var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 
var pageContentEl = document.querySelector("#page-content");
var taskIdCounter =0;




var taskFormHandler = function(event) { 
  event.preventDefault(); 

  //selects the form field and drop down menu
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  //check if input values are empty strings
  if (!taskNameInput || !taskTypeInput) {
      alert("You need to fill out the task form!");
      return false;
  };

  //resets form
  formEl.reset();

  
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

  //add task item id as a custom attribute
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  //create div to hold task info and add to list item
  var taskTnfoEl = document.createElement("div");
  
  //give it a class
  taskTnfoEl.className ="task-info";
 
  //add HTML content to div
  taskTnfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskTnfoEl);
 
  //
  var taskActionsEl = createTaskActions(taskIdCounter);
  listItemEl.appendChild(taskActionsEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);

  //increase task counter for next unique id
  taskIdCounter++;
  };

  var createTaskActions = function(taskId) {
      var actionContainerEl = document.createElement("div");
      actionContainerEl.className ="task-actions";

      //create edit button
      var editButtonEl = document.createElement("button");
      editButtonEl.textContent = "Edit";
      editButtonEl.className = "btn edit-btn";
      editButtonEl.setAttribute("data-task-id", taskId);

      actionContainerEl.appendChild(editButtonEl);

      //create delete button
      var deleteButtonEl = document.createElement("button");
      deleteButtonEl.textContent = "Delete";
      deleteButtonEl.className = "btn delete-btn";
      deleteButtonEl.setAttribute("data-task-id", taskId);

      actionContainerEl.appendChild(deleteButtonEl);


      //create drop down menu
      var statusSelectEl = document.createElement("select");
      statusSelectEl.className = "select-status";
      statusSelectEl.setAttribute("name", "status-change");
      statusSelectEl.setAttribute("data-task-id", taskId);

      var statusChoices = ["To Do", "In Progress", "Completed"];
        for (var i = 0; i < statusChoices.length; i++) {
            // create option element
            var statusOptionEl = document.createElement("option");
            statusOptionEl.textContent = statusChoices[i];
            statusOptionEl.setAttribute("value", statusChoices[i]);

            //append to select
            statusSelectEl.appendChild(statusOptionEl);
        }


      actionContainerEl.appendChild(statusSelectEl);



      return actionContainerEl;
  };

  var taskButtonHandler = function(event) {
      console.log(event.target);

      if (event.target.matches(".delete-btn")) {
          var taskId = event.target.getAttribute("data-task-id");
          deleteTask(taskId);
         
      }
  };

  var deleteTask = function(taskId) {
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
      taskSelected.remove();
  };



  formEl.addEventListener("submit", taskFormHandler);
  pageContentEl.addEventListener("click", taskButtonHandler);
