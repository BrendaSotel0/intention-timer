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
var activityButton = document.querySelector(".start-activity");
var accomplishInput = document.querySelector(".accomp-input");
var minutesInput = document.querySelector(".min-input");
var secondsInput = document.querySelector(".sec-input");


meditateButton.addEventListener("click", activateMeditate);
exerciseButton.addEventListener("click", activateExercise);
studyButton.addEventListener("click", activateStudy);
timeInput.addEventListener("keydown", function() {
  preventNumInputs(event)
});
activityButton.addEventListener("click", startActivity);

function activateMeditate() {
  meditateButton.classList.add('activate-meditate');
  console.log(meditateButton.classList);
  meditateIcon.setAttribute('src', 'assets/meditate-active.svg');
  console.log(meditateIcon);
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
      errorMessage.classList.remove('hidden')
    }
  }
}


function startActivity() {
  //connect it to the values in the form
  //connect those values to the activity class
  //save new instance of activity class to local storage
  //{"category":{}}

  var freshActivity = new Activity(categoryButtons.id, accomplishInput.value, minutesInput.value, secondsInput.value);


  var saveActivity = JSON.stringify(freshActivity);
  localStorage.setItem("activity", saveActivity);
  console.log(freshActivity);

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
