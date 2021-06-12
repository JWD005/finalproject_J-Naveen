// grab elements from html page by id
const taskName = document.getElementById("taskName");
const taskNameValid = document.getElementById("taskNameValid");
const taskNameRequired = document.getElementById("taskNameRequired");

const createBtn = document.getElementById("createBtn");

createBtn.addEventListener("click", () => {
  // Task name validation check
  // taskName.value.length will return the length of whatever user type in the taskName filed in the form.
  // if this filed has valid length, then it will check if the length < 5
  // if the length < 5 then the validation text will show, otherwise will not
  if (taskName.value.length) {
    if (taskName.value.length < 5) {
      taskNameValid.style.display = "inline";
    } else {
      taskNameValid.style.display = "none";
    }
    // in this case there is valid taskName value, or at least user tried to type in the name
    // the required text will not show.
    taskNameRequired.style.display = "none";
  } else {
    // in this case there is not valid taskName value length, meaning user have not type in
    // the required text will show.
    taskNameRequired.style.display = "inline";
  }

  // Task due date validation check
  const dueDate = document.getElementById("dueDate");
  const dueDateValid = document.getElementById("dueDateValid");
  const dueDateRequired = document.getElementById("dueDateRequired");
  // dueDate.value will return an array
  // dueDate.value.slice(a, b) will return a new array, starting from index a, ending at index b
  const dueDateYY = dueDate.value.slice(0, 4);
  const dueDateMM = dueDate.value.slice(5, 7);
  const dueDateDD = dueDate.value.slice(8, 10);
  // Date().toISOString() is a built in function
  const currentDateYY = new Date().toISOString().slice(0, 4);
  const currentDateMM = new Date().toISOString().slice(5, 7);
  const currentDateDD = new Date().toISOString().slice(8, 10);
  // check if dueDate value is valid, meanwhile dueDateYY, dueDateMM and dueDateDD are also valid
  if (dueDate.value && dueDateYY && dueDateMM && dueDateDD) {
    // if above check is true, then the required text will not show.
    dueDateRequired.style.display = "none";
    if (dueDateYY > currentDateYY) {
      // if user chose a year that is the following year, for example
      // means due date is unavailable
      // the dueDate validation text will not show.
      dueDateValid.style.display = "none";
    } else if (dueDateYY < currentDateYY) {
      // otherwise the validation text will show.
      dueDateValid.style.display = "inline";
    } else {
      // the pre-request is - the dueDate year is 2021 or later
      if (dueDateMM > currentDateMM) {
        // same logic to check month
        dueDateValid.style.display = "none";
      } else if (dueDateMM < currentDateMM) {
        dueDateValid.style.display = "inline";
      } else {
        // the pre-request is - the dueDate year is 2021 or later
        // and the dueDate month is June till Dec.
        if (dueDateDD >= currentDateDD) {
          // same logic to check day
          dueDateValid.style.display = "none";
        } else {
          dueDateValid.style.display = "inline";
        }
      }
    }
  } else {
    // if one of the first if statement is false, then means some date is missing
    // required text will show.
    dueDateRequired.style.display = "inline";
  }

  // Assigned people validation check
  // same logic to check validation of task name
  const assignedTo = document.getElementById("assignedTo");
  const assignedToValid = document.getElementById("assignedToValid");
  const assignedToRequired = document.getElementById("assignedToRequired");
  if (assignedTo.value.length) {
    if (assignedTo.value.length < 5) {
      assignedToValid.style.display = "inline";
    } else {
      assignedToValid.style.display = "none";
    }
    assignedToRequired.style.display = "none";
  } else {
    assignedToRequired.style.display = "inline";
  }
});
