import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoidnBhdGVsNjIxIiwiYSI6ImNra2U4cXR6bjBhcnYybm9kaHpldmJ4dnMifQ.8jsjeQ0BM2z-iBts9jlNEw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.641, 41.895], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const markerCHI = document.createElement('div');
markerCHI.style.width = '32px';
markerCHI.style.height = '39px';
markerCHI.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
new mapboxgl.Marker(markerCHI).setLngLat([-87.641, 41.895]).addTo(map);
