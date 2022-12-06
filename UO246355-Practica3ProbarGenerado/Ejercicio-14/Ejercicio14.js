"use strict";
class Filer {
    constructor() {
    }
    showImage() {
        var archivos = $("input[name='subirImagen']")[0].files;
        var img = new Image;
        img.onload = function () {
            var canvas = $("main>canvas")[0];
            var ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.drawImage(img, 0, 0, 400, 400);
        }
        img.src = URL.createObjectURL(archivos[0]);
    }
    showAudio() {
        var archivos = $("input[name='subirAudio']")[0].files;
        var fileReader = new FileReader();
			fileReader.readAsArrayBuffer(archivos[0]);
			fileReader.onload = function() {
				var context = new window.AudioContext();
			    context.decodeAudioData(fileReader.result, function(buffer) {
                var source = context.createBufferSource();
					source.buffer = buffer;
					source.loop = false;
					source.connect(context.destination);
					source.start(0); 
            });
				console.log(("Filename: '" + archivos[0].name + "'"), ( "(" + ((Math.floor(archivos[0].size/1024/1024*100))/100) + " MB)" ));
    }
}

}
var filer = new Filer();