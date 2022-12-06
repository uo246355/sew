"use strict";
class GeoLocalizacion {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
    }
    getPosicion(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
        this.mensaje = "Se ha realizado correctamente la petición de geolocalización";
    }
    getLongitud(){
        return this.longitud;
    }
    getLatitud(){
        return this.latitud;
    }
    getAltitud(){
        return this.altitud;
    }
    verTodo(){
        var datos='<p>'+ this.mensaje + '</p>'; 
        datos+='<p>Longitud: '+this.longitud +' grados</p>'; 
        datos+='<p>Latitud: '+this.latitud +' grados</p>';
        datos+='<p>Precisión de la latitud y longitud: '+ this.precision +' metros</p>';
        datos+='<p>Altitud: '+ this.altitude +' metros</p>';
        datos+='<p>Precisión de la altitud: '+ this.precisionAltitud +' metros</p>'; 
        datos+='<p>Rumbo: '+ this.rumbo +' grados</p>'; 
        datos+='<p>Velocidad: '+ this.velocidad +' metros/segundo</p>';
        $("main").append(datos);
        $("main>p>input").attr("disabled","disabled");
    }
    verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la petición de geolocalización"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información de geolocalización no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    }
    getMapaEstaticoGoogle(){
        
        
        var apiKey = "&key=AIzaSyDPw5ATCT9-LYCUBC0MFgh6bjUTU-JpYfg";
        //URL: obligatoriamente https
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        //Parámetros
        // centro del mapa (obligatorio si no hay marcadores)
        var centro = "center=" + this.latitud + "," + this.longitud;
        //zoom (obligatorio si no hay marcadores)
        //zoom: 1 (el mundo), 5 (continentes), 10 (ciudad), 15 (calles), 20 (edificios)
        var zoom ="&zoom=15";
        //Tamaño del mapa en pixeles (obligatorio)
        var tamaño= "&size=800x600";
        //Escala (opcional)
        //Formato (opcional): PNG,JPEG,GIF
        //Tipo de mapa (opcional)
        //Idioma (opcional)
        //region (opcional)
        //marcadores (opcional)
        var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        //rutas. path (opcional)
        //visible (optional)
        //style (opcional)
        var sensor = "&sensor=false"; 
        
        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
        $("main").append("<img src='"+this.imagenMapa+"' alt='mapa estático google' />");
    }
    handleLocationError(browserHasGeolocation, infoWindow, pos, mapaOviedo) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: Ha fallado la geolocalización' :
                              'Error: Su navegador no soporta geolocalización');
        infoWindow.open(mapaOviedo);
      }
    mapaDinamico(){
        this.latitud = Number(document.querySelector("main>p>input[name='latitud']").value);
        this.longitud =  Number(document.querySelector("main>p>input[name='longitud']").value);
        var posiLati = this.latitud;
        var posiLong = this.longitud;
        var oviedo = {lat: this.latitud, lng: this.longitud};
        var mapaOviedo = new google.maps.Map($("main")[0],{zoom: 8,center:oviedo});
        var infoWindow = new google.maps.InfoWindow;
        if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                  lat: posiLati,
                  lng: posiLong
                };
    
                infoWindow.setPosition(pos);
                infoWindow.setContent('Localización encontrada');
                infoWindow.open(mapaOviedo);
                mapaOviedo.setCenter(pos);
              }, function() {
                handleLocationError(true, infoWindow, mapaOviedo.getCenter(), mapaOviedo);
              });
            } else {
              // Browser doesn't support Geolocation
              handleLocationError(false, infoWindow, mapaOviedo.getCenter()), mapaOviedo;
            }
    }
    cargarDatos(){
        console.log("llegamos");
            $.ajax({
                dataType: "json",
                url: "https://api.openweathermap.org/data/2.5/weather?lat="+this.latitud+"&lon="+this.longitud+"&appid=fb96cae6f44d2c1c9bf5803657a29682",
                method: 'GET',
                success: function(datos){
                        //$("pre").text(JSON.stringify(datos, null, 2)); //muestra el json en un elemento pre
                    
                        //Presentación de los datos contenidos en JSON
                        console.log("llegue");
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
                            console.log(stringDatos);
                        $("footer").append(stringDatos);
                    },
                error:function(){
                  $("h2").html("¡Tenemos problemas! No puedo obtener JSON de <a href='https://openweathermap.org'>OpenWeatherMap</a>"); 
                  $("p").remove();
                    }
            });
    }
    mapaytiempo(){
        this.mapaDinamico();
        this.cargarDatos();
    }
}
var geolocation = new GeoLocalizacion();