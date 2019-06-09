import React from 'react';
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';
import './LandingPage.css';

export default function LandingPage(props) {

    return (
        <div className="Landing_page">
            <header className="Login_header">
                <LogIn />
            </header>
            <section className="Landing_page_content_section">
                <h1 className="title">It's a Date</h1>
                <h2 className="subtitle">Leave Your Worries Behind</h2>
                <p className="paragraph_content">You've got enough on your mind, so relax and let 
                It's a Date remember about all of your important events. Just create a calendar, 
                input your event information, and never worry about forgetting events again.</p>
            </section>
            <section className="Signup_section">
                <SignUp {...props} />
            </section>
        </div>
    )
}