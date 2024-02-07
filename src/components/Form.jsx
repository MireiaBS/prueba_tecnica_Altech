import { Inicio } from "./Inicio"
import { useState } from 'react'
import React from "react";


export const Form = () => {
    
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    })

    function handleSubmit(e) {

        e.preventDefault();
        alert('New user added.\n Name: '+ values.name + '\n Password: ' +values.password+ '\n Email: '+values.email)
        console.log('Nuevo usuario:', values);
    }

    function handleChange(e) {

        const {target} = e;
        const { name, value } = target;

        const newValues = {
            ...values,
            [name]: value
        }

        setValues(newValues)
    }

    return (
        <>
            <Inicio></Inicio>
            <div className="formContainer">
                <h1>Form</h1>
                <form onSubmit={handleSubmit}>
                <div className="inputContainer">   
                    <label htmlFor="name">Name: </label>
                        <input
                            id="name"
                            name="name"
                            type="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email: </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="password" required>Password: </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
      );
    }