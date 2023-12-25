var winnerInitials = localStorage.getItem(`initials`);
var winnerScore = localStorage.getItem(`score`);
var highScorer = $(`<li>`).text(winnerInitials +  ` - ` + winnerScore);
$(`#highscores`).append(highScorer);