import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Auth = ({setCurrentUser,currentUser}) => {

    const emailRef = useRef()
    const passwordRef = useRef()

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
            user.password == passwordRef.current.value))

        setCurrentUser(currentUser)

    }

    return (
        <form>
            <div>
                <input ref={emailRef} type='email' />
            </div>  
            <div>
                <input ref={passwordRef} type='password'></input>
            </div>
            <div>
                <NavLink onClick={() => loginChek()} to={`/profile/1`}>
                    <input type="submit" value="Отправить" />
                </NavLink>
            </div>
        </form>
    )
}

export default Auth