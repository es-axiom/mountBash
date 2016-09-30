function handleNameSubmit() {
  $('#quizlet').empty();
  $('#game-title').text(name);
  progress += 1;

  addQuestion();
}
