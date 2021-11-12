var categoryButtons = document.querySelector(".category-buttons");
var meditateButton =document.getElementById("meditate")
var exerciseButton = document.getElementById("exercise")
var studyButton = document.getElementById("study");
var meditateIcon = document.getElementById("meditateIcon");
var exerciseIcon = document.getElementById("exerciseIcon");
var studyIcon = document.getElementById("studyIcon");
var activityButtons = document.querySelector("activity-buttons");
var timeInput = document.querySelector(".time");
var errorMessage = document.querySelector("#errorMessage");
var accomplishInput = document.getElementById("accomplishInput");
var minInput = document.getElementById("minInput");
var secInput =  document.getElementById("secInput");
var startButton = document.querySelector(".start-activity");

meditateButton.addEventListener("click", activateMeditate);
exerciseButton.addEventListener("click", activateExercise);
studyButton.addEventListener("click", activateStudy);
timeInput.addEventListener("keydown", function() {
  preventNumInputs(event)
});
startButton.addEventListener("click", checkInputField)


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

function checkInputField() {
    if (!accomplishInput.value || !minInput.value || !secInput.value) {
      displayErrorMessages(event)
    } else {
      startActivity()
  }
}


function preventButtons() {
  for (var i = 0; i < categoryButtons.length;  i++) {
    if (!categoryButtons[i].classList.contains('activate')) {
      errorMessage.classList.remove('hidden')
    }
  }
}

function displayErrorMessages(event) {
  event.preventDefault()

  if (!accomplishInput.value) {
    accomError.innerHTML = `
    <img src="assets/warning.svg" alt="error-icon">
    <p>A description is required.</p>`
  } else if (!minInput.value) {
    minError.innerHTML = `
    <img src="assets/warning.svg" alt="error-icon">
    <p>Minutes is required.</p>`
  } else if (!secInput.value) {
    secError.innerHTML = `
    <img src="assets/warning.svg" alt="error-icon">
    <p>A seconds is required.</p>`
  } else if (!categoryButtons.checked) {
        btnError.innerHTML = `
        <img src="assets/warning.svg" alt="error-icon">
        <p>A category selection is required.</p>`
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
