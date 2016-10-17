function handleNameSubmit() {
  $('#quizlet').empty();
  $('#game-title').text(name);
  progress++;
  addQuestion();
}
