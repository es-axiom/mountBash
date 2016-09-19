let overallProgress = 1;

function init() {
  let canvas = document.getElementById('mtbash-game');
  let stage = new createjs.Stage(canvas);

  let centerX = canvas.width / 2;
  let centerY = canvas.width / 2;
  let wid = canvas.width;
  let hei = canvas.height;
  window.addEventListener('resize', resize, false);
  resize();

  let cQ;
  let backdrop = buildBackdrop();
  let welcomeStripe = buildWelcomeStripe();
  let startButton = new createjs.Text();

  stage.addChild(backdrop);
  stage.addChild(welcomeStripe);
  buildBlackboard();

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener('tick', tick);

  function tick() {
    stage.update();
  }
  function resize() {
    stage.canvas.width = window.innerWidth;
    stage.canvas.height = window.innerHeight;
    centerX = canvas.width / 2;
    centerY = canvas.width / 2;
    wid = canvas.width;
    hei = canvas.height;
  }

  function buildBackdrop() {
    let b = new createjs.Shape();
    b.graphics.beginFill('darkblue').rc(
      50, 50, wid - 100, hei - 100,
      20, 20, 20, 20
    );
    return b;
  }

  function buildWelcomeStripe() {
    let w = new createjs.Shape();
    w.graphics.beginFill('#ccc').rc(
      70, 70, wid - 140, hei - 140,
      20, 20, 20, 20
    );
    return w;
  }

  function buildBlackboard() {
    cQ = requestQuestion();
    let bg = new createjs.Shape();
    let temp, text_text, question_text;

    bg.graphics.beginStroke('gray').beginFill('gray').rc(
      100, 100, wid - 200, 100,
      20, 20, 20, 20
    );
    question_text = new createjs.Text(
      cQ.q, '1.8em Sans Serif', 'white'
    );
    question_text.x = 120;
    question_text.y = 130;

    stage.addChild(bg);
    bg.alpha = 0;
    createjs.Tween.get(bg).to({alpha:1}, 300);
    stage.addChild(question_text);
    question_text.alpha = 0;
    createjs.Tween.get(question_text).to({alpha:1}, 300);

    addPossibleAnswers();
    // addProgressTrack();
    //TODO: add progress tracker to left of possible answers
  }

  function addPossibleAnswers() {
    for(var i = 0; i < cQ.a.length; i++) {
     temp = new createjs.Shape();
     temp.graphics.beginFill('darkred').rc(
       wid / 2, hei / 3 + (i * 130), wid / 3, hei / 8,
       10, 10, 10, 10
     );

     temp_text = new createjs.Text(
       i + 1 + '   >' + cQ.a[i], '2em Nova Square', 'white'
     );
     temp_text.x = wid / 2 + 50;
     temp_text.y = hei / 3 + 40 + (i * 130);

     //add listeners
     temp.addEventListener('click', validateAnswer);

     stage.addChild(temp);
     stage.addChild(temp_text);
     createjs.Tween.get(temp).to({ x: 10}, 500);
     createjs.Tween.get(temp_text).to({ x: wid /2 + 40}, 500);
   }
  }

  function requestQuestion() {
    currentQuestion = questions[0][overallProgress];
    return currentQuestion;
  }

  function validateAnswer(e) {
    console.log(e.nativeEvent.y);
    let y = e.nativeEvent.y;
    if(y > 315 && y < 425) {
      ans = 1;
    }
    if(y > 440 && y < 558) {
      ans = 2;
    }
    if(y > 570 && y < 686) {
      ans = 3;
    }
    if(ans - 1 == cQ.c) {
      overallProgress++;
      stage.removeAllChildren();
      init();
      return true;
    }
    console.log('false');
    return false;
  }
}
