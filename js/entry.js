let header;
let DISP = window;
let progress = 0;


function init() {
  mountBash.start();
}

function restart() {
  progress = 0;
  quizlet.empty();
  console.log('here');
}

let mountBash = {
  start: () => {
    mountBash.progress = 0;
    this.key = false;
    this.currentFrame = 0;
    window.addEventListener('keydown', (e) => {
      this.key = e.keyCode;
    });
    window.addEventListener('keyup', (e) => {
      this.key = false;
    });
  }
};
