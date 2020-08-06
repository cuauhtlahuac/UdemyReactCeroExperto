import React, { useState, useCallback, useEffect } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setCounter(c => c + num);
    },  
    [setCounter],
  );

  useEffect(() => {
    increment(5)
    console.log('sólo se renderiza una vez :)');
  }, [increment])
  

  return (
    <div>
      <h1>Callback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
