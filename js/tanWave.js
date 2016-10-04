var xspacing = 8;		// Distance between horizintal locations
var w;					// Width of plot
var theta = 0.0;		// Starting angle theta
var amplitude = 25.0;	// Height of wave
var period = 100.0;		// Pixels before wave repeats
var dx;					// Increment x by dx
var yvalues;			// Array that stores height values

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  w = width + 8;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(255);
  calcWave();
  renderWave();
}

function calcWave() {
	theta += 0.02;
	
	var x = theta;
	for(var i = 0; i < yvalues.length; i++) {
		yvalues[i] = tan(x) * amplitude;
		x += dx;
	}
}

function renderWave() {
	noStroke();
	fill(51, 173, 255);
	for(var x = 0; x < yvalues.length; x++) {
		ellipse(x * xspacing, height/2 + yvalues[x], 8, 8);
	}
}