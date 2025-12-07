let map = L.map('map').setView([51.23009, 4.41616], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle([51.23025, 4.4161], {
    color: 'red',
    fillColor: 'blue',
    fillOpacity: 0.5,
    radius: 20
}).addTo(map);

let thuismap = L.map('thuismap').setView([51.2014372,  4.4278008], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(thuismap);

L.circle([51.2014372, 4.4278008], {
    color: "red",
    fillColor: "pink",
    fillOpacity: 0.5,
    radius: 20
    
}).addTo(thuismap);
