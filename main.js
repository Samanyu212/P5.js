function preload(){

}

function setup(){
canvas=createCanvas(600,500);
canvas.position(100,300);
video=createCapture(VIDEO);
video.hide();
FilterColor="";
}

function draw(){
   
    tint(FilterColor);
    fill("green")
     rect(50,50,500,400)
    fill("red");
    circle(50,50,80);
    circle(550,50,80);
    circle(550,450,80);
    circle(50,450,80);
    image(video,200,150,200,200);
}

function apply_filter(){
     FilterColor=document.getElementById("TypeFilter").value;

}

function take_snapshot(){
save('image_greenery.png');

}