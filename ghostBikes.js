let nycMap;
nycMap = L.map("map");

// create tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(nycMap);

// set view to show all most of the boroughs
nycMap.setView([40.74149408398735, -73.93312694226506], 14);

// custom icon
const bikeIcon = L.icon({
    iconUrl: 'bike.png',
    iconSize: [25, 25], // size of the icon
    popupAnchor:  [-3, -10] // point from which the popup should open relative to the iconAnchor
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
    color: "lightblue"
}).addTo(nycMap);


// add popups to each ghost bike with name, age, photo, and link to Ghost Bike Project
salvadorCR.bindPopup("<h3>Salvador Chairez-Rodriguez, Age 50</h3><a href='http://ghostbikes.org/new-york-city/salvador-chairez-rodriguez'>Learn more about Salvador</a>");
thomasP.bindPopup("<h3>Thomas Panto, Age 32</h3><a href='https://nyc.streetsblog.org/2021/10/11/e-cyclist-rider-killed-on-roadway-that-once-had-a-protected-bike-lane-until-dot-downgraded-it/'>Learn more about Thomas</a>");
gelacioRR.bindPopup("<h3>Gelacio Reyes Rosendo, Age 32</h3><a href='http://ghostbikes.org/new-york-city/gelacio-reyes-rosendo'>Learn more about Gelacio</a>");
rogerH.bindPopup("<h3>Roger Hernandez, Age 37</h3><a href='http://ghostbikes.org/new-york-city/roger-hernandez'>Learn more about Roger</a>");
hugoR.bindPopup("<h3>Hugo Ramirez, Age 23</h3><a href='http://ghostbikes.org/new-york-city/hugo-ramirez'>Learn more about Hugo</a>");
anaR.bindPopup("<h3>Ana Rodriguez, Age 34</h3><a href='http://ghostbikes.org/new-york-city/ana-rodriguez'>Learn more about Ana</a>");

//add video layers, first LatLong is the ghost bike, the second one was trial and error
//salvadorCR
let salvadorVideoUrl = 'https://briannacaszatt.commons.gc.cuny.edu/wp-content/blogs.dir/18156/files/2022/07/31Ave_51St.mp4';
let salvadorErrorOverlayUrl = 'https://briannacaszatt.commons.gc.cuny.edu/wp-content/blogs.dir/18156/files/2022/07/31Ave_51St.mp4';
let salvadorLatLngBounds = L.latLngBounds([[40.75701976642659, -73.9080222302619], [40.76330341382639, -73.89474207099873]]);

let salvadorVideoOverlay = L.videoOverlay(salvadorVideoUrl, salvadorLatLngBounds, {
    opacity: 1,
    errorOverlayUrl: salvadorErrorOverlayUrl,
    interactive: true,
    autoplay: true,
    muted: true,
    playsInline: true
}).addTo(nycMap);

//thomasP
let thomasVideoUrl = 'https://briannacaszatt.commons.gc.cuny.edu/wp-content/blogs.dir/18156/files/2022/07/HonewellSt_NorthernBlvd.mp4';
let thomasErrorOverlayUrl = 'https://briannacaszatt.commons.gc.cuny.edu/wp-content/blogs.dir/18156/files/2022/07/HonewellSt_NorthernBlvd.mp4';
let thomasLatLngBounds = L.latLngBounds([[40.75165685945268, -73.93169436470411], [40.76151082741532, -73.93868961886115]]);

let thomasVideoOverlay = L.videoOverlay(thomasVideoUrl, thomasLatLngBounds, {
    opacity: 1,
    errorOverlayUrl: thomasErrorOverlayUrl,
    interactive: true,
    autoplay: true,
    muted: true,
    playsInline: true
}).addTo(nycMap);

//gelacioRR
let gelacioVideoUrl = 'https://briannacaszatt.commons.gc.cuny.edu/wp-content/blogs.dir/18156/files/2022/07/43Ave_39St.mp4';
let gelacioErrorOverlayUrl = 'https://briannacaszatt.commons.gc.cuny.edu/wp-content/blogs.dir/18156/files/2022/07/43Ave_39St.mp4';
let gelacioLatLngBounds = L.latLngBounds([[40.74578170390995, -73.92602568249532], [40.75551455030729, -73.91741040447832]]);

let gelacioVideoOverlay = L.videoOverlay(gelacioVideoUrl, gelacioLatLngBounds, {
    opacity: 1,
    errorOverlayUrl: gelacioErrorOverlayUrl,
    interactive: true,
    autoplay: true,
    muted: true,
    playsInline: true
}).addTo(nycMap);

//rogerH
let rogerVideoUrl = 'https://briannacaszatt.commons.gc.cuny.edu/wp-content/blogs.dir/18156/files/2022/07/GreenpointAve_39St.mp4';
let rogerErrorOverlayUrl = 'https://briannacaszatt.commons.gc.cuny.edu/wp-content/blogs.dir/18156/files/2022/07/GreenpointAve_39St.mp4';
let rogerLatLngBounds = L.latLngBounds([[40.738954609806605, -73.92666702604866], [40.74861939506957, -73.93561481236107]]);

let rogerVideoOverlay = L.videoOverlay(rogerVideoUrl, rogerLatLngBounds, {
    opacity: 1,
    errorOverlayUrl: rogerErrorOverlayUrl,
    interactive: true,
    autoplay: true,
    muted: true,
    playsInline: true
}).addTo(nycMap);

//hugoR
let hugoVideoUrl = 'https://briannacaszatt.commons.gc.cuny.edu/wp-content/blogs.dir/18156/files/2022/07/48St_LongIslandExpwy.mp4';
let hugoErrorOverlayUrl = 'https://briannacaszatt.commons.gc.cuny.edu/wp-content/blogs.dir/18156/files/2022/07/48St_LongIslandExpwy.mp4';
let hugoLatLngBounds = L.latLngBounds([[40.731403559294804, -73.91913776055202], [40.74129299364717, -73.91152031628944]]);

let hugoVideoOverlay = L.videoOverlay(hugoVideoUrl, hugoLatLngBounds, {
    opacity: 1,
    errorOverlayUrl: hugoErrorOverlayUrl,
    interactive: true,
    autoplay: true,
    muted: true,
    playsInline: true
}).addTo(nycMap);

//anaR
let anaVideoUrl = 'https://briannacaszatt.commons.gc.cuny.edu/wp-content/blogs.dir/18156/files/2022/07/56Rd_48St.mp4';
let anaErrorOverlayUrl = 'https://briannacaszatt.commons.gc.cuny.edu/wp-content/blogs.dir/18156/files/2022/07/56Rd_48St.mp4';
let anaLatLngBounds = L.latLngBounds([[40.726305684231946, -73.92032085301416], [40.7191055596226, -73.90731755562315]]);

let anaVideoOverlay = L.videoOverlay(anaVideoUrl, anaLatLngBounds, {
    opacity: 1,
    errorOverlayUrl: anaErrorOverlayUrl,
    interactive: true,
    autoplay: true,
    muted: true,
    playsInline: true
}).addTo(nycMap);

//add title
L.Control.textbox = L.Control.extend({
    onAdd: function(map) {
        
    let titleText = L.DomUtil.create('div');
    titleText.id = "info_text";
    titleText.innerHTML = "<strong>Ghost Bikes in Queens</strong>"
    return titleText;
    },

    onRemove: function(map) {
    }
});
L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
L.control.textbox({ position: 'topleft' }).addTo(nycMap);

//add link to storymap
L.Control.textbox = L.Control.extend({
    onAdd: function(map) {
        
    let linkText = L.DomUtil.create('div');
    linkText.id = "storymap_link";
    linkText.innerHTML = "<a href='https://storymaps.arcgis.com/stories/e956d98f8315459ebed4866e600933b1'>Read more about Ghost Bikes in Queens</a>"
    return linkText;
    },

    onRemove: function(map) {
    }
});
L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
L.control.textbox({ position: 'bottomleft' }).addTo(nycMap);