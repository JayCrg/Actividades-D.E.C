/*var lat1, lon2;
navigator.geolocation.watchPosition(cb);
function cb(pos){
  let lat2 = pos.coords.latitude, lon2 = pos.coords.longitude;
  document.write(pos.coords.latitude, ' ')
  document.write(pos.coords.longitude + '<br>')
  if (lat1 != undefined && lon1 != undefined){
    dis = getKilometros(lat1, lon1, lat2, lon2);
    document.write('distancia recorrida:'+ dis+'km <br>');
  }
  lat1 = pos.coords.latitude;
  lon1 = pos.coords.longitude;

}
function getKilometros(lat1,lon1,lat2,lon2)
 {
 rad = function(x) {return x*Math.PI/180;}
let R = 6378.137; //Radio de la tierra en km
let dLat = ( lat2 - lat1 );
let dLong = ( lon2 - lon1 );
let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos((lat1)) * Math.cos((lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
let d = R * c;
return d.toFixed(3); //Retorna tres decimales
 }*/

 /////////////////////////////////////////////////////////////////////////////
/*navigator.geolocation.getCurrentPosition(f)
function f(pos){
  var platform = new H.service.Platform({
    'apikey': 'Iy0oyV4nyDSFXG6vhbY8xwDffAp0kEc4CoCaukincm4'
  });

  // Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapa'),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: { lat: pos.coords.latitude, lng:pos.coords.longitude }
    });

    ///////-------------------------------Icono

    // Define a variable holding SVG mark-up that defines an icon image:
var svgMarkup = '<svg width="24" height="24" ' +
'xmlns="http://www.w3.org/2000/svg">' +
'<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
'height="22" /><text x="12" y="18" font-size="12pt" ' +
'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
'fill="white">H</text></svg>';

// Create an icon, an object holding the latitude and longitude, and a marker:
var icon = new H.map.Icon(svgMarkup),
coords = {lat:pos.coords.latitude , lng:pos.coords.longitude},
marker = new H.map.Marker(coords, {icon: icon});

// Add the marker to the map and center the map at the location of the marker:
map.addObject(marker);
map.setCenter(coords);

//------------------------------------------------------Circulo

// Instantiate a circle object (using the default style):
var circle = new H.map.Circle({lat:pos.coords.latitude , lng:pos.coords.longitude}, 800);

// Add the circle to the map:
map.addObject(circle);


//----------------------------------------------------------Ruta 


// Retrieve the target element for the map:

// Get the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate the map:


// Create the parameters for the routing request:
var routingParameters = {
  // The routing mode:
  'mode': 'fastest;car',
  // The start point of the route:
  'waypoint0': `geo!${pos.coords.latitude},${pos.coords.longitude}`,
  // The end point of the route:
  'waypoint1': 'geo!52.5309916298853,13.3846220493377',
  // To retrieve the shape of the route we choose the route
  // representation mode 'display'
  'representation': 'display'
};

// Define a callback function to process the routing response:
var onResult = function(result) {
  var route,
    routeShape,
    startPoint,
    endPoint,
    linestring;
  if(result.response.route) {
  // Pick the first route from the response:
  route = result.response.route[0];
  // Pick the route's shape:
  routeShape = route.shape;

  // Create a linestring to use as a point source for the route line
  linestring = new H.geo.LineString();

  // Push all the points in the shape into the linestring:
  routeShape.forEach(function(point) {
    var parts = point.split(',');
    linestring.pushLatLngAlt(parts[0], parts[1]);
  });

  // Retrieve the mapped positions of the requested waypoints:
  startPoint = route.waypoint[0].mappedPosition;
  endPoint = route.waypoint[1].mappedPosition;

  // Create a polyline to display the route:
  var routeLine = new H.map.Polyline(linestring, {
    style: { strokeColor: 'blue', lineWidth: 10 }
  });

  // Create a marker for the start point:
  var startMarker = new H.map.Marker({
    lat: startPoint.latitude,
    lng: startPoint.longitude
  });

  // Create a marker for the end point:
  var endMarker = new H.map.Marker({
    lat: endPoint.latitude,
    lng: endPoint.longitude
  });

  // Add the route polyline and the two markers to the map:
  map.addObjects([routeLine, startMarker, endMarker]);

  // Set the map's viewport to make the whole route visible:
  map.setViewBounds(routeLine.getBounds());
  }
};

// Get an instance of the routing service:
var router = platform.getRoutingService();

// Call calculateRoute() with the routing parameters,
// the callback and an error callback function (called if a
// communication error occurs):
router.calculateRoute(routingParameters, onResult,
  function(error) {
    alert(error.message);
  });

}*/   





////////////////////////////////////////////////////Openlayers
      var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
      });