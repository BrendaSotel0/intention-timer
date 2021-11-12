var categoryButtons = document.querySelector(".category-buttons");
var meditateButton= document.querySelector(".meditate");
var exerciseButton = document.querySelector(".exercise");
var studyButton = document.querySelector(".study");
var meditateIcon = document.getElementById("meditateIcon");
var exerciseIcon = document.getElementById("exerciseIcon");
var studyIcon = document.getElementById("studyIcon");
 feature/form-functionality
var activityButtons = document.querySelector("activity-buttons");
var timeInput = document.querySelector(".time");
var errorMessage = document.querySelector("#errorMessage");
var accomplishInput = document.querySelector("#accomplishInput");
var startButton = document.querySelector(".start-activity");



meditateButton.addEventListener("click", activateMeditate);
exerciseButton.addEventListener("click", activateExercise);
studyButton.addEventListener("click", activateStudy);

// var activityButtons = document.querySelector("activity-buttons");
var timeInput = document.querySelector(".time");
var activityButton = document.querySelector(".start-activity");
var accomplishInput = document.querySelector(".accomp-input");
var minutesInput = document.querySelector(".min-input");
var secondsInput = document.querySelector(".sec-input");
var mainPage = document.querySelector(".other-new-activity");
var timer = document.querySelector(".countdown-timer");
var errorMessage = document.querySelectorAll(".error-message");
var btnError = document.getElementById("buttonError");
var accomError = document.getElementById("accomError");
var minError = document.getElementById("minutesError");
var secError = document.getElementById("secondsError");



activityButton.addEventListener("click", checkInputField);
categoryButtons.addEventListener("click", selectButton)
// meditateButton.addEventListener("click", activateMeditate);
// exerciseButton.addEventListener("click", activateExercise);
// studyButton.addEventListener("click", activateStudy);
 main
timeInput.addEventListener("keydown", function() {
  preventNumInputs(event)
});
startButton.addEventListener("click", displayAccomplishError)


function selectButton() {
  console.log(categoryButtons.id)
}
//
// function activateMeditate() {
//   meditateButton.classList.add('activate-meditate');
//   meditateIcon.setAttribute('src', 'assets/meditate-active.svg');
//   meditateIcon.setAttribute('alt', 'active meditate');
//
//   removeStudyClass()
//   removeExerciseClass()
// }
//
// function activateExercise() {
//   exerciseButton.classList.add('activate-exercise')
//   exerciseIcon.setAttribute('src', 'assets/exercise-active.svg');
//   exerciseIcon.setAttribute('alt', 'active exercise');
//
//   removeStudyClass()
//   removeMeditateClass()
// }
//
// function activateStudy() {
//   studyButton.classList.add('activate-study')
//   studyIcon.setAttribute('src', 'assets/study-active.svg');
//   studyIcon.setAttribute('alt', 'active study');
//
//   removeExerciseClass()
//   removeMeditateClass()
// }
//
// function removeExerciseClass() {
//   exerciseButton.classList.remove('activate-exercise');
//   exerciseIcon.setAttribute('src', 'assets/exercise.svg');
//   exerciseIcon.setAttribute('alt', 'passive exercise');
// }
// function removeMeditateClass() {
//   meditateButton.classList.remove('activate-meditate');
//   meditateIcon.setAttribute('src', 'assets/meditate.svg');
//   meditateIcon.setAttribute('alt', 'passive meditate')
// }
//
// function removeStudyClass() {
//   studyButton.classList.remove('activate-study')
//   studyIcon.setAttribute('src', 'assets/study.svg');
//   studyIcon.setAttribute('alt', 'passive study');
// }

function preventNumInputs(event) {
var invalidChars = [
  "-",
  "+",
  "e",
  ".",
];

  if (invalidChars.includes(event.key)) {
    event.preventDefault();
    }
}

function checkInputField() {
  for (var i = 0; i < errorMessage.length; i++) {
    if (!errorMessage[i].value || !categoryButtons.checked) {
      displayErrorMessages(event)
    } else {
      startActivity()
    }
  }
}

 feature/form-functionality

function displayAccomplishError() {
  var seconds = document.querySelector(".seconds");
console.log(seconds)
  if (!accomplishInput.value === "") {
    accomplishInput.classList.remove('hidden')
  }
}


function preventButtons() {
  for (var i = 0; i < categoryButtons.length;  i++) {
    if (!categoryButtons[i].classList.contains('activate')) {
      errorMessage.classList.remove('hidden')
    }

function displayErrorMessages(event) {
  event.preventDefault()

  if (!accomplishInput.value) {
    accomError.innerHTML = `
    <img src="assets/warning.svg" alt="error-icon">
    <p>A description is required.</p>`
  } else if (!minutesInput.value) {
    minError.innerHTML = `
    <img src="assets/warning.svg" alt="error-icon">
    <p>Minutes is required.</p>`
  } else if (!secondsInput.value) {
    secError.innerHTML = `
    <img src="assets/warning.svg" alt="error-icon">
    <p>A seconds is required.</p>`
  } else if (!categoryButtons.checked) {
        btnError.innerHTML = `
        <img src="assets/warning.svg" alt="error-icon">
        <p>A category selection is required.</p>`
 main
  }
}

function startActivity() {
  mainPage.classList.add('hidden');
  timer.classList.remove('hidden');
  boxHeader.innerText = "Current Activity";

  var activityList = [];
  var freshActivity = new Activity(categoryButtons.id, accomplishInput.value, minutesInput.value, secondsInput.value);
  var saveActivity = JSON.stringify(freshActivity);
  localStorage.setItem("activity", saveActivity);
}


//Goal: Show error message when user does not select necessary elements
//Input: Lack there of
//Output: Error message with customized elements

//Access the empty inputs
//Check to see if they have values
//If not, pop up the error messages

//Access the error messages
//


function changeBorderColor() {
  if(categoryButtons.studyId === "study") {
    timer.classList.add("activate-study")
  }
}

//A Start Activity button is provided to submit the data entered into the form. When the button is clicked, update your data model with an instance of the Activity class

//create start activity button
//connect it to the values in the form
//create instance of activity class using those values
//add to local storage



//prevent user from submitting a form without filling out the three inputs

//add the error messages inside the html with a hidden class
//if button is not clicked then error message
//if the input for accomplish is empty then error message
//duplicate for minutes and seconds
 feature/form-functionality


//then remove those error messages with some logic
//we want event listeners
//


//JS validation checks
//.check  .require
 main
