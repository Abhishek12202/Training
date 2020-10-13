import React from 'react'
import WithData from './WithData'

const UserProfie = (props) => {
    console.log(props)
    return (
        <div>
            {props.data.map(data=>data.userId)}
        </div>
    )
}

export default WithData(UserProfie,`https://jsonplaceholder.typicode.com/posts`)