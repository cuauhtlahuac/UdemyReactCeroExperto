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
			// El único proposito de este use Effect es evitar que se haga
			// un setState cuando el componente ya no está montado
			// usando useRef

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
			setTimeout(() => {
				if(isMounted.current){
				setState({
					data,
					loading: false,
					error: null,
				})
			} else {console.log("no se monto");}
			}, 4000);
		})
		console.log("llamando...");
	}, [ url ]);

	return state;
}
