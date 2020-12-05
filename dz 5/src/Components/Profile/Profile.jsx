import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import style from './Profile.module.css'

const Profile = ({ currentUser }) => {

    const { userId } = useParams()
    let user
    if(userId !== 'error'){
        user = currentUser.filter(p => p.id === +userId)[0]
    }

    return (
        <div className = {style.wrapper}>
            {currentUser[0] !== undefined ? user.name : <h3> Доступа нету </h3>}
            <NavLink to='/auth'><button>Sign out</button></NavLink>
        </div>
    )
}

export default Profile
