import React, { useState, useCallback } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

/*   const increment = () => {
    setCounter(counter + 1);
  }; */
  
  const increment = useCallback(
    () => {
      setCounter(c => c + 1); // Fabuloso hack!, esto evita otra renderización
                              // porque evita pasar la dependencia de count
    },  
    [setCounter],
  )
  

  return (
    <div>
      <h1>Callback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
