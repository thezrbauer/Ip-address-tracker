

const source = 'https://geo.ipify.org/api/v1?apiKey=at_wT9qMF2XMOaUjbYGkPuZ4RA6FGYyM'
const inputContent = document.querySelector(".formInput");
const submitBtn = document.querySelector('.button');
const ipData = document.querySelector("#ip").querySelector(".content");
const locationData = document.querySelector("#location").querySelector(".content");
const timezoneData = document.querySelector("#timezone").querySelector(".content");
const ispData = document.querySelector("#something").querySelector(".content");
const mapContainer = document.querySelector("#map");
const map = L.map(mapContainer).setView([0,0], 15);
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tiles = L.tileLayer(tileURL, { attribution }).addTo(map);
const locationMarker = L.icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [46, 56],
});

async function clientIP() {
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();
    const clientIP = await data.ip;

    inputContent.value = clientIP;
    checkData(clientIP);

};

clientIP();

submitBtn.addEventListener("click", e => {
    e.preventDefault();

    if (inputContent.value) {
        checkData(inputContent.value);
    } else {
        displayError();
    }
});

function checkData(inputValue) {
    const input = inputValue;
    const domainFormat = /^(?!\-)([a-zA-Z0-9 \-?]{2,63})\.([a-zA-Z]{2,4})(.[a-z]{2,4})?$/;
    const ipFormat = /^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/;

    if (input.match(domainFormat)) {
        fetchData(input, "domain");
    } else if (input.match(ipFormat)) {
        fetchData(input, "ipAddress");
    } else {
        alert("invalid input");
    }
}

async function fetchData(inputValue, inputType) {
   const urlTemplate = `${source}&${inputType}=${inputValue}`;
   const response = await fetch(`${urlTemplate}`);
   const data = await response.json();

    generateInfo(data);
    generateMap(data);

}

function generateInfo(info) {
    const ip = info.ip;
    const isp = info.isp;
    const location = `${info.location.city}, ${info.location.country} ${info.location.postalCode}`;
    const timezone = info.location.timezone;

    ipData.textContent = ip;
    locationData.textContent = location;
    timezoneData.textContent = "UTC " + timezone;
    ispData.textContent = isp;
}
function generateMap(info) {
    const lat = info.location.lat;
    const long = info.location.lng;
    const location = `${info.location.city}, ${info.location.country} ${info.location.postalCode}`;

    const marker = L.marker([lat,long], { icon: locationMarker }).addTo(map);

    map.panTo([lat,long]);
    marker.bindPopup(location);
}


const displayError = () => alert("Please enter IP Address or domain");

