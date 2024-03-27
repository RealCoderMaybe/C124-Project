function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("FFFFFF");
}

function modelLoaded(){
    console.log('Posenet is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}