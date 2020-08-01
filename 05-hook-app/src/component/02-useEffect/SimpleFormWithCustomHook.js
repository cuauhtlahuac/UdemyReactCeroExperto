import React, { useState } from 'react'
import { useForm } from 'hooks/useForm';

const SimpleFormWithCustomHook = () => {

    const initialState = { name: "", email: "", password: "" }

    const [values, handleInputChange] = useForm( initialState );

    const { name, email, password } = values;

    return (
        <>
            <h2>Form With Custom Hook</h2>  
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
                    type="mail"
                    value={ email }
                />
                <small id="emailHelp" className="form-text text-muted mb-4">
                    No compartiremos tu email.
                </small>

                <label htmlFor="password">Password</label>
                <input
                    autoComplete="off"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={ handleInputChange }
                    placeholder="****"
                    type="password"
                    value={ password }
                />
                <small id="emailHelp" className="form-text text-muted">Pon letras, números y caractéres especiales.</small>
            </form>
        </>
    )
}

export default SimpleFormWithCustomHook
