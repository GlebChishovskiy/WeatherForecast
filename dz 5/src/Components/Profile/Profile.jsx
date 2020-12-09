import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import ButtonSign from '../ButtonSign/Index'
import style from './Profile.module.css'

const Profile = ({ users, isLoggedIn }) => {

    const { userId } = useParams()

    let currentUser
    useMemo(() => {
        if (isLoggedIn) {
            currentUser = users.find(u => u.id === +userId)
        }
    }, [users, userId])

    return (
        <div className={style.wrapper}>
            {currentUser !== undefined ? currentUser.name : 'Доступа нет'}
            <ButtonSign >Log out</ButtonSign>
        </div>
    )
}

export default Profile
