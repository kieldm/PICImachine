class Grid{
  constructor(s, origin, occupied, randomPercent){
    this.s = s;
    this.origin = origin;
    this.occupied = occupied;
    this.randomPercent = randomPercent;
  }

  display(x, y, gridUnit) {
    let xPos = (x * gridUnit) + windowPadding;
    let yPos = (y * gridUnit) + windowPadding;

    if(this.origin){
      shapes[this.s].display(xPos, yPos, this.randomPercent);
    }

    // stroke(0,0,255);
    // noFill();
    // rect(xPos, yPos, gridUnit, gridUnit);
  }
}