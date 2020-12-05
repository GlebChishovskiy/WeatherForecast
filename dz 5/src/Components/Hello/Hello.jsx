import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Hello.module.css'

const Hello = () => {

    return (
        <div className = {style.wrapper}>
            <h1>Hello</h1>
            <div><NavLink className ={style.log_in} to = '/auth'>Log in</NavLink></div>
        </div>
    )
}

export default Hello