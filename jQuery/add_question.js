let response;

function addQuestion() {
  addQuery();
  addOpts();
  addProgressBar(); // in add_progress_bar.js
}

function addQuery() {
  let query = $('<h2>').addClass('query-text');
  query.html(questions[0][progress].q);
  quizlet.append(query);
}

function addOpts() {
  let optField = $('<ul>').addClass('opt-field');
  let answers = questions[0][progress].a;
  let correct_answer = questions[0][progress].c;
  for (let i in answers) {
    let opt = $('<li>').addClass('opt-bar');
    opt.html(answers[i]);
    opt.val(i);
    opt.click((e) => {
      response = e.currentTarget.value;
      animateSelection(opt, correct_answer);
    });
    optField.append(opt);
  }
  quizlet.append(optField);
}

function animateSelection(opt, c) {
  $('.opt-bar').animate({
    opacity: 1.0,
    fontSize: '1.6em'
  }, 50);
  opt.animate({
    opacity: 0.5,
    fontSize: '2em'
  }, 200, checkAnswer.bind(this, c));
}

function checkAnswer(c) {
  if(response == c) {
    progress += 1;
    quizlet.empty();
    addQuestion();
  } else {
    addInformationPage();
  }
}
