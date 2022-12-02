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
const salvadorCR = L.marker([40.75701976642659, -73.9080222302619], {icon: bikeIcon}).addTo(nycMap);
const thomasP = L.marker([40.75165685945268, -73.93169436470411], {icon: bikeIcon}).addTo(nycMap);
const gelacioRR = L.marker([40.74578170390995, -73.92602568249532], {icon: bikeIcon}).addTo(nycMap);
const rogerH = L.marker([40.738954609806605, -73.92666702604866], {icon: bikeIcon}).addTo(nycMap);
const hugoR = L.marker([40.731403559294804, -73.91913776055202], {icon: bikeIcon}).addTo(nycMap);
const anaR = L.marker([40.726305684231946, -73.92032085301416], {icon: bikeIcon}).addTo(nycMap);


// adding polylines for suggested bike route between ghost bikes
const polyline = L.polyline([
    [40.75701976642659, -73.9080222302619], //salvadorCR on 31 Ave at 51 St
    [40.76353066824566, -73.9218830704631], //to 31 Ave and 33 St
    [40.75210236643643, -73.93112206157521], //to 33 St and Northern Blvd
    [40.75210361885178, -73.93183990771465], //to Northern Blvd and Honeywell
    [40.75165685945268, -73.93169436470411], //thomasP on Honewell south of Northern Blvd
    [40.74717965080454, -73.92925355958174], //to Honewell and Skillman
    [40.74615747375294, -73.92941633539097], //to 35 St and 43 Ave
    [40.74578170390995, -73.92602568249532], //to gelacioRR on 43 Ave at 39 St
    [40.73861788151151, -73.9271128890819], //to 39 St and Greenpoint Ave
    [40.738954609806605, -73.92666702604866], //to rogerH on Greenpoint Ave east of 39 St
    [40.74273680482373, -73.91671745316953], //to Greenpoint Ave and 48 St
    [40.731403559294804, -73.91913776055202], //to hugoR on 48th at Long Island Exp Entrance
    [40.73120405948514, -73.91920648254266], //48 St slants at 54 Ave
    [40.730089152958506, -73.91896323632581], //48 St stops slant at 54 St
    [40.726299109820005, -73.92038219024525], //48 St at 56 Rd
    [40.726305684231946, -73.92032085301416] //anaR on 56 Rd just eaast of 48 St
], {
    color: "blue"
}).addTo(nycMap);
