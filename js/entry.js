let header;
let DISP = window;

function init() {
  mountBash.start();
}

let mountBash = {
  progress: 0,
  canvas: document.getElementById('canvas'),
  start: () => {
    this.key = false;
    this.currentFrame = 0;
    mountBash.greetingScreen();
    window.addEventListener('keydown', (e) => {
      this.key = e.keyCode;
    });
    window.addEventListener('keyup', (e) => {
      this.key = false;
    });
  },
  greetingScreen: () => {
  },
  beginGame: (starting_point) => {
    mountBash.progress = starting_point;
    this.addQuestion(mountBash.progress);
    this.addProgressBar(mountBash.progress);
  },
  nextLevel: () => {
    mountBash.progress += 1;
    mountBash.beginGame(mountBash.progress);
  }
};
