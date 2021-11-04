var categoryButtons = document.querySelector(".category-buttons");
var meditateButton= document.querySelector(".meditate");
var exerciseButton = document.querySelector(".exercise");
var studyButton = document.querySelector(".study");
var meditateIcon = document.getElementById("meditateIcon");
var exerciseIcon = document.getElementById("exerciseIcon");
var studyIcon = document.getElementById("studyIcon");
var activityButtons = document.querySelector("activity-buttons");
var buttons = document.querySelector("button")


// meditateButton.addEventListener("click", activateMeditate);
// exerciseButton.addEventListener("click", activateExercise);
// studyButton.addEventListener("click", activateStudy);
categoryButtons.addEventListener("click", function() {
  activateActivities(event)
})
//
//
function activateActivities(event) {
  if (event.target.classList.contains("meditate")) {
    activateMeditate()
  } else if (event.target.classList.contains("study")) {
    activateStudy()
  } else if (event.target.classList.contains("exercise")) {
    activateExercise()
  }
}

function activateExercise()  {
  displayDefaultButtons()
  exerciseButton.style.border = '3px solid';
  exerciseButton.style.color = '#FD8078';
  exerciseIcon.setAttribute('src', 'assets/exercise-active.svg');
  exerciseIcon.setAttribute('alt', 'active exercise');
}

function activateMeditate() {
  displayDefaultButtons()
  meditateButton.style.border = '3px solid';
  meditateButton.style.color = '#C278FD';
  meditateIcon.setAttribute('src', 'assets/meditate-active.svg');
  meditateIcon.setAttribute('alt', 'active meditate');
}

function activateStudy() {
  displayDefaultButtons()
  studyButton.style.border = '3px solid';
  studyButton.style.color = '#B3FD78';
  studyIcon.setAttribute('src', 'assets/study-active.svg');
  studyIcon.setAttribute('alt', 'active study');
}
function displayDefaultButtons() {
  buttons.classList.add("activity-buttons")

}
