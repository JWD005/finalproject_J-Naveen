/*
Task 6-Step 2: Adding Tasks With The Form
1. Make sure a new TaskManager is initialized at the top of the file.
2. In index.js using the eventListener created for the form validation, create some logic to ensure the following events only happen if all the inputs are valid.
3. When the submit event fires, call the taskManager's addTask method passing in your form's input.
Note: Make sure to prevent the default action of the form!
4. Clear the values from each form input, ready for the next submission.
*/

/*
// Task 6- 1. Make sure a new TaskManager is initialized at the top of the file.
const taskManager = new taskManager(0);
// Select the New Task Form
const form = document.querySelector("#new-task-form");

// Add an 'onsubmit' event listener
form.addEventListener("submit", (event) => {
  // Select the inputs
  let validateName = document.querySelector("#new-task-name");
  let validateDescription = document.querySelector("#new-task-description");
  let validateAssignedTo = document.querySelector("#new-task-assigned-to");
  let validateDueDate = document.querySelector("#new-task-due-date");
  let validateStatus = document.querySelector("#new-task-status");

  // Task 6- 3. Prevent default action
  event.preventDefault();

  // Task 6- 4. Clear the values from each form input, ready for the next submission.
  const clearFormFields = () => {
    validateName.value = "";
    validateDescription.value = "";
    validateAssignedTo.value = "";
    validateStatus.value = "In Progress";
    validateDueDate.value = "";
    validateName.classList.remove("is-valid");
    validateDescription.classList.remove("is-valid");
    validateAssignedTo.classList.remove("is-valid");
    validateStatus.classList.remove("is-valid");
    validateDueDate.classList.remove("is-valid");
  };

  console.log("Task Name :" + validateName.value.length);
  console.log("Task Description :" + validateDescription.value.length);
  console.log("Task Assigned To :" + validateAssignedTo.value.length);
  console.log("Task Due Date :" + validateDueDate.value);
  console.log("Task Status:" + validateStatus.value);
  
// addTask method passing in your form's input
  taskManager.addTask(
      validateName.value,
      validateDescription.value,
      validateAssignedTo.value,
      validateDueDate.value,
      validateStatus.value
    );
    clearFormFields();
*/

// grab elements from html page by id
const colToStart = document.getElementById("colToStart");
const colInProgress = document.getElementById("colInProgress");
const colInReview = document.getElementById("colInReview");
const colCompleted = document.getElementById("colCompleted");
// Unable to complete step 2 "In index.js using the eventListener created for the form validation"


// Continuously detect browser width (jQuery, imported in html page - line 193)
var winWidth = $(window).width();
$(window).resize(function () {
  winWidth = $(window).width();
  toggleToStartColOpen();
});

// toggle the toStart column as opened (default)
// based on browser width to determine toStart column's width and height
function toggleToStartColOpen() {
  if (winWidth > 1200) {
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
// toggle the toStart column as closed (other columns opened)
// based on browser width to determine toStart column's width and height
function toggleToStartColOff() {
  if (winWidth > 1200) {
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
// when mouse enter this column, toggle toStart column as closed
// resize the associated p tag and change div tag to be display-flex
colInProgress.addEventListener("mouseenter", toggleToStartColOff);
colInProgress.addEventListener("mouseenter", () => {
  document.querySelector("#colInProgress > p").style.fontSize = "1.5rem";
  document.querySelector("#colInProgress > div").style.display = "flex";
});
// when mouse leave this column, toggle toStart column as open
// resize the associated p tag and change div tag to be display-none
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

