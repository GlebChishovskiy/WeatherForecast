import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import style from './Auth.module.css'

const Auth = ({ users, setIsLoggedIn, setUsers }) => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()

    const [isSignIn, setIsSignIn] = useState(true)

    const history = useHistory()

    const signIn = () => {
        
        let currentUser = users.find(user => (user.email === emailRef.current.value &&
            user.password === passwordRef.current.value))
        history.push(`/profile${currentUser ? `/${currentUser.id}` : ''}`)
        if (currentUser) {
            setIsLoggedIn(true)
        }

    }

    const signUp = () => {

        setIsLoggedIn(true)
        setUsers([...users, {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            name: nameRef.current.value,
            id: users.length + 1
        }])
        history.push(`/profile/${users.length + 1}`)

    }

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={() => setIsSignIn(!isSignIn)}>
                {!isSignIn ? 'sign IN' : 'sign UP'}
            </button>
            <div>
                <div>
                    <label for='email'>Email</label>
                    <input id='email' ref={emailRef} type='email' />
                </div>
                <div>
                    <label for='password'>Password</label>
                    <input id='password' ref={passwordRef} type='password'></input>
                </div>
                {isSignIn ? <button className={style.button} onClick={signIn}>
                    Войти
                    </button> :
                    <div>
                        <div>
                            <label for='name'>Name</label>
                            <input id='name' ref={nameRef} />
                        </div>
                        <button className={style.button} onClick={signUp}>
                            Зарегистрироваться
                            </button>
                    </div>}
            </div>
        </div>
    )
}

export default Auth