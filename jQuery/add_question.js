class Question {
  constructor() {
    this.quizlet = quizlet;
    this.response = null;
    this.progress = DISP.pg;
    this.addQuestion();
  }

  addQuestion() {
    this.addQuery();
    this.addOpts();
    addProgressBar();
  }

  addQuery() {
    let query = $('<h2>').addClass('query-text');
    debugger
    query.html(questions[0][this.progress].q);
    this.quizlet.append(query);
  }
  addOpts() {
    let optField = $('<ul>').addClass('opt-field');
    let answers = questions[0][this.progress].a;
    let correct_answer = questions[0][this.progress].c;
    for (let i in answers) {
      let opt = $('<li>').addClass('opt-bar');
      opt.html(answers[i]);
      opt.val(i);
      opt.click((e) => {
        this.response = e.currentTarget.value;
        this.animateSelection(opt, correct_answer);
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
    }, 200, this.checkAnswer.bind(this, opt, c));
  }

  checkAnswer(opt, c) {
    if(this.response == c) {
      this.progress += 1;
      this.quizlet.empty();
      DISP.pg = this.progress;
      this.addQuestion();
    } else {
      opt.animate({
        opacity: 0.1
      }, 200);

      this.addInformationPage();
    }
  }
}
