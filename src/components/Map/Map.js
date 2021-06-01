import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from './Icon';

const Map = ({ res }) => {
	const position = [res.location.lat, res.location.lng];
	return (
		<MapContainer center={position} zoom={18} scrollWheelZoom={true}>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={position} icon={icon}></Marker>
		</MapContainer>
	);
};

export default Map;
