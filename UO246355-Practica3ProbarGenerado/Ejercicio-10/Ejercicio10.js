class Meteo {
   constructor(){
  }
  cargarDatos(){
    $.ajax({
        dataType: "json",
        url: "https://commodities-api.com/api/latest?access_key=s347d2662mbcbp8ti4y9pdxdph4d3wgd6t8iv751bighclyopyxlg1lhbjrw&%20base=USD&%20symbols=NG",
        method: 'GET',
        success: function(datos){
                //$("pre").text(JSON.stringify(datos, null, 2)); //muestra el json en un elemento pre
            
                //Presentación de los datos contenidos en JSON
                
                var stringDatos = "<ul><li>Fecha: " + datos.data.date + "</li>";
                    stringDatos += "<li>Precio del Gas Natural: " + datos.data.rates.NG + "$</li>";

                $("main").append(stringDatos);
            },
        error:function(){
          $("h2").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
          $("p").remove();
            }
    });
                      
  }
  crearElemento(tipoElemento, texto, insertarAntesDe){
      // Crea un nuevo elemento modificando el árbol DOM
      // El elemnto creado es de 'tipoElemento' con un 'texto' 
      // El elemnto se coloca antes del elemnto 'insertarAntesDe'
      var elemento = document.createElement(tipoElemento); 
      elemento.innerHTML = texto;
      $(insertarAntesDe).before(elemento);
  }
  crearElementoMain(tipoElemento, texto)
  {
      var elemento = document.createElement(tipoElemento); 
      elemento.innerHTML = texto;
      $("main").append(elemento);
  }
  verJSON(){
            this.crearElementoMain("h2","Datos"); // Crea un elemento con DOM 
            this.cargarDatos("Oviedo");
            $("main>p>input").attr("disabled","disabled");
  }
}
var meteo = new Meteo();