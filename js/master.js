let quizlet;
$(document).ready(() => {
  setUpGame();
});


function setUpGame() {
  quizlet = $('#quizlet');
  if(localStorage.pg > 0) {
    $('.game-title').html(localStorage.name);
    let master_q = new Question();
  } else {
    let greeting = new Greeting();
  }
}

function restart(pg) {
  localStorage.pg = pg || 0;
  quizlet.empty();
  setUpGame();
}
