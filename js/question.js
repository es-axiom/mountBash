class Question {
  constructor() {
    location.reload(); //reloads to load name
    this.quizlet = quizlet;
    this.response = null;
    this.progress = 1;
    if(localStorage.pg > 0) {
      this.progress = parseInt(localStorage.pg);
    }
    this.terminalAdded = false;
    this.setAnswers();
    this.correct_answer = questions[0][this.progress].c;
    this.addQuestion();
  }

  setAnswers() {
    this.answers = questions[0][this.progress].a;
  }
  addQuestion() {
    this.addQuery();
    this.setAnswers();
    this.addOpts();
    let progressBar = new Progressbar(this.progress);
  }

  addQuery() {
    let query = $('<h2>').addClass('query-text');
    query.html(questions[0][this.progress].q);
    this.quizlet.append(query);
  }

  addOpt() {
    let opt = this.newOpt(this.response);
    opt.css('background-color', '#990000');
    this.quizlet.append(opt);
  }

  addOpts() {
    let optField = $('<ul>').addClass('opt-container');
    for (let i in this.answers) {
      optField.append(this.newOpt(i));
    }
    this.quizlet.append(optField);
  }

  newOpt(i) {
    let optField = $('<ul>').addClass('opt-field');
    let opt = $('<li>').addClass('opt-bar');
    opt.html(this.answers[i]);
    opt.val(i);
    opt.click((e) => {
      this.response = e.currentTarget.value;
      this.animateSelection(opt, this.correct_answer);
    });
    optField.append(opt);
    return optField;
  }

  animateSelection(opt, c) {
    $('.opt-bar').animate({
      opacity: 1.0,
      fontSize: '1.6em'
    }, 50);
    opt.animate({
      opacity: 0.5,
      fontSize: '2em',
    }, 200, this.checkAnswer.bind(this, opt, c));
  }

  checkAnswer(opt, c) {
    if(this.response == c) {
      this.respondToTrue();
    } else {
      opt.animate({
        opacity: 0.1
      }, 200);
      if(!this.terminalAdded) {
        this.respondToFalse(opt);
      }
    }
  }

  respondToTrue() {
    this.progress += 1;
    localStorage.setItem('pg', this.progress);
    this.quizlet.empty();
    this.addQuestion();
    this.terminalAdded = false;
  }

  respondToFalse(opt) {
    this.quizlet.empty();
    this.addQuery();
    this.addOpt();
    let terminal = new InformationPanel(this.progress);
    this.terminalAdded = true;
  }
}
