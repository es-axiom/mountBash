function addProgressBar() {
  let progressBar = $('<section>').addClass('progress-bar');
  let total = Object.keys(questions[0]).length;
  let unit = window.innerWidth / total - 1;

  let completedPg = $('<span>').addClass('completed-pg');
  completedPg.width(unit * progress);
  progressBar.append(completedPg);

  let incompletePg = $('<span>').addClass('incomplete-pg');
  progressBar.append(incompletePg);

  let progressIcon = $('<div>').addClass('progress-icon');
  progressBar.append(progressIcon);

  quizlet.append(progressBar);
}

class Progressbar {
  constructor() {

  }
}
