function setGridUnit(val){
  gridUnit = map(val, 0, 100, 10, 200);
  
  config = true;
  redraw();
}

function setGridPad(val){
  gridPadding = map(val, 0, 100, 0, gridUnit/2);
  
  config = true;
  redraw();
}

function setSizeLimitX(val){
  sizeLimitX = round(map(val, 0, 100, 1, 30));
  
  config = true;
  redraw();
}

function setSizeLimitY(val){
  sizeLimitY = round(map(val, 0, 100, 1, 30));
  
  config = true;
  redraw();
}

function setPercentToShow(val){
  percentToShow = val;
  
  config = true;
  redraw();
}

function setWindowPadding(val){
  windowPadding = round(map(val, 0, 100, -400, 400));
  
  config = true;
  redraw();
}

function setColors(val){
  if(val == 0){
    purple = !purple;
  } else if(val == 1){
    gray = !gray;
  } else if(val == 2){
    white = !white;
  } else if(val == 3){
    orange = !orange;
  } else if(val == 4){
    blueC = !blueC;
  } else if(val == 5){
    greenC = !greenC;
  } else if(val == 6){
    redC = !redC;
  }

  if(!purple && !gray && !white && !orange && !blueC && !greenC && !redC){
    document.getElementById("purpleCheck").checked = true;
    document.getElementById("grayCheck").checked = true;
    document.getElementById("whiteCheck").checked = true;
    document.getElementById("orangeCheck").checked = true;
    document.getElementById("blueCheck").checked = true;
    document.getElementById("greenCheck").checked = true;
    document.getElementById("redCheck").checked = true;
    purple = gray = white = orange = blueC = greenC = redC = true;
  }

  config = true;
  redraw();
}

function runReRoll(){
  config = true;
  redraw();
}

function runReColor(){
  for(var m = 0; m < shapes.length; m++){
    shapes[m].reColor();
  }
  redraw();
}

function runImageSet() {
  //Get reference of File.
  var fileUpload = document.getElementById("bkgdImageUpload");

  var reader = new FileReader();
  //Read the contents of Image File.
  reader.readAsDataURL(fileUpload.files[0]);
  reader.onload = function (e) {
    //Initiate the JavaScript Image object.
    var image = new Image();

    //Set the Base64 string return from FileReader as source.
    image.src = e.target.result;
            
    //Validate the File Height and Width.
    image.onload = function () {
        holdHeight = this.height;
        holdWidth = this.width;

        // print("extracted with holdWidth: " + holdWidth + " & holdHeight: " + holdHeight);
    
        setBkgdImage();
    };
  }
  newImageTicker = 0;
}

function setBkgdImage(){
  const selectedFile = document.getElementById('bkgdImageUpload');
  const myImageFile = selectedFile.files[0];
  let urlOfImageFile = URL.createObjectURL(myImageFile);
  // bgImage = loadImage(urlOfImageFile, () => {image(bgImage, 400, 40)});
  bgImage = loadImage(urlOfImageFile);
  
  print("extracted with holdWidth: " + holdWidth + " & holdHeight: " + holdHeight);

  document.getElementById('bkgdImageSpan').innerHTML = selectedFile.files[0].name;
  document.getElementById('bkgdImageSpan').style.display = "block";
  document.getElementById('bkgdImageSpanSize').innerHTML = "Width: " + holdWidth + " Height: " + holdHeight;

  resizeCanvas(holdWidth, holdHeight);

  config = true;
  redraw();
}


function runStaticSave(){
  staticSave = true;
  redraw();
}
