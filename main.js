img = "";
object =[];
status = "";

function preload(){
    img =loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML ="status :Detecting Object";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
   console.log(results);
   object = results;      
}

function draw(){
    image(video, 0, 0, 640, 420);
if(status !="")
{
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetector.detect(video, gotResult);
for (i = 0; i < object.length; i++){
document.getElementById("status").innerHTML = "status : object Detected";
document.getElementById("number_of_object").innerHTML ="number of objects detected are :" + objects.length;
    fill("r,g,b");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label +""+percent+ "%",objects[i].x + 15, objects[i].y +15);
    noFill();
    stroke("r,g,b");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].heigth );

    
}
}
}

