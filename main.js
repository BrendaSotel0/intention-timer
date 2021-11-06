var categoryButtons = document.querySelector(".category-buttons");
var meditateButton= document.querySelector(".meditate");
var exerciseButton = document.querySelector(".exercise");
var studyButton = document.querySelector(".study");
var meditateIcon = document.getElementById("meditateIcon");
var exerciseIcon = document.getElementById("exerciseIcon");
var studyIcon = document.getElementById("studyIcon");
// var activityButtons = document.querySelector("activity-buttons");
// var buttons = document.querySelector("button");
var timeInput = document.querySelector(".time");
var activityButton = document.querySelector(".start-activity");
var accomplishInput = document.querySelector(".accomp-input");
var minutesInput = document.querySelector(".min-input");
var secondsInput = document.querySelector(".sec-input");
var mainPage = document.querySelector(".other-new-activity");
var timer = document.querySelector(".countdown-timer");
var submitBtn = document.querySelector(".submit");
var errorMessage = document.querySelector(".error-message")


activityButton.addEventListener("click", function() {
  displayBtnError(event)
});
meditateButton.addEventListener("click", activateMeditate);
exerciseButton.addEventListener("click", activateExercise);
studyButton.addEventListener("click", activateStudy);
timeInput.addEventListener("keydown", function() {
  preventNumInputs(event)
});

//To combine two functions on same element (i.e. activity button),
///use  event delegation!

function activateMeditate() {
  meditateButton.classList.add('activate-meditate');
  meditateIcon.setAttribute('src', 'assets/meditate-active.svg');
  meditateIcon.setAttribute('alt', 'active meditate');

  removeStudyClass()
  removeExerciseClass()
}

function activateExercise() {
  exerciseButton.classList.add('activate-exercise')
  exerciseIcon.setAttribute('src', 'assets/exercise-active.svg');
  exerciseIcon.setAttribute('alt', 'active exercise');

  removeStudyClass()
  removeMeditateClass()
}

function activateStudy() {
  studyButton.classList.add('activate-study')
  studyIcon.setAttribute('src', 'assets/study-active.svg');
  studyIcon.setAttribute('alt', 'active study');

  removeExerciseClass()
  removeMeditateClass()
}

function removeExerciseClass() {
  exerciseButton.classList.remove('activate-exercise');
  exerciseIcon.setAttribute('src', 'assets/exercise.svg');
  exerciseIcon.setAttribute('alt', 'passive exercise');
}
function removeMeditateClass() {
  meditateButton.classList.remove('activate-meditate');
  meditateIcon.setAttribute('src', 'assets/meditate.svg');
  meditateIcon.setAttribute('alt', 'passive meditate')
}

function removeStudyClass() {
  studyButton.classList.remove('activate-study')
  studyIcon.setAttribute('src', 'assets/study.svg');
  studyIcon.setAttribute('alt', 'passive study');
}

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


//Goal: Show error message when user does not select necessary elements
//Input: Lack there of
//Output: Error message with customized elements

//Access the empty inputs
//Check to see if they have values
//If not, pop up the error messages

//Access the error messages
//

function accomErrorMess(event) {
var errorMessage = document.querySelector(".description-error-message")
  event.preventDefault()
  if (!accomplishInput.value) {
    errorMessage.classList.remove("hidden")
  }
}

function minErrorMess(event) {
var errorMessage = document.querySelector(".minutes-error-message")
  event.preventDefault()
  if (!minutesInput.value) {
    errorMessage.classList.remove("hidden")
  }
}

function secErrorMess(event) {
var errorMessage = document.querySelector(".seconds-error-message")
  event.preventDefault()
  if (!secondsInput.value) {
    errorMessage.classList.remove("hidden")
  }
}

function displayBtnError(event) {
  event.preventDefault()
    if (!categoryButtons.id) {
      errorMessage.innerHTML += `
      <img src="assets/warning.svg" alt="error-icon">
      <p>A category selection is required.</p>`
  }
}


function startActivity() {
  mainPage.classList.add('hidden');
  timer.classList.remove('hidden');

  var activityList = [];
  var freshActivity = new Activity(categoryButtons.id, accomplishInput.value, minutesInput.value, secondsInput.value);
  var saveActivity = JSON.stringify(freshActivity);
  localStorage.setItem("activity", saveActivity);
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

//then remove those error messages with some logic
//we want event listeners
//


//JS validation checks
//.check  .require
