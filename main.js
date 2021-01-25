translation1 = "";
translation2 = "";

Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality:100
});

Webcam.attach("#camara");

function take(){

    Webcam.snap(function(data_uri){
        document.getElementById("res").innerHTML = "<img id='snapshot' src='"+data_uri+"'>" 
    });

}

console.log( ml5.version );

ML5class = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0JBODn54j/model.json",Modelloded)

function Modelloded(){
    console.log("yes");
}

function tell(){
    var storm = window.speechSynthesis;
    speech_DATA1 = "the first translation is" + translation1;
    speech_DATA2 = "the second translation is" + translation2;
    var utar = new SpeechSynthesisUtterance(speech_DATA1 + speech_DATA2);
    storm.speak(utar);
}

function check(){
    image = document.getElementById("snapshot")
    ML5class.classify(image , translationS)
}

function translationS(error,results){

    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("result1").innerHTML = results[0].label;
        document.getElementById("result2").innerHTML = results[1].label;
        translation1 = results[0].label;
        translation2 = results[1].label;
        tell();

        if(results[0].label == "yes"){
            document.getElementById("emoji1").innerHTML = "&#128077;";
        }
        if(results[0].label == "no"){
            document.getElementById("emoji1").innerHTML  = "&#128078;";
        }
        if(results[0].label == "maybe"){
            document.getElementById("emoji1").innerHTML  = "&#128073;";
        }

        if(results[1].label == "yes"){
            document.getElementById("emoji2").innerHTML = "&#128077;";
        }
        if(results[1].label == "no"){
            document.getElementById("emoji2").innerHTML  = "&#128078;";
        }
        if(results[1].label == "maybe"){
            document.getElementById("emoji2").innerHTML  = "&#128073;";
        }
    }
}