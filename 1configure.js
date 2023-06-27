function configure() {
  for(var m = pg.length - 1; m >= 0; m--){
    pg[m].remove();
  }
  pg = [];

  if (sizeLimitX == 0 || sizeLimitY == 0) {
    sizeLimitX = sizeLimitXDefault;
    sizeLimitY = sizeLimitYDefault;
  }
  totalShapes = round(sizeLimitX * sizeLimitY);
  // shape = new shapes[totalShapes];

  shapes = [];
  
  let s = 0;
  
  for(let y = 1; y <= sizeLimitY; y++) {
    for(let x = 1; x <= sizeLimitX; x++) {
      shapes[s] = new Shape(x,y);
      s++;
    }
  }

//Establish Grid
  let vw = width - (windowPadding * 2);
  let vh = height - (windowPadding * 2);
  
  cols = round(vw / gridUnit) + 1;
  rows = round(vh / gridUnit) + 1;
  
  // grid = new grids[cols][rows];
  for (let x = 0; x < cols; x++) {
    grids[x] = [];
  }

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grids[x][y] = new Grid(0, false, false, 0);
    }
  }
  
//Place Shapes in Grid
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (!grids[x][y].occupied) {
        //Pick a Shape at Random and Determine if Shape Fits
        let randomShape;
        let w, h;
        
        do {
          randomShape = round(random(0,totalShapes-1));
          
          w = round(shapes[randomShape].w);
          h = round(shapes[randomShape].h);
          
        } while (!fit(x, y, w, h));
        
        grids[x][y] = new Grid(randomShape, true, true, random(100));
        
        //Once Shape Fit is Found Set All Non-origin Grid Units To Occupied
        if (shapes[randomShape].h > 1 || shapes[randomShape].w > 1) {
          for (let y1 = 0; y1 < shapes[randomShape].h; y1++) {
            for (let x1 = 0; x1 < shapes[randomShape].w; x1++) {
              
              if (!(y1 == 0 && x1 == 0)) {
                grids[x+x1][y+y1] = new Grid(randomShape, false, true, 0);
              }
              
            }
          }
        }
      } //end: if (!grids[x][y].occupied)
    } //end: for (int x = 0; x < cols; x++)
  } //end: for (int y = 0; y < rows; y++)

} //end: configure();