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
    b.graphics.beginFill('#bcd0e5').rc(
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

    bg.graphics.beginFill('#415326').rc(
      100, 100, wid - 200, 100,
      20, 20, 20, 20
    );
    question_text = new createjs.Text(
      cQ.q, '1.8em Oxygen', 'white'
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
     temp.graphics.beginFill('#19868f').rc(
       wid / 2, hei / 4 + (i * 130), wid / 3, hei / 8,
       10, 10, 10, 10
     );

     temp_text = new createjs.Text(
       '> ' + cQ.a[i], '2em Space Mono', 'white'
     );
     temp_text.x = wid / 2 + 50;
     temp_text.y = hei / 4 + 40 + (i * 130);

     //add listeners
     temp.addEventListener('click', validateAnswer);

     stage.addChild(temp);
     stage.addChild(temp_text);
     temp.alpha = temp_text.alpha = 0;
     createjs.Tween.get(temp).to({ x: 10, alpha: 1}, 500);
     createjs.Tween.get(temp_text).to({ alpha: 1, x: wid /2 + 40}, 500);
   }
  }

  function requestQuestion() {
    currentQuestion = questions[0][overallProgress];
    return currentQuestion;
  }

  function validateAnswer(e) {
    let x = e.nativeEvent.x;
    let y = e.nativeEvent.y;
    stage.getObjectUnderPoint(x, y);
    if(y > 240 && y < 350) {
      ans = 1;
    }
    if(y > 365 && y < 475) {
      ans = 2;
    }
    if(y > 490 && y < 600) {
      ans = 3;
    }
    if(ans - 1 == cQ.c) {
      overallProgress++;
      stage.removeAllChildren();
      answerResponse(true);
      return;
    }
    answerResponse(false);
    return;
  }

  function answerResponse(bool) {
    let correctMessage = new createjs.Shape();
    correctMessage.graphics.f('#415326').rc(
      wid / 2 - 200, hei / 2 - 200, 400, 200,
      20, 20, 20, 20
    );
    let correctMessageText = null;
    if(bool) {
      correctMessageText = new createjs.Text(
        'Good job!',
        '38px Oxygen',
        'White'
      );
    } else {
      correctMessage.graphics.f('darkred').rc(
        wid / 2 - 200, hei / 2 - 200, 400, 200,
        20, 20, 20, 20
      );
      correctMessage.addEventListener('click', init);
      correctMessageText = new createjs.Text(
        'Try again',
        '38px Oxygen',
        'White'
      );
    }
    correctMessageText.x = wid / 2 - 100;
    correctMessageText.y = hei / 2 - 160;

    stage.addChild(correctMessage);
    stage.addChild(correctMessageText);
    correctMessage.alpha = correctMessageText.alpha = 0;
    createjs.Tween.get(correctMessage).to({ alpha: 1}, 300);
    createjs.Tween.get(correctMessageText).to({ alpha: 1}, 400);

    if(bool) {
      let nextQuestion = new createjs.Shape();
      // triangle util vars >
      let tx = wid / 2;
      let ty = hei / 2 + 180;
      nextQuestion.graphics.f('#19868f').rc(
        wid / 2, hei / 2 - 40, 200, 80,
        10, 10, 10, 10
      );
      nextQuestion.addEventListener('click', init);

      let nextQuestionText = new createjs.Text('Next', '30px Oxygen', 'white');
      nextQuestionText.x = wid / 2 + 20;
      nextQuestionText.y = hei / 2 - 20;

      stage.addChild(nextQuestion);
      stage.addChild(nextQuestionText);
      nextQuestion.alpha = nextQuestionText.alpha = 0;
      createjs.Tween.get(nextQuestion).to({alpha: 1}, 200);
      createjs.Tween.get(nextQuestionText).to({alpha: 1}, 200);
    }
  }
}
