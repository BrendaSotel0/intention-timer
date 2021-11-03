var activityButtons = document.querySelector(".category-buttons");
var meditateButton= document.querySelector(".meditate");
var exerciseButton = document.querySelector(".exercise");
var studyButton = document.querySelector(".study");
var meditateIcon = document.getElementById("meditateIcon");
var exerciseIcon = document.getElementById("exerciseIcon");
var studyIcon = document.getElementById("studyIcon");


// meditateButton.addEventListener("click", activateMeditate);
// exerciseButton.addEventListener("click", activateExercise);
// studyButton.addEventListener("click", activateStudy);

activityButtons.addEventListener("click", function() {
  activateActivity(event)
  console.log("YA")
})

function activateActivity(event) {
  if (event.target.classList.contains("meditate")) {
    activateMeditate()
  } else if (event.target.classList.contains("study")) {
    activateStudy()
  } else if (event.target.classList.contains("exercise")) {
    activateExercise()
  }
}

function activateExercise()  {
  exerciseButton.style.border = '3px solid';
  exerciseButton.style.color = '#FD8078';
  exerciseIcon.setAttribute('src', 'assets/exercise-active.svg');
  exerciseIcon.setAttribute('alt', 'active exercise');

}
function activateMeditate() {
  meditateButton.style.border = '3px solid';
  meditateButton.style.color = '#C278FD';
  meditateIcon.setAttribute('src', 'assets/meditate-active.svg');
  meditateIcon.setAttribute('alt', 'active meditate');
}

function activateStudy() {
  studyButton.style.border = '3px solid';
  studyButton.style.color = '#B3FD78';
  studyIcon.setAttribute('src', 'assets/study-active.svg');
  studyIcon.setAttribute('alt', 'active study');
}


//When user clicks button, border  colorwill change
//1) access the buttons
//2) create a button  border class for each  buttons
//3) replace with button click
