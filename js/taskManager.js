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
// Task 5: initialize taskManager class
class taskManager {
  constructor() { // parameters to be set
    this.task = [];// initialize this. to an empty array
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
