function handleNameSubmit(name) {
  $('#quizlet').empty();
  $('#game-title').text(name);
  DISP.pg = 1;
  DISP.nm = name;
  let master_q = new Question();
}
