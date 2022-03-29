left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(400, 400);
    canvas.position(580,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}   

function draw(){
    background("#00FFFF");
    fill("#FFC0CB");
    textSize(difference);
    text("Labhesh", 50 , 100);
    document.getElementById("btn status").innerHTML = "Font size of the text is " + difference + " px ";
}

function modelLoaded(){
    console.log("Posenet is Initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = Math.floor(left_wrist_x - right_wrist_x);
        console.log("Left Wrist X = " + left_wrist_x + " Right Wrist X = " + right_wrist_x + " Difference = " + difference);
    }
}