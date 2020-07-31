import React, { useEffect } from 'react'

function Message() {
    useEffect(() => {

        effect // Cuerpo del Effect

        return () => {
            cleanup // Similar a componentWillUnmount
        }

    }, [input]) // Alguna dependencia a escuchar

    return (
        <h3>Hola Goku!</h3>
    )
}

export default Message
