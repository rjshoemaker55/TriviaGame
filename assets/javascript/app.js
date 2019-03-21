var timeLeft = 30;
var intervalId;
var triviaQuestions = [
  $("question1"),
  $("question2"),
  $("question3"),
  $("question4"),
  $("question5"),
  $("question6"),
  $("question7"),
  $("question8"),
  $("question9"),
  $("question10")
]

$("#post-game-div").hide();
$("#main-game-div").show();

function timer() {
  $("#time-counter").text(timeLeft)
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  timeLeft--;

  $("#time-counter").text(timeLeft)

  if (timeLeft === 0) {
    timesUp();
  }
}

function timesUp() {
  $("#post-game-div").show();
$("#main-game-div").hide();

for (i = 0; i <= 9; i++) {

const selector = $("input[name='question'"[i]"]:checked").val();
console.log(selector)

}

}

timer();
