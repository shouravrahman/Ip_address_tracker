// import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import React from 'react';
import { Form, FormInput, Head, HeadLine, Button } from './Header.elements';
// import { useFetch } from '../../useFetch';

const Header = () => {
	return (
		<>
			{/* styled components */}
			<Head>
				<HeadLine>IP Address Tracker</HeadLine>
				<Form>
					<FormInput placeholder='Search for any IP address or Domain' />
					<Button type='submit'>
						<FaArrowRight />
					</Button>
				</Form>
			</Head>
		</>
	);
};

export default Header;
