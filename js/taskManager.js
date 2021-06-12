/*
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
*/



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




/*
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
*/