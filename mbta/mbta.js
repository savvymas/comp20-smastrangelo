var map;
var southStation =  {lat: 42.352271, lng: -71.05524200000001};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: southStation,
    zoom: 8
  });
  var marker = new google.maps.Marker({position: southStation, map: map});
}