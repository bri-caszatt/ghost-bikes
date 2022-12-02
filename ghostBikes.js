let nycMap;
nycMap = L.map("map");

// create tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(nycMap);

// set view to show all most of the boroughs
nycMap.setView([40.75042, -73.98928], 12);

// custom icon
const bikeIcon = L.icon({
    iconUrl: 'bike.png',
    iconSize: [25, 25], // size of the icon
});

// adding ghost bike coordinates
const rogerH = L.marker([40.73880793778324, -73.92721734491272], {icon: bikeIcon}).addTo(nycMap);
const anaR = L.marker([40.726424377125994, -73.92051500258381], {icon: bikeIcon}).addTo(nycMap);
const gelacioRR = L.marker([40.74598381498098, -73.92582193141851], {icon: bikeIcon}).addTo(nycMap);
const hugoR = L.marker([40.73166651405032, -73.91919456274788], {icon: bikeIcon}).addTo(nycMap);
const salvadorCR = L.marker([40.75722049847188, -73.90778387374752], {icon: bikeIcon}).addTo(nycMap);
const thomasP = L.marker([40.7521082434909, -73.93191177123401], {icon: bikeIcon}).addTo(nycMap);