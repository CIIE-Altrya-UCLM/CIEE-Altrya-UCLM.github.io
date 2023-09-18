var map = L.map('map').setView([39.86488, -4.04109], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    fullscreenControl: true,
}).addTo(map);

var ciieIcon = L.icon({
    iconUrl: '/assets/img/logos/logo_curso.svg',

    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([39.86478, -4.04210], {icon: ciieIcon}).addTo(map);
marker.bindPopup("CIIE - Aula 10.1", {
    closeButton: false
});

L.control.scale({imperial: false,}).addTo(map);