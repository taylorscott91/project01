console.log("Hello, welcome to trivia.")

var questions = [
  {
    question: "Complete this Pac-Man related series: Blinky, Pinky, Inky, and _______. <br><br> A. Clyde <br> B. Winky <br> C. Dinky <br> D. Wakka Wakka Wakka",
    answer: "a"
  }, {
    question: "What game was the debut of everyone's favorite Italian plumber, Mario?<br><br>A. Mario Bros<br>B. Donkey Kong<br>C. Super Mario Bros<br>D. Tetris",
    answer: "b"
  }, {
    question: "What game, due to a massive glitch, has influenced real-world practices on how to control disease outbreaks?<br><br>A. Plants vs Zombies<br>B. Resident Evil<br>C. World of Warcraft<br>D. Madden NFL 2006",
    answer: "c"
  }, {
    question: "Which of these is not a Pokemon?<br><br>A. Klingklang<br>B. Alakazam<br>C. Kabuterimon<br>D. Lickillicky ",
    answer: "c"
  }, {
    question: "Which is not a piece of the Triforce?<br><br>A. Power<br>B. Strength<br>C. Courage<br>D. Wisdom",
    answer: "b"
  }, {
    question: "In the classic football game Tecmo Bowl from 1987, what player was notorious for being much better than every other character in the game?<br><br>A. Bo Jackson<br>B. John Elway<br>C. Jerry Rice<br>D. Tom Brady",
    answer: "a"
  }, {
    question: "In the Resident Evil series, what virus was responsible for zombifying the Earth's population?<br><br>A. X-virus<br>B. T-virus<br>C. Z-virus<br>D. swine flu",
    answer: "b"
  }, {
    question: "Which character is not a character in the Street Fighter series?<br><br>A. El Fuerte<br>B. Skullomania<br>C. Q<br>D. Kung Lao",
    answer: "d"
  }, {
    question: "What is the current world record for fastest completion time of the game Super Mario World?<br><br>A. 78h 34m 12s<br>B. 0h 58m 27s<br>C. 2h 45m 56s<br>D. 0h 1m 15s",
    answer: "d"
  }, {
    question: "What is the real name of the Master Chief from the Halo series?<br><br>A. Steve<br>B. Roger<br>C. John<br>D. Bartholomew",
    answer: "c"
  }
]

var counter = 0;
var score = 0;
var input = $(".answer").val();

$(document).ready (function () {

  $(".questionbutton").on("click", showQuestion);
    function showQuestion () {
      $(".question").html(questions[counter].question);
      $(".answer").val("");
    }

  $(".submit").on("click", scoreThis);
  function scoreThis () {
    if ($(".answer").val() == questions[counter].answer) {
      $(".text").html("Correct! Click Question to continue.");
      counter++;
      score += 1;
      $(".score").html("Score: " + score);
      $(".answer").val("");
          }
    else {
      $(".score").html("Score: " + score);
      $(".text").html("Try again!");
    //   counter++
    //   if (penalty == 2) {
    //    score -= 1;
    //    penalty = 0
    //  }
  }
  if (score >= 10) {
    $(".message").html("Wow! You know a lot about games! Probably too much. Go read a book.");
    }
  // else if (score < 10) {
  //   $(".perfect").html("It's probably okay that you don't know all the answers. You're still a champ!")
  //   }
  }
})
