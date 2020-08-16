import React, { useState } from 'react'

export const CounterApp = () => {
    const [state, setState] = 
    useState(
        { counter1: 10,
          counter2: 20,
          counter3: 30,
          counter4: 40,
        })
    
    const { counter1, counter2 } = state;
        
    return (
        <>
         <h2>Counter 1 = { counter1 }</h2>
         <h2>Counter 2 = { counter2 }</h2>
         <hr />

         <button
          className='btn btn-primary'
          onClick={ 
              () => setState({
                    ...state,
                    counter1: counter1 + 1 
                    })
                }
          > +1 </button>
        </>
    )
}
