class Uball {
  constructor(position, d, c = 50) {
    this.pos = position
    this.d = d
    this.c = c

    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)

    this.squishedFramesLeft = 0
    this.squishedD = this.d * .5
  }

  update(platform) {
    let finalForce = gravity.copy().add(this.acc)
    this.vel.add(finalForce)
    this.vel.limit(30)
    this.acc.mult(0)

    this.pos.add(this.vel)
    if (this.touchesPlatform(platform)) {
      this.pos.set(this.pos.x, platform.pos.y - this.squishedD / 2)
      this.vel.set(this.vel.x, 0)
    }
  }

  draw() {
    fill(this.c) // sets the color
    if (this.squishedFramesLeft > 0) {
      ellipse(this.pos.x, this.pos.y, this.d, this.d * 0.5)
      this.squishedFramesLeft--
    }
    else
      circle(this.pos.x, this.pos.y, this.d)
  }

  jump() {
    this.acc = createVector(0, -13)
  }

  touchesPlatform(platform) {
    // check if they could be touching horizontally
    if (
      this.pos.x + this.d / 2 < platform.pos.x &&
      this.pos.x - this.d / 2 > platform.pos.x + platform.w
    ) {
      return false
    }

    // check if they are touching vertically
    const isTouching = (
      this.pos.y + this.d / 2 >= platform.pos.y &&
      this.pos.y + this.d / 2 <= platform.pos.y + platform.h
    )

    this.squishedFramesLeft = isTouching ? 6 : this.squishedFramesLeft

    return isTouching
  }
}

// ====================
// ====================

class Platform {
  constructor(pos, w, c = 50) {
    this.pos = pos
    this.w = w
    this.c = c
    this.h = 10
  }

  draw() {
    fill(this.c)
    rect(this.pos.x, this.pos.y, this.w, this.h)
  }
}
