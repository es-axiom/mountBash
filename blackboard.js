function init() {

  let stage = new createjs.Stage('content');
  var circle = new createjs.Shape();
  circle.graphics.beginFill("red").drawCircle(0, 0, 50);
  circle.x = 100;
  circle.y = 100;
  stage.addChild(circle);

  stage.update();
}
