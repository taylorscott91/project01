// Remove any console logs used for testing before you push to production

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
// Great use of data structures to contain your question data. Also nice, neat formatting.
// Only suggestion would be to break the long string containing all of the parts of the question
// into mutliple properties. This would then allow you use these 'options' to make dynamic
// DOM elements like buttons for users to submit answers (better UI). Example:
//
// {
//   question: "What is the real name of the Master Chief from the Halo series?",
//   answer: "c",
//   options: [
//     "A. Steve",
//     "B. Roger",
//     "C. John",
//     "D. Bartholomew"
//   ],
//   answer: "C. John"
// }

$(document).ready (function () {
// since 'var input' links to DOM element, it is best practice in include it INSIDE
// of your document.ready function to ensure the element it references has been
// loaded into the DOM.

  var counter = 0;
  var score = 0;
  var input = $(".answer");
  // For DOM elements that are going to be reused over and over in your code, like
  // $('.answer'), assign the ELEMENT to a variable and then just reference the
  // variable in the rest of your code. This makes it easier if you need to change the
  // class name in your HTML and CSS because then you only need to update it in one place
  // in your javascript.

  // Good semantic naming conventions for your functions and variables ++
  function showQuestion () {
    $(".question").html(questions[counter].question);
    input.val("");
    // $(".comments").html("");
  }

  function scoreThis () {
    if (input.val() == questions[counter].answer) {
      $(".text").html("Correct! Click Question to continue.");
      counter++;
      score += 1;
      $(".score").html("Score: " + score);
      input.val("");
    }
    else {
      $(".score").html("Score: " + score);
      $(".text").html("Try again!");
    //   counter++
    //   if (penalty == 2) {
    //    score -= 1;
    //    penalty = 0
    //  }
    // Try to keep experimental (non-final) code off of the master branch until it is
    // ready for production)
  }
  if (score >= 10) {
    $(".perfect").html("Wow! You know a lot about games! Probably too much. Go read a book.");
    }
  // else if (score < 10) {
  //   $(".perfect").html("It's probably okay that you don't know all the answers. You're still a champ!")
  //   }
  // Same here
  }

  $(".submit").on("click", scoreThis);
  $(".questionbutton").on("click", showQuestion);
  // A common pattern for organizing your code is to have all variables declared at
  // the top of your code block (in this case, your document.ready), all functions
  // grouped together beneath them, and then all event listeners at the bottom of
  // the code block together. Doesn't matter in terms of functionality here but does
  // help readibility.
})

// Overall great code here. It is well formatted, neatly written, semantic, and without bugs. Good job.
