let TokenID = 'PatXioAlex';
let face;
let hair;



function preload() {
  face = loadImage("face.png");
  hair = loadImage("hair1.png");
}

function setup() {
  let ID = split(TokenID, ''); //分好ID了
  createCanvas(200, 200); //畫框大小
}

function draw() {
  background(50);//畫框上色360 360 360
  image(face, 0, 0, width, height);
  scale(1,1.4)
  tint(0, 255, 255);
  image(hair, 0, 0, width, height);

}
