let map;
let userMarker;

//https://www.google.com/maps/place/KPU+Library+Surrey/@49.1322448,-122.8717739,447m/data=!3m1!1e3!4m6!3m5!1s0x5485dbd99894e187:0x4ea5ad680d12aa65!8m2!3d49.1320431!4d-122.8713898!16s%2Fg%2F11cn0qc525?entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D

const library = {
    latitude: 49.1322,
    longitude: -122.87068
};

function initMap() {
    map = Leaflet.map("map").setView([library.latitude, library.longitude], 13);

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap"
    }).addTo(map);

    Leaflet.marker([library.latitude, library.longitude])
        .addTo(map)
        .bindPopup("KPU Surrey Library");
}

function updateLocation() {
    navigator.geolocation.getCurrentPosition((position) => {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        document.getElementById("latitude").textContent = latitude;
        document.getElementById("longitude").textContent = longitude;

        if (!userMarker) {
            userMarker = Leaflet.marker([latitude, longitude])
                .addTo(map)
                .bindPopup("You are here");
        } else {
            userMarker.setLatitudeLongitude([latitude, longitude]);
        }

        map.setView([latitude, longitude]);

        const distance = map.distance(
            [latitude, longitude],
            [library.latitude, library.longitude]
        ) / 1000;//to get km. comment out to get meters

        document.getElementById("distance").textContent =
            distance.toFixed(2) + " km";

        document.getElementById("lastUpdated").textContent =
            "Last Updated: " + new Date().toLocaleTimeString();
    }, (error) => {
        alert("Unable to get location. Please allow location access.");
    });
}

initMap();
updateLocation();

document.getElementById("refreshBtn").addEventListener("click", updateLocation);
