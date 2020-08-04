import { useState, useEffect, useRef } from 'react';

export default function useFetch( url ) {

	const initialState = {
		data: null,
		loading: true,
		error: null,
	};

	const [ state, setState ] = useState( initialState );

	const isMounted = useRef(true);

	useEffect(() => {
		
		return () => {
			isMounted.current = false;
		}
	}, [isMounted])

	useEffect(() => {
		setState({
			data: null,
			loading: true,
			error: null,
		});

        fetch( url )
        .then( resp => resp.json() )
        .then( data => { 

			if(isMounted.current){
				setState({
					data,
					loading: false,
					error: null,
				})
			};
		})
	}, [ url ]);

	return state;
}
