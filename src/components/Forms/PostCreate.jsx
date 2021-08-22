import React from 'react'

export default function PostCreate() {
    return (
        <div>
            <form action="" method="post">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" /><br/>
                <textarea name="post"></textarea><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
