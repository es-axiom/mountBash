class InformationPanel {
  constructor(pg) {
    this.example = $('<aside>').addClass('example-terminal');
    this.example_text = $('<p>').addClass('example-text');
    this.info_showing = false;
    this.progress = pg;
    if (!this.info_showing) {
      this.addInformation();
      this.info_showing = true;
    }
  }

  addInformation() {
    this.example_text.html(questions[0][this.progress].example.t);
    this.example_link = questions[0][this.progress].example.link;
    this.example.append(this.example_text);
    quizlet.append(this.example);
  }
}
