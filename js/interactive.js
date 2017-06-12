//GLOBAL VARIABLES
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
var currMouse = {x: 0, y: 0};
var checks = document.getElementById("form");

//CLASS DEFINITIONS
class Rectangle{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    contains(mx, my){
        return (mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height);
    }
}

class Sprite{
    constructor(ctx, width, height, image){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }

    render(){
        this.ctx.drawImage(
            this.image,
            0,
            0,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height);
    }
}

//EVENT HANDLERS
function getMousePos(canvas, evt){
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
canvas.addEventListener("mousemove", function(evt) {
    currMouse = getMousePos(canvas, evt);
}, false);

//GAME VARIABLES
var images = new Array(9);
for(var i = 0; i < 9; i++){
    images[i] = new Image();
}
images[0].src = "images/body.png";
images[1].src = "images/heart.png";
images[2].src = "images/subv.png";
images[3].src = "images/veins.png";
images[4].src = "images/arteries.png";
images[5].src = "images/spleen.png";
images[6].src = "images/thymus.png";
images[7].src = "images/lvessels.png";
images[8].src = "images/lnodes.png";
var sprites = new Array(9);
for(var i = 0; i < 9; i++){
    sprites[i] = new Sprite(ctx, 100, 200, images[i]);
    sprites[i].y -= 10;
}
var draws = new Array(9);
for(var i = 0; i < 9; i++){
    draws[i] = true;
}

//MAIN FUNCTION
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(4, 4);
    for(var i = 0; i < 9; i++){
        if(draws[i]) sprites[i].render();
    }
    ctx.scale(0.25, 0.25);
}
setInterval(draw, 16.6);

//UTILS
function change(checkbox){
    draws[parseInt(checkbox.name)] = checkbox.checked;
}