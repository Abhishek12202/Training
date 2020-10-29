import React from 'react'
import FetchingData from './use-fetch-effect'

const PostHook = ({postId}) => {

    const post = FetchingData(`http://jsonplaceholder.typicode.com/posts?id:${postId}`)

    return (
        <div>
            {post?(
                <div>{post.title}</div>
            ):(
                <div>not found</div>
            )
            }
        </div>
    )
}

export default PostHook
