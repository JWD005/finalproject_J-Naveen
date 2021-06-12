// initialize or create four arrays to store objects(cards) under different status
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

// initialize taskManager class
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
//last step- codes to be tested
