//GLOBAL VARIABLES
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

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

var heartI = new Image();
heartI.src = "images/nodesClose.png";
var heart = new Sprite(ctx, 100, 100, heartI);

ctx.scale(8, 8);
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    heart.render();
}
setInterval(draw, 16.6);