class Meteo {
   constructor(){
      this.apikey = "fb96cae6f44d2c1c9bf5803657a29682";
      this.codigoPais = "ES";
      this.unidades = "&units=metric";
      this.idioma = "&lang=es";
      this.correcto = "¡Todo correcto! JSON recibido de <a href='https://openweathermap.org'>OpenWeatherMap</a>"
  }
  cargarDatos(ciudad){
      $.ajax({
          dataType: "json",
          url: "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey,
          method: 'GET',
          success: function(datos){
                  //$("pre").text(JSON.stringify(datos, null, 2)); //muestra el json en un elemento pre
              
                  //Presentación de los datos contenidos en JSON
                  
                  var stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
                      stringDatos += "<li>País: " + datos.sys.country + "</li>";
                      stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                      stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                      stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                      stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
                      stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
                      stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                      stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                      stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                      stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                      stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                      stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                      stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                      stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                      stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
                      stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                      stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li>";
                      stringDatos += '<li> <img src="https://openweathermap.org/img/w/' + datos.weather[0].icon +'.png" alt="Icono de OpenWeather" /></li></ul>'

                  $("main").append(stringDatos);
              },
          error:function(){
            $("h2").html("¡Tenemos problemas! No puedo obtener JSON de <a href='https://openweathermap.org'>OpenWeatherMap</a>"); 
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
            this.cargarDatos("Avilés");
            this.cargarDatos("Gijón");
            this.cargarDatos("Mieres");
            this.cargarDatos("Santander");
            $("main>p>input").attr("disabled","disabled");
  }
}
var meteo = new Meteo();