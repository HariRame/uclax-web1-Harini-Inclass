import React from 'react'
/* Compopnents---------------------*/
import Profile from './Profile.jsx'
import ContactForm from './ContactForm'
import GoogleMap from './GoogleMap'

const Contact = () => {
    return(
        <div>
            <h1>Contact</h1>
            <Profile />
            <ContactForm />
            <GoogleMap />
        </div>
    );
}
export default Contact;