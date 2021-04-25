Webcam.set({

    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 90,

    constraints: {

        facingMode:"environment"  
    }
});

camera= document.getElementById("camera");
Webcam.attach("camera");

function Takesnapshot(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = "<img src='"+data_uri+"' id='captured_img'>";
    });
}

console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier('MobileNet',ModelLoaded);

function ModelLoaded(){

    console.log(modelLoaded);
}

function Identifyimage(){

    captured_img = document.getElementById('captured_img');
    classifier.classify(captured_img,gotResult);
}

function gotResult(error, results){

    if (error){

        console.error(error);
    }

    else{

        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;

    }
}