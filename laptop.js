function preload(){
    img = loadImage("laptop.jpg");
}
function setup(){
    canvas = createCanvas(640, 820);
    canvas.center();
    modal = ml5.objectDetector("cocossd", loadmodal);
}
function loadmodal(){
    console.log("modal loaded");
    document.getElementById("status").innerHTML = "Status : Dectecting Object";
    Status = true;
    modal.detect(img, gotResult);
}
function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
    }
}
function draw(){
    image(img, 0, 0, 640, 820);
    stroke("red");
    noFill();
    rect(0 ,200 ,640 ,460);
    text("laptop", 0, 210);
}
function back(){
    window.location = "index.html";
}