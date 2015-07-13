function Game(gameName, question, answers, messages) {
  this.gameName = gameName;
  this.question = question;
  this.answers = answers;
  this.response = "It doesn't Matter";
  this.messages = messages;
  this.run = function() {
    var elMessage = document.getElementById("response")
  var guess = prompt(this.question);
    for (var i = 0; i <= this.answers.length; i++) {
      if (guess.toUpperCase() === this.answers[i]) {
        elMessage.textContent = messages[i];
        return;
      }
      }
      elMessage.textContent = this.response;
      document.getElementById("what they wrote").innerHTML = guess;
    }
  }
var movieGuess = new Game("Movie Guesses", "What is your favorite movie.", ["MY OWN PRIVATE IDAHO", "BLADE RUNNER", "BLOOD IN BLOOD OUT"], ["Rad", "Thats a pretty cliche answer", "One of those best worst movie situations"]);

//function myFunction() {
//    var x = document.getElementById("myInput").value;
//    document.getElementById("demo").innerHTML = "You wrote: " + x;
//}
movieGuess.run();
