song = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;


function preload(){
    song = loadSound("music.mp3");
}

function setup(){
   canvas = createCanvas(600,500);
   canvas.center()

   video = createCapture(VIDEO);
   video.hide();

   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "And leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "And rightWristY = " + rightWristY);
    }
  
}
function modelLoaded(){
    console.log("poseNet is intialised");
}


function draw(){
    image(video,0,0,600,500);
    fill("blue");
    stroke("red");
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimal = floor(InNumberleftWristY);
    volume = remove_decimal/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);

}

 function play(){
     song.play();
     song.setVolume(1);
     song.rate(1);
     
 }
