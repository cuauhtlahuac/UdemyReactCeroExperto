import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => inputRef.current.select()

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />

            <button
                className="btn btn-outline-primary mt-3"
                onClick={ handleClick }
            >
                focus
            </button>
            
        </div>
    )
}

export default FocusScreen
