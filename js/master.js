let quizlet;
//TODO: Hack a way around getting name to display when question renders and not just on reload.

$(document).ready(() => {
  setUpGame();
});

//helper function to allow easy restarts
function setUpGame() {
  quizlet = $('#quizlet');
  if(localStorage.pg > 0) {
    $('.game-title').html(localStorage.name);
    let master_q = new Question();
  } else {
    let greeting = new Greeting();
  }
}

function restart() {
  localStorage.pg = 0;
  quizlet.empty();
  setUpGame();
}
