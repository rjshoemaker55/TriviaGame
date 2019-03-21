var timeLeft = 20;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
$("#post-game-div").hide();
$("#main-game-div").show();

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

function gameStart() {
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

  ($("input:checked")).each(function() {
    if ($(this).attr('value') == 'true') {
      correctAnswers++
    } else {
      incorrectAnswers++
    }
  })

  $("#correct-answers").text(correctAnswers)
  $("#incorrect-answers").text(incorrectAnswers)

  $("#restart-button").on("click", function () {
    console.clear();
    correctAnswers = 0;
    incorrectAnswers = 0;
    timeLeft = 20;
    $("input").prop("checked", false)
    $("#post-game-div").hide();
    $("#main-game-div").show();
    clearInterval(intervalId)
    gameStart();
    return
  })
}

gameStart();
