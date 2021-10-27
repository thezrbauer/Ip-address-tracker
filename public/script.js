
const source = "https://geo.ipify.org/api/v2/country?apiKey=at_wT9qMF2XMOaUjbYGkPuZ4RA6FGYyM&ipAddress=8.8.8.8"
 
async function getJSON() {
    const response = await fetch(source);
    const data = await response.json();
    console.log(data);
}

getJSON();


// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);