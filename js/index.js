// Task 5 initialize New Task Manager- code to be console.log()
// const taskManager = new TaskManager();//to be set
/*
Function validFormFieldInput(data) 

const form = document.querySelector("#new-task-form");

const taskName = document.querySelector('#taskName');
const taskDescription = document.querySelector('#description');
const dueDate = document.querySelector('#dueDate');
const personAssigned = document.querySelector('#assignedPPL');
const statusField = document.querySelector('#status');
const btn = document.querySelector('#btn');


form.addEventListener("submit", (event) => {
    const validateName = document.querySelector("#taskName");
    const validateDescription = document.querySelector("#description");
    const validateAssignedTo = document.querySelector("#dueDate");
    const validateDueDate = document.querySelector("#assignedPPL");
    const validateStatus = document.querySelector("#status");
    let validationFail = 0;

    event.preventDefault();
    event.stopPropagation();
    console.log("Task Name :" + validateName.value.length);
    console.log("Task Description :" + validateDescription.value);
    console.log("Task Assigned To :" + validateAssignedTo.value);
    console.log("Task Due Date :" + validateDueDate.value);
    console.log("Task Status:" + validateStatus.value);

    //Form validation for taskName
if (validateName.value) {
    validateName.classList.add("is-valid");
    validateName.classList.remove("is-invalid");
} else {
    validateName.classList.add("is-invalid");
    validateName.classList.remove("is-valid");
    validationFail++;
}
//Form validation for description
if (validateDescription.value) {
    validateDescription.classList.add("is-valid");
    validateDescription.classList.remove("is-invalid");
} else {
    validateDescription.classList.add("is-invalid");
    validateDescription.classList.remove("is-valid");
    validationFail++;
}
//Form validation for deuDate
if (validateDueDate.value) {
    validateDueDate.classList.add("is-valid");
    validateDueDate.classList.remove("is-invalid");
} else {
    validateDueDate.classList.add("is-invalid");
    validateDueDate.classList.remove("is-valid");
    validationFail++;
}
//Form validation for assignedPPL
if (validateAssignedTo.value) {
    validateAssignedTo.classList.add("is-valid");
    validateAssignedTo.classList.remove("is-invalid");
} else {
    validateAssignedTo.classList.add("is-invalid");
    validateAssignedTo.classList.remove("is-valid");
    validationFail++;
}  
//Form validation for status
if (validateAssignedTo.value) {
    validateAssignedTo.classList.add("is-valid");
    validateAssignedTo.classList.remove("is-invalid");
} else {
    validateAssignedTo.classList.add("is-invalid");
    validateAssignedTo.classList.remove("is-valid");
    validationFail++;
}
if (validationFail > 0) {
    validationFail = 0;
    return;
}
});
*/
const colToStart = document.getElementById("colToStart");
const colInProgress = document.getElementById("colInProgress");
const colInReview = document.getElementById("colInReview");
const colCompleted = document.getElementById("colCompleted");

// Continuously detect browser width
var winWidth = $(window).width();
$(window).resize(function () {
  winWidth = $(window).width();
  console.log(winWidth);
});

function toggleToStartColOpen() {
  if (winWidth > 1500) {
    colToStart.style.width = "Calc(100% - 22rem)";
    colToStart.style.height = "85vh";
    colToStart.style.backgroundColor = "rgb(255, 229, 209)";
  } else {
    colToStart.style.width = "95vw";
    colToStart.style.height = " Calc(100% - 10rem)";
    colToStart.style.backgroundColor = "rgb(255, 229, 209)";
  }
  document.querySelector("#colToStart > p").style.fontSize = "1.5rem";
  document.querySelector("#colToStart > div").style.display = "flex";
}
function toggleToStartColOff() {
  if (winWidth > 1500) {
    colToStart.style.width = "8rem";
    colToStart.style.height = "85vh";
    colToStart.style.backgroundColor = "rgb(255, 239, 227)";
  } else {
    colToStart.style.width = "95vw";
    colToStart.style.height = " 2rem";
    colToStart.style.backgroundColor = "rgb(255, 239, 227)";
  }
  document.querySelector("#colToStart > p").style.fontSize = "0.5rem";
  document.querySelector("#colToStart > div").style.display = "none";
}
// In Progress Column
colInProgress.addEventListener("mouseenter", toggleToStartColOff);
colInProgress.addEventListener("mouseenter", () => {
  document.querySelector("#colInProgress > p").style.fontSize = "1.5rem";
  document.querySelector("#colInProgress > div").style.display = "flex";
});
colInProgress.addEventListener("mouseleave", toggleToStartColOpen);
colInProgress.addEventListener("mouseleave", () => {
  document.querySelector("#colInProgress > p").style.fontSize = "0.5rem";
  document.querySelector("#colInProgress > div").style.display = "none";
});
// In Review Column
colInReview.addEventListener("mouseenter", toggleToStartColOff);
colInReview.addEventListener("mouseenter", () => {
  document.querySelector("#colInReview > p").style.fontSize = "1.5rem";
  document.querySelector("#colInReview > div").style.display = "flex";
});
colInReview.addEventListener("mouseleave", toggleToStartColOpen);
colInReview.addEventListener("mouseleave", () => {
  document.querySelector("#colInReview > p").style.fontSize = "0.5rem";
  document.querySelector("#colInReview > div").style.display = "none";
});
// Completed Column
colCompleted.addEventListener("mouseenter", toggleToStartColOff);
colCompleted.addEventListener("mouseenter", () => {
  document.querySelector("#colCompleted > p").style.fontSize = "1.5rem";
  document.querySelector("#colCompleted > div").style.display = "flex";
});
colCompleted.addEventListener("mouseleave", toggleToStartColOpen);
colCompleted.addEventListener("mouseleave", () => {
  document.querySelector("#colCompleted > p").style.fontSize = "0.5rem";
  document.querySelector("#colCompleted > div").style.display = "none";
});
