function initMap() {
  var southStation =  new google.maps.LatLng({lat: 42.352271, lng: -71.05524200000001});
  var map = new google.maps.Map(document.getElementById('map'), {
    center: southStation,
    zoom: 10,
  });

    var infoWindow = new google.maps.InfoWindow ({
        maxWidth: 200

    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });

        infoWindow.setPosition(pos);
        var distance = findShortestDistance(pos).distance;
        var closestStop = findShortestDistance(pos).stop;
        //var disString = distance.toString();
        infoWindow.setContent(findShortestDistance(pos).name);
       
        var shortestPath = [pos, closestStop];
        var shortestPathLine = new google.maps.Polyline({
            path: shortestPath,
            geodesic: true,
            strokeColor: '#00ff00',
            strokeOpacity: 1.0,
            strokeWeight: 2
          });
        shortestPathLine.setMap(map);

        myMarker = new google.maps.Marker({position: pos, map: map});
        myMarker.addListener('click', function() {
            infoWindow.open(map, myMarker);
        });

        map.setCenter(pos);
       }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }



    setMarkers(map);
}

function setMarkers(map) {
    var southStation =  {lat: 42.352271, lng: -71.05524200000001};
    var marker = new google.maps.Marker({position: southStation, map: map, icon: 'train_small.png'});
    var southStationWindow = new google.maps.InfoWindow ({
        maxWidth: 200,
        content: 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place-sstat'
    });
    marker.addListener('click', function() {
        southStationWindow.open(map, marker);
    });
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

}



function findShortestDistance(pos) {
    var southStation = new google.maps.LatLng({lat: 42.352271, lng: -71.05524200000001});
    var Andrew = new google.maps.LatLng({lat: 42.330154, lng: -71.057655});
    var porterSq = new google.maps.LatLng({lat: 42.3884, lng: -71.11914899999999});
    var harvardSq = new google.maps.LatLng({lat: 42.373362, lng:  -71.118956});
    var jkfUmass = new google.maps.LatLng({lat: 42.320685, lng: -71.052391});
    var savinHill = new google.maps.LatLng({lat: 42.31129, lng: -71.053331});
    var parkStreet = new google.maps.LatLng({lat: 42.35639457, lng: -71.0624242});
    var broadway = new google.maps.LatLng({lat: 42.342622, lng: -71.056967});
    var northQuincy = new google.maps.LatLng({lat: 42.275275, lng: -71.029583});
    var shawmut = new google.maps.LatLng({lat:42.29312583, lng: -71.06573796000001});
    var davis = new google.maps.LatLng({lat: 42.39674, lng: -71.121815});
    var alewife = new google.maps.LatLng({lat: 42.395428, lng: -71.142483});
    var kendallMIT = new google.maps.LatLng({lat: 42.36249079, lng: -71.08617653});
    var charlesMGH = new google.maps.LatLng({lat: 42.361166, lng:  -71.070628});
    var downtownCrossing = new google.maps.LatLng({lat: 42.355518, lng: -71.060225});
    var quincyCenter = new google.maps.LatLng({lat:  42.251809, lng: -71.005409});
    var quincyAdams = new google.maps.LatLng({lat:  42.233391, lng: -71.007153});
    var ashmont = new google.maps.LatLng({lat: 42.284652, lng: -71.06448899999999});
    var wollaston = new google.maps.LatLng({lat: 42.2665139, lng: -71.0203369});
    var fieldsCorner = new google.maps.LatLng({lat: 42.300093, lng: -71.061667});
    var centralSquare = new google.maps.LatLng({lat: 42.365486, lng: -71.103802});
    var braintree = new google.maps.LatLng({lat: 42.2078543, lng: -71.0011385});

    var allStops = [southStation, Andrew,  porterSq, harvardSq, jkfUmass, savinHill, parkStreet, 
      broadway, northQuincy, shawmut, davis, alewife, kendallMIT, charlesMGH, downtownCrossing,
      quincyCenter, quincyAdams, ashmont, wollaston, fieldsCorner, centralSquare, braintree ];

    var stopNames = ["South Station", "Andrew", "Porter Square", "Harvard Square", "JFK/Umass", "Savin Hill",
     "Park Street", "Broadway", "North Quincy", "Shawmut", "Davis", "Alewife", "Kendall/MIT", "Charles/MGH", 
     "Downtown Crossing", "Quincy Center", "Quincy Adams", "Ashmont", "Wollaston", "Fields Corner", "Central Square", 
     "Braintree" ];

    var allDistances = [];

    for (let i = 0; i < allStops.length; i++) {
        allDistances.push(google.maps.geometry.spherical.computeDistanceBetween(pos, allStops[i]));
    }

    let index = allDistances.indexOf(Math.min.apply(Math, allDistances));

    return {distance: Math.min.apply(Math, allDistances), stop: allStops[index], name: stopNames[index]};



}




