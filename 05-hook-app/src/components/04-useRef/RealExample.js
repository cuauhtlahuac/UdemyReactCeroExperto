import React, { useState } from 'react'
import MultipleCustomHooks from 'components/03-multple-examples/MultipleCustomHooks'

const RealExample = () => {

    const [show, setShow] = useState( false )

    return (
        <div>
            <h1>Use Ref Real Example</h1>
            <hr />

            { show && <MultipleCustomHooks /> } 

            <br />
            <br />
            <button className="btn btn-primary" onClick={ ()=> setShow( !show )}>
                { show ? "Hide" : "Show" }
            </button>
        </div>
    )
}

export default RealExample
