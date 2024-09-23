<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
  <script>
    // Initialize the map and set default view at the given latitude and longitude
    var initialLatitude = 12.989815;
    var initialLongitude = 79.971420;
    var map = L.map('map').setView([initialLatitude, initialLongitude], 15); // Default center

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker at the initial position
    var marker = L.marker([initialLatitude, initialLongitude]).addTo(map);

    // Fetch location data from Firebase
    var firebaseUrl = "https://fall-detection-ff609-default-rtdb.firebaseio.com"; // Replace with your Firebase URL
    
    function updateLocation() {
      fetch(firebaseUrl)
        .then(response => response.json())
        .then(data => {
          var position = [data.latitude, data.longitude];
          map.setView(position, 15); // Center the map on the new position
          marker.setLatLng(position); // Update the marker position
          marker.bindPopup("Latitude: " + data.latitude + "<br>Longitude: " + data.longitude)
                .openPopup();
        })
        .catch(error => console.error('Error fetching data:', error));
    }

    // Update location every 5 seconds
    setInterval(updateLocation, 5000);

    // Button click event to show the map
    document.getElementById('showMapButton').addEventListener('click', function() {
      document.getElementById('map').style.display = 'block'; // Show the map
      map.invalidateSize(); // Fix sizing issues when the map becomes visible
      updateLocation(); // Initial call to update location
    });
  </script>
