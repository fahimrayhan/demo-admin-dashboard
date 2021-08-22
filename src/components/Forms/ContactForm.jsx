import React from 'react'

export default function ContactForm() {
    return (
        <div>
            <form action="" method="post">
                <label htmlFor="name">Enter your name" </label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Enter your email: </label>
                <input type="email" name="email" id="email" />
                <textarea name="messege" placeholder="Write down your messege here..."></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
