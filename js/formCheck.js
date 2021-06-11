const taskName = document.getElementById("taskName");
const taskNameValid = document.getElementById("taskNameValid");
const taskNameRequired = document.getElementById("taskNameRequired");

const createBtn = document.getElementById("createBtn");

createBtn.addEventListener("click", () => {
  // Task name validation check
  if (taskName.value.length) {
    if (taskName.value.length < 5) {
      taskNameValid.style.display = "inline";
    } else {
      taskNameValid.style.display = "none";
    }
    taskNameRequired.style.display = "none";
  } else {
    taskNameRequired.style.display = "inline";
  }

  // Task due date validation check
  const dueDate = document.getElementById("dueDate");
  const dueDateValid = document.getElementById("dueDateValid");
  const dueDateRequired = document.getElementById("dueDateRequired");
  const dueDateYY = dueDate.value.slice(0, 4);
  const dueDateMM = dueDate.value.slice(5, 7);
  const dueDateDD = dueDate.value.slice(8, 10);
  const currentDateYY = new Date().toISOString().slice(0, 4);
  const currentDateMM = new Date().toISOString().slice(5, 7);
  const currentDateDD = new Date().toISOString().slice(8, 10);
  if (dueDateYY > currentDateYY) {
    dueDateValid.style.display = "none";
    dueDateRequired.style.display = "none";
  } else if (dueDateYY < currentDateYY) {
    dueDateValid.style.display = "inline";
    dueDateRequired.style.display = "inline";
  } else {
    if (dueDateMM > currentDateMM) {
      dueDateValid.style.display = "none";
      dueDateRequired.style.display = "none";
    } else if (dueDateMM < currentDateMM) {
      dueDateValid.style.display = "inline";
      dueDateRequired.style.display = "inline";
    } else {
      if (dueDateDD >= currentDateDD) {
        dueDateValid.style.display = "none";
        dueDateRequired.style.display = "none";
      } else {
        dueDateValid.style.display = "inline";
        dueDateRequired.style.display = "inline";
      }
    }
  }

  //Assigned people validation check
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
