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
`;

export const HeadLine = styled.h1`
	font-size: 2.5rem;
	color: #fff;
	text-align: center;
	margin-top: 5rem;
	margin-bottom: 2rem;
`;
export const Form = styled.form`
	max-width: 500px;
	width: 100%;
	height: 30vh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	/* background: url(${bg}); */
`;

export const FormInput = styled.input`
	border: 2px solid #eee;
	outline: none;
	align-self: flex-start;
	color: black;
	height: 30%;
	width: 85%;
	margin: 0 auto;
	padding: 10px 20px;
	border-bottom-left-radius: 20px;
	border-top-left-radius: 20px;
	font-size: 1.2rem;
	text-align: left;
`;

export const Button = styled.button`
	width: 15%;
	height: 30%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-start;
	outline: none;
	border: none;
	text-align: center;
	background: black;
	font-size: 2rem;
	/* padding: 5px; */
	color: white;
	border-bottom-right-radius: 20px;
	border-top-right-radius: 20px;
`;
