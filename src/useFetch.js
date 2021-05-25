import { useState, useEffect } from 'react';

export const useFetch = (url) => {
	const [state, setState] = useState({ data: null, loading: true });
	useEffect(() => {
		setState({ data: state.data, loading: true });
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setState({ data: res, loading: false });
			});
	}, [url, setState]);
	return state;
};
