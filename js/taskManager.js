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
  // function to add created card into local storage
  addCardToLS(obj) {
    // switch between created card's status then modify id separately and add to different local storage arrays.
    switch (obj._status) {
      case "toStart":
        // set current card id === start array's length
        this.setId(toStartArr.length);
        // add current card information to start array
        toStartArr.push(obj);
        // update local storage - start array
        localStorage.setItem("toStartArr", JSON.stringify(toStartArr));
        break;
      case "inProgress":
        this.setId(inProgressArr.length);
        inProgressArr.push(obj);
        localStorage.setItem("inProgressArr", JSON.stringify(inProgressArr));
        break;
      case "inReview":
        this.setId(inReviewArr.length);
        inReviewArr.push(obj);
        localStorage.setItem("inReviewArr", JSON.stringify(inReviewArr));
        break;
      case "completed":
        this.setId(completedArr.length);
        completedArr.push(obj);
        localStorage.setItem("completedArr", JSON.stringify(completedArr));
        break;
      default:
        break;
    }
  }
  // add card to associated columns
  addCardToCol(obj) {
    // create a div tage named card
    const card = document.createElement("div");
    const doneBtn = document.getElementById("doneBtn");
    // assign class="card" to this card div
    card.className = "card";
    // check the card we would add to columns based on its status
    switch (obj._status) {
      case "toStart":
        document.getElementById("toStartContainer").appendChild(card);
        break;
      case "inProgress":
        document.getElementById("inProgressContainer").appendChild(card);
        break;
      case "inReview":
        document.getElementById("inReviewContainer").appendChild(card);
        break;
      case "completed":
        document.getElementById("completedContainer").appendChild(card);
        break;
      default:
        break;
    }
    // create content of this created div tag, passing parameters based on input values.
    // bind a onClick function on delete button, which will be implemented later when considering delete card and its data from LS.
    card.innerHTML = `
      <div class="cardHeader">
        <p id="taskName">${obj._name}</p>
        <p id="taskDueDate">${obj._dueDate}</p>
      </div>
      <p id="taskDescription">${obj._description}</p>
      <h6 class="card-subtitle mb-2 text-muted" id="assignedTo">
        Assigned to: ${obj._assignedTo}
      </h6>
      <div>
      <button type="button" class="btn btn-danger" onClick=deleteCard(${
        obj._id
      },"${obj._status}")>Delete</button>
      ${
        obj._status === "completed"
          ? ``
          : obj._status === "inReview"
          ? `<button type="button" class="btn btn-secondary" id="doneBtn" onClick=done(${obj._id})>Done</button>`
          : `<button type="button" class="btn btn-secondary" id="doneBtn" onClick=toNext(${obj._id},"${obj._status}")>to Next</button>`
      }
      </div>
    `;
  }
}

render();
updateLS();

///////////////////////// Form Part /////////////////////////
// grab elements from html page by id
const taskName = document.getElementById("taskName");
const taskNameValid = document.getElementById("taskNameValid");
const taskNameRequired = document.getElementById("taskNameRequired");
const assignedTo = document.getElementById("assignedTo");
const assignedToValid = document.getElementById("assignedToValid");
const assignedToRequired = document.getElementById("assignedToRequired");
const description = document.getElementById("description");
const dueDate = document.getElementById("dueDate");
const dueDateValid = document.getElementById("dueDateValid");
const dueDateRequired = document.getElementById("dueDateRequired");
const status = document.getElementById("status");

const createBtn = document.getElementById("createBtn");

createBtn.addEventListener("click", () => {
  // blocking previous three check validation functions outside.
  taskNameCheck();

  dueDateCheck();

  assignedToCheck();

  // if all three check validation functions return true - meaning all values are valid
  if (
    taskNameCheck() === true &&
    dueDateCheck() === true &&
    assignedToCheck() === true
  ) {
    // create object storing all relevant data that user typed in, through the taskManager class we created.
    const cardObj = new taskManager(
      taskName.value,
      dueDate.value,
      description.value,
      assignedTo.value,
      status.value
    );
    // call those two functions we declared in the taskManager class to add card into LS and display on the right column.
    cardObj.addCardToLS(cardObj);
    cardObj.addCardToCol(cardObj);
    // call the clearInput function to clear all input areas once card been created / all data valid and create button toggle clicked.
    clearInput();
  }
});

// render function to recreate all cards based on each LS array, and display those cards on different columns
function render() {
  if (toStartArr) {
    // grab each object from toStartArr, and pass it into the forEach loop, with its index number in the toStartArr
    toStartArr.forEach((obj, index) => {
      // create a temp object
      const newObj = new taskManager(
        obj._name,
        obj._dueDate,
        obj._description,
        obj._assignedTo,
        obj._status
      );
      // use the index to set as this temp object's id
      newObj.setId(index);
      // display this temp object onto the screen based on its status.
      newObj.addCardToCol(newObj);
    });
  }
  if (inProgressArr) {
    inProgressArr.forEach((obj, index) => {
      const newObj = new taskManager(
        obj._name,
        obj._dueDate,
        obj._description,
        obj._assignedTo,
        obj._status
      );
      newObj.setId(index);
      newObj.addCardToCol(newObj);
    });
  }
  if (inReviewArr) {
    inReviewArr.forEach((obj, index) => {
      const newObj = new taskManager(
        obj._name,
        obj._dueDate,
        obj._description,
        obj._assignedTo,
        obj._status
      );
      newObj.setId(index);
      newObj.addCardToCol(newObj);
    });
  }
  if (completedArr) {
    completedArr.forEach((obj, index) => {
      const newObj = new taskManager(
        obj._name,
        obj._dueDate,
        obj._description,
        obj._assignedTo,
        obj._status
      );
      newObj.setId(index);
      newObj.addCardToCol(newObj);
    });
  }
}

// simple function that will clear the input fields when a card is created successfully.
function clearInput() {
  taskName.value = "";
  description.value = "";
  dueDate.value = "";
  assignedTo.value = "";
  status.value = "toStart";
}

// function to delete a card when click the delete button
function deleteCard(id, status) {
  switch (status) {
    case "toStart":
      toStartArr.splice(id, 1); // delete specific element from toStartArr where id is the index
      // run a forEach loop to reassign each object a new id based on its index number in toStartArr
      toStartArr.forEach((obj) => {
        obj.id = toStartArr.indexOf(obj);
      });
    case "inProgress":
      inProgressArr.splice(id, 1);
      inProgressArr.forEach((obj) => {
        obj.id = inProgressArr.indexOf(obj);
      });
    case "inReview":
      inReviewArr.splice(id, 1);
      inReviewArr.forEach((obj) => {
        obj.id = inReviewArr.indexOf(obj);
      });
    case "completed":
      completedArr.splice(id, 1);
      completedArr.forEach((obj) => {
        obj.id = completedArr.indexOf(obj);
      });
    default:
      break;
  }
  // once delete is done, update the local storage
  updateLS();
  // refresh the webpage to trigger render()
  location.reload();
}

// done button function
function done(id) {
  const target = inReviewArr[id];
  completedArr.push(target);
  target._status = "completed";
  target._id = completedArr.length - 1;
  inReviewArr.splice(id, 1);
  inReviewArr.forEach((obj) => {
    obj._id = inReviewArr.indexOf(obj);
  });
  updateLS();
  location.reload();
}

// move to next button function
function toNext(id, status) {
  let target;
  switch (status) {
    case "toStart":
      target = toStartArr[id];
      inProgressArr.push(target);
      target._status = "inProgress";
      target._id = inProgressArr.length - 1;
      toStartArr.splice(id, 1);
      toStartArr.forEach((obj) => {
        obj._id = toStartArr.indexOf(obj);
      });
      break;
    case "inProgress":
      target = inProgressArr[id];
      inReviewArr.push(target);
      target._status = "inReview";
      target._id = inReviewArr.length - 1;
      inProgressArr.splice(id, 1);
      inProgressArr.forEach((obj) => {
        obj._id = inProgressArr.indexOf(obj);
      });
      break;
    default:
      break;
  }
  updateLS();
  location.reload();
}

// simple function that will update each Local storage array
function updateLS() {
  localStorage.setItem("toStartArr", JSON.stringify(toStartArr));
  localStorage.setItem("inProgressArr", JSON.stringify(inProgressArr));
  localStorage.setItem("inReviewArr", JSON.stringify(inReviewArr));
  localStorage.setItem("completedArr", JSON.stringify(completedArr));
}

////////////////////////////////////////////////////////////

function taskNameCheck() {
  // Task name validation check
  // taskName.value.length will return the length of whatever user type in the taskName filed in the form.
  // if this filed has valid length, then it will check if the length < 5
  // if the length < 5 then the validation text will show, otherwise will not
  if (taskName.value.length) {
    // in this case there is valid taskName value, or at least user tried to type in the name
    // the required text will not show.
    taskNameRequired.style.display = "none";
    if (taskName.value.length < 5) {
      taskNameValid.style.display = "inline";
      return false;
    } else {
      taskNameValid.style.display = "none";
      return true;
    }
  } else {
    // in this case there is not valid taskName value length, meaning user have not type in
    // the required text will show.
    taskNameRequired.style.display = "inline";
    return false;
  }
}

function dueDateCheck() {
  // dueDate.value will return an array
  // dueDate.value.slice(a, b) will return a new array, starting from index a, ending at index b
  const dueDateYY = dueDate.value.slice(0, 4);
  const dueDateMM = dueDate.value.slice(5, 7);
  const dueDateDD = dueDate.value.slice(8, 10);
  // Date().toISOString() is a built in function
  const currentDateYY = new Date().toISOString().slice(0, 4);
  const currentDateMM = new Date().toISOString().slice(5, 7);
  const currentDateDD = new Date().toISOString().slice(8, 10);
  // Task due date validation check
  // check if dueDate value is valid, meanwhile dueDateYY, dueDateMM and dueDateDD are also valid
  if (dueDate.value && dueDateYY && dueDateMM && dueDateDD) {
    // if above check is true, then the required text will not show.
    dueDateRequired.style.display = "none";
    if (dueDateYY > currentDateYY) {
      // if user chose a year that is the following year, for example
      // means due date is available
      // the dueDate validation text will not show.
      dueDateValid.style.display = "none";
      return true;
    } else if (dueDateYY < currentDateYY) {
      // otherwise the validation text will show.
      dueDateValid.style.display = "inline";
      return false;
    } else {
      // the pre-request is - the dueDate year is 2021 or later
      if (dueDateMM > currentDateMM) {
        // same logic to check month
        dueDateValid.style.display = "none";
        return true;
      } else if (dueDateMM < currentDateMM) {
        dueDateValid.style.display = "inline";
        return false;
      } else {
        // the pre-request is - the dueDate year is 2021 or later
        // and the dueDate month is June till Dec.
        if (dueDateDD >= currentDateDD) {
          // same logic to check day
          dueDateValid.style.display = "none";
          return true;
        } else {
          dueDateValid.style.display = "inline";
          return false;
        }
      }
    }
  } else {
    // if one of the first if statement is false, then means some date is missing
    // required text will show.
    dueDateRequired.style.display = "inline";
    return false;
  }
}

function assignedToCheck() {
  if (assignedTo.value.length) {
    assignedToRequired.style.display = "none";
    if (assignedTo.value.length < 5) {
      assignedToValid.style.display = "inline";
      return false;
    } else {
      assignedToValid.style.display = "none";
      return true;
    }
  } else {
    assignedToRequired.style.display = "inline";
    return false;
  }
}
