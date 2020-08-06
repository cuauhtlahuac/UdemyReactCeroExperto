import React, { useState, useCallback, useEffect } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

   const increment = () => {
    setCounter(counter + 1);
  };


/*
  const increment = useCallback(
    (num) => {
      setCounter(c => c + num);
    },  
    [setCounter],
  )
  */

  useEffect(() => {
    increment(5)
    console.log('se ejecuta el useEffect sin parar');
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
