let positions;
let user_id;

function preload() {
  user_id = guid();

  partyConnect("wss://demoserver.p5party.org", "hello_party");
  positions = partyLoadShared("positions", {});
}

function setup() {
  createCanvas(400, 400);
  noStroke();
  frameRate(30);

  positions[user_id] = { x: 100, y: 100 };
}

function draw() {
  background("#ffcccc");

  for (const user_id in positions) {
    fill("#000066");
    square(positions[user_id].x, positions[user_id].y, 42);
  }

  if (keyIsDown(LEFT_ARROW) === true) {
    positions[user_id].x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    positions[user_id].x += 5;
  }

  if (keyIsDown(UP_ARROW) === true) {
    positions[user_id].y -= 5;
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    positions[user_id].y += 5;
  }
}

// https://slavik.meltser.info/the-efficient-way-to-create-guid-uuid-in-javascript-with-explanation
function guid() {
  function _p8(s) {
    var p = (Math.random().toString(16) + "000000000").substr(2, 8);
    return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
  }
  return _p8() + _p8(true) + _p8(true) + _p8();
}

// return a random color (expects colorMode(RGB, 255))
function randomColor() {
  return color(randomInt(0, 255), randomInt(0, 255), randomInt(0, 255));
}
