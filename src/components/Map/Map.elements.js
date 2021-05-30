import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const Container = styled.div`
	max-width: 1200px;
	width: 100%;
	height: 40vh;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`;

// export const Container = styled.div`
// 	font-size: 24px;
// 	font-weight: bold;
// 	/* max-width: 1200px;
// 	/* width: 100%; */
// 	/* height: 40vh; */
// `;

export const MyMap = styled(MapContainer)`
	/*
    Any dynamic styling that will change the
    dynamically generated classname will remove
    the leaflet classnames from the container.
  */

	height: 100%;
	width: 100%;
`;
