import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import React from 'react';
import { Form, FormInput, Head, HeadLine, Button } from './Header.elements';

const Header = ({ getIp }) => {
	const [input, setInput] = useState('');

	const onChange = (q) => {
		setInput(q);
		getIp(q);
	};
	return (
		<>
			{/* styled components */}
			<Head>
				<HeadLine>IP Address Tracker</HeadLine>
				<Form
					onSubmit={(e) => {
						e.preventDefault();
						onChange(input);
						setInput('');
					}}
				>
					<FormInput
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
						placeholder='Search for any IP address or Domain'
					/>
					<Button type='submit'>
						<FaArrowRight />
					</Button>
				</Form>
			</Head>
		</>
	);
};

export default Header;
