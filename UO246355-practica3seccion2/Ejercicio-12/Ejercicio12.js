"use strict";
class FileR {
    constructor (){
        this.texto = "";
    }
    calcularTamañoArchivos() {
        var nombresTiposTamaños="";
        var tipoTexto = '\.txt';
        var tipoXml = '\.xml';
        var tipoJson = '\.json';
        var nBytes = 0,
            archivos = $("input[name='subirArchivos']")[0].files,
            nArchivos = archivos.length;
        var areas = $("main>textarea")[0];
        if(areas==undefined)
        {
          areas = 0;
        }
        else
        {
          areas = $("main>textarea").length;
        }
        for (var i = 0; i < nArchivos; i++) {
          nBytes += archivos[i].size;
        }
        for (var i = 0; i < nArchivos; i++) {
          nombresTiposTamaños += "<p>Archivo[" + i +"] = "+ archivos[i].name +"</p>" ;
          nombresTiposTamaños += "<p>" + "Tamaño: " + archivos[i].size +" bytes " +"</p>";
          nombresTiposTamaños += "<p>" + "Tipo: " + archivos[i].type+"</p>";
          nombresTiposTamaños += "<p>" +  "Fecha de la última modificación: " + archivos[i].lastModifiedDate +"</p>";
          if (archivos[i].name.match(tipoTexto)) 
            {
              var lector = new FileReader();
              lector.onload = function (evento) {
                //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
                //La propiedad "result" es donde se almacena el contenido del archivo
                //Esta propiedad solamente es válida cuando se termina la operación de lectura
                $("main").append('<label for="area' + i + areas + '">Texto del archivo:</label> <textarea id="area' + i + areas + '" name="area' + i + areas + '" rows="40" cols="120">'+ lector.result + '</textarea>');
                //console.log(lector.result);
                }      
              lector.readAsText(archivos[i]);
              }
            else if(archivos[i].name.match(tipoXml))
            {
                var lector = new FileReader();
              lector.onload = function (evento) {
                //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
                //La propiedad "result" es donde se almacena el contenido del archivo
                //Esta propiedad solamente es válida cuando se termina la operación de lectura
                $("main").append('<label for="area' + i+1 + areas + '">Codigo XML:</label> <textarea id="area' + i+1 + areas + '" name="area' + i+1 + areas + '" rows="40" cols="120">'+ lector.result + '</textarea>');
                //console.log(lector.result);
                }      
              lector.readAsText(archivos[i]);
            }
            else if(archivos[i].name.match(tipoJson))
            {
                var lector = new FileReader();
                lector.onload = function (evento) {
                  //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
                  //La propiedad "result" es donde se almacena el contenido del archivo
                  //Esta propiedad solamente es válida cuando se termina la operación de lectura
                  $("main").append('<label for="area' + i+2 + areas + '">Codigo Json:</label> <textarea id="area' + i+2 + areas + '" name="area' + i+2 + areas + '" rows="40" cols="120">'+ lector.result + '</textarea>');
                  //console.log(lector.result);
                  }      
                lector.readAsText(archivos[i]);
            }
          else {
            nombresTiposTamaños += "<p>" +  "El archivo no es de tipo .txt, .xml o .json </p>";
              }       
        }
        this.texto = nombresTiposTamaños;
      }
      addtomain() {
        $("main").append(this.texto);
      }

      verArchivo(){
        this.calcularTamañoArchivos();
        this.addtomain();
      }
}
var filer = new FileR("");