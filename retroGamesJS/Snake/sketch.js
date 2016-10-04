var snake;
var scl = 20;
var food;

var scoreCanvas;
var gameCanvas;
var slider;

function setup() {
  scoreCanvas = createCanvas(50, 500);
  gameCanvas  = createCanvas(500,500);

  slider = createSlider(5, 30, 10);
  frameRate(slider.value());

  snake = new Snake();
  foodLocation();
}

function foodLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  scoreCanvas.background(200);
  gameCanvas.background(75);

  if (snake.eat(food)) {
  	foodLocation();
  }
  snake.reset();
  snake.update();
  snake.show();  
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		snake.dir(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		snake.dir(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		snake.dir(-1, 0);
	}
}