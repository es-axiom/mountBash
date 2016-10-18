class Progressbar {
  constructor(pg) {
    this.progress = pg;
    this.progressBar = $('<section>').addClass('progress-bar');
    let total = Object.keys(questions[0]).length;
    this.unit = window.innerWidth / total - 1;
    this.buildAndDisplay();
  }

  buildAndDisplay() {
    this.addCompletedProgress();
    this.addIncomplete();
    this.addIcon();
    quizlet.append(this.progressBar);
  }

  addCompletedProgress() {
    this.progressBar.append(
      $('<span>').addClass('completed-pg').width(this.unit * this.progress - this.unit)
    );
  }

  addIncomplete() {
    this.progressBar.append(
      $('<span>').addClass('incomplete-pg')
    );
  }

  addIcon() {
    this.progressBar.append(
      $('<div>').addClass('progress-icon')
    );
  }

}
