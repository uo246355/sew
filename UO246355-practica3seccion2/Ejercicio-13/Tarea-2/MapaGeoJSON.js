"use strict";
class GeoLocalizacion {
    constructor() {
    }
    mapaDinamico() {
        var archivos = $("input[name='subirArchivos']")[0].files;
        var jsonDoc;
        var map = new google.maps.Map($("main")[0], {
            center: new google.maps.LatLng(43.3602900, -5.8447600),
            zoom: 8,
            mapTypeId: 'terrain'
        });
        var lector = new FileReader();
        lector.onload = function (evento) {
            //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
            //La propiedad "result" es donde se almacena el contenido del archivo
            //Esta propiedad solamente es válida cuando se termina la operación de lectura
            //$("main").append('<label for="area' + i + '">Texto del archivo:</label> <textarea id="area' + i + '" name="area' + i + '" rows="40" cols="120">'+ lector.result + '</textarea>');
            //console.log(lector.result);
            jsonDoc = JSON.parse(lector.result);
            let placeMarkName;

                for (var i = 0; i < jsonDoc.features.length; i++) {
                    placeMarkName = jsonDoc.features[i].properties.Name;
                    var coords = jsonDoc.features[i].geometry.coordinates;
                    var myLatlng = new google.maps.LatLng(+coords[1], +coords[0]);
                    var marcador = new google.maps.Marker({
                        map: map,
                        position: myLatlng,
                        title: placeMarkName
                    });
                }
            //console.log(xmlDoc);
        }
        lector.readAsText(archivos[0]);
        //parser = new DOMParser();
        // xmlDoc = parser.parseFromString(text,"text/xml");
        //xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;

    }
}
var geolocation = new GeoLocalizacion();