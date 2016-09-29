function handleAnswer(a) {
  if(a == questions[0][progress].c) {
    progress += 1;
    quizlet.empty();
    addQuestion();
  } else {
    if($('aside').length == 0) {
      addInformationPage();
    }
  }
}
