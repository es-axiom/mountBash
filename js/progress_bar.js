class ProgressBar {
  constructor(progress) {
    this.progress = progress / Object.keys(questions[0]).length
    if(this.progress === 0) {
      // TODO: Show quirky message about not having made progress
    } else {
      console.log("You are at this progress");
      console.log(this.progress);
    }
  }
}

let progress_bar;

function addProgressBar(progress) {
  progress_bar = new ProgressBar(progress);
}
