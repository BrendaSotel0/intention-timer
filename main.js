var categoryButtons = document.querySelector(".category-buttons");
var meditateButton= document.querySelector(".meditate");
var exerciseButton = document.querySelector(".exercise");
var studyButton = document.querySelector(".study");
var meditateIcon = document.getElementById("meditateIcon");
var exerciseIcon = document.getElementById("exerciseIcon");
var studyIcon = document.getElementById("studyIcon");
var activityButtons = document.querySelector("activity-buttons");
// var buttons = document.querySelector("button");
var timeInput = document.querySelector(".time");



meditateButton.addEventListener("click", activateMeditate);
exerciseButton.addEventListener("click", activateExercise);
studyButton.addEventListener("click", activateStudy);
timeInput.addEventListener("keydown", function() {
  preventNumInputs(event)
});


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
};

function preventButtons() {
  for (var i = 0; i < categoryButtons.length;  i++) {
    if (!categoryButtons[i].classList.contains('activate')) {
      error message.classList.remove('hidden')
    })
  }
}

//prevent user from submitting a form without filling out the three inputs

//add the error messages inside the html with a hidden class
//if button is not clicked then error message
//if the input for accomplish is empty then error message
//duplicate for minutes and seconds

//then remove those error messages with some logic
//we want event listeners
//
