/* 
 * Zoom-and-drag canvas sketch
 * - Zoom in pressing 'z' (caps off)
 * - Zoom out pressing 'x' (caps off)
 * - Drag the canvas by holding pressed any mouse button and dragging around
 */

const theWidth = 640;
const theHeight = 480;
let theScaleMultiplier = 2;
let theScale = 1;
let theOffsetX = 0;
let theOffsetY = 0;
let theDragX = 0;
let theDragY = 0;

function setup() {
  createCanvas(theWidth, theHeight);
  background(223, 223, 223);
}

function draw() {
  
  /*
   * Width offset to center on screen: -((theScale - 1) * theWidth)/2, when theScaleMultiplier is 2
   * Height offset to center on screen: -((theScale - 1) * theHeight)/2, when theScaleMultiplier is 2
   * Mouse drag is added/substracted on each frame, on draw(), and scaled on each key press. Adding drag on mouseDragged() events adds the previous frame difference multiple times on a single frame, therefore it is not used.
   */
  
  if (mouseIsPressed) {
    theDragX += mouseX - pmouseX;
    theDragY += mouseY - pmouseY;
  }
  translate(theOffsetX, theOffsetY);
  translate(theDragX, theDragY);
  scale(theScale);
  
  // Your sketch code starts below here:
  background(223, 223, 223);
  noStroke();
  fill(127, 127, 127);
  rect(0, 0, 320, 240);
  
  fill(255, 255, 255);
  rect(320, 240, 320, 240);
}

function keyPressed() {
  
  /* Customize your zoom-in and zoom-out keys here, or use any other input event listener functions to handle these operations */
  
  if (key == "z") {
    theScale *= theScaleMultiplier;
    theOffsetX = -((theScale - 1) * theWidth) / theScaleMultiplier;
    theOffsetY = -((theScale - 1) * theHeight) / theScaleMultiplier;
    theDragX *= theScaleMultiplier;
    theDragY *= theScaleMultiplier;
  }
  
  if (key == "x") {
    theScale /= theScaleMultiplier;
    theOffsetX = -((theScale - 1) * theWidth) / theScaleMultiplier;
    theOffsetY = -((theScale - 1) * theHeight) / theScaleMultiplier;
    theDragX /= theScaleMultiplier;
    theDragY /= theScaleMultiplier;
  }
}
