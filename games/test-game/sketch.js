var gravity

var width
var height

let uball
let platform

function setup() {
  width = min(windowWidth - 10, 500)
  height = windowHeight
  gravity = createVector(0, .2)

  uball = new Uball(createVector(width / 2, height - 600), 40, color(200, 162, 200))
  platform = new Platform(createVector(10, height - 20), width - 20, color("#D2A800"))
  createCanvas(width, height)
}

function draw() {
  background(255)
  uball.update(platform)
  uball.draw()

  platform.draw()

  if (uball.touchesPlatform(platform)) {
    uball.jump()
  }

  if (mouseIsPressed === true) {
    uball.pos.x = mouseX
  }
}

function mouseClicked() {

}