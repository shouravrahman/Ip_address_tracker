import React from 'react';
import styled from 'styled-components';

// const Main = styled.div``;
const Title = styled.h1`
	color: hsl(0, 0%, 17%);
	font-size: 1.4rem;
	font-weight: bold;
	margin-bottom: 30px;
	font-family: 'Rubik', sans-serif;
	font-weight: 500;
`;
const Info = styled.h3`
	color: hsl(0, 0%, 59%);
	margin-top: 30px;
	font-family: 'Rubik', sans-serif;
	font-weight: 400;
`;
const Main = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 0;
	align-items: center;
	justify-content: center;
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
