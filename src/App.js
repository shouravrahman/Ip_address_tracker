// import { useFetch } from './useFetch';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import GlobalStyle from './globalStyles';

const API_KEY = 'at_xtpIidIz9vUqEzlBODaUwtChmVRXf';
// const URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ip}`;

function App() {
	const [ip, setIp] = useState('');
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(
					`https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ip}`
				);
				const json = await res.json();
				setResponse(json);
				setIsLoading(false);
			} catch (error) {
				setError(error);
			}
		};
		fetchData();
		console.log(response);
	}, [ip]);
	return (
		<>
			<GlobalStyle />
			<Header getIp={(q) => setIp(q)} />
		</>
	);
}

export default App;
