function preload(){}

function setup(){
    video=createCapture(VIDEO);
    video.size(300,350);
    video.position(280,225);

    canvas=createCanvas(400,400);
    canvas.position(695,200);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("#735a41");
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}