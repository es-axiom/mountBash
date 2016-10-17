let response;

class Question {
  constructor() {
    this.quizlet = quizlet;
    this.response = nil;
  }

  addQuestion() {
    this.addQuery();
    this.addOpts();
    this.addProgressBar();
  }

  addQuery() {
    let query = $('<h2>').addClass('query-text');
    query.html(questions[0][progress].q);
    this.quizlet.append(query);
  }
  addOpts() {
    let optField = $('<ul>').addClass('opt-field');
    let answers = questions[0][progress].a;
    let correct_answer = questions[0][progress].c;
    for (let i in answers) {
      let opt = $('<li>').addClass('opt-bar');
      opt.html(answers[i]);
      opt.val(i);
      opt.click((e) => {
        this.response = e.currentTarget.value;
        animateSelection(opt, correct_answer);
      });
      optField.append(opt);
    }
    this.quizlet.append(optField);
  }

  animateSelection(opt, c) {
    $('.opt-bar').animate({
      opacity: 1.0,
      fontSize: '1.6em'
    }, 50);
    opt.animate({
      opacity: 0.5,
      fontSize: '2em'
    }, 200, checkAnswer.bind(this, opt, c));
  }
  checkAnswer(opt, c) {
    if(this.response == c) {
      progress += 1;
      this.quizlet.empty();
      addQuestion();
    } else {
      opt.animate({
        opacity: 0.1
      }, 200);

      addInformationPage();
    }
  }
}
