var bubbles = [];

function setup() {
  createCanvas(800, 600);

  for (var i = 0; i < 10; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(50, 100)
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(255);

  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // remove this bubble!
      }
      fill(100, 200, 200, 220); // changing value #s in fill function parameters changes bubble color
    } else {
      fill(255, 100, 200, 200);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-1, 1);
    bubble.y += random(-1, 1);
  }
}
