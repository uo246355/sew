class Editor {
   constructor () {   
   }
   mostrar(){
       $("section>p:contains('ha')").show();
   }
   ocultar(){
       $("section>p:contains('ha')").hide();
   }
   addextra(){
      $("section>p:contains('ha')").append(". Ejemplo de uso modificar parrafos ");
   }
   addp(){
      var miParrafo = document.createElement("p");
      miParrafo.innerHTML = "Mi párrafo creado"; // Crea un elemento con DOM
      $("article").append(miParrafo);
   }
   removep(){
      $("article>p:contains('creado')").remove();
   }
   contarTabla(){
      var  columnas = 0;
      var filas = 0;
      $("table tr th", document.body).each(function() {
         columnas+= 1;
     });
     $("table tr td", document.body).each(function() {
         filas+= 1;
  });
   var texto = "La tabla tiene " + columnas + " columnas" + " y " + filas/columnas + " filas.";
   alert(texto);
   }
   recorrerArbol(){
      var texto = "";
      $("*", document.body).each(function() {
         var etiquetaPadre = $(this).parent().get(0).tagName;
         texto += "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: ";
     });
     alert(texto);
   }
}
var editor = new Editor();