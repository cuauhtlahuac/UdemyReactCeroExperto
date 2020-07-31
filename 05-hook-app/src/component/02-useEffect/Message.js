import React, { useEffect } from 'react'

function Message() {
    useEffect(() => {

        console.log('Message > DidMount');

        return () => {
            console.log('Message > WillUnmount');
        }

    }, []);

    return (
        <h3>Hola Goku!</h3>
    )
}

export default Message
