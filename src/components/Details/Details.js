import React from 'react';
import { Box, LoaderDiv } from './Details.elements';
import { Ellipsis } from 'react-awesome-spinners';
import Base from './Base';

const Details = ({ res, error, isLoading }) => {
	console.log(res);
	return isLoading ? (
		<LoaderDiv>
			<Ellipsis color={'#5771D8'} />
		</LoaderDiv>
	) : (
		<>
			<Box>
				<Base title={'IP Address'} info={res && res.ip} />
				<Base title={'Location'} info={res && res.location.city} />
				<Base title={'Timezone'} info={res && res.location.timezone} />
				<Base title={'ISP'} info={res && res.isp} />
			</Box>
		</>
	);
};

export default Details;
