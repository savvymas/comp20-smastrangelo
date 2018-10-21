var map;
var southStation =  {lat: 42.352271, lng: -71.05524200000001};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: southStation,
    zoom: 8
  });
  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var marker = new google.maps.Marker({position: southStation, map: map, icon: image});

  var stationCoordinates = [
    {lat: 42.352271, lng: -71.05524200000001},
    {lat:  42.330154, lng: -71.057655},
    {lat: 42.3884, lng: -71.11914899999999},
    {lat: 42.373362, lng:  -71.118956}
  ];
  var flightPath = new google.maps.Polyline({
    path: stationCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
}