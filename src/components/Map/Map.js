import { Marker, Popup, TileLayer } from 'react-leaflet';
// import { Icon } from 'leaflet';
import React from 'react';
import { Container, MyMap } from './Map.elements';

const Map = ({ res }) => {
	const position = [res.location.lat, res.location.lng];
	return (
		<Container>
			<MyMap center={position} zoom={10} scrollWheelZoom={false}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MyMap>
		</Container>
	);
};

export default Map;
