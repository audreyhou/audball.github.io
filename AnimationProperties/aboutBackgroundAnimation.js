console.clear();

/* Setup */
var iteration = 0;

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("backgroundCanvas");
    
    colorMode(RGB, 255);
    noLoop();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}

function drawLines() {
    for(let i = 0; i < 100; i++) {
        drawLine(iteration - i, i);
    }
}

function drawLine(t, intensity) {
    beginShape();
    curveVertex(-space, 0);

    var amplitude = height * (Math.sin(t) * 0.1);
    var space = abs((Math.sin(t)) * 0.001) * 100 + 150;

    for (var x = 0; x < window.innerWidth; x += space) {
        var y = height * ((Math.sin(t) * 0.01) + 0.5);
        y += Math.sin(t - x * 0.01 + noise(t * 0.1) * -50) * amplitude;
        y += Math.sin(t + x * 0.02) * amplitude;
        y += Math.sin(t - x * 0.03 + noise(t * 0.1) * 50) * amplitude;
        curveVertex(x, y);
    }

    curveVertex(window.innerWidth, y);
    curveVertex(window.innerWidth + space, y);
    endShape();
    
    stroke(color(255, 255, 255, 0.2 * intensity), intensity);
}

function draw() {
    clear();
    noFill();
    drawLines();
    iteration += 0.01;
}

window.setInterval(() => {
    redraw();
}, 20);