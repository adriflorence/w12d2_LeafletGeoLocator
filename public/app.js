const app = function () {
  // const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

  let coords = [51.584893, -2.998752];
  let zoom = 10;
  let containerID = "main-map";
  let fijiCoords = [-17.776536, 177.435623];

  const mainMap = new MapWrapper(containerID, coords, zoom);
  // const map = L.map('main-map').setView([latitude,longitude], 1).addLayer(osmLayer);
  mainMap.addMarker(coords);
  mainMap.addMarker([51.665967, -2.777073]);

  var fijiButton = document.querySelector('#fiji');
  fijiButton.addEventListener('click', function(){
    mainMap.takeMeTo(fijiCoords, zoom);
  });

  var button = document.querySelector('#location');
  button.addEventListener('click', function(){
    mainMap.currentLocation();
  });
};

// gonna run when the entire HTML document loaded and parsed
window.addEventListener('DOMContentLoaded', app);
// window.addEventListener('load', app); // ??
