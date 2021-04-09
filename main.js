function setup() {
    canvas = createCanvas(640 , 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
};

function draw() {
    image(video , 150 , 220 , 200);
    fill(255 , 0 , 0);
    stroke(255 , 0 , 0);
    circle(255 , 0 , 0);

    rect(90 , 420 , 460 , 20);

};

function preload() {

}