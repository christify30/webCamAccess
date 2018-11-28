var socket=io.connect('https://intense-beyond-58399.herokuapp.com/');
var socket2=io.connect('https://ancient-citadel-55722.herokuapp.com/');
//var socket=io.connect('https://intense-beyond-58399.herokuapp.com/');
var video = document.getElementById('video');
// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}
else if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia({ video: true }, function(stream) {
        video.src = stream;
        video.play();
    }, errBack);
} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia({ video: true }, function(stream){
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
    }, errBack);
} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
    navigator.mozGetUserMedia({ video: true }, function(stream){
        video.srcObject = stream;
        video.play();
    }, errBack);
}
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');
var btn=document.getElementById('btn');

// Trigger photo take
//document.getElementById("snap").addEventListener("click", function() {
     var fps=70;//frames per seconds
     var image='';
     btn.addEventListener('click',()=>{
        image=document.getElementById('id').value;
        console.log(image);
    });
     
    setInterval(() => {
        context.drawImage(video, 0, 0, 640, 480);
        //image=document.getElementById("img1");
        document.getElementById("img1").src=canvas.toDataURL("image/webp");
       if(image =='ifeanyi'){
        socket.emit('image',  document.getElementById("img1").src);
        }
       else if(image =='dike'){
            socket2.emit('image',  document.getElementById("img1").src);
            }


        //convertCanvasToImage(canvas,image);
    }, 1000/fps);
 
//});

function convertCanvasToImage(canvas,image) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}