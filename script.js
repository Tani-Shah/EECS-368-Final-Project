var tabButtons = document.querySelectorAll(".tab .button button");
var tabPanels = document.querySelectorAll(".tab .TabPanel");
var imagefg, imageGrey, imageRed, imageBlue, imageGreen, imageRainbow, imagebg;
var canvasfg;
var canvasbg;
var canvasGrey = document.getElementById("can4");
var canvasRed = document.getElementById("can6");;
var canvasBlue = document.getElementById("can8");;
var canvasGreen = document.getElementById("can10");;
var canvasRainbow = document.getElementById("can12");;
var finalcanvas;

function showPanels(panelIndex, colorCode){
  tabButtons.forEach(function(node){
                     node.style.backgroundColor = "";
                     node.style.color = "";
                     });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "black";
  tabPanels.forEach(function(node){
                     node.style.display = "none";
                     });
  tabPanels[panelIndex].style.backgroundColor = colorCode;
  tabPanels[panelIndex].style.display = "block";
}

function uploadfg(){
  canvasfg = document.getElementById("can");
  var imgfg = document.getElementById("fgimage");
  imagefg = new SimpleImage(imgfg);
  imagefg.drawTo(canvasfg);
}

function uploadbg(){
  canvasbg = document.getElementById("can2");
  var imgbg = document.getElementById("bgimage");
  imagebg = new SimpleImage(imgbg);
  imagebg.drawTo(canvasbg);
}

function create(){
  if (imagefg == null || !imagefg.complete()){
    alert("Foreground image not loaded")
  }
  else if (imagebg == null || !imagebg.complete()){
    alert("Background image not loaded")
  }
  else{
    var output = new SimpleImage(imagefg.getWidth(), imagefg.getHeight());
    for (var pixel of imagefg.values()){
      if(pixel.getGreen()>pixel.getRed()+pixel.getBlue()){
        var x = pixel.getX();
        var y = pixel.getY();
        output.setPixel(x,y,imagebg.getPixel(x,y));
      }
      else{
        output.setPixel(pixel.getX(),pixel.getY(),pixel);
      }
      finalcanvas = document.getElementById("can3");
      var context = finalcanvas.getContext("2d");
      context.clearRect(0,0,finalcanvas.width,finalcanvas.height);
      output.drawTo(finalcanvas);
    }
  }
}

function uploadGrey(){
  var temp = document.getElementById("1");
  imageGrey = new SimpleImage(temp);
  imageGrey.drawTo(canvasGrey);
}

function uploadRed(){
  var temp = document.getElementById("2");
  imageRed = new SimpleImage(temp);
  imageRed.drawTo(canvasRed);
}

function uploadBlue(){
  var temp = document.getElementById("3");
  imageBlue = new SimpleImage(temp);
  imageBlue.drawTo(canvasBlue);
}

function uploadGreen(){
  var temp = document.getElementById("4");
  imageGreen = new SimpleImage(temp);
  imageGreen.drawTo(canvasGreen);
}

function uploadRainbow(){
  var temp = document.getElementById("5");
  imageRainbow = new SimpleImage(temp);
  imageRainbow.drawTo(canvasRainbow);
}

function makeGrey(){
  if (imageGrey == null || !imageGrey.complete()){
    alert("Image not loaded!")
  }
  else{
    for (var pixel of imageGrey.values()){
        var average = ((pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3);
        pixel.setRed(average);
        pixel.setGreen(average);
        pixel.setBlue(average);
    }
    var fincanvas = document.getElementById("can5");
    imageGrey.drawTo(fincanvas);
  }

}

function makeRed(){
  if (imageRed == null || !imageRed.complete()){
    alert("Image not loaded!")
  }
  else{
    for (var pixel of imageRed.values()){
        pixel.setRed(255);
    }
    var fincanvas = document.getElementById("can7");
    imageRed.drawTo(fincanvas);
  }

}

function makeBlue(){
  if (imageBlue == null || !imageBlue.complete()){
    alert("Image not loaded!")
  }
  else{
    for (var pixel of imageBlue.values()){
        pixel.setBlue(255);
    }
    var fincanvas = document.getElementById("can9");
    imageBlue.drawTo(fincanvas);
  }

}

function makeGreen(){
  if (imageGreen == null || !imageGreen.complete()){
    alert("Image not loaded!")
  }
  else{
    for (var pixel of imageGreen.values()){
        pixel.setGreen(255);
    }
    var fincanvas = document.getElementById("can11");
    imageGreen.drawTo(fincanvas);
  }

}

function makeRainbow(){
  if (imageRainbow == null || !imageRainbow.complete()){
    alert("Image not loaded!")
  }
  else{
    var width = imageRainbow.getWidth();
    for (var pixel of imageRainbow.values()){
      var x = pixel.getX();
      if (x <= width/3){
        pixel.setRed(255);
      }
      if (x <= 2*width/3 &&  x > width/3){
        pixel.setGreen(255);
      }
      if (x <= 3*width/3 &&  x > 2*width/3){
        pixel.setBlue(255);
      }
    }
    var fincanvas = document.getElementById("can13");
    imageRainbow.drawTo(fincanvas);
  }

}

function clean(){
  doClear(canvasfg);
  doClear(canvasbg);
  doClear(finalcanvas);
}

function doClear(canvas) {
var context = canvas.getContext("2d");
context.clearRect(0,0,canvas.width,canvas.height);
}

