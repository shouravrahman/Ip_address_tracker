import React from 'react';
import styled from 'styled-components';

// const Main = styled.div``;
const Title = styled.h1`
	color: hsl(0, 0%, 17%);
	font-size: 1.4rem;
	font-weight: bold;
	/* margin-bottom: 20px; */
	font-family: 'Rubik', sans-serif;
	font-weight: 500;

	@media screen and (max-width: 830px) {
		font-size: 0.5rem;
		color: hsl(0, 0%, 59%);
		font-weight: 700;
		text-transform: uppercase;
	}
`;
const Info = styled.h3`
	color: hsl(0, 0%, 59%);
	margin-top: 20px;
	font-family: 'Rubik', sans-serif;
	font-weight: 500;
	text-align: left;

	@media screen and (max-width: 830px) {
		font-size: 1.2rem;
		color: hsl(0, 0%, 17%);
		margin-top: 10px;
	}
`;
const Main = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.4rem 0;
	align-items: center;
	justify-content: center;
	position: relative;

	@media screen and (max-width: 830px) {
		padding: 1rem 0;
	}
`;
const Base = ({ title, info }) => {
	return (
		<Main>
			<Title>{title}</Title>
			<Info>{info}</Info>
		</Main>
	);
};

export default Base;
