Webcam.set({
height:350,
width:300,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'/>";
    });
}

console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kR6l0UPRF/model.json",ModelLoaded);

function ModelLoaded(){
    console.log("Model Loaded!");
}
function check(){
    img=document.getElementById("result");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_obj_name").innerHTML=results[0].label;
        document.getElementById("result_obj_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
