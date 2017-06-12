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
draws[0] = true;
for(var i = 1; i < 9; i++){
    draws[i] = false;
}

ctx.scale(4, 4);
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < 9; i++){
        if(draws[i]) sprites[i].render();
    }
}
setInterval(draw, 16.6);

function change(checkbox){
    if(checkbox.name == "9"){
        for(var i = 2; i <= 5; i++){
            draws[i - 1] = checkbox.checked;
            document.getElementById("form").elements[i].checked = checkbox.checked;
        }
    }else if(checkbox.name == "10"){
        for(var i = 7; i < 11; i++){
            draws[i - 2] = checkbox.checked;
            checkbox.setAttribute("checked", checkbox.checked);
            document.getElementById("form").elements[i].checked = checkbox.checked;
        }
    }else{
        draws[parseInt(checkbox.name)] = checkbox.checked;
    }
}