import styled from 'styled-components';
import bg from '../../images/pattern-bg.png';

export const Head = styled.div`
	max-width: 100%;
	height: 40vh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	flex-direction: column;
	background-image: url(${bg});
	background-position: 0 0;
	background-repeat: no-repeat;
	background-size: cover;

	@media screen and (max-width: 830px) {
		height: 30vh;
	}
`;

export const HeadLine = styled.h1`
	font-size: 2.5rem;
	color: #fff;
	text-align: center;
	margin-top: 5rem;
	margin-bottom: 2rem;
	font-family: 'Rubik', sans-serif;
	font-weight: 700;

	@media screen and (max-width: 830px) {
		font-size: 2rem;
		margin-top: 1.5rem;
		margin-bottom: 1rem;
	}
`;
export const Form = styled.form`
	max-width: 500px;
	width: 100%;
	height: 40vh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;

	@media screen and (max-width: 830px) {
		height: 20vh;
	}
`;

export const FormInput = styled.input`
	border: 2px solid #eee;
	outline: none;
	align-self: flex-start;
	color: black;
	height: 40%;
	width: 90%;
	margin: 0 auto;
	padding: 20px 0px;
	border-bottom-left-radius: 15px;
	border-top-left-radius: 15px;
	font-size: 1.2rem;
	text-align: center;
	font-family: 'Rubik', sans-serif;
	font-weight: 400;
	caret-color: blue;
	@media screen and (max-width: 830px) {
		height: 30%;
		padding: 10px 0px;
		margin: 0 10px;

		&::placeholder {
			font-size: 1rem;
		}
	}
	&::placeholder {
		text-align: center;
	}
	&:hover {
		cursor: pointer;
	}
`;

export const Button = styled.button`
	width: 10%;
	height: 40%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-start;
	outline: none;
	border: none;
	text-align: center;
	padding: 22px 10px;
	background: black;
	font-size: 1.5rem;
	color: white;
	border-bottom-right-radius: 15px;
	border-top-right-radius: 15px;
	font-family: 'Rubik', sans-serif;

	@media screen and (max-width: 830px) {
		height: 30%;
		margin: 0 10px 0 -10px;
	}
	&:hover {
		cursor: pointer;
		background: hsl(0, 0%, 17%);
	}
`;
