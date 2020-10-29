import React from 'react'
import UserHook from './UserHook'
import PostHook from './PostHook'

const App = () => {
    return (
        <div>
            <div>
                <h3>User Data</h3>
                <UserHook userId={1}/>
            </div><br/><br/><br/><br/>
            <div >
                <h3>Post Data</h3>
                <PostHook postId={2}/>
            </div>
        </div>
    )
}

export default App
