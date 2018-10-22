var map;
var southStation =  {lat: 42.352271, lng: -71.05524200000001};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: southStation,
    zoom: 8
  });
  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var marker = new google.maps.Marker({position: southStation, map: map, icon: image});

  var Andrew = {lat:  42.330154, lng: -71.057655};
  var porterSq = {lat: 42.3884, lng: -71.11914899999999};
  var harvardSq = {lat: 42.373362, lng:  -71.118956};
  var jkfUmass = {lat: 42.320685, lng: -71.052391};
  var savinHill = {lat: 42.31129, lng: -71.053331};
  var parkStreet = {lat: 42.35639457, lng: -71.0624242};
  var broadway = {lat: 42.342622, lng: -71.056967};
  var northQuincy = {lat: 42.275275, lng: -71.029583};
  var shawmut = {lat:42.29312583, lng: -71.06573796000001};
  var davis = {lat: 42.39674, lng: -71.121815};
  var alewife = {lat: 42.395428, lng: -71.142483};
  var kendallMIT = {lat: 42.36249079, lng: -71.08617653};
  var charlesMGH = {lat: 42.361166, lng:  -71.070628};
  var downtownCrossing = {lat:  42.355518, lng: -71.060225};
  var quincyCenter = {lat:  42.251809, lng: -71.005409};
  var quincyAdams = {lat:  42.233391, lng: -71.007153};
  var ashmont = {lat: 42.284652, lng: -71.06448899999999};
  var wollaston = {lat: 42.2665139, lng: -71.0203369};
  var fieldsCorner = {lat: 42.300093, lng: -71.061667};
  var centralSquare = {lat:  42.365486, lng:  -71.103802};
  var braintree = {lat: 42.2078543, lng:  -71.0011385};

  var stationCoordinates = [
    alewife, 
    davis,
    porterSq,
    harvardSq,
    centralSquare,
    kendallMIT,
    charlesMGH,
    parkStreet,
    downtownCrossing, 
    SouthStation,
    broadway,
    Andrew,
    //jkfUmass,
    // northQuincy, //braintree branch
    // wollaston, //braintree branch
    // quincyCenter, //braintree branch
    // quincyAdams, //braintree branch
    // braintree, //braintree branch
    // savinHill, //ashmont branch
    // fieldsCorner,//ashmont branch
    // shawmut,//ashmont branch
    // ashmont, //ashmont branch
    
    

  ];
  var stationPath = new google.maps.Polyline({
    path: stationCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  stationPath.setMap(map);
}