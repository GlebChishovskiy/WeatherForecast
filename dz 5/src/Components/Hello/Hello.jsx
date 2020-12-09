import React from 'react'
import ButtonSign from '../ButtonSign/Index'
import style from './Hello.module.css'

const Hello = () => {

    return (
        <div className={style.wrapper}>
            <h1>Hello</h1>
            <ButtonSign>
                Log in
            </ButtonSign>
        </div>
    )
}

export default Hello