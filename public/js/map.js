console.log("Leaflet =", typeof L);
console.log("Map JS Loaded");
console.log("coordinates =", coordinates);
console.log("listingTitle =", listingTitle);

window.onload = function () {
     const longitude = coordinates[0];
    const latitude = coordinates[1];

    console.log("longitude =", longitude);
    console.log("latitude =", latitude);
    const map = L.map("map").setView([latitude, longitude], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup(`<b>${listingTitle}</b>`)
        .openPopup();
};