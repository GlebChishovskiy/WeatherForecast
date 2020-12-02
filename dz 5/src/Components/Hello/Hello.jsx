import React from 'react'
import { NavLink } from 'react-router-dom'

const Hello = () => {

    return (
        <div>
            <h1>Hello</h1>
            <NavLink to = '/auth'>Log in</NavLink>
        </div>
    )
}

export default Hello