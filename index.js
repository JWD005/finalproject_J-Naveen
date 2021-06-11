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


