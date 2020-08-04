import { useState, useEffect } from 'react';

export default function useFetch( url ) {

	const initialState = {
		data: null,
		loading: true,
		error: null,
	};

	const [ state, setState ] = useState( initialState );

	useEffect(() => {
		setState( initialState );

        fetch( url )
        .then( resp => resp.json() )
        .then( data => { 
			setTimeout(() => {
				
				setState({
					data,
					loading: false,
					error: null,
				})
			}, 4000);
        })
	}, [ url ]);

	return state;
}
