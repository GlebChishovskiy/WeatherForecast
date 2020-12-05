import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import style from './Auth.module.css'

const Auth = ({ setCurrentUser, users, setUsers }) => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const emailRefSignUp = useRef()
    const passwordRefSignUp = useRef()
    const nameSignUp = useRef()

    const [signInBoolean, setSignInBoolean] = useState(true)

    const history = useHistory()

    const signIn = () => {

        let currentUser = users.filter(user => (user.email === emailRef.current.value &&
            user.password === passwordRef.current.value))[0]

        setCurrentUser([currentUser])
        if (currentUser) {
            history.push(`/profile/${currentUser.id}`)
        } else {
            history.push(`/profile/error`)
        }

    }

    const signUp = () => {

        const newUser = {
            email: emailRefSignUp.current.value,
            password: passwordRefSignUp.current.value,
            id: users.length + 1,
            name: nameSignUp.current.value
        }

        setUsers([...users, newUser])
        history.push(`/profile/${users.length + 1}`)
        setCurrentUser([newUser])
    }

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={() => setSignInBoolean(!signInBoolean)}>
                {!signInBoolean ? 'sign IN' : 'sign UP'}
            </button>
            { signInBoolean ?
                <div>
                    <div>
                        <label for='email'>Email</label>
                        <input id='email' ref={emailRef} type='email' />
                    </div>
                    <div>
                        <label for='password'>Password</label>
                        <input id='password' ref={passwordRef} type='password'></input>
                    </div>
                    <button className={style.button} onClick={() => signIn()}>
                        Войти
                    </button>
                </div> :
                <div>
                    <div>
                        <label for='nameSignUp'>Name</label>
                        <input id='nameSignUp' ref={nameSignUp} />
                    </div>
                    <div>
                        <label for='emailSignUp'>Email</label>
                        <input id='emailSignUp' ref={emailRefSignUp} type='email' />
                    </div>
                    <div>
                        <label for='passwordSignUp'>Password</label>
                        <input id='passwordSignUp' ref={passwordRefSignUp} type='password'></input>
                    </div>
                    <button className={style.button} onClick={() => signUp()}>
                        Зарегистрироваться
                    </button>
                </div>
            }
        </div>
    )
}

export default Auth