const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = { x: 100, y: 100 };

let keys = {};

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

function update() {
  if (keys["w"]) player.y -= 3;
  if (keys["s"]) player.y += 3;
  if (keys["a"]) player.x -= 3;
  if (keys["d"]) player.x += 3;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "cyan";
  ctx.fillRect(player.x, player.y, 30, 30);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
