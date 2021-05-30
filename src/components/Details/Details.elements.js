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

export const IP = styled.section`
	padding: 2rem 0;

	h3 {
		color: hsl(0, 0%, 59%);
		margin-bottom: 30px;
	}
	h1 {
		color: hsl(0, 0%, 17%);
		font-size: 1.4rem;
		font-weight: bold;
	}
`;
export const Location = styled.section`
	padding: 2rem 0;
	h3 {
		color: hsl(0, 0%, 59%);
		margin-bottom: 30px;
	}
	h1 {
		color: hsl(0, 0%, 17%);
		font-size: 1.4rem;
		font-weight: bold;
	}
`;
export const TimeZone = styled.section`
	padding: 2rem 0;

	h3 {
		color: hsl(0, 0%, 59%);
		margin-bottom: 30px;
	}
	h1 {
		color: hsl(0, 0%, 17%);
		font-size: 1.4rem;
		font-weight: bold;
	}
`;
export const ISP = styled.section`
	padding: 2rem 0;

	h3 {
		color: hsl(0, 0%, 59%);
		margin-bottom: 30px;
	}
	h1 {
		color: hsl(0, 0%, 17%);
		font-size: 1.4rem;
		font-weight: bold;
	}
`;
