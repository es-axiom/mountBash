let progress = 0;

function handleNameSubmit() {
  $('#quizlet').empty();
  $('#game-title').html = name;
  progress += 1;

  addQuestion();
}
