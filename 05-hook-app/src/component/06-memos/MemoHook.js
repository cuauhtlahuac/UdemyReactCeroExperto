import React, { useState, useMemo } from 'react';
import useCounter from 'hooks/useCounter';
import heavyProcess from 'utils/heavyProcess';

const MemoHook = () => {
	const { counter, increment } = useCounter(500);

	const [ show, setShow ] = useState(false);

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])

	return(
		<div>
			<h1>Memo Hook</h1>
			<h3>
				Counter:
				{counter}
			</h3>
			<hr />

			<p>{memoHeavyProcess}</p>

			<button type="button" className="btn btn-primary" onClick={increment}>
				+1
			</button>

			<button
				type="button"
				onClick={() => setShow(!show)}
				className="btn btn-outline-primary ml-3"
			>
				show / Hidde {JSON.stringify(show)}
			</button>
		</div>
	);
};

export default MemoHook;
