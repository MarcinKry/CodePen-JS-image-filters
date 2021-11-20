
var image = null;
var image2 = null;
var image3 = null;
var image4 = null;
var image5 = null;
var image6 = null;
var image7 = null;

var canvas;
var canvas2;
function upload(){
canvas = document.getElementById('can1');
canvas2 = document.getElementById('can2'); 
var fileinput = document.getElementById('finput');
image = new SimpleImage(fileinput);
image.drawTo(canvas);
image2 = new SimpleImage(fileinput);
image3 = new SimpleImage(fileinput);
image4 = new SimpleImage(fileinput);
image5 = new SimpleImage(fileinput);
image6 = new SimpleImage(fileinput);
image7 = new SimpleImage(fileinput);
}

function grayscale(){
  for (var pixel of image2.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setBlue(avg);
    pixel.setGreen(avg);
  }
}

function redfilter(){
  for (var pixel of image3.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if (avg < 128){
    pixel.setRed(2*avg);
    pixel.setBlue(0);
    pixel.setGreen(0);
    }
    else{
      pixel.setRed(255);
      pixel.setBlue((2*avg) - 255);
      pixel.setGreen((2*avg) - 255);
    }
  }
}
function imageIsLoaded(pic){
  if (pic == null || ! pic.complete()){
    alert('image not loaded');
    return false;
  }
  else{
    return true;
  }
}

function doGray() {
  if (imageIsLoaded(image2) ) {     // check if image is loaded
    grayscale();	                      // function performs the grayscale work
    image2.drawTo(canvas);	          // display image
  }
}

function doRed(){
  if (imageIsLoaded(image3)){
    redfilter();
    image3.drawTo(canvas);
  }
}

function reset(){
  image.drawTo(canvas);
}


function diagFilter(){
  var width = image4.getWidth();
  var height = image4.getHeight();
  var a = height/width;
  var diag = Math.sqrt((height*height)+(width*width));
  for (var pixel of image4.values()){
    if (pixel.getX() > (width - 50) || pixel.getX() < 50 || pixel.getY() < 50 || pixel.getY() > (height - 50)) {
        pixel.setRed(255);
        pixel.setBlue(0);
        pixel.setGreen(0);
        }
  if ((pixel.getY() < (pixel.getX()*a + 50 ) && (pixel.getY() > (pixel.getX()*a - 50)))) {
    pixel.setRed(255);
        pixel.setBlue(0);
        pixel.setGreen(0);
  }
}
}

function doDiag(){
  if (imageIsLoaded(image4)){
    diagFilter();
    image4.drawTo(canvas);
  }
}

function rainbow(){
  var height = image5.getHeight();

  for (var pixel of image5.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if (pixel.getY() < (height/7)){
    if (avg < 128){
    pixel.setRed(2*avg);
    pixel.setBlue(0);
    pixel.setGreen(0);
    }
    else{
      pixel.setRed(255);
      pixel.setBlue((2*avg) - 255);
      pixel.setGreen((2*avg) - 255);
    }
    }
    if (pixel.getY() > (height/7) && pixel.getY() < 2*(height/7)){
      if (avg < 128){
    pixel.setRed(2*avg);
    pixel.setBlue(0.8*avg);
    pixel.setGreen(0);
    }
    else{
      pixel.setRed(255);
      pixel.setBlue((1.2*avg) - 51);
      pixel.setGreen((2*avg) - 255);
    }
  }
    if (pixel.getY() > 2*(height/7) && pixel.getY() < 3*(height/7)){
      if (avg < 128){
    pixel.setRed(2*avg);
    pixel.setBlue(2*avg);
    pixel.setGreen(0);
    }
    else{
      pixel.setRed(255);
      pixel.setBlue(255);
      pixel.setGreen((2*avg) - 255);
    }
  }
    if (pixel.getY() > 3*(height/7) && pixel.getY() < 4*(height/7)){
      if (avg < 128){
    pixel.setRed(0);
    pixel.setBlue(2*avg);
    pixel.setGreen(0);
    }
    else{
      pixel.setRed((2*avg) - 255);
      pixel.setBlue(255);
      pixel.setGreen((2*avg) - 255);
    }
  }
    if (pixel.getY() > 4*(height/7) && pixel.getY() < 5*(height/7)){
      if (avg < 128){
    pixel.setRed(0);
    pixel.setBlue(0);
    pixel.setGreen(2*avg);
    }
    else{
      pixel.setRed((2*avg) - 255);
      pixel.setBlue((2*avg) - 255);
      pixel.setGreen(255);
    }
  }
    if (pixel.getY() > 5*(height/7) && pixel.getY() < 6*(height/7)){
      if (avg < 128){
    pixel.setRed(0.8*avg);
    pixel.setBlue(0);
    pixel.setGreen(2*avg);
    }
    else{
      pixel.setRed((1.2*avg) - 51);
      pixel.setBlue((2*avg) - 255);
      pixel.setGreen(255);
    }
  }
    if (pixel.getY() > 6*(height/7) && pixel.getY() < height){
      if (avg < 128){
    pixel.setRed(1.6*avg);
    pixel.setBlue(0);
    pixel.setGreen(1.6*avg);
    }
    else{
      pixel.setRed((0.4*avg) +153);
      pixel.setBlue((2*avg) - 255);
      pixel.setGreen((0.4*avg) +153);
    }
  }
}
}


function doRainbow(){
  if (imageIsLoaded(image5)){
    rainbow();
    image5.drawTo(canvas);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function blur(){
  for (var pixel of image6.values()){
    var x = pixel.getX() + getRandomInt(0, 20);
     var y = pixel.getY() + getRandomInt(0, 20);
    if (Math.random() < 0.5){
      
      if ((x < image6.getWidth()) && (y < image6.getHeight())){
      image6.setPixel(x,y,pixel) 
    }
  }
}
  
}

function doBlur(){
  if (imageIsLoaded(image6)){
    blur();
    image6.drawTo(canvas);
  }
}

function stealth(){
  for (var px of image7.values()){
    px.setRed(px.getRed() / 16);
    px.setBlue(px.getBlue() / 16);
    px.setGreen(px.getGreen() / 16);
  }
}

  
  function doStealth(){
  if (imageIsLoaded(image7)){
    stealth();
    image7.drawTo(canvas);
  }
}
