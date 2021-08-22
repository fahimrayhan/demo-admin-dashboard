import ContactForm from 'components/Forms/ContactForm'
import Footer from 'components/Layout/Footer'
import NavBar from 'components/Nav/NavBar'
import React from 'react'

export default function Contact() {
    return (
        <div>
            <NavBar />
            <hr></hr>
            <h1>Contact Us</h1>
            <ContactForm />
            <Footer />
        </div>
    )
}
