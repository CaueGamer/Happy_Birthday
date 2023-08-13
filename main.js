var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	fabric.image.fromURL('BithdayImage.jpg', function(Img){
        BlockImageObject=Img;
        BlockImageObject.scaleToWidth(700);
        BlockImageObject.scaleToHeight(510);
        BlockImageObject.set({
            top:0,
            left:0
        })
        canvas.add(BlockImageObject);
    })
}

function playSound(){
	x.play();
}
