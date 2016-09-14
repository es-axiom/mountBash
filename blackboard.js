function init() {

  let stage = new createjs.Stage('content');
  makeOptionBar(stage);
  var rect = new createjs.Shape();
  rect.graphics.beginFill("red").drawRect(0, 0, 800, 600);
  stage.addChild(rect);
  stage.addChild(makeOptionBar())

  createjs.Ticker.addEventListener('tick', updateOnTick);
  function updateOnTick(event) {
    stage.update();
  }
}


function makeOptionBar() {
  var optBar = new createjs.Shape();
  optBar.graphics.beginFill('blue').rc(100, 450, 680, 100, 20, 20, 20, 20);
  optBar.addEventListener('click', handleClick);
  function handleClick(event) {
    optBar.x += 20;
  }
  return optBar;
}
