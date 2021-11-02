// Build out the Activity class
// Properties should include:
// category
// description
// minutes
// seconds
// completed
// id
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
  countdown() {
    
  }

  markComplete() {

  }

  saveToStorage() {

  }
}
