// let newYorkCoords = [40.73, -74.0059];
// let mapZoomLevel = 12;


// Create the createMap function.
function createMap (bikeStations) {
  
  // Create the tile layer that will be the background of our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  // Create a baseMaps object to hold the lightmap layer.
  let baseMaps = {
    Street: street
  };

  // Create an overlayMaps object to hold the bikeStations layer.
  let overlayMaps = {
    Stations: bikeStations
  };

  // Create the map object with options.
  let myMap = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [street, bikeStations]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
}

// Create the createMarkers function.
function createMarkers () {
  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.
  let bikeMarkers = [];

  // Loop through the stations array.
  for (let i = 0; i < response.length; i++) {
    // For each station, create a marker, and bind a popup with the station's name.
  
    // Add the marker to the bikeMarkers array.
    bikeMarkers.push(
      L.marker(response.data.stations[i].lat, response.data.stations[i].lon)
    );
  }
  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  
};

// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
let url = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json"
d3.json(url).then(function(response) {
  console.log(response.data.stations[0]);
});