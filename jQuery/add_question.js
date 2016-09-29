function addQuestion() {
  addQuery();
  addOpts();
}

function addQuery() {
  let query = $('<h2>').addClass('query-text');
  query.html(questions[0][progress].q);
  quizlet.append(query);
}

function addOpts() {
  let optField = $('<ul>').addClass('opt-field');
  let answers = questions[0][progress].a;
  for (let i in answers) {
    let opt = $('<li>').addClass('opt-bar');
    opt.html(answers[i]);
    opt.val(i);
    opt.click( () => {
      handleAnswer(opt.val());
    });
    optField.append(opt);
  }
  quizlet.append(optField);
}
