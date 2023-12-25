var questions = document.querySelector('#question-title');
var choices = document.getElementById('choices');
var questionContainer = document.getElementById('questions');

var questionsToAnswer = ["Inside which HTML element (<>) do we put the JavaScript?", "Where is the correct place to insert a JavaScript?", 'What is the correct syntax for referring to an external script called "xxx.js"?']
var choiceToChoose = [
    ["script","js","javascript","scripting"],
    ["the body section","Both the body and head Section","the head section","none of the above"],
    ["script href ='xxx.js'","script src ='xxx.js'","script name ='xxx.js'","script link ='xxx.js'"]
];

var buttons = ["a","b","c","d"];

// j represents the question j=0 is question 1

j = 0;

function showQuestion() {
    document.getElementById("questions").className= "show";
   console.log(questions);
    console.log(questionsToAnswer[j]);
   questions.textContent = questionsToAnswer[j];
   
}



// i represent the amout of choieces, there are always only four choices
   function showChoices() {
       for (i = 0; i < buttons.length; i++) {
        var button =$("<button type = 'button' class = `button`>" + choiceToChoose[j][i] + "</button>")
       button.attr("data-number", i);
    $(`#choices`).append(button);
    console.log(choiceToChoose[j][i])
}}

$("#choices").on("click", "[data-number]", function (event) {
    $(`.message`).empty();
console.log(`good to go`);
console.log($(this).attr(`data-number`))
var answer = $(this).attr(`data-number`);
 if (j === 0 && answer === `0`){
    console.log(`j=0 and data-number = 0`);
    j ++;
    $(`#choices`).empty();
  showChoices();
  showQuestion();
    var message = $(`<h5 class='message'>`).text(`congrajulations! That is the correct answer`);
    $(`#choices`).append(message); 

    } else if (j === 1 && answer === `0`) {
   console.log(`j=1`)
   console.log(answer);
   j ++;
   $(`#choices`).empty();
 showChoices();
 showQuestion();
   var message = $(`<h5 class='message'>`).text(`congrajulations! That is the correct answer`);
   $(`#choices`).append(message); 

} else if (j === 2 && answer === `1`) {
    console.log(`j=1`)
    console.log(answer);
$(`#choices`).empty();
$(`#questions`).empty();
$(`#end-screen`).attr(`class`,`show`);
clearInterval(timer);
$(`#final-score`).text(timerCount);
    
 } else  {
    var message = $(`<h5 class = 'message'>`).text(`Incorrect`)
    $(`#choices`).append(message)
    timerCount -= 10
 }
 
})
// })

$(`#submit`).on('click', function (event){
    var initials = $(`#initials`).val();
    console.log(initials);
    localStorage.setItem(`initials`,initials);
    localStorage.setItem(`score`,timerCount);
    window.location.href = "highscores.html";
})



  