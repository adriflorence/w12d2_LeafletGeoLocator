const MapWrapper = function (container, coords, zoom) {

  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

  this.map = L.map(container).setView(coords, zoom).addLayer(osmLayer);
  this.map.on("click", function(event) {
      // ONELINER: this.map.on("click", event => this.addMarker(event.latlng));
      const markerCoords = [event.latlng.lat, event.latlng.lng];
      this.addMarker(markerCoords); // this = event
  }.bind(this));

  this.map.on('locationfound', function (locationEvent) {
  console.log(locationEvent)
})
};

MapWrapper.prototype.addMarker = function (coords) {
  L.marker(coords).addTo(this.map);
};

MapWrapper.prototype.takeMeTo = function (coords) {
  this.map.panTo(coords, 6); // flyTo is more fancy
  L.marker(coords).addTo(this.map).bindPopup(`<a href='https://www.fiji.travel/'> Fiji </a>`).openPopup();
};

MapWrapper.prototype.currentLocation = function() {
  this.map.locate({setView : true});
  // L.marker(coords).addTo(this.map).bindPopup("YOU ARE HERE").openPopup();
}
