import React, { useEffect, useState } from 'react'

const SimpleForm = () => {

    const initialState = { name: "", email: "" }

    const [state, setState] = useState(initialState)

    const { name, email } = state;

    /*
    La gente de React reomienda usar un effect por cada variable o efecto que se desea escuchar
    */

    useEffect(()=>{
        console.log("Component did mount");
    }, [])

    useEffect(() => {
        console.log(`Component did mount + name change ${name}`);
    }, [ name ])

    useEffect(() => {
        console.log(`Component did mount + email change ${email}`);
    }, [ email ])

    const handleInputChange = ({ target }) => {
         setState({
             ...state,
             [target.name]: target.value,
         })
    }

    return (
        <>
            <h2>Use Effect</h2>  
            <hr />

            <form className="form-group ">
                <label htmlFor="name">Nombre</label>
                <input
                autoComplete="off"
                className="form-control mb-4"
                id="name"
                name="name"
                onChange={ handleInputChange }
                placeholder="Escribe tu nombre"
                type="text"
                value={ name }
                />

                <label htmlFor="email">E-mail</label>
                <input
                autoComplete="off"
                className="form-control"
                id="email"
                name="email"
                onChange={ handleInputChange }
                placeholder="Escribe tu e-mail"
                type="text"
                value={ email }
                />
                <small id="emailHelp" className="form-text text-muted">No compartiremos tu email.</small>
            </form>
        </>
    )
}

export default SimpleForm
