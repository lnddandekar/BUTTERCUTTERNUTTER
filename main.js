Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=doument.getElementById("camera");
Webacm.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result".innerHTML='<img id="captured_image"src="'+data_uri+'"/>')
    });
}
console.log('ml5 version version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/train/image',modeLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}
{
function check()
img= document.getElementById('capture_image');
classifer.clasify(img, gotResult);
}
function gotResult(error, results){
    if (error) {
   console.error(error);     
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTMl= result[0].label;
        document.getElementById("result_object_accuracy").innerHTML= result[0].confidence.toFixed(3);
    }
}