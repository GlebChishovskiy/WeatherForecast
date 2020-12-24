import React from 'react'
import { Link } from 'react-router-dom'

const ButtonSign = (props) => {

    return (
        <Link to = '/auth'>
            {props.children}
        </Link>
    )
}

export default ButtonSign