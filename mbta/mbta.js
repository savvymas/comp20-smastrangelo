function initMap() {
  var southStation =  {lat: 42.352271, lng: -71.05524200000001};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: southStation,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  getMyLocation();



  var marker = new google.maps.Marker({position: southStation, map: map, icon: 'train_small.png'});
  var Andrew = {lat: 42.330154, lng: -71.057655};
  var marker2 = new google.maps.Marker({position: Andrew, map: map, icon: 'train_small.png'});
  var porterSq = {lat: 42.3884, lng: -71.11914899999999};
  var marker3 = new google.maps.Marker({position: porterSq, map: map, icon: 'train_small.png'});
  var harvardSq = {lat: 42.373362, lng:  -71.118956};
  var marker4 = new google.maps.Marker({position: harvardSq, map: map, icon: 'train_small.png'});
  var jkfUmass = {lat: 42.320685, lng: -71.052391};
  var marker5 = new google.maps.Marker({position: {lat: 42.320685, lng: -71.052391}, map: map, icon: 'train_small.png'});
  var savinHill = {lat: 42.31129, lng: -71.053331};
  var marker6 = new google.maps.Marker({position: savinHill, map: map, icon: 'train_small.png'});
  var parkStreet = {lat: 42.35639457, lng: -71.0624242};
  var marker7 = new google.maps.Marker({position: parkStreet, map: map, icon: 'train_small.png'});
  var broadway = {lat: 42.342622, lng: -71.056967};
  var marker8 = new google.maps.Marker({position: broadway, map: map, icon: 'train_small.png'});
  var northQuincy = {lat: 42.275275, lng: -71.029583};
  var marker9 = new google.maps.Marker({position: northQuincy, map: map, icon: 'train_small.png'});
  var shawmut = {lat:42.29312583, lng: -71.06573796000001};
  var marker10 = new google.maps.Marker({position: shawmut, map: map, icon: 'train_small.png'});
  var davis = {lat: 42.39674, lng: -71.121815};
  var marker11 = new google.maps.Marker({position: davis, map: map, icon: 'train_small.png'});
  var alewife = {lat: 42.395428, lng: -71.142483};
  var marker12 = new google.maps.Marker({position: alewife, map: map, icon: 'train_small.png'});
  var kendallMIT = {lat: 42.36249079, lng: -71.08617653};
  var marker13 = new google.maps.Marker({position: kendallMIT, map: map, icon: 'train_small.png'});
  var charlesMGH = {lat: 42.361166, lng:  -71.070628};
  var marker14 = new google.maps.Marker({position: charlesMGH, map: map, icon: 'train_small.png'});
  var downtownCrossing = {lat: 42.355518, lng: -71.060225};
  var marker15 = new google.maps.Marker({position: downtownCrossing, map: map, icon: 'train_small.png'});
  var quincyCenter = {lat:  42.251809, lng: -71.005409};
  var marker16 = new google.maps.Marker({position: quincyCenter, map: map, icon: 'train_small.png'});
  var quincyAdams = {lat:  42.233391, lng: -71.007153};
  var marker17 = new google.maps.Marker({position: quincyAdams, map: map, icon: 'train_small.png'});
  var ashmont = {lat: 42.284652, lng: -71.06448899999999};
  var marker18 = new google.maps.Marker({position: ashmont, map: map, icon: 'train_small.png'});
  var wollaston = {lat: 42.2665139, lng: -71.0203369};
  var marker19 = new google.maps.Marker({position: wollaston, map: map, icon: 'train_small.png'});
  var fieldsCorner = {lat: 42.300093, lng: -71.061667};
  var marker20 = new google.maps.Marker({position: fieldsCorner, map: map, icon: 'train_small.png'});
  var centralSquare = {lat: 42.365486, lng: -71.103802};
  var marker21 = new google.maps.Marker({position: centralSquare, map: map, icon: 'train_small.png'});
  var braintree = {lat: 42.2078543, lng: -71.0011385};
  var marker22 = new google.maps.Marker({position: braintree, map: map, icon: 'train_small.png'});

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
    {lat: 42.352271, lng: -71.05524200000001},
    broadway,
    Andrew,
    {lat: 42.320685, lng: -71.052391}
  ];

  var braintreeBranch = [
    {lat: 42.320685, lng: -71.052391},
    northQuincy, //braintree branch
    wollaston, //braintree branch
    quincyCenter, //braintree branch
    quincyAdams, //braintree branch
    braintree, //braintree branch
  ];

  var ashmontBranch = [
    {lat: 42.320685, lng: -71.052391},
    savinHill, //ashmont branch
    fieldsCorner,//ashmont branch
    shawmut,//ashmont branch
    ashmont, //ashmont branch
  ];

  var stationPath = new google.maps.Polyline({
    path: stationCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  var braintreePath = new google.maps.Polyline({
    path: braintreeBranch,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  var ashmontPath = new google.maps.Polyline({
    path: ashmontBranch,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  stationPath.setMap(map);
  braintreePath.setMap(map);
  ashmontPath.setMap(map);


    function renderMap(myLat, myLng) {
        console.log("in render map");
        me = new google.maps.LatLng(myLat, myLng);
        // Update map and go there...
        map.panTo(me);
        
        // Create a marker
        marker = new google.maps.Marker({
            position: me,
            title: "Here I Am!",
            map: map
        });
        marker.setMap(map);
            
        // Open info window on click of marker
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(marker.title);
            infowindow.open(map, marker);
        });
    } 

    function getMyLocation() {
        if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
            console.log("hit 1");
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log("hit 2");
                myLat = position.coords.latitude;
                myLng = position.coords.longitude;
                console.log("reached if");
                renderMap(myLat, myLng);
            });
        }
        else {
            console.log("hit error");
            alert("Geolocation is not supported by your web browser.  What a shame!");
        }
    }
   
}

