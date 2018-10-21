var map;
var southStation =  {lat: 42.352271, lng: -71.05524200000001};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: southStation,
    zoom: 8
  });
  var image = 'https://www.google.com/search?q=train+station+emoji&rlz=1C5CHFA_enUS772US772&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj4lM69o5jeAhXylOAKHR-wDmwQ_AUIDigB&biw=1214&bih=755#imgrc=t9GcRR2izbj6jM:';
  var marker = new google.maps.Marker({position: southStation, map: map, icon: image});
}