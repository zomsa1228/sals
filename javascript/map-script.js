function initMap() {
  let directionsDisplay = new google.maps.DirectionsRenderer;
  let directionsService = new google.maps.DirectionsService;
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 35.6964431, lng: 139.7684526},
    mapTypeId: 'hybrid'
  });

  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('right-panel'));

  let control = document.getElementById('floating-panel');
  control.style.display = 'block';
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

  let onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };

  document.getElementById('submit').addEventListener('click', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  let start = document.getElementById('start').value;
  let end = document.getElementById('end').value;
  let mode = document.getElementById('mode').value;
  let waypoint = document.getElementsByName('waypoints[]');
  let waypts = [{location: waypoint, stopover: true}];

  //waypts.push({location: waypoint});

  directionsService.route({
    origin: start,
    destination: end,
    waypoints: waypts,
    //optimizeWaypoints: true,
    travelMode: mode
  },
  function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert("ディレクションリクエストは" + status + "のために失敗しました。");
    }
  });
}
