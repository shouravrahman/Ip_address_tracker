import React from 'react';
import { Box, Location, IP, TimeZone, ISP } from './Details.elements';
import { Roller } from 'react-awesome-spinners';

const Details = ({ res, error, isLoading }) => {
	console.log(res);
	return isLoading ? (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '0.5rem',
			}}
		>
			<Roller />
		</div>
	) : (
		<>
			<Box>
				<IP>
					<h3>IP Address</h3>
					<h1>{res && res.ip}</h1>
				</IP>
				<Location>
					<h3>Location</h3>
					<h1>{res && res.location.city}</h1>
				</Location>
				<TimeZone>
					<h3>Timezone</h3>
					<h1>{res && res.location.timezone}</h1>
				</TimeZone>
				<ISP>
					<h3>ISP</h3>
					<h1>{res && res.isp}</h1>
				</ISP>
			</Box>
		</>
	);
};

export default Details;
