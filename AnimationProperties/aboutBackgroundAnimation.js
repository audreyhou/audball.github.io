console.clear();

/* Setup */
var iteration = 0;

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("backgroundCanvas");
    
    colorMode(RGB, 255);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function drawLines() {
    var originalR = 29;
    var originalG = 27;
    var originalB = 57;
    for(let i = 0; i < 200; i++) {
        var amplitude = height * (Math.sin(iteration) * 0.1);
        var space = abs((Math.sin(iteration)) * 0.001) * 100 + 150;

        strokeWeight(abs(Math.sin(iteration)) * 0.05);
        beginShape();
        curveVertex(-space, 0);

        for (var x = 0; x < width; x += space) {
            var y = height * ((Math.sin(iteration) * 0.01) + 0.5);
            y += Math.sin(iteration - x * 0.01 + noise(iteration * 0.1) * -50) * amplitude;
            y += Math.sin(iteration + x * 0.02) * amplitude;
            y += Math.sin(iteration - x * 0.03 + noise(iteration * 0.1) * 50) * amplitude;
            curveVertex(x, y);
        }

        curveVertex(width, y);
        curveVertex(width + space, y);
        endShape();
        
        stroke(color(255, 255, 255, i*0.2));
    }
}

function draw() {
    noFill();
    drawLines();
    iteration += 0.01;
}