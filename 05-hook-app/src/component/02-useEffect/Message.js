import React, { useEffect, useState } from 'react'

function Message() {

    const [{ x, y }, setState] = useState({ x:0, y:0 });

    useEffect(() => {
        const handleMousemove = ({ x,y }) => setState({ x,y });

        window.addEventListener( 'mousemove', handleMousemove );

        return () => window.removeEventListener( 'mousemove', handleMousemove );

    }, []);

    return (
        <>
            <h3>Hola Goku!</h3>
            <span className='mr-3'>{`x: ${x}`}</span><span>{`y: ${y}`}</span>
        </>
    )
}

export default Message
