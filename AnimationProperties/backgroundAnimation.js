console.clear();

/* Utils */
const deg = a => Math.PI / 180 * a;
const randomGenerator = () => Math.floor(40 + Math.random() * 1080) * Math.round(Math.random());

/* Preload */

/* Setup */
const Points = [];

let rotation = 0;
let newRotation = Math.random() * 360;

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("backgroundCanvas");

    for (let i = 0; i < 180; i++) {
        Points.push({
            originalX: 0,
            originalY: 0,
            x: 0,
            y: 0
        });
    }
    
    createLines();
}

/* Lines */
function createLines() {
    const radius = Math.min(250, window.innerWidth * 0.48);
    const increment = 2;
    newRotation = rotation + 45;
    const randomX1 = randomGenerator();
    const randomY1 = randomGenerator();
    const randomX2 = randomGenerator();
    const randomY2 = randomX1 !== 0 && randomY1 !== 0 && randomX2 !== 0 ? randomGenerator() : Math.random() * 360;

    for (let i = 0; i < 180; i += increment) {
        const x1 = radius * Math.sin(deg(i + randomX1));
        const y1 = radius * Math.cos(deg(i + randomY1));
        Points[i].x = x1;
        Points[i].y = y1;

        const x2 = radius * Math.sin(deg(i + randomX2));
        const y2 = radius * Math.cos(deg(i + randomY2));
        Points[i + 1].x = x2;
        Points[i + 1].y = y2;
    }
}

/* Draw Lines */
function drawLines(clock) {
    const smooth = 0.06;
    const stagger = 0.00001;
    const increment = 2;

    for (let i = 0; i < Points.length; i += increment) {
        stroke(255, i * 0.4);

        Points[i].originalX = lerp(Points[i].originalX, Points[i].x, smooth + i * stagger);
        Points[i].originalY = lerp(Points[i].originalY, Points[i].y, smooth + i * stagger);

        Points[i + 1].originalX = lerp(Points[i + 1].originalX, Points[i + 1].x, smooth + i * stagger);
        Points[i + 1].originalY = lerp(Points[i + 1].originalY, Points[i + 1].y, smooth + i * stagger);

        const x = lerp(Points[i].originalX, Points[i + 1].originalX, .3);
        const y = lerp(Points[i].originalY, Points[i + 1].originalY, .7);

        bezier(Points[i].originalX, Points[i].originalY, y, x, x, y, Points[i + 1].originalX, Points[i + 1].originalY);
    }
}

/* Draw */
function draw() {
    clear();
    strokeWeight(1);
    noFill();
    translate(width / 2, height / 2);
    rotation = lerp(rotation, newRotation, smooth);
    rotate(deg(rotation));
    drawLines();
}

/* Resize */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

/* run animation */
window.setInterval(() => {
    createLines();
}, 2000);