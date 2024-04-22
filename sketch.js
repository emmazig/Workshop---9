
let water = [];
let webcam;
let scale = 10;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(width/scale,height/scale);
  webcam.hide();

  for(s = 0; s < 10000; s++){
    let x = random(0, width);
    let y = random(0, height);
    water[s] = new Sea (x, y);
  }
}

function draw() {
  
webcam.loadPixels();

for (let y = 0; y < webcam.height; y++){
  for (let x = 0; x < webcam.width/2; x++){
    let index = (x + y * webcam.width) * 4;
    webcam.pixels[index] = 150
    // webcam.pixels[index + 1] = 150
    webcam.pixels[index + 2] = 150
    webcam.pixels[index + 3] = 150
  }
}
webcam.updatePixels();




  for(x = 0; x < water.length; x++){
    water[x].grow();
    water[x].show();
  }
}


class Sea{

  constructor(x, y){
    this.x = random(windowWidth)
    this.y = random(windowHeight)
  }

  grow(){
    this.x += random(-40, 40)
    this.y += random(-4, 4)
  }

  show(){
    strokeWeight(4);

    let px = this.x /scale;
    let py = this.y /scale;
    let pixelColour = webcam.get(px,py);
    stroke(pixelColour[0],pixelColour[1], pixelColour[2], 100);
    
    point(this.x, this.y);
  }

}