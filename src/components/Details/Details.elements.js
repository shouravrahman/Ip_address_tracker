import styled from 'styled-components';

export const Box = styled.div`
	width: 1000px;
	display: flex;
	margin: 0 auto;
	padding: 0.2rem;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 25%;
	left: 50%;
	text-align: left;
	transform: translate(-50%, 50%);
	z-index: 111;
	background: white;
	gap: 7rem;
	border-radius: 20px;
	box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 10%);
`;

export const LoaderDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
