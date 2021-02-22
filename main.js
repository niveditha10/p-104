Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image_captured" style="width:350px;height:250px;" src="'+data_uri+'">';    });
}

console.log("ml5.version",ml5.version);
classify=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6KhMB2mQa/.json',modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
}