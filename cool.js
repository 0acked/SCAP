function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/n1W4CJ7GH/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
var dog_times= 0;
var cat_times=0;

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        var rn_r = Math.floor(Math.random()*255)+1;
        var rn_g = Math.floor(Math.random()*255)+1;
        var rn_b = Math.floor(Math.random()*255)+1;

        document.getElementById("N.O.T.").innerHTML="Detected Dog-"+dog_times+" Detected Cat-"+cat_times;
        document.getElementById("N.O.A.").innerHTML="I can hear-"+results[0].label;

        document.getElementById("N.O.T.").style.color= "rgb("+rn_r+","+rn_g+","+rn_b+");";
        document.getElementById("N.O.A.").style.color= "rgb("+rn_r+","+rn_g+","+rn_b+");";

        img_v = document.getElementById("I.O.S.");

        if(results[0].label=="Barking")
        {
            img_v.src="barkin-dog.gif";
            dog_times= dog_times+1;
        }
        else if(results[0].label=="Growling")
        {
            img_v.src="gwolin-dog.gif";
            dog_times=dog_times+1;
        }
        else if(results[0].label=="Meow")
        {
            img_v.src="meowin-kitten.gif";
            cat_times=cat_times+1;
        }
        else if(results[0].label=="Hissing")
        {
            img_v.src="angwy-kitten.gif";
            cat_times=cat_times+1;
        }
        else
        {
            img_v.src="kisspng-computer-icons-hearing-clip-art-ear-healthcare-hear-hearing-icon-5ab0580db4a774.24161896152150631774.jpg";
        }
    }
}
