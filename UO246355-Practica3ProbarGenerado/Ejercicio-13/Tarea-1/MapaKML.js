"use strict";
class GeoLocalizacion {
    constructor() {
    }
    mapaDinamico() {
        var archivos = $("input[name='subirArchivos']")[0].files;
        var parser, xmlDoc;
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
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(lector.result, "text/xml");
            let placeMarkName;
            if (xmlDoc.documentElement.nodeName == "kml") {

                for (const item of xmlDoc.getElementsByTagName('Placemark')) {
                    placeMarkName = item.getElementsByTagName('name')[0].childNodes[0].nodeValue.trim()
                    let markers = item.getElementsByTagName('Point')

                    /** MARKER PARSE **/
                    for (const marker of markers) {
                        var coords = marker.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim()
                        let coord = coords.split(",")
                        var myLatlng = new google.maps.LatLng(+coord[1], +coord[0]);
                        var marcador = new google.maps.Marker({
                            map: map,
                            position: myLatlng,
                            title: placeMarkName
                        });
                    }
                }
            } else {
                throw "error while parsing"
            }
        }
        lector.readAsText(archivos[0]);
    }
}
var geolocation = new GeoLocalizacion();