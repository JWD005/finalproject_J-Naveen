// initialize or create four arrays to store objects(cards) under different status
// to store data into Local Storage, use
// localStorage.setItem("nameOfItem", JSON.stringify(whatShouldBeStored))
// to get data from Local Storage, use
// JSON.parse(localStorage.getItem("nameOfItem"))
// in this case, initialize each array by checking if its already existed in our local storage
// if it is - use the stored array
// otherwise - set an empty array instead.
const toStartArr = JSON.parse(localStorage.getItem("toStartArr"))
  ? JSON.parse(localStorage.getItem("toStartArr"))
  : [];
const inProgressArr = JSON.parse(localStorage.getItem("inProgressArr"))
  ? JSON.parse(localStorage.getItem("inProgressArr"))
  : [];
const inReviewArr = JSON.parse(localStorage.getItem("inReviewArr"))
  ? JSON.parse(localStorage.getItem("inReviewArr"))
  : [];
const completedArr = JSON.parse(localStorage.getItem("completedArr"))
  ? JSON.parse(localStorage.getItem("completedArr"))
  : [];

/* 
Task 7: Using Javascript to Create the Task HTML
1. In js/taskManager.js, above the TaskManager class definition, create a new function, createTaskHtml. The function should accept the following parameters:(name, description, assignedTo, dueDate, status)
2. Within this createTaskHtml function, create a string using template literals, copying across one of your tasks that we hardcoded in earlier in task 3 from the index.html
3.Using the template literal placeholders (${}), replace each text section of the task HTML with the correct parameter
4.Return the HTML from the function.
*/

/*
//create a new function, createTaskHtml
const createTaskHtml = (taskName, description, assignedTo, dueDate, status) => {
// template literals placeholders (${}) & replace each text section of the task HTML with the correct parameter
const html = `
    <li class="card" style="min-width: 50vw">
        <div class="card-body">
            <h5 class="card-title">${taskName}</h5> 
            <p class="card-text">
                ${description}
            </p>
            <p class="card-text">${assignedTo} To</p>
            <p class="card-text">${dueDate}</p>
            <div class="card-footer row">
                <div class="col-6">
                    <p class="card-text"><b>${status}</b></p>
                </div>
                <div class="col-3">
                    <button class="btn btn-outline-success done-button">
                        Done
                    </button>
                </div>
                <div class="col-3">
                    <button class="btn btn-outline-danger delete-button">
                        Delete
                    </button>
                </div>
            </div>
          </div>
        </li>`;
        return html;
};
//console.log(taskHTML)

/*
Task 5: initialize taskManager class
Step 2: The TaskManager Class
In this step, we'll create a TaskManager class that will be responsible for managing the tasks in the application.
Create a TaskManager class in js/taskManager.js
Within the constructor of the TaskManager class, initialize a this.tasks property on the class equal to an empty array.

Task 6: Adding A New Task Programmatically
Step 1: 
1.In the TaskManager's constructor, accept a currentId parameter, with a default value of 0.
2.Assign the currentId to a new property on the class, this.currentId.
3.Create a method on the class, addTask. 
4.Within the addTask method, increment the this.currentId
5.push a new task into the this.tasks array, with the correct properties of the task, using the values passed in as parameters as well as the new this.currentId
*/


/*
//codes for task 5 & 6
class taskManager { //<--Task 5- Create a TaskManager class in js/taskManager.js
  constructor(currentId = 0) { // <--Task 6- 1.In the TaskManager's constructor, accept a currentId parameter, with a default value of 0.
    this.task = []; // <-- Task 5- Within the constructor of the TaskManager class, initialize a this.tasks property on the class equal to an empty array.
    this.currentId = currentId; // <--Task 6- 2.Assign the currentId to a new property on the class, this.currentId.
  }
  addTask(taskName, description, assignedTo, dueDate, status){ //<--Task 6- Create a method on the class, addTask. 
    const task = {
      id: this.currentId++, //<--Task 6- Within the addTask method, increment the this.currentId.
      taskName: taskName,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };
    this.task.push({task});
  } 
  */

  /*
// In js/taskManager.js, within the TaskManager class, create a render() method. This method does not need any parameters
render() {
  //Create a variable tasksHtmlList and assign it an empty array
  let tasksHtmlList = [];
  // Loop over the TaskManager's tasks, and for each task
  for (let i = 0; i < this.tasks.length; i++) {
    // Get the current task in the loop
    const task = this.tasks[i];
    const date = new Date(task.dueDate);
    // Create a formattedDate variable
    const formattedDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    // Create a taskHtml variable to store the HTML of the current task
    const taskHtml = createTaskHtml(
      task.name,
      task.description,
      task.assignedTo,
      formattedDate,
      task.status
    );
    // push the taskHtml into the tasksHtmlList array
    tasksHtmlList.push(taskHtml);
  }
  // Create the tasksHtml joining tasksHtmlList array
  // seperate each task with a new line in between each item.
  const tasksHtml = tasksHtmlList.join("\n");

  // Select the tasks list element and set its innerHTML to the tasksHtml.
  const tasksList = document.querySelector("#task-list");
  tasksList.innerHTML = tasksHtml;
}
*/

// initialize taskManager class
// as the id is highly associated with the status of each card
// means when a card move from one status into another, the id should be changed based on the new status array.
class taskManager {
  constructor(name, dueDate, description, assignedTo, status) {
    this._name = name;
    this._description = description;
    this._dueDate = dueDate;
    this._assignedTo = assignedTo;
    this._status = status;
    this._id = 0;
  }
  // getter
  getName() {
    return this._name;
  }
  getDescription() {
    return this._description;
  }
  getDueDate() {
    return this._dueDate;
  }
  getAssignedTo() {
    return this._assignedTo;
  }
  getStatus() {
    return this._status;
  }
  getId() {
    return this._id;
  }
  // setter
  setName(newName) {
    this._name = newName;
  }
  setDescription(newDescription) {
    this._description = newDescription;
  }
  setDueDate(newDueDate) {
    this._dueDate = newDueDate;
  }
  setAssignedTo(newAssignedTo) {
    this._assignedTo = newAssignedTo;
  }
  setStatus(newStatus) {
    this._status = newStatus;
  }
  setId(newId) {
    this._id = newId;
  }
}
