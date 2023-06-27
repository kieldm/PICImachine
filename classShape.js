class Shape{
  constructor(w, h){
    this.w = w;
    this.h = h;

    this.index = pg.length;
    drawGradient(this.index, this.w, this.h);

    this.gradImage = pg[this.index];
  }

  display(x, y, randomPercent) {
    if (randomPercent <= percentToShow) {
      let x1 = x + gridPadding - 0.25;
      let y1 = y + gridPadding - 0.25;
      let x2 = x + (this.w * gridUnit) - gridPadding + 0.5;
      let y2 = y + (this.h * gridUnit) - gridPadding + 0.5;

      let newW = x2 - x1;
      let newH = y2 - y1;

      image(this.gradImage, x1, y1, newW, newH);
    }
  }

  reColor(){
    drawGradient(this.index, this.w, this.h);

    this.gradImage = pg[this.index];
  }
}

function drawGradient(index, w, h){
  var imageW = w * gridUnit;
  var imageH = h * gridUnit;

  var color1;
  var color1selected = false;
  while(!color1selected){
    var colorSelector = random(7 * 10);
    if(colorSelector < 1 * 10 && purple){
      if(random(10)<5){ color1 = colorA[0];} else {color1 = colorZ[0]; }
      color1selected = true;
    } else if(colorSelector < 2 * 10 && gray){
      if(random(10)<5){ color1 = colorA[1];} else {color1 = colorZ[1]; }
      color1selected = true;
    } else if(colorSelector < 3 * 10 && white){
      if(random(10)<5){ color1 = colorA[2];} else {color1 = colorZ[2]; }
      color1selected = true;
    } else if(colorSelector < 4 * 10 && orange){
      if(random(10)<5){ color1 = colorA[3];} else {color1 = colorZ[3]; }
      color1selected = true;
    } else if(colorSelector < 5 * 10 && blueC){
      if(random(10)<5){ color1 = colorA[4];} else {color1 = colorZ[4]; }
      color1selected = true;
    } else if(colorSelector < 6 * 10 && greenC){
      if(random(10)<5){ color1 = colorA[5];} else {color1 = colorZ[5]; }
      color1selected = true;
    } else if(colorSelector < 7 * 10 && redC){
      if(random(10)<5){ color1 = colorA[6];} else {color1 = colorZ[6]; }
      color1selected = true;
    }
  }

  var color2;
  var color2selected = false;
  while(!color2selected){
    var colorSelector = random(7 * 10);
    if(colorSelector < 1 * 10 && purple){
      if(random(10)<5){ color2 = colorA[0];} else {color2 = colorZ[0]; }
      color2selected = true;
    } else if(colorSelector < 2 * 10 && gray){
      if(random(10)<5){ color2 = colorA[1];} else {color2 = colorZ[1]; }
      color2selected = true;
    } else if(colorSelector < 3 * 10 && white){
      if(random(10)<5){ color2 = colorA[2];} else {color2 = colorZ[2]; }
      color2selected = true;
    } else if(colorSelector < 4 * 10 && orange){
      if(random(10)<5){ color2 = colorA[3];} else {color2 = colorZ[3]; }
      color2selected = true;
    } else if(colorSelector < 5 * 10 && blueC){
      if(random(10)<5){ color2 = colorA[4];} else {color2 = colorZ[4]; }
      color2selected = true;
    } else if(colorSelector < 6 * 10 && greenC){
      if(random(10)<5){ color2 = colorA[5];} else {color2 = colorZ[5]; }
      color2selected = true;
    } else if(colorSelector < 7 * 10 && redC){
      if(random(10)<5){ color2 = colorA[6];} else {color2 = colorZ[6]; }
      color2selected = true;
    }
  }

  pg[index] = createGraphics(imageW, imageH);
  pg[index].noFill();
  for(var n = 0; n < imageW; n++){
    var gradColor = lerpColor(color1, color2, n/imageW);
    pg[index].stroke(gradColor);
    pg[index].line(n, 0, n, imageH);
  }
}