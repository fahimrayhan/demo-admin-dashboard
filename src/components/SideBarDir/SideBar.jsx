import React from 'react'
import { Link } from 'react-router-dom'

export default function sideBar() {
    return (
        <div>
            <ul>
                <li><Link to='/create-post'>Create a post</Link></li>
                <li><Link to='/all-posts'>All Posts</Link></li>
            </ul>
        </div>
    )
}
