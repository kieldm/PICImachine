function fit(xPos, yPos, w, h) {
  let fit = true;
  
  if (w > 1 || h > 1) {
    
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (xPos+x < cols && yPos+y < rows) {
          if (grids[xPos+x][yPos+y].occupied) {
            fit = false;
          }
        } else {
          fit = false;
        }
      }
    }
    
  }
  
  return fit;
}