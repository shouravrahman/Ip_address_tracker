// import { useFetch } from './useFetch';
import { useState, useEffect } from 'react';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import GlobalStyle from './globalStyles';

const API_KEY = 'at_xtpIidIz9vUqEzlBODaUwtChmVRXf';
// const URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ip}`;

function App() {
	const [ip, setIp] = useState('');
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
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
		// return { response, error, isLoading };
	}, [ip]);
	return (
		<>
			<GlobalStyle />
			<Header getIp={(q) => setIp(q)} />
			<Details isLoading={isLoading} res={response} error={error} />
			{response ? <Map res={response} /> : null}
		</>
	);
}

export default App;
