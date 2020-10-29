import React from 'react'
import FetchingData from './use-fetch-effect'

const UserHook = ({userId}) => {

    const user = FetchingData(`http://jsonplaceholder.typicode.com/users?id:${userId}`)

    return (
        <div>
            {user?(
                <div>{user.email}</div>
            ):(
                <div>not found</div>
            )
            }
        </div>
    )
}

export default UserHook
