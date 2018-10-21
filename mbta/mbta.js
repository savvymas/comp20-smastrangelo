var map;
var southStation =  {lat: 42.352271, lng: -71.05524200000001};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: southStation,
    zoom: 8
  });
  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var marker = new google.maps.Marker({position: southStation, map: map, icon: image});
}