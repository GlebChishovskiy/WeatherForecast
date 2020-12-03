import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Auth = ({setCurrentUser,currentUser}) => {

    const emailRef = useRef()
    const passwordRef = useRef()

    const [idCurrentUser, setIdCurrentUser] = useState()
    const [users, SetUsers] = useState(
        [
            {
                email: 'a@gmail.com',
                password: '1234',
                id: 1,
                name: 'Petr'
            },
            {
                email: 'ab@gmail.com',
                password: '4321',
                id: 2,
                name: 'Nikita'
            },
            {
                email: 'abc@gmail.com',
                password: 'abc',
                id: 3,
                name: 'Stepan'
            },
            {
                email: 'df@gmail.com',
                password: '28',
                id: 4,
                name: 'Filip'
            }
        ]
    )

    const loginChek = () => {

        let currentUser = users.filter(user => (user.email == emailRef.current.value &&
            user.password == passwordRef.current.value))[0]

        setCurrentUser(currentUser)
        setIdCurrentUser(currentUser.id)
        // console.log(idCurrentUser)
    }


    return (
        <div>
            <div>
                <input ref={emailRef} type='email' />
            </div>  
            <div>
                <input ref={passwordRef} type='password'></input>
            </div>
            <div>
                <NavLink onClick={() => loginChek()} to={`/profile/${idCurrentUser}`}>
                    <button>
                        Отправить
                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default Auth