import React from 'react';
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css';
import TokenService from '../token-service';

export default function LandingPage(props) {

    if (TokenService.hasAuthToken()) {
        props.history.push('/calendar');
    }

    return (
        <div className="Landing_page">
            <header className="Login_header">
                <LogIn {...props} />
            </header>
            <div className="Landing_page_flex_container">
                <section className="Landing_page_content_section">
                    <h1 className="title">
                        <span className="Calendar_icon">
                            <FontAwesomeIcon
                                icon={faCalendarAlt}
                            />
                        </span>
                        It's a Date
                    </h1>
                    <h2 className="subtitle">Leave Your Worries Behind</h2>
                    <p className="paragraph_content">You've got enough on your mind, so relax and let 
                    It's a Date remember about all of your important events. Just create a calendar, 
                    input your event information, and never worry about forgetting events again.</p>
                </section>
                <section className="Signup_section">
                    <SignUp {...props} />
                </section>
            </div>
        </div>
    )
}