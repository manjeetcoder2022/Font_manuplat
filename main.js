function setup(){
    canvas= createCanvas(400,400)
    background("pink")
    video= createCapture(VIDEO)
    video.size(400,400)
    canvas.center()
    poseNet= ml5.poseNet('pose',modelloaded)
    poseNet.on('pose',getPoses)
}

function modelloaded(){
    console.log("modelLoaded Successfully")
}
function getPoses(error,results){
    console.log("d")
    if(error){
        console.log(error)
    }else{
        console.log(results)
    }
}