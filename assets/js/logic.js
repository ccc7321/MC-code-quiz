var timerEl = document.querySelector('.timer');
var startButton = document.getElementById('start');
var timerCount;
var timer;
var startScreen = document.getElementById('start-screen');
var finalScore = document.getElementById('final-score');

  // The startGame function is called when the start button is clicked
  function startGame() {
    // To empty all content under startScreen.
startScreen.innerHTML = "";
    // isWin = false;
    timerCount = 70;
    // Prevents start button from being clicked when round is in progress
    // startButton.disabled = true;
    // renderBlanks()
    startTimer()
    console.log('this')
    showQuestion()
    showChoices()
  }
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
    //     if (isWin && timerCount > 0) {
    //       // Clears interval and stops timer
    //       clearInterval(timer);
    //       winGame();
    //     }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }



  //attach event listener to start button to call start game function
  startButton.addEventListener("click", startGame);


