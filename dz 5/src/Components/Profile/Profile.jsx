import React from 'react'
import { withRouter } from 'react-router-dom'

const Profile = (props) => {
    debugger
    console.log(props.match.params)
    debugger

    return (
        <div>
            {/* {props.currentUser.name} */}
        </div>
    )
}

export default withRouter(Profile)
