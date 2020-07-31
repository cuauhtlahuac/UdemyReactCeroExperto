import React from 'react'
import useCounter from 'hooks/useCounter'

export const CounterWithCustomHooks = () => {

    const { state, increment, reset, decrement } = useCounter( 7 );

    const factor = 5;

    return (
        <>
         <h2>Counter With Hooks: { state }</h2>
         <hr />

         <button
          className='btn btn-outline-primary p-3 mr-5'
          onClick={ decrement }
          > - 1 </button>
         
         <button
          className='btn btn-outline-warning text-dark p-3 mr-5'
          onClick={ reset }
          > ↺ </button>

         <button
          className='btn btn-outline-primary p-3'
          onClick={ ()=> increment({ factor }) }
          > + { factor } </button>
        </>
    )
}
