// Methods should include:
// countdown (or beginTimer or startTimer - whatever naming makes sense to you)
// markComplete
// saveToStorage
// Make sure that you link this file in your index.html using a script tag, above the link to your main.js file.

class Activity {
  constructor(category, description, minutes, seconds, completed) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = completed;
    this.id = Date.now;
  }

  countDown() {
    var countDownTimer = document.querySelector("#countDown");
      setInterval(updateCountdown, 1000)
    countDownTimer.innerHTML = `${this.minutes}:${this.seconds}`
    var minutes = Math.floor((distance % (100 * 60 *60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }



  markComplete() {

  }

  saveToStorage() {

  }
}
