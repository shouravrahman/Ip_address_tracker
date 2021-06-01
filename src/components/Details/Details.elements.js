import styled from 'styled-components';

export const Box = styled.div`
	width: 1000px;
	display: flex;
	margin: 0 auto;
	padding: 0.2rem;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 27%;
	left: 50%;
	text-align: left;
	transform: translate(-50%, 50%);
	z-index: 111;
	background: white;
	gap: 7rem;
	border-radius: 20px;
	box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 10%);

	@media screen and (max-width: 1120px) {
		gap: 4rem;
		padding: 0 0.4rem;
		justify-content: space-evenly;
		width: 800px;
		flex-wrap: wrap;
	}
	@media screen and (max-width: 830px) {
		flex-direction: column;
		width: 300px;
		position: absolute;
		gap: 0;
		top: -20px;
		left: 50%;
	}
`;

export const LoaderDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
