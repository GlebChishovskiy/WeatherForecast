import React from 'react'

const Profile = ({currentUser}) => {

console.log(currentUser)

    return (
        <div>
            {currentUser[0].name}
        </div>
    )
}

export default Profile
