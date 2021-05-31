import L from 'leaflet';
import marker from '../../images/icon-location.svg';
const icon = new L.Icon({
	iconUrl: marker,
	iconRetinaUrl: marker,
	iconAnchor: null,
	popupAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(32, 45),
	// className: 'leaflet-div-icon',
});

export { icon };
